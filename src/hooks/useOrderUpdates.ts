import { useState, useEffect } from 'react';
import { socket, subscribeToOrders } from '../lib/socket';

export function useOrderUpdates() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to real-time order updates
    subscribeToOrders((order) => {
      setOrders((prevOrders) => {
        const index = prevOrders.findIndex((o) => o.id === order.id);
        if (index > -1) {
          const newOrders = [...prevOrders];
          newOrders[index] = order;
          return newOrders;
        }
        return [...prevOrders, order];
      });
    });

    // Initial orders fetch
    socket.emit('orders:fetch', null, (response: any) => {
      setOrders(response.orders);
      setLoading(false);
    });

    return () => {
      socket.off('order:new');
      socket.off('order:update');
    };
  }, []);

  return { orders, loading };
}