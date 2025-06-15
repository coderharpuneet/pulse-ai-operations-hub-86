
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Recycle, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const SmartWasteDashboard = () => {
  const wasteStreams = [
    {
      type: 'Organic Waste',
      diverted: 85,
      target: 90,
      destination: 'Composting Facility',
      impact: '2.3 tons CO2 saved',
      status: 'optimal'
    },
    {
      type: 'Cardboard',
      diverted: 92,
      target: 85,
      destination: 'Recycling Center',
      impact: '4.1 tons CO2 saved',
      status: 'excellent'
    },
    {
      type: 'Plastic',
      diverted: 76,
      target: 80,
      destination: 'Plastic Recovery',
      impact: '1.8 tons CO2 saved',
      status: 'warning'
    },
    {
      type: 'Electronic Waste',
      diverted: 95,
      target: 95,
      destination: 'E-Waste Center',
      impact: '0.9 tons CO2 saved',
      status: 'excellent'
    }
  ];

  const alerts = [
    { type: 'Organic bin 3A approaching capacity', severity: 'medium', time: '15 min ago' },
    { type: 'New composting partner available', severity: 'info', time: '2 hours ago' }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Smart Waste Diversion</h3>
        <div className="flex items-center space-x-2">
          <Recycle className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-600">87% Overall Diversion</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {wasteStreams.map((stream, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">{stream.type}</h4>
              <Badge className={
                stream.status === 'excellent' ? 'bg-green-100 text-green-800' :
                stream.status === 'optimal' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }>
                {stream.diverted}% diverted
              </Badge>
            </div>
            
            <Progress value={stream.diverted} className="mb-2" />
            
            <div className="text-xs text-gray-600 space-y-1">
              <div>Target: {stream.target}%</div>
              <div>Destination: {stream.destination}</div>
              <div className="text-green-600 font-medium">{stream.impact}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-3">Real-time Alerts</h4>
        <div className="space-y-2">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <div className="flex-1">
                <div className="text-sm text-gray-900">{alert.type}</div>
                <div className="text-xs text-gray-500">{alert.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SmartWasteDashboard;
