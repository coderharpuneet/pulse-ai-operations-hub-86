
import React from 'react';
import Header from '@/components/Header';
import SecurityIntelligenceFeed from '@/components/SecurityIntelligenceFeed';
import WorkforceIntelligencePanel from '@/components/WorkforceIntelligencePanel';
import QuickContactDirectory from '@/components/QuickContactDirectory';

const Monitor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Monitoring</h1>
          <p className="text-gray-600">Comprehensive system health and performance monitoring</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          <SecurityIntelligenceFeed />
          <WorkforceIntelligencePanel />
          <QuickContactDirectory />
        </div>
      </main>
    </div>
  );
};

export default Monitor;
