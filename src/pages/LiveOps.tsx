
import React from 'react';
import Header from '@/components/Header';
import LiveOperations from '@/components/LiveOperations';

const LiveOps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Operations</h1>
          <p className="text-gray-600">Real-time store operations and analytics</p>
        </div>
        <LiveOperations />
      </main>
    </div>
  );
};

export default LiveOps;
