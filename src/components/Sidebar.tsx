import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Settings as SettingsIcon,
  Truck
} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
        <Truck className="w-8 h-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-800">FleetMaster</span>
      </div>
      
      <nav className="p-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Package className="w-5 h-5" />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="/drivers"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Users className="w-5 h-5" />
          <span>Drivers</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <SettingsIcon className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
      </nav>
    </div>
  );
}