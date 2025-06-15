
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, User, Clock, AlertTriangle, Headphones } from 'lucide-react';

const QuickContactDirectory = () => {
  const [calling, setCalling] = useState<string | null>(null);

  const contacts = [
    {
      id: 'front-desk',
      name: 'Front Desk',
      extension: 'x101',
      status: 'available',
      department: 'Customer Service',
      description: 'General inquiries, customer assistance'
    },
    {
      id: 'receiving',
      name: 'Receiving Dock',
      extension: 'x105',
      status: 'available',
      department: 'Warehouse',
      description: 'Deliveries, truck scheduling'
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy',
      extension: 'x103',
      status: 'busy',
      department: 'Healthcare',
      description: 'Prescription services, health consultations'
    },
    {
      id: 'security',
      name: 'Security Office',
      extension: 'x107',
      status: 'available',
      department: 'Security',
      description: 'Security incidents, surveillance'
    },
    {
      id: 'maintenance',
      name: 'Maintenance',
      extension: 'x109',
      status: 'on-call',
      department: 'Facilities',
      description: 'Equipment issues, facility maintenance'
    },
    {
      id: 'electronics',
      name: 'Electronics Dept',
      extension: 'x112',
      status: 'available',
      department: 'Sales',
      description: 'Tech support, electronics assistance'
    },
    {
      id: 'grocery',
      name: 'Grocery Manager',
      extension: 'x115',
      status: 'available',
      department: 'Grocery',
      description: 'Fresh foods, grocery operations'
    },
    {
      id: 'emergency',
      name: 'Manager Emergency Line',
      extension: 'x999',
      status: 'available',
      department: 'Management',
      description: 'Emergency situations only',
      priority: 'emergency'
    }
  ];

  const handleCall = (contact: any) => {
    setCalling(contact.id);
    console.log(`Calling ${contact.name} at ${contact.extension}`);
    
    // Simulate call duration
    setTimeout(() => {
      setCalling(null);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'busy': return 'bg-red-100 text-red-800';
      case 'on-call': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <div className="w-2 h-2 bg-green-400 rounded-full" />;
      case 'busy': return <div className="w-2 h-2 bg-red-400 rounded-full" />;
      case 'on-call': return <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />;
      default: return <div className="w-2 h-2 bg-gray-400 rounded-full" />;
    }
  };

  const emergencyContacts = contacts.filter(c => c.priority === 'emergency');
  const regularContacts = contacts.filter(c => c.priority !== 'emergency');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-blue-500" />
          <span>Quick Contact Directory</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Emergency Contacts */}
        {emergencyContacts.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-red-900 mb-3 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
              Emergency Contacts
            </h4>
            <div className="space-y-2">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="border-2 border-red-200 rounded-lg p-3 bg-red-50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-red-900">{contact.name}</h5>
                        <p className="text-sm text-red-700">{contact.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-red-100 text-red-800 font-mono">
                        {contact.extension}
                      </Badge>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleCall(contact)}
                        disabled={calling === contact.id}
                        className="min-w-[80px]"
                      >
                        {calling === contact.id ? (
                          <div className="flex items-center space-x-1">
                            <Headphones className="h-3 w-3 animate-pulse" />
                            <span>Calling...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>Call</span>
                          </div>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Contacts */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Department Contacts</h4>
          <div className="space-y-2">
            {regularContacts.map((contact) => (
              <div
                key={contact.id}
                className="border rounded-lg p-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h5 className="font-medium text-gray-900">{contact.name}</h5>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(contact.status)}
                          <Badge className={getStatusColor(contact.status)} size="sm">
                            {contact.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{contact.description}</p>
                      <p className="text-xs text-gray-500">{contact.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="font-mono">
                      {contact.extension}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCall(contact)}
                      disabled={calling === contact.id || contact.status === 'busy'}
                      className="min-w-[80px]"
                    >
                      {calling === contact.id ? (
                        <div className="flex items-center space-x-1">
                          <Headphones className="h-3 w-3 animate-pulse" />
                          <span>Calling...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>Call</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="font-semibold text-green-600">
                {contacts.filter(c => c.status === 'available').length}
              </div>
              <div className="text-gray-600">Available</div>
            </div>
            <div>
              <div className="font-semibold text-red-600">
                {contacts.filter(c => c.status === 'busy').length}
              </div>
              <div className="text-gray-600">Busy</div>
            </div>
            <div>
              <div className="font-semibold text-orange-600">
                {contacts.filter(c => c.status === 'on-call').length}
              </div>
              <div className="text-gray-600">On Call</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickContactDirectory;
