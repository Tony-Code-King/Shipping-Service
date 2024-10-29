import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    shopifyApiKey: '',
    shopifyStoreUrl: '',
    enableAutoAssign: false,
    enableNotifications: false,
    maxActiveOrders: '5'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle settings submission
    console.log('Settings saved:', settings);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">System Settings</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Shopify Integration</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="shopifyApiKey" className="block text-sm font-medium text-gray-700">
                  API Key
                </label>
                <input
                  type="text"
                  id="shopifyApiKey"
                  name="shopifyApiKey"
                  value={settings.shopifyApiKey}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your Shopify API key"
                />
              </div>

              <div>
                <label htmlFor="shopifyStoreUrl" className="block text-sm font-medium text-gray-700">
                  Store URL
                </label>
                <input
                  type="text"
                  id="shopifyStoreUrl"
                  name="shopifyStoreUrl"
                  value={settings.shopifyStoreUrl}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="your-store.myshopify.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Delivery Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enableAutoAssign"
                  name="enableAutoAssign"
                  checked={settings.enableAutoAssign}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="enableAutoAssign" className="ml-2 block text-sm text-gray-900">
                  Enable automatic order assignment
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enableNotifications"
                  name="enableNotifications"
                  checked={settings.enableNotifications}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="enableNotifications" className="ml-2 block text-sm text-gray-900">
                  Enable push notifications
                </label>
              </div>

              <div>
                <label htmlFor="maxActiveOrders" className="block text-sm font-medium text-gray-700">
                  Maximum active orders per driver
                </label>
                <input
                  type="number"
                  id="maxActiveOrders"
                  name="maxActiveOrders"
                  value={settings.maxActiveOrders}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}