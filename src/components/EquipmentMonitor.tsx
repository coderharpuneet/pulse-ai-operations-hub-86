
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Wrench, AlertTriangle, Activity, Clock, Thermometer, Zap } from 'lucide-react';

const EquipmentMonitor = () => {
  const [equipment, setEquipment] = useState([
    {
      id: 'CONV-001',
      name: 'Conveyor Belt A',
      type: 'conveyor',
      status: 'operational',
      efficiency: 92,
      temperature: 24,
      vibration: 'normal',
      lastMaintenance: '3 days ago',
      nextMaintenance: '7 days',
      alertLevel: 'none'
    },
    {
      id: 'LIFT-002',
      name: 'Forklift FL-205',
      type: 'forklift',
      status: 'warning',
      efficiency: 78,
      batteryLevel: 45,
      operationHours: 6.5,
      lastMaintenance: '1 week ago',
      nextMaintenance: '2 days',
      alertLevel: 'medium'
    },
    {
      id: 'COOL-003',
      name: 'Cooling Unit C1',
      type: 'cooling',
      status: 'critical',
      efficiency: 65,
      temperature: 8,
      powerUsage: 145,
      lastMaintenance: '2 weeks ago',
      nextMaintenance: 'Overdue',
      alertLevel: 'high'
    },
    {
      id: 'SCAN-004',
      name: 'Barcode Scanner S12',
      type: 'scanner',
      status: 'operational',
      efficiency: 98,
      scanRate: 150,
      errorRate: 0.02,
      lastMaintenance: '1 day ago',
      nextMaintenance: '14 days',
      alertLevel: 'none'
    }
  ]);

  // Simulate real-time equipment monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setEquipment(prev => prev.map(item => {
        const efficiencyChange = Math.floor(Math.random() * 10) - 5; // -5 to +5
        const newEfficiency = Math.max(50, Math.min(100, item.efficiency + efficiencyChange));
        
        let status = 'operational';
        let alertLevel = 'none';
        
        if (newEfficiency < 70) {
          status = 'critical';
          alertLevel = 'high';
        } else if (newEfficiency < 85) {
          status = 'warning';
          alertLevel = 'medium';
        }
        
        return {
          ...item,
          efficiency: newEfficiency,
          status,
          alertLevel,
          // Update specific metrics based on equipment type
          ...(item.type === 'forklift' && {
            batteryLevel: Math.max(20, Math.min(100, item.batteryLevel + (Math.random() * 6 - 3)))
          }),
          ...(item.type === 'cooling' && {
            temperature: Math.max(2, Math.min(12, item.temperature + (Math.random() * 2 - 1)))
          })
        };
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'operational': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency < 70) return 'bg-red-500';
    if (efficiency < 85) return 'bg-orange-500';
    return 'bg-green-500';
  };

  const criticalEquipment = equipment.filter(item => item.status === 'critical');
  const warningEquipment = equipment.filter(item => item.status === 'warning');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Wrench className="h-5 w-5 text-purple-500" />
          <span>Equipment Health Monitor</span>
          <Badge className="bg-purple-100 text-purple-800">Real-time</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Critical Equipment Alerts */}
        {criticalEquipment.length > 0 && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-800">
              <strong>Equipment Failure Alert:</strong> {criticalEquipment.length} unit(s) require immediate attention
            </AlertDescription>
          </Alert>
        )}

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {equipment.map((item) => (
            <Card key={item.id} className="border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.id}</p>
                  </div>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {/* Efficiency */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center space-x-1">
                        <Activity className="h-3 w-3" />
                        <span>Efficiency</span>
                      </span>
                      <span className="font-medium">{item.efficiency}%</span>
                    </div>
                    <Progress 
                      value={item.efficiency} 
                      className="h-2"
                    />
                  </div>
                  
                  {/* Equipment-specific metrics */}
                  {item.type === 'forklift' && (
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center space-x-1">
                        <Zap className="h-3 w-3" />
                        <span>Battery</span>
                      </span>
                      <span className={item.batteryLevel < 30 ? 'text-red-600 font-medium' : ''}>
                        {item.batteryLevel?.toFixed(0)}%
                      </span>
                    </div>
                  )}
                  
                  {item.type === 'cooling' && (
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center space-x-1">
                        <Thermometer className="h-3 w-3" />
                        <span>Temperature</span>
                      </span>
                      <span className={item.temperature > 10 ? 'text-red-600 font-medium' : ''}>
                        {item.temperature?.toFixed(1)}°C
                      </span>
                    </div>
                  )}
                  
                  {/* Maintenance Info */}
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center justify-between">
                      <span>Last maintenance:</span>
                      <span>{item.lastMaintenance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Next due:</span>
                      <span className={item.nextMaintenance === 'Overdue' ? 'text-red-600 font-medium' : ''}>
                        {item.nextMaintenance}
                      </span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  {item.status === 'critical' && (
                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                      Emergency Repair
                    </Button>
                  )}
                  
                  {item.status === 'warning' && (
                    <Button size="sm" variant="outline" className="w-full">
                      Schedule Maintenance
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Maintenance Dashboard */}
        <div className="p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-purple-900 mb-3">Predictive Maintenance</h4>
          <div className="space-y-2 text-sm text-purple-800">
            {criticalEquipment.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <span>• {item.name} - Immediate intervention required</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Dispatch Tech
                </Button>
              </div>
            ))}
            {warningEquipment.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <span>• {item.name} - Schedule maintenance within 48 hours</span>
                <Button size="sm" variant="outline" className="text-xs">
                  Schedule
                </Button>
              </div>
            ))}
            {criticalEquipment.length === 0 && warningEquipment.length === 0 && (
              <span>All equipment operating within normal parameters</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EquipmentMonitor;
