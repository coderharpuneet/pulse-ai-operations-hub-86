
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, TrendingUp, TrendingDown, Minus, Brain, Target, DollarSign, Clock, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { PredictiveAnalyticsData, RiskPrediction, PerformanceMetric, SupplyChainInsight } from '../types/predictive';

interface PredictiveAnalyticsProps {
  data: PredictiveAnalyticsData;
}

const PredictiveAnalytics: React.FC<PredictiveAnalyticsProps> = ({ data }) => {
  const { riskPredictions, performanceMetrics, supplyChainInsights, trendData } = data;

  const getRiskColor = (score: number) => {
    if (score >= 80) return 'text-red-600 bg-red-50';
    if (score >= 60) return 'text-orange-600 bg-orange-50';
    if (score >= 40) return 'text-yellow-600 bg-yellow-50';
    return 'text-green-600 bg-green-50';
  };

  const getRiskBadgeColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'stable': return <Minus className="h-4 w-4 text-gray-500" />;
      default: return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatTrendData = (data: any[]) => {
    return data.map(item => ({
      ...item,
      time: new Date(item.timestamp).toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    }));
  };

  return (
    <div className="space-y-6">
      {/* Risk Predictions */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="h-5 w-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">AI Risk Predictions</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {riskPredictions.slice(0, 4).map((risk) => (
            <Card key={risk.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                  <h4 className="font-medium text-gray-900">{risk.title}</h4>
                </div>
                <Badge className={getRiskBadgeColor(risk.impact)}>
                  {risk.impact.toUpperCase()}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{risk.description}</p>
              
              <div className="space-y-2 mb-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Risk Score</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${getRiskColor(risk.riskScore)}`}>
                    {risk.riskScore}/100
                  </span>
                </div>
                <Progress value={risk.riskScore} className="h-2" />
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">Probability: </span>
                    <span className="font-medium">{risk.probability}%</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Confidence: </span>
                    <span className="font-medium">{risk.confidenceLevel}%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">ETA: {risk.timeframe}</span>
                <Button size="sm" variant="outline">
                  View Actions
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Target className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric) => (
            <Card key={metric.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                {getTrendIcon(metric.trend)}
              </div>
              
              <div className="flex items-baseline space-x-1 mb-2">
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                <span className="text-sm text-gray-500">{metric.unit}</span>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <span className={`font-medium ${
                  metric.changePercent > 0 ? 'text-green-600' : 
                  metric.changePercent < 0 ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {metric.changePercent > 0 ? '+' : ''}{metric.changePercent}%
                </span>
                <span className="text-gray-500">vs target: {metric.target}</span>
              </div>
              
              <Progress 
                value={(metric.value / metric.target) * 100} 
                className="h-1 mt-2" 
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Supply Chain Insights */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="h-5 w-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Optimization Insights</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {supplyChainInsights.slice(0, 4).map((insight) => (
            <Card key={insight.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-medium text-gray-900">{insight.title}</h4>
                <Badge className={
                  insight.priority === 'critical' ? 'bg-red-100 text-red-800' :
                  insight.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                  insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }>
                  {insight.priority.toUpperCase()}
                </Badge>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="text-center p-2 bg-green-50 rounded">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <DollarSign className="h-3 w-3 text-green-600" />
                    <span className="text-xs text-green-600">Savings</span>
                  </div>
                  <div className="text-sm font-bold text-green-700">
                    ${insight.potentialSavings.toLocaleString()}
                  </div>
                </div>
                
                <div className="text-center p-2 bg-blue-50 rounded">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Clock className="h-3 w-3 text-blue-600" />
                    <span className="text-xs text-blue-600">ROI</span>
                  </div>
                  <div className="text-sm font-bold text-blue-700">
                    {insight.roiPercent}%
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Implementation: {insight.implementationTime}
                </span>
                <Button size="sm" variant="default">
                  Implement
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Trend Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-4">
          <h4 className="font-semibold text-gray-900 mb-4">Food Safety Trends</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={formatTrendData(trendData.foodSafety)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ fill: '#10b981' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4">
          <h4 className="font-semibold text-gray-900 mb-4">Supplier Performance</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={formatTrendData(trendData.supplierPerformance)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;
