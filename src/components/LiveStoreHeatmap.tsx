
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MapPin, Users, AlertTriangle, TrendingUp } from 'lucide-react';

const LiveStoreHeatmap = () => {
  const [zones, setZones] = useState([
    {
      id: 'entrance-a',
      name: 'Entrance A',
      currentCapacity: 45,
      maxCapacity: 50,
      status: 'warning',
      recommendation: 'Monitor closely - approaching capacity'
    },
    {
      id: 'checkout',
      name: 'Checkout Area',
      currentCapacity: 62,
      maxCapacity: 60,
      status: 'critical',
      recommendation: 'Send 2 more staff to Checkout immediately'
    },
    {
      id: 'electronics',
      name: 'Electronics',
      currentCapacity: 28,
      maxCapacity: 40,
      status: 'normal',
      recommendation: null
    },
    {
      id: 'grocery',
      name: 'Grocery Aisles',
      currentCapacity: 85,
      maxCapacity: 100,
      status: 'normal',
      recommendation: null
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy',
      currentCapacity: 12,
      maxCapacity: 25,
      status: 'normal',
      recommendation: null
    },
    {
      id: 'entrance-b',
      name: 'Entrance B',
      currentCapacity: 18,
      maxCapacity: 30,
      status: 'normal',
      recommendation: null
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setZones(prev => prev.map(zone => {
        const change = Math.floor(Math.random() * 6) - 3; // -3 to +3
        const newCapacity = Math.max(0, Math.min(zone.maxCapacity + 10, zone.currentCapacity + change));
        const percentage = (newCapacity / zone.maxCapacity) * 100;
        
        let status = 'normal';
        let recommendation = null;
        
        if (percentage >= 100) {
          status = 'critical';
          recommendation = `Send 2 more staff to ${zone.name} immediately`;
        } else if (percentage >= 85) {
          status = 'warning';
          recommendation = `Monitor ${zone.name} closely - approaching capacity`;
        }
        
        return {
          ...zone,
          currentCapacity: newCapacity,
          status,
          recommendation
        };
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'normal': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCapacityColor = (percentage: number) => {
    if (percentage >= 100) return 'bg-red-500';
    if (percentage >= 85) return 'bg-orange-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const criticalZones = zones.filter(zone => zone.status === 'critical');
  const warningZones = zones.filter(zone => zone.status === 'warning');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            <span>Live Store Heatmap & Hot Zone Detection</span>
            <Badge className="bg-green-100 text-green-800">Real-time</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Critical Alerts */}
          {criticalZones.length > 0 && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-red-800">
                <strong>Critical Capacity Alert:</strong> {criticalZones.length} zone(s) exceed safe density limits
              </AlertDescription>
            </Alert>
          )}

          {/* Zone Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {zones.map((zone) => {
              const percentage = (zone.currentCapacity / zone.maxCapacity) * 100;
              return (
                <Card key={zone.id} className="relative overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{zone.name}</h4>
                      <Badge className={getStatusColor(zone.status)}>
                        {zone.status.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>Current: {zone.currentCapacity}</span>
                        </span>
                        <span className="text-gray-600">Max: {zone.maxCapacity}</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getCapacityColor(percentage)}`}
                          style={{ width: `${Math.min(100, percentage)}%` }}
                        />
                      </div>
                      
                      <div className="text-right text-sm font-medium">
                        {percentage.toFixed(0)}% capacity
                      </div>
                    </div>
                    
                    {zone.recommendation && (
                      <div className="mt-3 p-2 bg-yellow-50 rounded text-xs text-yellow-800">
                        {zone.recommendation}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recommendations Panel */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Crowd Management Recommendations
            </h4>
            <div className="space-y-2 text-sm text-blue-800">
              {zones.filter(zone => zone.recommendation).map((zone) => (
                <div key={zone.id} className="flex items-center justify-between">
                  <span>• {zone.recommendation}</span>
                  <Button size="sm" variant="outline" className="text-xs">
                    Dispatch Staff
                  </Button>
                </div>
              ))}
              {zones.filter(zone => zone.recommendation).length === 0 && (
                <span>All zones operating within safe capacity limits</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveStoreHeatmap;
