
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, Truck } from 'lucide-react';

const LiveOperations = () => {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      title: 'Dairy Section Overstock Alert',
      description: 'Milk products 40% above forecast. Suggest flash sale.',
      time: '2 min ago',
      action: 'Generate Promo'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Truck B-14 Delayed',
      description: 'ETA pushed to 3:45 PM due to traffic. Produce delivery affected.',
      time: '5 min ago',
      action: 'Reschedule'
    },
    {
      id: 3,
      type: 'success',
      title: 'AI Promo Success',
      description: 'Electronics bundle deal generated $2.3k in 30 minutes.',
      time: '12 min ago',
      action: 'Extend Deal'
    },
    {
      id: 4,
      type: 'info',
      title: 'Shelf Hygiene Check Due',
      description: 'Aisle 7 scheduled for cleaning based on foot traffic analysis.',
      time: '15 min ago',
      action: 'Assign Staff'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'warning': return <Clock className="h-5 w-5 text-orange-500" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return <Truck className="h-5 w-5 text-blue-500" />;
    }
  };

  const getAlertBadge = (type: string) => {
    switch (type) {
      case 'critical': return <Badge variant="destructive">Critical</Badge>;
      case 'warning': return <Badge className="bg-orange-100 text-orange-800">Warning</Badge>;
      case 'success': return <Badge className="bg-green-100 text-green-800">Success</Badge>;
      default: return <Badge variant="secondary">Info</Badge>;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Live Operations Center</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Real-time monitoring active</span>
        </div>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors animate-slide-in-right"
          >
            <div className="flex-shrink-0 mt-1">
              {getAlertIcon(alert.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                {getAlertBadge(alert.type)}
              </div>
              <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{alert.time}</span>
                <Button size="sm" variant="outline" className="text-xs">
                  {alert.action}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>System Status: All services operational</span>
          <span>Last updated: 30 seconds ago</span>
        </div>
      </div>
    </Card>
  );
};

export default LiveOperations;
