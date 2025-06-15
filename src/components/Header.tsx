
import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-pulse rounded-lg animate-pulse-slow"></div>
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:opacity-80 transition-opacity">
              WalmartPulse<span className="text-pulse-blue">.ai</span>
            </Link>
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <span className="text-sm text-gray-600">Real-time Intelligence Platform</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/live-ops" 
            className={`text-gray-700 hover:text-pulse-blue transition-colors ${
              isActive('/live-ops') ? 'text-pulse-blue font-medium' : ''
            }`}
          >
            Live Ops
          </Link>
          <Link 
            to="/promotions" 
            className={`text-gray-700 hover:text-pulse-blue transition-colors ${
              isActive('/promotions') ? 'text-pulse-blue font-medium' : ''
            }`}
          >
            Promotions AI
          </Link>
          <Link 
            to="/warehouse" 
            className={`text-gray-700 hover:text-pulse-blue transition-colors ${
              isActive('/warehouse') ? 'text-pulse-blue font-medium' : ''
            }`}
          >
            Warehouse View
          </Link>
          <Link 
            to="/sustainability" 
            className={`text-gray-700 hover:text-pulse-blue transition-colors ${
              isActive('/sustainability') ? 'text-pulse-blue font-medium' : ''
            }`}
          >
            Sustainability
          </Link>
          <Link 
            to="/trustledger" 
            className={`text-gray-700 hover:text-pulse-blue transition-colors ${
              isActive('/trustledger') ? 'text-pulse-blue font-medium' : ''
            }`}
          >
            TrustLedger
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
