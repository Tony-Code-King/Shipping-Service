import React from 'react';
import { TrendingUp, Package, Truck, AlertCircle } from 'lucide-react';

function StatCard({ icon: Icon, title, value, change }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {change && (
            <p className="text-sm mt-1">
              <span className={change > 0 ? 'text-green-500' : 'text-red-500'}>
                {change > 0 ? '+' : ''}{change}%
              </span>
              {' '}vs last week
            </p>
          )}
        </div>
        <Icon className="w-12 h-12 text-blue-600 opacity-80" />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={TrendingUp}
          title="Total Revenue"
          value="$24,532"
          change={12.5}
        />
        <StatCard
          icon={Package}
          title="Active Orders"
          value="164"
          change={-2.3}
        />
        <StatCard
          icon={Truck}
          title="Available Drivers"
          value="28"
        />
        <StatCard
          icon={AlertCircle}
          title="Pending Issues"
          value="3"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Order #{String(order).padStart(4, '0')}</p>
                  <p className="text-sm text-gray-500">In Transit • 2 items</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  In Progress
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Active Drivers</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((driver) => (
              <div key={driver} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={`https://source.unsplash.com/100x100/?portrait&${driver}`}
                  alt="Driver"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">John Driver {driver}</p>
                  <p className="text-sm text-gray-500">4 deliveries today</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;