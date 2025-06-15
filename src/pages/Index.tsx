
import React, { useState } from 'react';
import Header from '@/components/Header';
import DashboardGrid from '@/components/DashboardGrid';
import FeaturesGrid from '@/components/FeaturesGrid';
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
import { Sparkles, Zap, Shield, Users, MapPin, Truck, Leaf, Database } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white via-purple-50 to-teal-50 bg-dots-pattern relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-600/20 rounded-full animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-full animate-pulse-slow"></div>
      </div>

      <Header />
      
      <main className="container mx-auto px-6 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-3 glass rounded-full px-8 py-4 mb-8 shadow-2xl border border-white/30">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Real-time AI Intelligence Platform
              </span>
              <Sparkles className="h-5 w-5 text-yellow-500 animate-wiggle" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 animate-fade-in-up">
              <span className="relative">
                Walmart
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-glow">
                Pulse
              </span>
              <span className="text-cyan-500">.ai</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Revolutionizing retail operations through 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI-powered demand forecasting</span>, 
              real-time analytics, and 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600"> blockchain-verified supply chain</span> transparency.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: <Zap className="h-4 w-4" />, text: "Real-time Processing" },
                { icon: <Shield className="h-4 w-4" />, text: "AI Security" },
                { icon: <Database className="h-4 w-4" />, text: "Blockchain Verified" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 glass px-4 py-2 rounded-full border border-white/30">
                  <span className="text-blue-600">{feature.icon}</span>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="animate-fade-in-up mb-16" style={{ animationDelay: '0.6s' }}>
          <DashboardGrid />
        </div>

        {/* Features Grid */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <FeaturesGrid />
        </div>

        {/* Security Intelligence Feed */}
        <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.8s' }}>
          <SecurityIntelligenceFeed />
        </div>

        {/* Two Column Layout for Store Feed and Quick Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="lg:col-span-2">
            <StoreFeed />
          </div>
          <div>
            <QuickContactDirectory />
          </div>
        </div>

        {/* Main Dashboard Tabs */}
        <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Tabs defaultValue="operations" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-8 lg:w-auto mb-8 p-2 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-200/50 shadow-xl">
              <TabsTrigger value="operations" className="text-xs font-medium flex items-center space-x-1 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300">
                <Zap className="h-3 w-3" />
                <span>Live Ops</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="text-xs font-medium flex items-center space-x-1 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300">
                <Shield className="h-3 w-3" />
                <span>Security</span>
              </TabsTrigger>
              <TabsTrigger value="workforce" className="text-xs font-medium flex items-center space-x-1 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300">
                <Users className="h-3 w-3" />
                <span>Workforce</span>
              </TabsTrigger>
              <TabsTrigger value="heatmap" className="text-xs font-medium flex items-center space-x-1 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300">
                <MapPin className="h-3 w-3" />
                <span>Store Map</span>
              </TabsTrigger>
              <TabsTrigger value="dock" className="text-xs font-medium flex items-center space-x-1 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300">
                <Truck className="h-3 w-3" />
                <span>Dock</span>
              </TabsTrigger>
              <TabsTrigger value="sustainability" className="text-xs font-medium flex items-center space-x-1 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300">
                <Leaf className="h-3 w-3" />
                <span>Green</span>
              </TabsTrigger>
              <TabsTrigger value="blockchain" className="text-xs font-medium flex items-center space-x-1 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300">
                <Database className="h-3 w-3" />
                <span>TrustLedger</span>
              </TabsTrigger>
              <TabsTrigger value="cctv" className="text-xs font-medium flex items-center space-x-1 data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300">
                <Shield className="h-3 w-3" />
                <span>CCTV AI</span>
              </TabsTrigger>
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
        <div className="mt-12 relative overflow-hidden rounded-3xl animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600"></div>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-bold mb-3 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>AI-Powered Insights Active</span>
                  <Sparkles className="h-6 w-6 text-yellow-300 animate-wiggle" />
                </h3>
                <p className="text-xl text-blue-100 leading-relaxed">
                  System is analyzing <span className="font-bold text-yellow-300">247 data points</span> across inventory, traffic, weather, and social trends 
                  to optimize your operations in real-time with <span className="font-bold text-green-300">machine learning precision</span>.
                </p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300 animate-pulse">
                  99.7%
                </div>
                <div className="text-blue-200 text-lg font-medium">Accuracy Rate</div>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <span className="text-sm text-green-300">Processing 1.2M events/sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 py-8 mt-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-gray-700">
              © 2024 WalmartPulse.ai - Real-time Intelligence Platform
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-600 font-medium">Powered by AI • Secured by Blockchain</span>
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full border border-white/30">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-bold">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
