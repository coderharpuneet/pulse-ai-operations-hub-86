
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const DockOperations = () => {
  const docks = [
    { id: 'D1', status: 'loading', truck: 'TR-2801', progress: 75, eta: '15 min', cargo: 'Fresh Produce' },
    { id: 'D2', status: 'waiting', truck: 'TR-2802', progress: 0, eta: '5 min', cargo: 'Electronics' },
    { id: 'D3', status: 'completed', truck: 'TR-2799', progress: 100, eta: 'Done', cargo: 'Grocery' },
    { id: 'D4', status: 'loading', truck: 'TR-2803', progress: 45, eta: '25 min', cargo: 'Clothing' },
    { id: 'D5', status: 'available', truck: '-', progress: 0, eta: 'Available', cargo: '-' },
    { id: 'D6', status: 'maintenance', truck: '-', progress: 0, eta: '2 hrs', cargo: 'Under Maintenance' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'loading': return 'bg-blue-500';
      case 'waiting': return 'bg-orange-500';
      case 'completed': return 'bg-green-500';
      case 'available': return 'bg-gray-300';
      case 'maintenance': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'loading': return <Badge className="bg-blue-100 text-blue-800">Loading</Badge>;
      case 'waiting': return <Badge className="bg-orange-100 text-orange-800">Waiting</Badge>;
      case 'completed': return <Badge className="bg-green-100 text-green-800">Complete</Badge>;
      case 'available': return <Badge variant="secondary">Available</Badge>;
      case 'maintenance': return <Badge variant="destructive">Maintenance</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Dock Status Grid */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Dock Operations Status</h3>
        <div className="grid grid-cols-2 gap-4">
          {docks.map((dock) => (
            <div
              key={dock.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(dock.status)}`}></div>
                  <span className="font-medium text-gray-900">{dock.id}</span>
                </div>
                {getStatusBadge(dock.status)}
              </div>
              
              {dock.truck !== '-' && (
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Truck:</span> {dock.truck}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Cargo:</span> {dock.cargo}
                  </div>
                  {dock.status === 'loading' && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{dock.progress}%</span>
                      </div>
                      <Progress value={dock.progress} className="h-2" />
                    </div>
                  )}
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">ETA:</span> {dock.eta}
                  </div>
                </div>
              )}
              
              {dock.status === 'available' && (
                <div className="text-center py-4 text-gray-500">
                  <span className="text-sm">Ready for assignment</span>
                </div>
              )}
              
              {dock.status === 'maintenance' && (
                <div className="text-center py-4 text-red-600">
                  <span className="text-sm">Under maintenance</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Queue Management */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Incoming Queue</h3>
        <div className="space-y-4">
          {[
            { truck: 'TR-2804', arrival: '2:15 PM', cargo: 'Frozen Foods', priority: 'High' },
            { truck: 'TR-2805', arrival: '2:30 PM', cargo: 'Home & Garden', priority: 'Medium' },
            { truck: 'TR-2806', arrival: '2:45 PM', cargo: 'Pharmacy', priority: 'High' },
            { truck: 'TR-2807', arrival: '3:00 PM', cargo: 'General Merchandise', priority: 'Low' }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <div className="font-medium text-gray-900">{item.truck}</div>
                <div className="text-sm text-gray-600">
                  {item.cargo} • ETA: {item.arrival}
                </div>
              </div>
              <Badge 
                className={
                  item.priority === 'High' ? 'bg-red-100 text-red-800' :
                  item.priority === 'Medium' ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }
              >
                {item.priority}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Average wait time: 14 minutes</span>
            <span className="text-green-600 font-medium">-5 min from yesterday</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DockOperations;
