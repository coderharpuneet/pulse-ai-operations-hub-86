
import React, { useState } from 'react';
import { Bell, Settings, User, Menu, X, Shield, Zap, Globe, Database, Users, Truck, Leaf, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/live-ops', label: 'Live Ops', icon: <Zap className="h-3 w-3 sm:h-4 sm:w-4" /> },
    { path: '/promotions', label: 'Promotions AI', icon: <Shield className="h-3 w-3 sm:h-4 sm:w-4" /> },
    { path: '/warehouse', label: 'Warehouse', icon: <Truck className="h-3 w-3 sm:h-4 sm:w-4" /> },
    { path: '/sustainability', label: 'Sustainability', icon: <Leaf className="h-3 w-3 sm:h-4 sm:w-4" /> },
    { path: '/trustledger', label: 'TrustLedger', icon: <Database className="h-3 w-3 sm:h-4 sm:w-4" /> }
  ];
  
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-2xl sticky top-0 z-50 backdrop-blur-lg border-b border-blue-700/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/" className="group flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 rounded-lg sm:rounded-xl shadow-lg animate-pulse"></div>
                <div className="absolute inset-1 sm:inset-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md sm:rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full animate-bounce"></div>
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">
                  WalmartPulse<span className="text-cyan-400">.ai</span>
                </div>
                <div className="text-xs text-blue-200 font-medium hidden sm:block">Intelligent Retail Platform</div>
              </div>
            </Link>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`group flex items-center space-x-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path) 
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30' 
                    : 'text-blue-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="transition-transform duration-300 group-hover:rotate-12">
                  {item.icon}
                </span>
                <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                {isActive(item.path) && (
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 border border-green-400/30">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-300 font-medium">Live</span>
            </div>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 p-2"
            >
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-pulse">
                3
              </span>
            </Button>

            {/* Settings */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 p-2"
            >
              <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* User Profile */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 p-2"
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="hidden lg:block font-medium text-sm">Admin</span>
              </div>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-blue-700/50 animate-fade-in">
          <div className="container mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-blue-200 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
