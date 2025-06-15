
import React, { useState } from 'react';
import Header from '@/components/Header';
import DashboardGrid from '@/components/DashboardGrid';
import LiveOperations from '@/components/LiveOperations';
import DockOperations from '@/components/DockOperations';
import SustainabilityTracker from '@/components/SustainabilityTracker';
import BlockchainTrustLedger from '@/components/BlockchainTrustLedger';
import SecurityIntelligenceFeed from '@/components/SecurityIntelligenceFeed';
import SecurityOpsAnalytics from '@/components/SecurityOpsAnalytics';
import WorkforceIntelligencePanel from '@/components/WorkforceIntelligencePanel';
import LiveStoreHeatmap from '@/components/LiveStoreHeatmap';
import StoreFeed from '@/components/StoreFeed';
import QuickContactDirectory from '@/components/QuickContactDirectory';
import SimulatedCCTVDetection from '@/components/SimulatedCCTVDetection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <div className="w-3 h-3 bg-gradient-pulse rounded-full animate-bounce-gentle"></div>
            <span className="text-sm font-medium text-gray-700">Real-time AI Intelligence Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            WalmartPulse<span className="text-transparent bg-clip-text bg-gradient-pulse">.ai</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Revolutionizing retail operations through AI-powered demand forecasting, 
            real-time analytics, and blockchain-verified supply chain transparency.
          </p>
        </div>

        {/* Dashboard Metrics */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <DashboardGrid />
        </div>

        {/* Security Intelligence Feed */}
        <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.5s' }}>
          <SecurityIntelligenceFeed />
        </div>

        {/* Two Column Layout for Store Feed and Quick Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
          <div className="lg:col-span-2">
            <StoreFeed />
          </div>
          <div>
            <QuickContactDirectory />
          </div>
        </div>

        {/* Main Dashboard Tabs */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Tabs defaultValue="operations" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-8 lg:w-auto lg:grid-cols-8 mb-8">
              <TabsTrigger value="operations" className="text-xs">Live Ops</TabsTrigger>
              <TabsTrigger value="security" className="text-xs">Security</TabsTrigger>
              <TabsTrigger value="workforce" className="text-xs">Workforce</TabsTrigger>
              <TabsTrigger value="heatmap" className="text-xs">Store Map</TabsTrigger>
              <TabsTrigger value="dock" className="text-xs">Dock</TabsTrigger>
              <TabsTrigger value="sustainability" className="text-xs">Green</TabsTrigger>
              <TabsTrigger value="blockchain" className="text-xs">TrustLedger</TabsTrigger>
              <TabsTrigger value="cctv" className="text-xs">CCTV AI</TabsTrigger>
            </TabsList>

            <TabsContent value="operations" className="space-y-6">
              <LiveOperations />
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <SecurityOpsAnalytics />
            </TabsContent>

            <TabsContent value="workforce" className="space-y-6">
              <WorkforceIntelligencePanel />
            </TabsContent>

            <TabsContent value="heatmap" className="space-y-6">
              <LiveStoreHeatmap />
            </TabsContent>

            <TabsContent value="dock" className="space-y-6">
              <DockOperations />
            </TabsContent>

            <TabsContent value="sustainability" className="space-y-6">
              <SustainabilityTracker />
            </TabsContent>

            <TabsContent value="blockchain" className="space-y-6">
              <BlockchainTrustLedger />
            </TabsContent>

            <TabsContent value="cctv" className="space-y-6">
              <SimulatedCCTVDetection />
            </TabsContent>
          </Tabs>
        </div>

        {/* AI Insights Banner */}
        <div className="mt-12 p-6 bg-gradient-pulse rounded-2xl text-white animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights Active</h3>
              <p className="text-blue-100">
                System is analyzing 247 data points across inventory, traffic, weather, and social trends 
                to optimize your operations in real-time.
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">99.7%</div>
              <div className="text-blue-100 text-sm">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              © 2024 WalmartPulse.ai - Real-time Intelligence Platform
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500">Powered by AI • Secured by Blockchain</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
