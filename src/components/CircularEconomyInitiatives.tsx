
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Package, ArrowRightLeft, Target } from 'lucide-react';

const CircularEconomyInitiatives = () => {
  const initiatives = [
    {
      name: 'Product Return & Refurbish',
      description: 'Electronics returned, refurbished and resold',
      items: 1247,
      value: '$89,450',
      impact: '2.1 tons waste diverted',
      progress: 78,
      target: 1600,
      status: 'active'
    },
    {
      name: 'Packaging Reuse Program',
      description: 'Cardboard boxes and packaging materials reused',
      items: 3456,
      value: '$12,340',
      impact: '5.7 tons CO2 saved',
      progress: 89,
      target: 3900,
      status: 'active'
    },
    {
      name: 'Textile Recycling Loop',
      description: 'Clothing returned for fiber recovery',
      items: 892,
      value: '$15,670',
      impact: '1.8 tons textile waste diverted',
      progress: 65,
      target: 1200,
      status: 'expanding'
    },
    {
      name: 'Battery Collection & Recovery',
      description: 'Batteries collected for material recovery',
      items: 2134,
      value: '$8,920',
      impact: 'Hazardous waste properly handled',
      progress: 92,
      target: 2300,
      status: 'active'
    }
  ];

  const materialFlows = [
    { material: 'Plastic', recovered: 45, recycled: 38, reused: 12 },
    { material: 'Metal', recovered: 78, recycled: 65, reused: 25 },
    { material: 'Paper', recovered: 89, recycled: 82, reused: 35 },
    { material: 'Electronics', recovered: 67, recycled: 45, reused: 55 }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Circular Economy Initiatives</h3>
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-600">8,729 Items Circulated</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Active Programs</h4>
          <div className="space-y-4">
            {initiatives.map((initiative, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900">{initiative.name}</h5>
                    <p className="text-sm text-gray-600">{initiative.description}</p>
                  </div>
                  <Badge className={
                    initiative.status === 'active' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }>
                    {initiative.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{initiative.items}</div>
                    <div className="text-xs text-gray-500">Items</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">{initiative.value}</div>
                    <div className="text-xs text-gray-500">Value</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-900 font-medium">{initiative.impact}</div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress to target</span>
                    <span>{initiative.items}/{initiative.target}</span>
                  </div>
                  <Progress value={initiative.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-4">Material Recovery Rates</h4>
          <div className="space-y-4">
            {materialFlows.map((material, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">{material.material}</span>
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">{material.recovered}% recovered</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Recycled</span>
                      <span>{material.recycled}%</span>
                    </div>
                    <Progress value={material.recycled} className="h-2 bg-blue-200">
                      <div className="h-2 bg-blue-500 rounded-full" style={{width: `${material.recycled}%`}} />
                    </Progress>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Reused</span>
                      <span>{material.reused}%</span>
                    </div>
                    <Progress value={material.reused} className="h-2 bg-green-200">
                      <div className="h-2 bg-green-500 rounded-full" style={{width: `${material.reused}%`}} />
                    </Progress>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">Circular Economy Impact</span>
            </div>
            <div className="text-xs text-green-700">
              By keeping materials in circulation, we've prevented 9.6 tons of waste from entering landfills this month.
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CircularEconomyInitiatives;
