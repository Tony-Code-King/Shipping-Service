import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Drivers from './pages/Drivers';
import Settings from './pages/Settings';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className="flex h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/drivers" element={
                      <PrivateRoute allowedRoles={['admin', 'manager']}>
                        <Drivers />
                      </PrivateRoute>
                    } />
                    <Route path="/settings" element={
                      <PrivateRoute allowedRoles={['admin']}>
                        <Settings />
                      </PrivateRoute>
                    } />
                  </Routes>
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;