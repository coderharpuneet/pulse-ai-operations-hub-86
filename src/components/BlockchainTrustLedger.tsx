
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Eye, Link, Blocks } from 'lucide-react';

const BlockchainTrustLedger = () => {
  const recentTransactions = [
    { 
      id: '0x7f2...a1b', 
      type: 'hygiene_check', 
      location: 'Aisle 7-B', 
      timestamp: '2 min ago',
      status: 'verified',
      details: 'Floor cleaning completed and verified'
    },
    { 
      id: '0x9c4...d3e', 
      type: 'inventory_update', 
      location: 'Dairy Section', 
      timestamp: '5 min ago',
      status: 'verified',
      details: 'Stock levels updated: Milk +240 units'
    },
    { 
      id: '0x1a8...f7c', 
      type: 'supplier_delivery', 
      location: 'Dock D2', 
      timestamp: '12 min ago',
      status: 'verified',
      details: 'Fresh produce delivery from Farm Fresh Co.'
    },
    { 
      id: '0x5b2...e9d', 
      type: 'sustainability', 
      location: 'Energy System', 
      timestamp: '18 min ago',
      status: 'verified',
      details: 'LED lighting efficiency improvement logged'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hygiene_check': return <Shield className="h-4 w-4" />;
      case 'inventory_update': return <Blocks className="h-4 w-4" />;
      case 'supplier_delivery': return <Link className="h-4 w-4" />;
      case 'sustainability': return <CheckCircle className="h-4 w-4" />;
      default: return <Blocks className="h-4 w-4" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'hygiene_check': return <Badge className="bg-blue-100 text-blue-800">Hygiene</Badge>;
      case 'inventory_update': return <Badge className="bg-purple-100 text-purple-800">Inventory</Badge>;
      case 'supplier_delivery': return <Badge className="bg-orange-100 text-orange-800">Supply Chain</Badge>;
      case 'sustainability': return <Badge className="bg-green-100 text-green-800">Sustainability</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Blockchain Stats */}
      <Card className="p-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
            <Blocks className="h-8 w-8 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">2,847</div>
            <div className="text-sm text-gray-600">Total Blocks</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Network Health</span>
              <span className="text-green-600 font-medium">100%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Last Block</span>
              <span className="text-gray-900">2s ago</span>
            </div>
          </div>
          <Button size="sm" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600">
            View Explorer
          </Button>
        </div>
      </Card>

      {/* Recent Transactions */}
      <Card className="lg:col-span-3 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">TrustLedger Activity</h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Blockchain synchronized</span>
          </div>
        </div>

        <div className="space-y-4">
          {recentTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  {getTypeIcon(tx.type)}
                  <span className="text-white text-xs"></span>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-mono text-gray-600">{tx.id}</span>
                    {getTypeBadge(tx.type)}
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-green-600">Verified</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm text-gray-900">{tx.details}</div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Location: {tx.location}</span>
                    <span>{tx.timestamp}</span>
                  </div>
                </div>
              </div>
              
              <Button size="sm" variant="ghost" className="flex-shrink-0">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              All operations immutably recorded on the blockchain
            </div>
            <Button variant="outline" size="sm">
              View All Transactions
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlockchainTrustLedger;
