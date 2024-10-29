import { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export default function ServiceWorkerManager() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered:', r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  useEffect(() => {
    if (needRefresh) {
      if (window.confirm('New content available. Reload?')) {
        updateServiceWorker(true);
      }
    }
  }, [needRefresh, updateServiceWorker]);

  return null;
}