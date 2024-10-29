import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function PrivateRoute({ children, allowedRoles = [] }: PrivateRouteProps) {
  const { user, loading } = useAuthStore();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check user role if allowedRoles is provided
  if (allowedRoles.length > 0) {
    const userRole = user.claims?.role || 'user';
    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
}