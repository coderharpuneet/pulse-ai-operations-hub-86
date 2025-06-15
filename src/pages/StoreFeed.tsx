
import React from 'react';
import Header from '@/components/Header';
import StoreFeed from '@/components/StoreFeed';
import LiveOperations from '@/components/LiveOperations';

const StoreFeedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Store Feed</h1>
          <p className="text-gray-600">Real-time store operations and live updates</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <StoreFeed />
          <LiveOperations />
        </div>
      </main>
    </div>
  );
};

export default StoreFeedPage;
