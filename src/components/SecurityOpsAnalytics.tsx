
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, TrendingUp, Clock, AlertTriangle, Shield, Eye, Activity } from 'lucide-react';

const SecurityOpsAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const incidentTypeData = [
    { type: 'Theft', count: 23, percentage: 45 },
    { type: 'Loitering', count: 15, percentage: 29 },
    { type: 'Vandalism', count: 8, percentage: 16 },
    { type: 'Tampering', count: 5, percentage: 10 }
  ];

  const timeOfDayData = [
    { hour: '8AM', incidents: 2 },
    { hour: '10AM', incidents: 4 },
    { hour: '12PM', incidents: 8 },
    { hour: '2PM', incidents: 12 },
    { hour: '4PM', incidents: 18 },
    { hour: '6PM', incidents: 15 },
    { hour: '8PM', incidents: 9 },
    { hour: '10PM', incidents: 3 }
  ];

  const shiftOverlayData = [
    { time: '8AM', incidents: 2, staffCount: 15 },
    { time: '12PM', incidents: 8, staffCount: 25 },
    { time: '4PM', incidents: 18, staffCount: 20 },
    { time: '8PM', incidents: 9, staffCount: 12 }
  ];

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e'];

  const handleExport = (format: string) => {
    console.log(`Exporting analytics as ${format}`);
    // Simulate export functionality
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Shield className="h-4 w-4" /> },
    { id: 'incidents', label: 'Incidents', icon: <AlertTriangle className="h-4 w-4" /> },
    { id: 'monitoring', label: 'Live Monitor', icon: <Eye className="h-4 w-4" /> }
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-red-50 to-orange-50 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-3">
                <div className="relative">
                  <Shield className="h-8 w-8 animate-pulse" />
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">Security Operations Analytics</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge className="bg-white/20 text-white border-white/30">AI-Powered</Badge>
                    <Badge className="bg-green-500/80 text-white border-green-400/30">
                      <Activity className="h-3 w-3 mr-1 animate-pulse" />
                      Live Monitoring
                    </Badge>
                  </div>
                </div>
              </CardTitle>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleExport('PDF')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-200"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Export PDF
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleExport('CSV')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-200"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Export CSV
                </Button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-4 mt-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-white/20 shadow-lg border border-white/30'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-8">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Incident Types Chart */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span>Incident Types (This Week)</span>
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={incidentTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ type, percentage }) => `${type}: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {incidentTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Time of Day Trends */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <span>Peak Incident Times</span>
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={timeOfDayData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="incidents" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'incidents' && (
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-100">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-yellow-500" />
                <span>Staff Shifts vs Incident Trends</span>
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={shiftOverlayData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line 
                    yAxisId="left" 
                    type="monotone" 
                    dataKey="incidents" 
                    stroke="#ef4444" 
                    strokeWidth={3} 
                    name="Incidents"
                    dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }}
                  />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="staffCount" 
                    stroke="#22c55e" 
                    strokeWidth={3} 
                    name="Staff Count"
                    dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === 'monitoring' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Live Camera Feeds */}
              {[1, 2, 3, 4, 5, 6].map((camera) => (
                <div key={camera} className="bg-gray-900 rounded-xl p-4 aspect-video relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Camera {camera}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Badge className="bg-green-500/80 text-white">
                      <Eye className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-75">Live Feed</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          )}

          {/* Key Insights */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl border-2 border-blue-200 shadow-lg">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 animate-bounce" />
              <span>AI-Generated Key Insights</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 animate-pulse"></div>
                  <span>Peak shoplifting occurs at 4 PM (18 incidents today)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
                  <span>45% of all incidents are theft-related</span>
                </li>
              </ul>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                  <span>Staff-to-incident ratio is optimal during morning shifts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                  <span>Consider increasing security presence during 2-6 PM window</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityOpsAnalytics;
