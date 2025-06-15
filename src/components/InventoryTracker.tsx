
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Package, AlertTriangle, TrendingDown, TrendingUp, Clock, MapPin } from 'lucide-react';

const InventoryTracker = () => {
  const [inventory, setInventory] = useState([
    {
      id: 'SKU-001',
      name: 'Fresh Produce',
      currentStock: 850,
      minThreshold: 1000,
      maxCapacity: 2000,
      location: 'Zone A1-A5',
      status: 'low',
      lastRestock: '2 hours ago',
      demand: 'high',
      expiryAlert: false
    },
    {
      id: 'SKU-002', 
      name: 'Electronics',
      currentStock: 1200,
      minThreshold: 800,
      maxCapacity: 1500,
      location: 'Zone B1-B3',
      status: 'optimal',
      lastRestock: '6 hours ago',
      demand: 'medium',
      expiryAlert: false
    },
    {
      id: 'SKU-003',
      name: 'Frozen Foods',
      currentStock: 450,
      minThreshold: 600,
      maxCapacity: 1000,
      location: 'Zone C1-C2',
      status: 'critical',
      lastRestock: '4 hours ago',
      demand: 'high',
      expiryAlert: true
    },
    {
      id: 'SKU-004',
      name: 'Pharmacy',
      currentStock: 950,
      minThreshold: 500,
      maxCapacity: 1200,
      location: 'Zone D1',
      status: 'optimal',
      lastRestock: '1 hour ago',
      demand: 'low',
      expiryAlert: false
    }
  ]);

  // Simulate real-time inventory updates
  useEffect(() => {
    const interval = setInterval(() => {
      setInventory(prev => prev.map(item => {
        const change = Math.floor(Math.random() * 100) - 50; // -50 to +50
        const newStock = Math.max(0, Math.min(item.maxCapacity, item.currentStock + change));
        
        let status = 'optimal';
        if (newStock < item.minThreshold * 0.5) status = 'critical';
        else if (newStock < item.minThreshold) status = 'low';
        else if (newStock > item.maxCapacity * 0.9) status = 'overflow';
        
        return {
          ...item,
          currentStock: newStock,
          status
        };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'low': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'optimal': return 'bg-green-100 text-green-800 border-green-200';
      case 'overflow': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStockColor = (percentage: number, status: string) => {
    if (status === 'critical') return 'bg-red-500';
    if (status === 'low') return 'bg-orange-500';
    if (status === 'overflow') return 'bg-purple-500';
    return 'bg-green-500';
  };

  const criticalItems = inventory.filter(item => item.status === 'critical');
  const lowStockItems = inventory.filter(item => item.status === 'low');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Package className="h-5 w-5 text-blue-500" />
          <span>Real-Time Inventory Tracker</span>
          <Badge className="bg-blue-100 text-blue-800">Live</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Critical Alerts */}
        {criticalItems.length > 0 && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-800">
              <strong>Critical Stock Alert:</strong> {criticalItems.length} item(s) require immediate restocking
            </AlertDescription>
          </Alert>
        )}

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {inventory.map((item) => {
            const percentage = (item.currentStock / item.maxCapacity) * 100;
            return (
              <Card key={item.id} className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.id}</p>
                    </div>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Current: {item.currentStock.toLocaleString()}</span>
                      <span className="text-gray-600">Max: {item.maxCapacity.toLocaleString()}</span>
                    </div>
                    
                    <Progress 
                      value={percentage} 
                      className="h-2" 
                    />
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.lastRestock}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center space-x-1">
                        {item.demand === 'high' ? (
                          <TrendingUp className="h-3 w-3 text-red-500" />
                        ) : item.demand === 'low' ? (
                          <TrendingDown className="h-3 w-3 text-green-500" />
                        ) : (
                          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                        )}
                        <span>Demand: {item.demand}</span>
                      </span>
                      
                      {item.expiryAlert && (
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                          Expiry Soon
                        </Badge>
                      )}
                    </div>
                    
                    {item.status === 'critical' && (
                      <Button size="sm" className="w-full mt-2 bg-red-600 hover:bg-red-700">
                        Emergency Restock
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Center */}
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">Automated Recommendations</h4>
          <div className="space-y-2 text-sm text-blue-800">
            {criticalItems.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <span>• Priority restock needed for {item.name} in {item.location}</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Auto-Order
                </Button>
              </div>
            ))}
            {lowStockItems.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <span>• Schedule restock for {item.name} within 4 hours</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Schedule
                </Button>
              </div>
            ))}
            {criticalItems.length === 0 && lowStockItems.length === 0 && (
              <span>All inventory levels are optimal</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryTracker;
