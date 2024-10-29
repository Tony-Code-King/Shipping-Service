import React from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';

function Drivers() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Driver Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add New Driver
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((driver) => (
          <div key={driver} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={`https://source.unsplash.com/100x100/?portrait&${driver}`}
                  alt="Driver"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Driver {driver}</h3>
                  <p className="text-sm text-gray-500">ID: #{String(driver).padStart(4, '0')}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">driver{driver}@example.com</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Today's Deliveries</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Rating</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">4.8</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drivers;