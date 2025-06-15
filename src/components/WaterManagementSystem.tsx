
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Droplets, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';

const WaterManagementSystem = () => {
  const waterSources = [
    {
      name: 'Rainwater Collection',
      current: 2450,
      capacity: 3000,
      quality: 'Excellent',
      usage: 'Irrigation & Cleaning',
      efficiency: 92
    },
    {
      name: 'Recycled Greywater',
      current: 1800,
      capacity: 2200,
      quality: 'Good',
      usage: 'Cooling Systems',
      efficiency: 87
    },
    {
      name: 'Municipal Supply',
      current: 4200,
      capacity: 6000,
      quality: 'Standard',
      usage: 'General Operations',
      efficiency: 95
    }
  ];

  const conservationMeasures = [
    {
      measure: 'Low-flow fixtures installed',
      savings: '15%',
      status: 'completed',
      impact: '1,200 gallons/day saved'
    },
    {
      measure: 'Smart irrigation controllers',
      savings: '28%',
      status: 'active',
      impact: '2,800 gallons/day saved'
    },
    {
      measure: 'Leak detection sensors',
      savings: '8%',
      status: 'monitoring',
      impact: '450 gallons/day saved'
    },
    {
      measure: 'Cooling tower optimization',
      savings: '22%',
      status: 'active',
      impact: '1,850 gallons/day saved'
    }
  ];

  const alerts = [
    { type: 'Leak detected in Zone 4 irrigation', severity: 'high', action: 'Repair scheduled' },
    { type: 'Rainwater tank 90% capacity', severity: 'info', action: 'Usage recommended' }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Water Management System</h3>
        <div className="flex items-center space-x-2">
          <TrendingDown className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-600">23% Usage Reduction</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <h4 className="font-medium text-gray-900 mb-4">Water Sources & Usage</h4>
          <div className="space-y-4">
            {waterSources.map((source, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-gray-900">{source.name}</span>
                  </div>
                  <Badge className={
                    source.quality === 'Excellent' ? 'bg-green-100 text-green-800' :
                    source.quality === 'Good' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }>
                    {source.quality}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-gray-500">Current / Capacity</div>
                    <div className="text-sm font-medium">{source.current} / {source.capacity} gallons</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Primary Usage</div>
                    <div className="text-sm font-medium">{source.usage}</div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Efficiency</span>
                    <span>{source.efficiency}%</span>
                  </div>
                  <Progress value={(source.current / source.capacity) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-4">Conservation Measures</h4>
          <div className="space-y-3">
            {conservationMeasures.map((measure, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{measure.measure}</span>
                  <div className="flex items-center space-x-1">
                    {measure.status === 'completed' && <CheckCircle className="h-3 w-3 text-green-600" />}
                    <Badge className={
                      measure.status === 'completed' ? 'bg-green-100 text-green-800' :
                      measure.status === 'active' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }>
                      {measure.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-xs text-blue-600 font-medium mb-1">{measure.savings} savings</div>
                <div className="text-xs text-gray-600">{measure.impact}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-3">System Alerts</h4>
            <div className="space-y-2">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-2 rounded border-l-4 ${
                  alert.severity === 'high' ? 'bg-red-50 border-red-400' : 'bg-blue-50 border-blue-400'
                }`}>
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className={`h-3 w-3 mt-0.5 ${
                      alert.severity === 'high' ? 'text-red-600' : 'text-blue-600'
                    }`} />
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900">{alert.type}</div>
                      <div className="text-xs text-gray-600">{alert.action}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-blue-900">Total Water Conserved Today</div>
            <div className="text-2xl font-bold text-blue-600">6,300 Gallons</div>
            <div className="text-xs text-blue-700">Equivalent to 28 households' daily usage</div>
          </div>
          <Droplets className="h-8 w-8 text-blue-600" />
        </div>
      </div>
    </Card>
  );
};

export default WaterManagementSystem;
