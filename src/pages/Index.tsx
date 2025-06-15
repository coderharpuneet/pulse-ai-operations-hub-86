
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Truck, 
  Leaf, 
  Database, 
  Users, 
  MapPin, 
  TrendingUp,
  Eye,
  BarChart3,
  Camera,
  Activity
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: 'Live Operations',
      path: '/live-ops',
      icon: <Zap className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Promotions AI',
      path: '/promotions',
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Warehouse',
      path: '/warehouse',
      icon: <Truck className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Sustainability',
      path: '/sustainability',
      icon: <Leaf className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'TrustLedger',
      path: '/trustledger',
      icon: <Database className="h-8 w-8" />,
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-green-600/10 rounded-full animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/5 to-orange-600/5 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 rounded-2xl shadow-2xl animate-pulse"></div>
              <div className="absolute inset-3 w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 animate-fade-in-up">
            <span className="relative">
              Walmart
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 animate-glow">
              Pulse
            </span>
            <span className="text-cyan-400">.ai</span>
          </h1>
          
          <p className="text-xl text-blue-200 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Intelligent Retail Platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.path}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${feature.gradient.replace('from-', '').replace(' to-', ', ')})` }}></div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-300 font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
