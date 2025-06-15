
import React from 'react';
import Header from '@/components/Header';
import FeaturesGrid from '@/components/FeaturesGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 rounded-2xl shadow-2xl animate-pulse"></div>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
                  WalmartPulse<span className="text-cyan-500">.ai</span>
                </h1>
                <p className="text-lg sm:text-xl text-blue-600 font-semibold">Intelligent Retail Platform</p>
              </div>
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your retail operations with AI-powered insights, real-time analytics, and intelligent automation
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium">2,847 stores connected</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 font-medium">Real-time monitoring active</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <FeaturesGrid />
      </div>
    </div>
  );
};

export default Index;
