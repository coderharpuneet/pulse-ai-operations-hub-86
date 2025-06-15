
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Clock, MapPin, AlertTriangle, Coffee, UserCheck } from 'lucide-react';

const WorkforceIntelligencePanel = () => {
  const [employees] = useState([
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Floor Supervisor',
      status: 'on-shift',
      location: 'Electronics',
      shiftStart: '8:00 AM',
      shiftEnd: '4:00 PM',
      nearbyIncidents: 2,
      lastActivity: '2 min ago'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      role: 'Security Guard',
      status: 'on-break',
      location: 'Break Room',
      shiftStart: '10:00 AM',
      shiftEnd: '6:00 PM',
      nearbyIncidents: 0,
      lastActivity: '8 min ago'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Cashier',
      status: 'on-shift',
      location: 'Checkout Lane 7',
      shiftStart: '6:00 AM',
      shiftEnd: '2:00 PM',
      nearbyIncidents: 1,
      lastActivity: '1 min ago'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Stock Associate',
      status: 'off-duty',
      location: 'Off-site',
      shiftStart: '2:00 PM',
      shiftEnd: '10:00 PM',
      nearbyIncidents: 0,
      lastActivity: '4 hours ago'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Department Manager',
      status: 'on-shift',
      location: 'Customer Service',
      shiftStart: '9:00 AM',
      shiftEnd: '5:00 PM',
      nearbyIncidents: 3,
      lastActivity: '30 sec ago'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-shift': return 'bg-green-100 text-green-800';
      case 'on-break': return 'bg-yellow-100 text-yellow-800';
      case 'off-duty': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on-shift': return <UserCheck className="h-4 w-4" />;
      case 'on-break': return <Coffee className="h-4 w-4" />;
      case 'off-duty': return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const onShiftCount = employees.filter(emp => emp.status === 'on-shift').length;
  const onBreakCount = employees.filter(emp => emp.status === 'on-break').length;
  const totalIncidents = employees.reduce((sum, emp) => sum + emp.nearbyIncidents, 0);

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-blue-50">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
        <CardTitle className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 animate-pulse" />
            <span className="text-lg sm:text-xl">Workforce Intelligence Panel</span>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:flex sm:space-x-4 text-sm">
            <span className="text-green-200 font-medium text-center sm:text-left">On Shift: {onShiftCount}</span>
            <span className="text-yellow-200 font-medium text-center sm:text-left">On Break: {onBreakCount}</span>
            <span className="text-red-200 font-medium text-center sm:text-left">Active Incidents: {totalIncidents}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors animate-fade-in-up"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm font-medium text-blue-600">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">{employee.name}</h4>
                    <p className="text-sm text-gray-600">{employee.role}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 sm:space-x-3">
                  <Badge className={getStatusColor(employee.status)}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(employee.status)}
                      <span className="capitalize text-xs">{employee.status.replace('-', ' ')}</span>
                    </div>
                  </Badge>
                  
                  {employee.nearbyIncidents > 0 && (
                    <Badge className="bg-red-100 text-red-800">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {employee.nearbyIncidents} incident{employee.nearbyIncidents > 1 ? 's' : ''}
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{employee.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{employee.shiftStart} - {employee.shiftEnd}</span>
                </div>
                <div className="text-gray-500">
                  <span>Last seen: {employee.lastActivity}</span>
                </div>
                {employee.status === 'on-shift' && employee.nearbyIncidents > 0 && (
                  <div>
                    <Button size="sm" variant="outline" className="text-xs w-full sm:w-auto">
                      Notify Employee
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Staff Allocation Recommendations */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Staff Allocation Recommendations</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Send 2 additional staff to Electronics (high incident area)</li>
            <li>• Consider extending Sarah Chen's shift for incident coverage</li>
            <li>• Break rotation optimal - no coverage gaps detected</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkforceIntelligencePanel;
