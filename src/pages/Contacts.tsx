
import React from 'react';
import Header from '@/components/Header';
import QuickContactDirectory from '@/components/QuickContactDirectory';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quick Contact Directory</h1>
          <p className="text-gray-600">Emergency contacts and communication channels</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <QuickContactDirectory />
        </div>
      </main>
    </div>
  );
};

export default Contacts;
