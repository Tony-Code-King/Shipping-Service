import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ServiceWorkerManager from './components/ServiceWorkerManager';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ServiceWorkerManager />
    <App />
  </StrictMode>
);