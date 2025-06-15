
import React from 'react';
import Header from '@/components/Header';
import DockOperations from '@/components/DockOperations';
import InventoryTracker from '@/components/InventoryTracker';
import EquipmentMonitor from '@/components/EquipmentMonitor';
import WarehouseAnalytics from '@/components/WarehouseAnalytics';

const Warehouse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Warehouse Management</h1>
          <p className="text-gray-600">AI-powered warehouse operations, real-time monitoring, and predictive analytics</p>
        </div>
        
        <div className="space-y-8">
          {/* Core Dock Operations */}
          <DockOperations />
          
          {/* Real-time Inventory Management */}
          <InventoryTracker />
          
          {/* Equipment Health Monitoring */}
          <EquipmentMonitor />
          
          {/* Advanced Analytics & Predictions */}
          <WarehouseAnalytics />
        </div>
      </main>
    </div>
  );
};

export default Warehouse;
