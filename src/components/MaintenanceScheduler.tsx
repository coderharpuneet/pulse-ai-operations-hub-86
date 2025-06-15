
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, Wrench, AlertTriangle, CheckCircle, User } from 'lucide-react';

interface MaintenanceTask {
  id: string;
  equipmentId: string;
  equipmentName: string;
  taskType: 'preventive' | 'corrective' | 'emergency';
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  scheduledDate: Date;
  estimatedDuration: number;
  assignedTechnician?: string;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  parts?: string[];
  cost?: number;
}

const MaintenanceScheduler = () => {
  const [tasks, setTasks] = useState<MaintenanceTask[]>([
    {
      id: 'MAINT-001',
      equipmentId: 'CONV-001',
      equipmentName: 'Conveyor Belt A',
      taskType: 'preventive',
      description: 'Belt tension adjustment and lubrication',
      priority: 'medium',
      scheduledDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      estimatedDuration: 45,
      assignedTechnician: 'Mike Johnson',
      status: 'scheduled',
      parts: ['Belt lubricant', 'Tension bolts'],
      cost: 125
    },
    {
      id: 'MAINT-002',
      equipmentId: 'COOL-003',
      equipmentName: 'Cooling Unit C1',
      taskType: 'emergency',
      description: 'Refrigerant leak repair - URGENT',
      priority: 'critical',
      scheduledDate: new Date(Date.now() + 4 * 60 * 60 * 1000),
      estimatedDuration: 120,
      assignedTechnician: 'Sarah Chen',
      status: 'in_progress',
      parts: ['Refrigerant R-404A', 'Seal kit'],
      cost: 450
    },
    {
      id: 'MAINT-003',
      equipmentId: 'LIFT-002',
      equipmentName: 'Forklift FL-205',
      taskType: 'preventive',
      description: 'Battery maintenance and tire inspection',
      priority: 'high',
      scheduledDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
      estimatedDuration: 90,
      assignedTechnician: 'David Rodriguez',
      status: 'scheduled',
      parts: ['Battery fluid', 'Tire pressure gauge'],
      cost: 200
    },
    {
      id: 'MAINT-004',
      equipmentId: 'SCAN-004',
      equipmentName: 'Barcode Scanner S12',
      taskType: 'corrective',
      description: 'Lens cleaning and calibration',
      priority: 'low',
      scheduledDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      estimatedDuration: 30,
      status: 'scheduled',
      cost: 75
    }
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTaskTypeIcon = (type: string) => {
    switch (type) {
      case 'emergency': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'corrective': return <Wrench className="h-4 w-4 text-orange-500" />;
      case 'preventive': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const totalCost = tasks.reduce((sum, task) => sum + (task.cost || 0), 0);
  const urgentTasks = tasks.filter(task => task.priority === 'critical' || task.priority === 'high').length;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Total Tasks</p>
              <p className="text-2xl font-bold text-blue-600">{tasks.length}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm text-gray-600">Urgent Tasks</p>
              <p className="text-2xl font-bold text-red-600">{urgentTasks}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Wrench className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-green-600">
                {tasks.filter(t => t.status === 'in_progress').length}
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">💰</div>
            <div>
              <p className="text-sm text-gray-600">Total Cost</p>
              <p className="text-2xl font-bold text-purple-600">${totalCost}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Task List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-purple-500" />
            <span>Maintenance Schedule</span>
            <Badge className="bg-purple-100 text-purple-800">Live Updates</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                  task.status === 'in_progress' ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    {getTaskTypeIcon(task.taskType)}
                    <div>
                      <h4 className="font-medium text-gray-900">{task.equipmentName}</h4>
                      <p className="text-sm text-gray-600">{task.description}</p>
                      <p className="text-xs text-gray-500 mt-1">ID: {task.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority.toUpperCase()}
                    </Badge>
                    <Badge className={getStatusColor(task.status)}>
                      {task.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">
                      {formatDate(task.scheduledDate)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-600">Duration: {task.estimatedDuration} min</span>
                  </div>
                  
                  {task.assignedTechnician && (
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3 text-gray-400" />
                      <span className="text-gray-600">{task.assignedTechnician}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-600">Cost: ${task.cost}</span>
                  </div>
                </div>
                
                {task.parts && task.parts.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Required Parts:</p>
                    <div className="flex flex-wrap gap-1">
                      {task.parts.map((part, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {part}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end space-x-2 mt-4">
                  {task.status === 'scheduled' && (
                    <>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Start Task
                      </Button>
                    </>
                  )}
                  {task.status === 'in_progress' && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Complete Task
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenanceScheduler;
