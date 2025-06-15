
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Clock, Target, AlertCircle, CheckCircle } from 'lucide-react';

const WarehouseAnalytics = () => {
  const [metrics, setMetrics] = useState({
    throughput: { current: 2340, target: 2500, trend: 'up' },
    orderAccuracy: { current: 99.2, target: 99.5, trend: 'up' },
    avgPickTime: { current: 4.2, target: 3.8, trend: 'down' },
    utilization: { current: 87, target: 85, trend: 'up' }
  });

  const [hourlyThroughput] = useState([
    { hour: '6AM', orders: 180, target: 200 },
    { hour: '7AM', orders: 220, target: 200 },
    { hour: '8AM', orders: 250, target: 200 },
    { hour: '9AM', orders: 280, target: 200 },
    { hour: '10AM', orders: 310, target: 200 },
    { hour: '11AM', orders: 290, target: 200 },
    { hour: '12PM', orders: 260, target: 200 },
    { hour: '1PM', orders: 240, target: 200 },
    { hour: '2PM', orders: 275, target: 200 }
  ]);

  const [zonePerformance] = useState([
    { zone: 'A', utilization: 92, color: '#10B981' },
    { zone: 'B', utilization: 85, color: '#F59E0B' },
    { zone: 'C', utilization: 78, color: '#EF4444' },
    { zone: 'D', utilization: 88, color: '#3B82F6' }
  ]);

  const [predictions, setPredictions] = useState({
    nextHourDemand: 320,
    peakTime: '3:00 PM',
    staffNeeded: 24,
    bottleneckZone: 'Zone C'
  });

  // Simulate real-time analytics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        throughput: {
          ...prev.throughput,
          current: prev.throughput.current + Math.floor(Math.random() * 20) - 10
        },
        orderAccuracy: {
          ...prev.orderAccuracy,
          current: Math.max(95, Math.min(100, prev.orderAccuracy.current + (Math.random() * 0.4 - 0.2)))
        },
        avgPickTime: {
          ...prev.avgPickTime,
          current: Math.max(3, Math.min(6, prev.avgPickTime.current + (Math.random() * 0.4 - 0.2)))
        },
        utilization: {
          ...prev.utilization,
          current: Math.max(70, Math.min(100, prev.utilization.current + Math.floor(Math.random() * 6) - 3))
        }
      }));

      setPredictions(prev => ({
        ...prev,
        nextHourDemand: prev.nextHourDemand + Math.floor(Math.random() * 40) - 20,
        staffNeeded: Math.max(18, Math.min(30, prev.staffNeeded + Math.floor(Math.random() * 4) - 2))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getMetricColor = (current: number, target: number, inverse: boolean = false) => {
    const isGood = inverse ? current < target : current >= target;
    return isGood ? 'text-green-600' : 'text-red-600';
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Throughput/Hour</p>
                <p className={`text-2xl font-bold ${getMetricColor(metrics.throughput.current, metrics.throughput.target)}`}>
                  {metrics.throughput.current}
                </p>
                <p className="text-xs text-gray-500">Target: {metrics.throughput.target}</p>
              </div>
              {getTrendIcon(metrics.throughput.trend)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Order Accuracy</p>
                <p className={`text-2xl font-bold ${getMetricColor(metrics.orderAccuracy.current, metrics.orderAccuracy.target)}`}>
                  {metrics.orderAccuracy.current.toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500">Target: {metrics.orderAccuracy.target}%</p>
              </div>
              {getTrendIcon(metrics.orderAccuracy.trend)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Pick Time</p>
                <p className={`text-2xl font-bold ${getMetricColor(metrics.avgPickTime.current, metrics.avgPickTime.target, true)}`}>
                  {metrics.avgPickTime.current.toFixed(1)}m
                </p>
                <p className="text-xs text-gray-500">Target: {metrics.avgPickTime.target}m</p>
              </div>
              {getTrendIcon(metrics.avgPickTime.current <= metrics.avgPickTime.target ? 'up' : 'down')}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Utilization</p>
                <p className={`text-2xl font-bold ${getMetricColor(metrics.utilization.current, metrics.utilization.target)}`}>
                  {metrics.utilization.current}%
                </p>
                <p className="text-xs text-gray-500">Target: {metrics.utilization.target}%</p>
              </div>
              {getTrendIcon(metrics.utilization.trend)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hourly Throughput Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart className="h-5 w-5 text-blue-500" />
              <span>Hourly Throughput vs Target</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={hourlyThroughput}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#3B82F6" />
                <Bar dataKey="target" fill="#E5E7EB" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Zone Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-purple-500" />
              <span>Zone Utilization</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={zonePerformance}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="utilization"
                  label={({ zone, utilization }) => `${zone}: ${utilization}%`}
                >
                  {zonePerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Predictive Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <span>AI-Powered Predictions & Recommendations</span>
            <Badge className="bg-orange-100 text-orange-800">Predictive</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-blue-900">Next Hour Demand</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">{predictions.nextHourDemand}</p>
              <p className="text-sm text-blue-700">orders expected</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-900">Peak Time</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{predictions.peakTime}</p>
              <p className="text-sm text-green-700">estimated peak</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="h-4 w-4 text-purple-600" />
                <span className="font-medium text-purple-900">Staff Needed</span>
              </div>
              <p className="text-2xl font-bold text-purple-600">{predictions.staffNeeded}</p>
              <p className="text-sm text-purple-700">workers optimal</p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="font-medium text-red-900">Bottleneck</span>
              </div>
              <p className="text-2xl font-bold text-red-600">{predictions.bottleneckZone}</p>
              <p className="text-sm text-red-700">requires attention</p>
            </div>
          </div>

          {/* Automated Recommendations */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Smart Recommendations</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-blue-500">
                <span>• Deploy 3 additional pickers to Zone C before 3:00 PM peak</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Execute
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-orange-500">
                <span>• Pre-position inventory for high-demand items in Zones A & B</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Auto-Move
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded border-l-4 border-green-500">
                <span>• Schedule break rotation to maintain 85%+ utilization</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Schedule
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WarehouseAnalytics;
