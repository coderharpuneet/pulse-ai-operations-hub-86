
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, MessageCircle, Search, Users, Clock, MapPin, AlertTriangle } from 'lucide-react';

const QuickContactDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts] = useState([
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Floor Supervisor',
      department: 'Electronics',
      phone: '(555) 0123',
      status: 'available',
      location: 'Aisle 12',
      lastSeen: '2 min ago'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      role: 'Security Manager',
      department: 'Security',
      phone: '(555) 0124',
      status: 'busy',
      location: 'Security Office',
      lastSeen: '5 min ago'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Cashier Lead',
      department: 'Frontend',
      phone: '(555) 0125',
      status: 'available',
      location: 'Checkout',
      lastSeen: '1 min ago'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Stock Manager',
      department: 'Warehouse',
      phone: '(555) 0126',
      status: 'offline',
      location: 'Backroom',
      lastSeen: '45 min ago'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Customer Service',
      department: 'CS',
      phone: '(555) 0127',
      status: 'available',
      location: 'Service Desk',
      lastSeen: 'Just now'
    }
  ]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800 border-green-200';
      case 'busy': return 'bg-red-100 text-red-800 border-red-200';
      case 'offline': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-400';
      case 'busy': return 'bg-red-400';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const handleCall = (contact: any) => {
    console.log(`Calling ${contact.name} at ${contact.phone}`);
  };

  const handleMessage = (contact: any) => {
    console.log(`Messaging ${contact.name}`);
  };

  const availableCount = contacts.filter(c => c.status === 'available').length;
  const busyCount = contacts.filter(c => c.status === 'busy').length;

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-green-50">
      <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 animate-bounce-gentle" />
            <span>Quick Contacts</span>
          </div>
          <div className="flex space-x-2 text-sm">
            <span className="bg-white/20 px-2 py-1 rounded-full">
              {availableCount} available
            </span>
            <span className="bg-white/20 px-2 py-1 rounded-full">
              {busyCount} busy
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-2 border-green-200 focus:border-green-500 transition-colors"
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {filteredContacts.map((contact, index) => (
            <div
              key={contact.id}
              className="border rounded-lg p-4 hover:bg-gray-50 transition-all duration-300 hover:shadow-md transform hover:scale-105 animate-slide-in-right"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-medium">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusIndicator(contact.status)} rounded-full border-2 border-white animate-pulse`}></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{contact.name}</h4>
                    <p className="text-sm text-gray-600">{contact.role}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(contact.status)}>
                  {contact.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{contact.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{contact.lastSeen}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCall(contact)}
                  className="flex-1 border-green-200 hover:bg-green-50 hover:border-green-400 transition-all duration-200"
                  disabled={contact.status === 'offline'}
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Call
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleMessage(contact)}
                  className="flex-1 border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200"
                  disabled={contact.status === 'offline'}
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredContacts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No contacts found</p>
          </div>
        )}

        {/* Emergency Contacts */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h5 className="font-medium text-gray-900 mb-2 flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
            Emergency Contacts
          </h5>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Button variant="destructive" className="bg-red-500 hover:bg-red-600 transform hover:scale-105 transition-all duration-200">
              Security: 911
            </Button>
            <Button variant="outline" className="border-orange-200 hover:bg-orange-50 transform hover:scale-105 transition-all duration-200">
              Manager: (555) 0100
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickContactDirectory;
