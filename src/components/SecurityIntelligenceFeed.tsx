
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Eye, Clock, MapPin, CheckCircle, X, ArrowUp } from 'lucide-react';

const SecurityIntelligenceFeed = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      type: 'theft',
      priority: 'high',
      location: 'Electronics - Aisle 12',
      description: 'Suspected shoplifting detected via AI analysis',
      timestamp: '2 min ago',
      confidence: 94,
      status: 'active'
    },
    {
      id: 2,
      type: 'loitering',
      priority: 'medium',
      location: 'Customer Service Area',
      description: 'Individual present for 45+ minutes without purchase',
      timestamp: '8 min ago',
      confidence: 78,
      status: 'active'
    },
    {
      id: 3,
      type: 'tampering',
      priority: 'high',
      location: 'Security Camera - Zone 7',
      description: 'Attempted interference with surveillance equipment',
      timestamp: '15 min ago',
      confidence: 89,
      status: 'escalated'
    },
    {
      id: 4,
      type: 'vandalism',
      priority: 'low',
      location: 'Restroom Area',
      description: 'Minor property damage detected',
      timestamp: '32 min ago',
      confidence: 65,
      status: 'acknowledged'
    }
  ]);

  const handleAction = (id: number, action: string) => {
    setIncidents(prev => prev.map(incident => 
      incident.id === id ? { ...incident, status: action } : incident
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getIncidentIcon = (type: string) => {
    switch (type) {
      case 'theft': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'loitering': return <Clock className="h-4 w-4 text-orange-500" />;
      case 'tampering': return <Eye className="h-4 w-4 text-red-600" />;
      case 'vandalism': return <X className="h-4 w-4 text-yellow-600" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card className="mb-4 sm:mb-6 shadow-lg border-0 bg-gradient-to-br from-white to-red-50">
      <CardHeader className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-t-lg">
        <CardTitle className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 animate-pulse" />
            <span className="text-lg sm:text-xl">Security Intelligence Feed</span>
          </div>
          <Badge className="bg-white/20 text-white border-white/30 self-start sm:self-auto">AI-Powered</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          {incidents.map((incident) => (
            <div
              key={incident.id}
              className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors animate-fade-in-up"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-2 sm:space-x-3 flex-1">
                  {getIncidentIcon(incident.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900 capitalize text-sm sm:text-base">{incident.type}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(incident.priority)}>
                          {incident.priority.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          Confidence: {incident.confidence}%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{incident.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs text-gray-500">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        <span>{incident.location}</span>
                      </span>
                      <span>{incident.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {incident.status === 'active' && (
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleAction(incident.id, 'acknowledged')}
                    className="text-xs flex-shrink-0"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Acknowledge
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleAction(incident.id, 'dismissed')}
                    className="text-xs flex-shrink-0"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Dismiss
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleAction(incident.id, 'escalated')}
                    className="text-xs flex-shrink-0"
                  >
                    <ArrowUp className="h-3 w-3 mr-1" />
                    Escalate
                  </Button>
                </div>
              )}
              
              {incident.status !== 'active' && (
                <Badge variant="secondary" className="text-xs">
                  Status: {incident.status}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityIntelligenceFeed;
