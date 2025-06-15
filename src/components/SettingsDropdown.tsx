
import React from 'react';
import { Settings, User, LogOut, Shield, HelpCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface SettingsDropdownProps {
  onLogout: () => void;
}

const SettingsDropdown = ({ onLogout }: SettingsDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 p-2"
        >
          <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white shadow-xl border border-gray-200" align="end">
        <DropdownMenuLabel className="text-gray-900">Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-gray-700 hover:bg-gray-50 cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Profile Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-700 hover:bg-gray-50 cursor-pointer">
          <Shield className="mr-2 h-4 w-4" />
          <span>Security</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-gray-700 hover:bg-gray-50 cursor-pointer">
          <HelpCircle className="mr-2 h-4 w-4" />
          <span>Help & Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="text-red-600 hover:bg-red-50 cursor-pointer"
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsDropdown;
