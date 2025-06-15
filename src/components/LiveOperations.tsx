
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, Truck, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LiveOperations = () => {
  const { toast } = useToast();
  const [processingButtons, setProcessingButtons] = useState<Record<number, boolean>>({});
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'critical',
      title: 'Dairy Section Overstock Alert',
      description: 'Milk products 40% above forecast. Suggest flash sale.',
      time: '2 min ago',
      action: 'Generate Promo',
      executed: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'Truck B-14 Delayed',
      description: 'ETA pushed to 3:45 PM due to traffic. Produce delivery affected.',
      time: '5 min ago',
      action: 'Reschedule',
      executed: false
    },
    {
      id: 3,
      type: 'success',
      title: 'AI Promo Success',
      description: 'Electronics bundle deal generated $2.3k in 30 minutes.',
      time: '12 min ago',
      action: 'Extend Deal',
      executed: false
    },
    {
      id: 4,
      type: 'info',
      title: 'Shelf Hygiene Check Due',
      description: 'Aisle 7 scheduled for cleaning based on foot traffic analysis.',
      time: '15 min ago',
      action: 'Assign Staff',
      executed: false
    }
  ]);

  const handleActionClick = async (alertId: number, action: string) => {
    console.log(`Executing action: ${action} for alert ${alertId}`);
    
    // Set loading state
    setProcessingButtons(prev => ({ ...prev, [alertId]: true }));

    try {
      // Simulate real-time task execution with appropriate delay
      const delay = getActionDelay(action);
      await new Promise(resolve => setTimeout(resolve, delay));

      // Update alert status
      setAlerts(prev => prev.map(alert => 
        alert.id === alertId 
          ? { ...alert, executed: true, time: 'Just now' }
          : alert
      ));

      // Show success feedback
      const successMessage = getSuccessMessage(action);
      toast({
        title: "Action Completed",
        description: successMessage,
        duration: 4000,
      });

      // Execute specific action logic
      executeActionLogic(action, alertId);

    } catch (error) {
      console.error('Action execution failed:', error);
      toast({
        title: "Action Failed",
        description: "Failed to execute the requested action. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      // Clear loading state
      setProcessingButtons(prev => ({ ...prev, [alertId]: false }));
    }
  };

  const getActionDelay = (action: string): number => {
    const delays: Record<string, number> = {
      'Generate Promo': 3000,
      'Reschedule': 2500,
      'Extend Deal': 1500,
      'Assign Staff': 2000,
    };
    return delays[action] || 2000;
  };

  const getSuccessMessage = (action: string): string => {
    const messages: Record<string, string> = {
      'Generate Promo': 'Flash sale promotion generated and activated for dairy section',
      'Reschedule': 'Truck B-14 delivery rescheduled, affected departments notified',
      'Extend Deal': 'Electronics bundle deal extended for 2 additional hours',
      'Assign Staff': 'Cleaning staff assigned to Aisle 7, task scheduled for completion',
    };
    return messages[action] || 'Action completed successfully';
  };

  const executeActionLogic = (action: string, alertId: number) => {
    // Simulate real-time system effects
    switch (action) {
      case 'Generate Promo':
        console.log('Generating promotional campaign for dairy section...');
        console.log('Updating inventory management system...');
        console.log('Notifying marketing team...');
        break;
      case 'Reschedule':
        console.log('Updating delivery schedule...');
        console.log('Notifying affected departments...');
        console.log('Adjusting staff schedules...');
        break;
      case 'Extend Deal':
        console.log('Extending promotion duration...');
        console.log('Updating pricing system...');
        console.log('Sending notifications to customers...');
        break;
      case 'Assign Staff':
        console.log('Assigning available staff to cleaning task...');
        console.log('Updating task management system...');
        console.log('Setting completion deadline...');
        break;
    }
  };

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
            className={`flex items-start space-x-4 p-4 rounded-lg border transition-all duration-300 ${
              alert.executed 
                ? 'border-green-200 bg-green-50' 
                : 'border-gray-200 hover:bg-gray-50'
            } animate-slide-in-right`}
          >
            <div className="flex-shrink-0 mt-1">
              {alert.executed ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                getAlertIcon(alert.type)
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h4 className={`text-sm font-medium ${
                  alert.executed ? 'text-green-900' : 'text-gray-900'
                }`}>
                  {alert.executed ? `✓ ${alert.title}` : alert.title}
                </h4>
                {alert.executed ? (
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                ) : (
                  getAlertBadge(alert.type)
                )}
              </div>
              <p className={`text-sm mb-2 ${
                alert.executed ? 'text-green-700' : 'text-gray-600'
              }`}>
                {alert.description}
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${
                  alert.executed ? 'text-green-500' : 'text-gray-500'
                }`}>
                  {alert.time}
                </span>
                <Button 
                  size="sm" 
                  variant={alert.executed ? "secondary" : "outline"} 
                  className="text-xs"
                  onClick={() => handleActionClick(alert.id, alert.action)}
                  disabled={alert.executed || processingButtons[alert.id]}
                >
                  {processingButtons[alert.id] ? (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin mr-1" />
                      Processing...
                    </>
                  ) : alert.executed ? (
                    'Completed'
                  ) : (
                    alert.action
                  )}
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
