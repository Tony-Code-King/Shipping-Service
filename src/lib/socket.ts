import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001';

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5
});

export const connectSocket = (userId: string) => {
  socket.auth = { userId };
  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};

// Order events
export const subscribeToOrders = (callback: (order: any) => void) => {
  socket.on('order:new', callback);
  socket.on('order:update', callback);
};

// Driver location updates
export const emitLocationUpdate = (location: { lat: number; lng: number }) => {
  socket.emit('driver:location', location);
};

export const subscribeToDriverLocations = (callback: (data: any) => void) => {
  socket.on('driver:location_update', callback);
};