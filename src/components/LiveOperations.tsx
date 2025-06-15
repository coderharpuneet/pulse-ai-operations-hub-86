import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, Truck, Loader2, Activity, TrendingUp, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Alert {
  id: number;
  type: 'critical' | 'warning' | 'success' | 'info';
  title: string;
  description: string;
  time: string;
  action: string;
  executed: boolean;
  priority: number;
}

const LiveOperations = () => {
  const { toast } = useToast();
  const [processingButtons, setProcessingButtons] = useState<Record<number, boolean>>({});
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      type: 'critical',
      title: 'Dairy Section Overstock Alert',
      description: 'Milk products 40% above forecast. Suggest flash sale.',
      time: '2 min ago',
      action: 'Generate Promo',
      executed: false,
      priority: 1
    },
    {
      id: 2,
      type: 'warning',
      title: 'Truck B-14 Delayed',
      description: 'ETA pushed to 3:45 PM due to traffic. Produce delivery affected.',
      time: '5 min ago',
      action: 'Reschedule',
      executed: false,
      priority: 2
    },
    {
      id: 3,
      type: 'success',
      title: 'AI Promo Success',
      description: 'Electronics bundle deal generated $2.3k in 30 minutes.',
      time: '12 min ago',
      action: 'Extend Deal',
      executed: false,
      priority: 3
    },
    {
      id: 4,
      type: 'info',
      title: 'Shelf Hygiene Check Due',
      description: 'Aisle 7 scheduled for cleaning based on foot traffic analysis.',
      time: '15 min ago',
      action: 'Assign Staff',
      executed: false,
      priority: 4
    }
  ]);

  const [metrics, setMetrics] = useState({
    activeAlerts: 4,
    resolvedToday: 12,
    avgResponseTime: '2.3m',
    systemLoad: 68
  });

  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update metrics
      setMetrics(prev => ({
        ...prev,
        systemLoad: Math.max(45, Math.min(85, prev.systemLoad + (Math.random() - 0.5) * 10)),
        activeAlerts: alerts.filter(alert => !alert.executed).length
      }));

      // Occasionally add new alerts
      if (Math.random() < 0.3) {
        const newAlerts = [
          {
            type: 'warning' as const,
            title: 'Temperature Alert - Freezer Unit 3',
            description: 'Temperature rising above optimal range. Maintenance required.',
            action: 'Send Technician'
          },
          {
            type: 'info' as const,
            title: 'Peak Hour Traffic Detected',
            description: 'Customer flow 25% above average. Consider opening express lanes.',
            action: 'Open Lanes'
          },
          {
            type: 'critical' as const,
            title: 'Security Incident - Aisle 12',
            description: 'Suspicious activity detected. Security response needed.',
            action: 'Dispatch Security'
          }
        ];

        const randomAlert = newAlerts[Math.floor(Math.random() * newAlerts.length)];
        const newAlert: Alert = {
          id: Date.now(),
          ...randomAlert,
          time: 'Just now',
          executed: false,
          priority: randomAlert.type === 'critical' ? 1 : randomAlert.type === 'warning' ? 2 : 3
        };

        setAlerts(prev => {
          const existing = prev.find(alert => alert.title === newAlert.title);
          if (!existing && prev.filter(a => !a.executed).length < 6) {
            toast({
              title: "New Alert",
              description: newAlert.title,
              duration: 3000,
            });
            return [newAlert, ...prev].sort((a, b) => a.priority - b.priority);
          }
          return prev;
        });
      }

      setLastUpdate(new Date());
    }, 8000);

    return () => clearInterval(interval);
  }, [alerts, toast]);

  const handleActionClick = async (alertId: number, action: string) => {
    console.log(`Executing action: ${action} for alert ${alertId}`);
    
    setProcessingButtons(prev => ({ ...prev, [alertId]: true }));

    try {
      const delay = getActionDelay(action);
      await new Promise(resolve => setTimeout(resolve, delay));

      setAlerts(prev => prev.map(alert => 
        alert.id === alertId 
          ? { ...alert, executed: true, time: 'Just now' }
          : alert
      ));

      setMetrics(prev => ({
        ...prev,
        resolvedToday: prev.resolvedToday + 1,
        activeAlerts: prev.activeAlerts - 1
      }));

      const successMessage = getSuccessMessage(action);
      toast({
        title: "Action Completed",
        description: successMessage,
        duration: 4000,
      });

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
      setProcessingButtons(prev => ({ ...prev, [alertId]: false }));
    }
  };

  const getActionDelay = (action: string): number => {
    const delays: Record<string, number> = {
      'Generate Promo': 3000,
      'Reschedule': 2500,
      'Extend Deal': 1500,
      'Assign Staff': 2000,
      'Send Technician': 2800,
      'Open Lanes': 1800,
      'Dispatch Security': 2200,
    };
    return delays[action] || 2000;
  };

  const getSuccessMessage = (action: string): string => {
    const messages: Record<string, string> = {
      'Generate Promo': 'Flash sale promotion generated and activated for dairy section',
      'Reschedule': 'Truck B-14 delivery rescheduled, affected departments notified',
      'Extend Deal': 'Electronics bundle deal extended for 2 additional hours',
      'Assign Staff': 'Cleaning staff assigned to Aisle 7, task scheduled for completion',
      'Send Technician': 'Maintenance technician dispatched to freezer unit 3',
      'Open Lanes': 'Express lanes 5-6 opened, staff notified',
      'Dispatch Security': 'Security team dispatched to investigate incident',
    };
    return messages[action] || 'Action completed successfully';
  };

  const executeActionLogic = (action: string, alertId: number) => {
    switch (action) {
      case 'Generate Promo':
        console.log('Generating promotional campaign for dairy section...');
        break;
      case 'Reschedule':
        console.log('Updating delivery schedule...');
        break;
      case 'Extend Deal':
        console.log('Extending promotion duration...');
        break;
      case 'Assign Staff':
        console.log('Assigning available staff to cleaning task...');
        break;
      case 'Send Technician':
        console.log('Dispatching maintenance technician...');
        break;
      case 'Open Lanes':
        console.log('Opening express checkout lanes...');
        break;
      case 'Dispatch Security':
        console.log('Dispatching security personnel...');
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
    <div className="space-y-6">
      {/* Live Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm text-gray-600">Active Alerts</p>
              <p className="text-2xl font-bold text-red-600">{metrics.activeAlerts}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Resolved Today</p>
              <p className="text-2xl font-bold text-green-600">{metrics.resolvedToday}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-blue-600">{metrics.avgResponseTime}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-purple-500" />
            <div>
              <p className="text-sm text-gray-600">System Load</p>
              <p className="text-2xl font-bold text-purple-600">{metrics.systemLoad}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Operations Center */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Live Operations Center</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Real-time monitoring active</span>
            </div>
            <div className="text-xs text-gray-500">
              Last updated: {Math.floor((Date.now() - lastUpdate.getTime()) / 1000)}s ago
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`flex items-start space-x-4 p-4 rounded-lg border transition-all duration-500 transform ${
                alert.executed 
                  ? 'border-green-200 bg-green-50 scale-[0.98] opacity-80' 
                  : 'border-gray-200 hover:bg-gray-50 hover:shadow-md hover:scale-[1.01]'
              } animate-fade-in`}
            >
              <div className="flex-shrink-0 mt-1">
                {alert.executed ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <div className={alert.type === 'critical' ? 'animate-pulse' : ''}>
                    {getAlertIcon(alert.type)}
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className={`text-sm font-medium ${
                    alert.executed ? 'text-green-900' : 'text-gray-900'
                  }`}>
                    {alert.executed ? `✓ ${alert.title}` : alert.title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    {alert.priority === 1 && !alert.executed && (
                      <Badge variant="destructive" className="text-xs animate-pulse">High Priority</Badge>
                    )}
                    {alert.executed ? (
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    ) : (
                      getAlertBadge(alert.type)
                    )}
                  </div>
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
                    variant={alert.executed ? "secondary" : alert.type === 'critical' ? "default" : "outline"} 
                    className={`text-xs transition-all duration-200 ${
                      alert.type === 'critical' && !alert.executed ? 'bg-red-600 hover:bg-red-700 text-white' : ''
                    }`}
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
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>All services operational</span>
              </span>
              <span className="flex items-center space-x-1">
                <Activity className="h-3 w-3" />
                <span>System load: {metrics.systemLoad}%</span>
              </span>
            </div>
            <span>Auto-refresh: 8s</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LiveOperations;
