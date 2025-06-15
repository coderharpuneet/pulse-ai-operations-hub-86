
import React from 'react';
import Header from '@/components/Header';
import BlockchainTrustLedger from '@/components/BlockchainTrustLedger';

const TrustLedger = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">TrustLedger</h1>
          <p className="text-gray-600">Blockchain-powered supply chain transparency</p>
        </div>
        <BlockchainTrustLedger />
      </main>
    </div>
  );
};

export default TrustLedger;
