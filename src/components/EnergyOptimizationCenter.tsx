
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, TrendingDown, Sun, Wind, Settings } from 'lucide-react';

const EnergyOptimizationCenter = () => {
  const energySources = [
    { name: 'Solar Panels', current: 1250, capacity: 1500, efficiency: 83, status: 'optimal' },
    { name: 'Wind Turbines', current: 800, capacity: 1000, efficiency: 80, status: 'optimal' },
    { name: 'Grid Power', current: 2100, capacity: 5000, efficiency: 95, status: 'normal' },
    { name: 'Battery Storage', current: 450, capacity: 600, efficiency: 92, status: 'charging' }
  ];

  const optimizations = [
    { action: 'Reduce HVAC load in Zone 3', savings: '125 kWh', status: 'pending' },
    { action: 'Switch to LED lighting Section B', savings: '89 kWh', status: 'implemented' },
    { action: 'Optimize refrigeration cycles', savings: '203 kWh', status: 'pending' }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Energy Optimization Center</h3>
        <div className="flex items-center space-x-2">
          <TrendingDown className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-600">15% Reduction This Month</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Energy Sources</h4>
          <div className="space-y-3">
            {energySources.map((source, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {source.name.includes('Solar') && <Sun className="h-4 w-4 text-yellow-600" />}
                    {source.name.includes('Wind') && <Wind className="h-4 w-4 text-blue-600" />}
                    {source.name.includes('Grid') && <Zap className="h-4 w-4 text-gray-600" />}
                    {source.name.includes('Battery') && <Zap className="h-4 w-4 text-green-600" />}
                    <span className="text-sm font-medium">{source.name}</span>
                  </div>
                  <Badge className={
                    source.status === 'optimal' ? 'bg-green-100 text-green-800' :
                    source.status === 'charging' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }>
                    {source.status}
                  </Badge>
                </div>
                
                <div className="text-xs text-gray-600 mb-1">
                  {source.current} kW / {source.capacity} kW ({source.efficiency}% efficient)
                </div>
                <Progress value={(source.current / source.capacity) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-4">Optimization Recommendations</h4>
          <div className="space-y-3">
            {optimizations.map((opt, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{opt.action}</span>
                  <Badge className={
                    opt.status === 'implemented' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }>
                    {opt.status}
                  </Badge>
                </div>
                <div className="text-xs text-green-600 font-medium mb-2">Saves: {opt.savings}</div>
                {opt.status === 'pending' && (
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Settings className="h-3 w-3 mr-1" />
                    Implement
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-green-900">Total Energy Saved Today</div>
            <div className="text-2xl font-bold text-green-600">2,847 kWh</div>
            <div className="text-xs text-green-700">Equivalent to 1.2 tons CO2 reduced</div>
          </div>
          <Zap className="h-8 w-8 text-green-600" />
        </div>
      </div>
    </Card>
  );
};

export default EnergyOptimizationCenter;
