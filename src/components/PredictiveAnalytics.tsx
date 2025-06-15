
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, AlertTriangle, Target, BarChart3, Zap } from 'lucide-react';

const PredictiveAnalytics = () => {
  const predictions = [
    {
      metric: 'Energy Consumption',
      current: 145,
      predicted: 138,
      change: -4.8,
      confidence: 92,
      timeframe: 'Next 30 days',
      factors: ['Weather patterns', 'Store traffic', 'Equipment efficiency'],
      recommendation: 'Optimize HVAC schedules during low-traffic hours'
    },
    {
      metric: 'Waste Generation',
      current: 2.8,
      predicted: 3.2,
      change: +14.3,
      confidence: 87,
      timeframe: 'Next 30 days',
      factors: ['Holiday season', 'Product launches', 'Customer traffic'],
      recommendation: 'Increase composting capacity and prep recycling stations'
    },
    {
      metric: 'Water Usage',
      current: 1850,
      predicted: 1720,
      change: -7.0,
      confidence: 89,
      timeframe: 'Next 30 days',
      factors: ['Conservation measures', 'Seasonal demand', 'Equipment upgrades'],
      recommendation: 'Continue current conservation protocols'
    },
    {
      metric: 'Carbon Footprint',
      current: 89.5,
      predicted: 82.1,
      change: -8.3,
      confidence: 94,
      timeframe: 'Next 30 days',
      factors: ['Renewable energy', 'Supply chain optimization', 'Transportation'],
      recommendation: 'Accelerate local supplier partnerships'
    }
  ];

  const riskAssessments = [
    {
      risk: 'Equipment Failure Risk',
      probability: 23,
      impact: 'High',
      mitigation: 'Schedule preventive maintenance',
      timeline: '2 weeks'
    },
    {
      risk: 'Regulatory Compliance Gap',
      probability: 12,
      impact: 'Medium',
      mitigation: 'Update waste sorting protocols',
      timeline: '1 week'
    },
    {
      risk: 'Supply Chain Disruption',
      probability: 34,
      impact: 'High',
      mitigation: 'Diversify sustainable suppliers',
      timeline: '1 month'
    }
  ];

  const opportunities = [
    {
      opportunity: 'Solar Panel ROI Window',
      potential: 'High',
      timeline: '6 months',
      impact: '25% energy cost reduction'
    },
    {
      opportunity: 'Waste-to-Energy Partnership',
      potential: 'Medium',
      timeline: '3 months',
      impact: '40% waste diversion increase'
    },
    {
      opportunity: 'Customer Sustainability Program',
      potential: 'High',
      timeline: '2 months',
      impact: '15% customer engagement boost'
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Predictive Analytics for Sustainability</h3>
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-600">AI-Powered Insights</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-4">30-Day Predictions</h4>
          <div className="space-y-4">
            {predictions.map((prediction, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium text-gray-900">{prediction.metric}</h5>
                  <div className="flex items-center space-x-2">
                    {prediction.change > 0 ? 
                      <TrendingUp className="h-4 w-4 text-red-600" /> :
                      <TrendingDown className="h-4 w-4 text-green-600" />
                    }
                    <Badge className={prediction.change > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
                      {prediction.change > 0 ? '+' : ''}{prediction.change}%
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-gray-500">Current</div>
                    <div className="text-lg font-bold text-gray-900">{prediction.current}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Predicted</div>
                    <div className="text-lg font-bold text-gray-900">{prediction.predicted}</div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Confidence</span>
                    <span className="font-medium">{prediction.confidence}%</span>
                  </div>
                  <Progress value={prediction.confidence} className="h-2" />
                </div>
                
                <div className="text-xs text-gray-600 mb-2">
                  <strong>Key Factors:</strong> {prediction.factors.join(', ')}
                </div>
                
                <div className="bg-blue-50 p-2 rounded text-xs text-blue-800">
                  <strong>Recommendation:</strong> {prediction.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-4">Risk Assessment</h4>
            <div className="space-y-3">
              {riskAssessments.map((risk, index) => (
                <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-red-900">{risk.risk}</span>
                    <Badge className="bg-red-100 text-red-800">
                      {risk.probability}% probability
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-red-700 mb-2">
                    <div><strong>Impact:</strong> {risk.impact}</div>
                    <div><strong>Timeline:</strong> {risk.timeline}</div>
                  </div>
                  <div className="text-xs text-red-800 bg-red-100 p-1 rounded">
                    <strong>Mitigation:</strong> {risk.mitigation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Optimization Opportunities</h4>
            <div className="space-y-3">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-green-900">{opportunity.opportunity}</span>
                    <Badge className="bg-green-100 text-green-800">
                      {opportunity.potential} potential
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-green-700 mb-2">
                    <div><strong>Timeline:</strong> {opportunity.timeline}</div>
                    <div><strong>Impact:</strong> {opportunity.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-900">AI Model Accuracy</div>
            <div className="text-2xl font-bold text-blue-600">91.3%</div>
            <div className="text-xs text-gray-700">Based on 6 months of historical data and 15 predictive factors</div>
          </div>
          <div className="text-center">
            <Target className="h-8 w-8 text-green-600 mx-auto mb-1" />
            <div className="text-xs text-gray-600">Next model update in 7 days</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PredictiveAnalytics;
