
import React, { useState } from 'react';
import { Bell, Settings, User, Menu, X, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/live-ops', label: 'Live Ops', icon: <Zap className="h-4 w-4" /> },
    { path: '/promotions', label: 'Promotions AI', icon: <Shield className="h-4 w-4" /> },
    { path: '/warehouse', label: 'Warehouse View', icon: <Globe className="h-4 w-4" /> },
    { path: '/sustainability', label: 'Sustainability', icon: <Globe className="h-4 w-4" /> },
    { path: '/trustledger', label: 'TrustLedger', icon: <Shield className="h-4 w-4" /> }
  ];
  
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 shadow-2xl sticky top-0 z-50 backdrop-blur-lg border-b border-blue-700/30">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl shadow-lg animate-pulse-slow"></div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl opacity-70 animate-spin-slow"></div>
              <div className="absolute inset-2 w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              </div>
            </div>
            <Link to="/" className="group">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 transform group-hover:scale-105">
                WalmartPulse<span className="text-cyan-300">.ai</span>
              </div>
            </Link>
          </div>
          
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
          
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-100 font-medium">Real-time Intelligence Platform</span>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-none animate-bounce-gentle">
              99.7% Uptime
            </Badge>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isActive(item.path) 
                  ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="transition-transform duration-300 group-hover:rotate-12">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
              {isActive(item.path) && (
                <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative text-blue-100 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-pulse">
              3
            </span>
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-400 rounded-full animate-ping"></span>
          </Button>

          {/* Settings */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-blue-100 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          >
            <Settings className="h-5 w-5" />
          </Button>

          {/* User Profile */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-blue-100 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="hidden md:block font-medium">Admin</span>
            </div>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-blue-100 hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-900/95 backdrop-blur-lg border-t border-blue-700/50 animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full animate-bounce-gentle"></div>
      </div>
    </header>
  );
};

export default Header;
