
import React from 'react';
import Header from '@/components/Header';
import SecurityIntelligenceFeed from '@/components/SecurityIntelligenceFeed';
import QuickContactDirectory from '@/components/QuickContactDirectory';

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Security Intelligence</h1>
          <p className="text-gray-600">AI-powered security monitoring and threat detection</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <SecurityIntelligenceFeed />
          <QuickContactDirectory />
        </div>
      </main>
    </div>
  );
};

export default Security;
