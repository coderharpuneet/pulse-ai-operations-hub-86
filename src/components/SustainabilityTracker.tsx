
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Leaf, Recycle, Zap, Droplets } from 'lucide-react';

const SustainabilityTracker = () => {
  const metrics = [
    {
      title: 'Food Waste Reduction',
      current: 87,
      target: 90,
      unit: '%',
      trend: '+2.3%',
      icon: <Recycle className="h-5 w-5" />,
      color: 'text-green-600'
    },
    {
      title: 'Energy Efficiency',
      current: 78,
      target: 85,
      unit: '%',
      trend: '+1.8%',
      icon: <Zap className="h-5 w-5" />,
      color: 'text-yellow-600'
    },
    {
      title: 'Water Conservation',
      current: 92,
      target: 95,
      unit: '%',
      trend: '+0.9%',
      icon: <Droplets className="h-5 w-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'Carbon Footprint',
      current: 73,
      target: 80,
      unit: '% reduction',
      trend: '+1.2%',
      icon: <Leaf className="h-5 w-5" />,
      color: 'text-emerald-600'
    }
  ];

  const greenTokens = [
    { action: 'Reduced truck idling time', tokens: 15, time: '10 min ago' },
    { action: 'Optimized route planning', tokens: 25, time: '1 hour ago' },
    { action: 'Energy-efficient lighting', tokens: 10, time: '2 hours ago' },
    { action: 'Waste reduction initiative', tokens: 30, time: '3 hours ago' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Sustainability Metrics */}
      <Card className="lg:col-span-2 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Sustainability Dashboard</h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">87% Overall Score</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg bg-gradient-green text-white`}>
                    {metric.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{metric.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {metric.current}{metric.unit}
                      </span>
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {metric.trend}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress to target</span>
                  <span className="text-gray-900">{metric.current}/{metric.target}{metric.unit}</span>
                </div>
                <Progress 
                  value={(metric.current / metric.target) * 100} 
                  className="h-2"
                />
              </div>
              
              <div className="text-xs text-gray-500">
                Target: {metric.target}{metric.unit}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Green Tokens Tracker */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">$GREEN Tokens</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">1,247</div>
            <div className="text-xs text-gray-500">Total earned today</div>
          </div>
        </div>

        <div className="space-y-3">
          {greenTokens.map((token, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"
            >
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  {token.action}
                </div>
                <div className="text-xs text-gray-500">{token.time}</div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-bold text-green-600">+{token.tokens}</span>
                <Leaf className="h-4 w-4 text-green-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Monthly Progress</span>
            <span className="text-sm font-medium text-green-600">89% to target</span>
          </div>
          <Progress value={89} className="mt-2 h-2" />
        </div>
      </Card>
    </div>
  );
};

export default SustainabilityTracker;
