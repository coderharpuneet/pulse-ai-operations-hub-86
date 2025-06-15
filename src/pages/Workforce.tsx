
import React from 'react';
import Header from '@/components/Header';
import WorkforceIntelligencePanel from '@/components/WorkforceIntelligencePanel';

const Workforce = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Workforce Intelligence</h1>
          <p className="text-gray-600">Employee performance analytics and optimization</p>
        </div>
        <WorkforceIntelligencePanel />
      </main>
    </div>
  );
};

export default Workforce;
