
import React from 'react';
import Header from '@/components/Header';
import SecurityOpsAnalytics from '@/components/SecurityOpsAnalytics';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Analytics</h1>
          <p className="text-gray-600">Real-time business intelligence and reporting</p>
        </div>
        <SecurityOpsAnalytics />
      </main>
    </div>
  );
};

export default Analytics;
