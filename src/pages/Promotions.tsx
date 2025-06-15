
import React from 'react';
import Header from '@/components/Header';
import MetricCard from '@/components/MetricCard';
import { TrendingUp, Target, Users, ShoppingCart } from 'lucide-react';

const Promotions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Promotions AI</h1>
          <p className="text-gray-600">AI-powered promotional campaigns and optimization</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Active Promotions"
            value="47"
            change="+12 this week"
            trend="up"
            icon={<Target className="h-6 w-6" />}
            gradient="bg-gradient-to-br from-purple-50 to-white"
          />
          
          <MetricCard
            title="AI Boost Revenue"
            value="$284k"
            change="+15.2% vs manual"
            trend="up"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="bg-gradient-to-br from-green-50 to-white"
          />
          
          <MetricCard
            title="Target Reach"
            value="89.4%"
            change="+3.2% accuracy"
            trend="up"
            icon={<Users className="h-6 w-6" />}
            gradient="bg-gradient-to-br from-blue-50 to-white"
          />
          
          <MetricCard
            title="Conversion Rate"
            value="12.8%"
            change="+2.1% from AI"
            trend="up"
            icon={<ShoppingCart className="h-6 w-6" />}
            gradient="bg-gradient-to-br from-orange-50 to-white"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">AI-Generated Promotions</h2>
          <p className="text-gray-600 mb-6">Smart promotional campaigns based on real-time data analysis</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border">
              <h3 className="font-medium text-gray-900 mb-2">Weekend Electronics Boost</h3>
              <p className="text-sm text-gray-600 mb-2">AI detected 34% higher electronics demand on weekends</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-purple-600">15% off Electronics</span>
                <span className="text-sm text-gray-500">Projected: +$47k revenue</span>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border">
              <h3 className="font-medium text-gray-900 mb-2">Grocery Rush Hour Special</h3>
              <p className="text-sm text-gray-600 mb-2">Peak shopping times: 5-7 PM weekdays</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-600">Buy 2 Get 1 Free Produce</span>
                <span className="text-sm text-gray-500">Projected: +$23k revenue</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Promotions;
