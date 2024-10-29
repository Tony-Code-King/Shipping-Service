import { useState, useEffect } from 'react';
import { emitLocationUpdate, subscribeToDriverLocations } from '../lib/socket';

export function useDriverLocation(driverId: string) {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [watchId, setWatchId] = useState<number | null>(null);

  useEffect(() => {
    // Subscribe to driver location updates
    subscribeToDriverLocations((data) => {
      if (data.driverId === driverId) {
        setLocation(data.location);
      }
    });

    // Start watching position if this is the current driver's device
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setLocation(newLocation);
          emitLocationUpdate(newLocation);
        },
        (error) => console.error('Error getting location:', error),
        { enableHighAccuracy: true }
      );
      setWatchId(id);
    }

    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [driverId]);

  return location;
}