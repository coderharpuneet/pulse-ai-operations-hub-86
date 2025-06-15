
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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

const FeaturesGrid = () => {
  const features = [
    {
      title: 'Live Operations',
      description: 'Real-time store operations monitoring and analytics',
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/live-ops',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      stats: '2,847 active stores'
    },
    {
      title: 'Promotions AI',
      description: 'AI-powered promotional campaigns and optimization',
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/promotions',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      stats: '47 active campaigns'
    },
    {
      title: 'Warehouse Management',
      description: 'Real-time warehouse operations and dock management',
      icon: <Truck className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/warehouse',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      stats: '23/28 dock bays active'
    },
    {
      title: 'Sustainability Tracker',
      description: 'Environmental impact tracking and green initiatives',
      icon: <Leaf className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/sustainability',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      stats: '87% sustainability score'
    },
    {
      title: 'TrustLedger',
      description: 'Blockchain-powered supply chain transparency',
      icon: <Database className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/trustledger',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
      stats: '99.2% verified products'
    },
    {
      title: 'Security Intelligence',
      description: 'AI-powered security monitoring and threat detection',
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/#security',
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50',
      stats: '7 critical alerts',
      isTab: true
    },
    {
      title: 'Workforce Intelligence',
      description: 'Employee performance analytics and optimization',
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/#workforce',
      gradient: 'from-teal-500 to-blue-500',
      bgGradient: 'from-teal-50 to-blue-50',
      stats: '1,247 employees tracked',
      isTab: true
    },
    {
      title: 'Store Heatmap',
      description: 'Live customer traffic and behavior analytics',
      icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/#heatmap',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      stats: 'Live tracking active',
      isTab: true
    },
    {
      title: 'CCTV AI Detection',
      description: 'Smart surveillance with AI-powered threat detection',
      icon: <Camera className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/#cctv',
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-50 to-gray-100',
      stats: '156 cameras online',
      isTab: true
    },
    {
      title: 'Live Analytics',
      description: 'Real-time business intelligence and reporting',
      icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/#operations',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50',
      stats: '247 KPIs tracked',
      isTab: true
    },
    {
      title: 'Dock Operations',
      description: 'Intelligent dock scheduling and logistics management',
      icon: <Activity className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/#dock',
      gradient: 'from-cyan-500 to-teal-500',
      bgGradient: 'from-cyan-50 to-teal-50',
      stats: '14 min avg wait time',
      isTab: true
    },
    {
      title: 'Smart Monitoring',
      description: 'Comprehensive system health and performance monitoring',
      icon: <Eye className="h-6 w-6 sm:h-8 sm:w-8" />,
      path: '/#monitor',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50',
      stats: '99.7% uptime',
      isTab: true
    }
  ];

  const handleTabClick = (path: string) => {
    if (path.includes('#')) {
      const tabValue = path.split('#')[1];
      // Scroll to top first
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Then trigger tab change after a short delay
      setTimeout(() => {
        const tabsElement = document.querySelector(`[value="${tabValue}"]`);
        if (tabsElement) {
          (tabsElement as HTMLElement).click();
        }
      }, 500);
    }
  };

  return (
    <div className="mb-8 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Features</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore all the powerful features of WalmartPulse.ai - from real-time analytics to AI-powered insights
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <Card 
            key={feature.title}
            className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${feature.bgGradient} border-0 overflow-hidden animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => {
              if (feature.isTab) {
                handleTabClick(feature.path);
              }
            }}
          >
            {feature.isTab ? (
              <div>
                <CardContent className="p-4 sm:p-6 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-500`}></div>
                  </div>
                  
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.stats}
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </div>
            ) : (
              <Link to={feature.path} className="block">
                <CardContent className="p-4 sm:p-6 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-500`}></div>
                  </div>
                  
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                      {feature.stats}
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Link>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
