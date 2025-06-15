
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

const SecurityOpsAnalytics = () => {
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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <span>Security Operations Analytics</span>
            </CardTitle>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleExport('PDF')}
              >
                <Download className="h-4 w-4 mr-1" />
                Export PDF
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleExport('CSV')}
              >
                <Download className="h-4 w-4 mr-1" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Incident Types Chart */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Incident Types (This Week)</h3>
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
            <div>
              <h3 className="text-lg font-semibold mb-4">Peak Incident Times</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={timeOfDayData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="incidents" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Staff Shift Overlay */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-500" />
              Staff Shifts vs Incident Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={shiftOverlayData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="incidents" stroke="#ef4444" strokeWidth={3} name="Incidents" />
                <Line yAxisId="right" type="monotone" dataKey="staffCount" stroke="#22c55e" strokeWidth={3} name="Staff Count" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Key Insights */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Key Insights
            </h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Peak shoplifting occurs at 4 PM (18 incidents today)</li>
              <li>• 45% of all incidents are theft-related</li>
              <li>• Staff-to-incident ratio is optimal during morning shifts</li>
              <li>• Consider increasing security presence during 2-6 PM window</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityOpsAnalytics;
