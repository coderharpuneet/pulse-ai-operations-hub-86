import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, Recycle, Zap, Droplets, Users, BarChart3, Heart, RefreshCw } from 'lucide-react';

// Import all the new feature components
import SmartWasteDashboard from './SmartWasteDashboard';
import EnergyOptimizationCenter from './EnergyOptimizationCenter';
import SupplyChainTracker from './SupplyChainTracker';
import CircularEconomyInitiatives from './CircularEconomyInitiatives';
import WaterManagementSystem from './WaterManagementSystem';
import EmployeeEngagementPlatform from './EmployeeEngagementPlatform';
import CustomerImpactVisualization from './CustomerImpactVisualization';
import PredictiveAnalytics from './PredictiveAnalytics';
import { PredictiveAnalyticsData } from '../types/predictive';

const SustainabilityTracker = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for PredictiveAnalytics component
  const mockPredictiveData: PredictiveAnalyticsData = {
    riskPredictions: [
      {
        id: '1',
        category: 'supply_disruption',
        title: 'Organic Produce Supply Risk',
        description: 'Potential disruption in organic vegetable supply due to weather conditions',
        riskScore: 75,
        probability: 68,
        impact: 'high',
        timeframe: '2-3 weeks',
        affectedProducts: 45,
        preventiveActions: ['Diversify suppliers', 'Increase safety stock'],
        confidenceLevel: 82,
        createdAt: new Date()
      },
      {
        id: '2',
        category: 'food_safety',
        title: 'Cold Chain Temperature Alert',
        description: 'Refrigeration system showing early signs of inefficiency',
        riskScore: 45,
        probability: 35,
        impact: 'medium',
        timeframe: '1-2 weeks',
        affectedProducts: 120,
        preventiveActions: ['Schedule maintenance', 'Monitor temperatures'],
        confidenceLevel: 76,
        createdAt: new Date()
      }
    ],
    performanceMetrics: [
      {
        id: '1',
        name: 'Waste Reduction',
        value: 87,
        unit: '%',
        trend: 'up',
        changePercent: 2.3,
        benchmark: 85,
        target: 90,
        category: 'sustainability'
      },
      {
        id: '2',
        name: 'Energy Efficiency',
        value: 78,
        unit: '%',
        trend: 'up',
        changePercent: 1.8,
        benchmark: 75,
        target: 85,
        category: 'efficiency'
      },
      {
        id: '3',
        name: 'Water Conservation',
        value: 92,
        unit: '%',
        trend: 'stable',
        changePercent: 0.9,
        benchmark: 90,
        target: 95,
        category: 'sustainability'
      },
      {
        id: '4',
        name: 'Carbon Reduction',
        value: 73,
        unit: '%',
        trend: 'up',
        changePercent: 1.2,
        benchmark: 70,
        target: 80,
        category: 'sustainability'
      }
    ],
    supplyChainInsights: [
      {
        id: '1',
        type: 'cost_saving',
        title: 'Optimize Delivery Routes',
        description: 'AI-identified route optimization could reduce fuel consumption by 15%',
        potentialSavings: 25000,
        implementationTime: '2-3 weeks',
        difficulty: 'medium',
        priority: 'high',
        roiPercent: 180
      },
      {
        id: '2',
        type: 'efficiency',
        title: 'Smart Inventory Management',
        description: 'Predictive restocking could reduce waste and improve availability',
        potentialSavings: 18000,
        implementationTime: '1 month',
        difficulty: 'easy',
        priority: 'medium',
        roiPercent: 145
      }
    ],
    trendData: {
      foodSafety: [
        { timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), value: 95, category: 'safety' },
        { timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), value: 94, category: 'safety' },
        { timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), value: 96, category: 'safety' },
        { timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), value: 97, category: 'safety' },
        { timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), value: 95, category: 'safety' },
        { timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), value: 98, category: 'safety' }
      ],
      supplierPerformance: [
        { timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), value: 88, category: 'performance' },
        { timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), value: 90, category: 'performance' },
        { timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), value: 87, category: 'performance' },
        { timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), value: 92, category: 'performance' },
        { timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), value: 89, category: 'performance' },
        { timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), value: 91, category: 'performance' }
      ],
      carbonFootprint: [
        { timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), value: 78, category: 'carbon' },
        { timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), value: 76, category: 'carbon' },
        { timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), value: 74, category: 'carbon' },
        { timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), value: 73, category: 'carbon' },
        { timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), value: 71, category: 'carbon' },
        { timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), value: 70, category: 'carbon' }
      ],
      responseTime: [
        { timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), value: 12, category: 'response' },
        { timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), value: 11, category: 'response' },
        { timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), value: 10, category: 'response' },
        { timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), value: 9, category: 'response' },
        { timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), value: 8, category: 'response' },
        { timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), value: 7, category: 'response' }
      ]
    }
  };

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
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="waste">Smart Waste</TabsTrigger>
          <TabsTrigger value="energy">Energy</TabsTrigger>
          <TabsTrigger value="supply">Supply Chain</TabsTrigger>
          <TabsTrigger value="circular">Circular Economy</TabsTrigger>
          <TabsTrigger value="water">Water</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                        <div className="p-2 rounded-lg bg-gradient-green text-white">
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

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access to Advanced Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <Button 
                variant="outline" 
                className="flex flex-col h-20 space-y-2"
                onClick={() => setActiveTab('waste')}
              >
                <Recycle className="h-5 w-5" />
                <span className="text-xs">Smart Waste</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex flex-col h-20 space-y-2"
                onClick={() => setActiveTab('energy')}
              >
                <Zap className="h-5 w-5" />
                <span className="text-xs">Energy</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex flex-col h-20 space-y-2"
                onClick={() => setActiveTab('supply')}
              >
                <Leaf className="h-5 w-5" />
                <span className="text-xs">Supply Chain</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex flex-col h-20 space-y-2"
                onClick={() => setActiveTab('circular')}
              >
                <RefreshCw className="h-5 w-5" />
                <span className="text-xs">Circular</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex flex-col h-20 space-y-2"
                onClick={() => setActiveTab('water')}
              >
                <Droplets className="h-5 w-5" />
                <span className="text-xs">Water</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex flex-col h-20 space-y-2"
                onClick={() => setActiveTab('engagement')}
              >
                <Users className="h-5 w-5" />
                <span className="text-xs">Engagement</span>
              </Button>
              <Button 
                variant="outline" 
                className="flex flex-col h-20 space-y-2"
                onClick={() => setActiveTab('analytics')}
              >
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs">Analytics</span>
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="waste">
          <SmartWasteDashboard />
        </TabsContent>

        <TabsContent value="energy">
          <EnergyOptimizationCenter />
        </TabsContent>

        <TabsContent value="supply">
          <SupplyChainTracker />
        </TabsContent>

        <TabsContent value="circular">
          <CircularEconomyInitiatives />
        </TabsContent>

        <TabsContent value="water">
          <WaterManagementSystem />
        </TabsContent>

        <TabsContent value="engagement">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <EmployeeEngagementPlatform />
            <CustomerImpactVisualization />
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <PredictiveAnalytics data={mockPredictiveData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SustainabilityTracker;
