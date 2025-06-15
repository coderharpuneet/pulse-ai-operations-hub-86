
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeaturesGrid from '@/components/FeaturesGrid';
import SecurityIntelligenceFeed from '@/components/SecurityIntelligenceFeed';
import SecurityOpsAnalytics from '@/components/SecurityOpsAnalytics';
import WorkforceIntelligencePanel from '@/components/WorkforceIntelligencePanel';
import LiveStoreHeatmap from '@/components/LiveStoreHeatmap';
import StoreFeed from '@/components/StoreFeed';
import QuickContactDirectory from '@/components/QuickContactDirectory';
import SimulatedCCTVDetection from '@/components/SimulatedCCTVDetection';
import LiveOperations from '@/components/LiveOperations';
import DockOperations from '@/components/DockOperations';

const Index = () => {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Main Dashboard Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 mb-6 sm:mb-8 bg-white shadow-lg rounded-xl p-1 sm:p-2">
            <TabsTrigger value="features" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Features</TabsTrigger>
            <TabsTrigger value="security" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Security</TabsTrigger>
            <TabsTrigger value="operations" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Operations</TabsTrigger>
            <TabsTrigger value="workforce" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Workforce</TabsTrigger>
            <TabsTrigger value="heatmap" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Heatmap</TabsTrigger>
            <TabsTrigger value="feed" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Store Feed</TabsTrigger>
            <TabsTrigger value="contacts" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Contacts</TabsTrigger>
            <TabsTrigger value="cctv" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">CCTV AI</TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Analytics</TabsTrigger>
            <TabsTrigger value="dock" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Dock Ops</TabsTrigger>
            <TabsTrigger value="live-ops" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Live Ops</TabsTrigger>
            <TabsTrigger value="monitor" className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2">Monitor</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-0">
            <FeaturesGrid />
          </TabsContent>

          <TabsContent value="security" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <SecurityIntelligenceFeed />
              <QuickContactDirectory />
            </div>
          </TabsContent>

          <TabsContent value="operations" className="mt-0">
            <div className="space-y-4 sm:space-y-6">
              <SecurityOpsAnalytics />
            </div>
          </TabsContent>

          <TabsContent value="workforce" className="mt-0">
            <WorkforceIntelligencePanel />
          </TabsContent>

          <TabsContent value="heatmap" className="mt-0">
            <LiveStoreHeatmap />
          </TabsContent>

          <TabsContent value="feed" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <StoreFeed />
              <LiveOperations />
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="mt-0">
            <div className="max-w-2xl mx-auto">
              <QuickContactDirectory />
            </div>
          </TabsContent>

          <TabsContent value="cctv" className="mt-0">
            <SimulatedCCTVDetection />
          </TabsContent>

          <TabsContent value="analytics" className="mt-0">
            <SecurityOpsAnalytics />
          </TabsContent>

          <TabsContent value="dock" className="mt-0">
            <DockOperations />
          </TabsContent>

          <TabsContent value="live-ops" className="mt-0">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              <LiveOperations />
              <StoreFeed />
            </div>
          </TabsContent>

          <TabsContent value="monitor" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              <SecurityIntelligenceFeed />
              <WorkforceIntelligencePanel />
              <QuickContactDirectory />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
