
import React from 'react';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EquipmentMonitor from '@/components/EquipmentMonitor';
import MaintenanceScheduler from '@/components/MaintenanceScheduler';
import IoTSensorDashboard from '@/components/IoTSensorDashboard';
import PredictiveMaintenanceAI from '@/components/PredictiveMaintenanceAI';

const AdvancedMaintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced Equipment Monitoring</h1>
          <p className="text-gray-600">AI-powered predictive maintenance and IoT sensor monitoring</p>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Equipment Overview</TabsTrigger>
            <TabsTrigger value="sensors">IoT Sensors</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <EquipmentMonitor />
          </TabsContent>

          <TabsContent value="sensors" className="space-y-6">
            <IoTSensorDashboard />
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <MaintenanceScheduler />
          </TabsContent>

          <TabsContent value="predictions" className="space-y-6">
            <PredictiveMaintenanceAI />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdvancedMaintenance;
