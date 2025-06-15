
import React from 'react';
import Header from '@/components/Header';
import SimulatedCCTVDetection from '@/components/SimulatedCCTVDetection';

const CCTV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CCTV AI Detection</h1>
          <p className="text-gray-600">Smart surveillance with AI-powered threat detection</p>
        </div>
        <SimulatedCCTVDetection />
      </main>
    </div>
  );
};

export default CCTV;
