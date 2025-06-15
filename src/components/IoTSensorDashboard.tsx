
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Thermometer, Zap, Droplets, Activity, AlertTriangle, Wifi, WifiOff } from 'lucide-react';

interface SensorReading {
  id: string;
  sensorType: 'temperature' | 'humidity' | 'vibration' | 'power' | 'pressure';
  location: string;
  equipmentId: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  threshold: { min: number; max: number };
  timestamp: Date;
  batteryLevel?: number;
  signalStrength: number;
}

const IoTSensorDashboard = () => {
  const [sensors, setSensors] = useState<SensorReading[]>([
    {
      id: 'TEMP-001',
      sensorType: 'temperature',
      location: 'Freezer Unit C1',
      equipmentId: 'COOL-003',
      value: -18.5,
      unit: '°C',
      status: 'normal',
      threshold: { min: -20, max: -15 },
      timestamp: new Date(),
      batteryLevel: 85,
      signalStrength: 92
    },
    {
      id: 'VIB-002',
      sensorType: 'vibration',
      location: 'Conveyor Belt A',
      equipmentId: 'CONV-001',
      value: 3.2,
      unit: 'mm/s',
      status: 'warning',
      threshold: { min: 0, max: 3.0 },
      timestamp: new Date(),
      batteryLevel: 67,
      signalStrength: 88
    },
    {
      id: 'PWR-003',
      sensorType: 'power',
      location: 'Forklift FL-205',
      equipmentId: 'LIFT-002',
      value: 145.8,
      unit: 'kW',
      status: 'critical',
      threshold: { min: 100, max: 140 },
      timestamp: new Date(),
      batteryLevel: 45,
      signalStrength: 76
    },
    {
      id: 'HUM-004',
      sensorType: 'humidity',
      location: 'Storage Area B',
      equipmentId: 'STOR-001',
      value: 65.2,
      unit: '%',
      status: 'normal',
      threshold: { min: 40, max: 70 },
      timestamp: new Date(),
      batteryLevel: 92,
      signalStrength: 95
    }
  ]);

  const [historicalData, setHistoricalData] = useState([
    { time: '00:00', temperature: -18.2, vibration: 2.8, power: 142, humidity: 63 },
    { time: '04:00', temperature: -18.5, vibration: 2.9, power: 145, humidity: 64 },
    { time: '08:00', temperature: -18.1, vibration: 3.1, power: 147, humidity: 65 },
    { time: '12:00', temperature: -18.8, vibration: 3.2, power: 149, humidity: 66 },
    { time: '16:00', temperature: -18.3, vibration: 3.0, power: 145, humidity: 65 },
    { time: '20:00', temperature: -18.5, vibration: 3.2, power: 146, humidity: 65 }
  ]);

  // Simulate real-time sensor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prev => prev.map(sensor => {
        const variation = (Math.random() - 0.5) * 2;
        const newValue = sensor.value + variation;
        
        let status: 'normal' | 'warning' | 'critical' = 'normal';
        if (newValue < sensor.threshold.min || newValue > sensor.threshold.max) {
          status = 'critical';
        } else if (newValue < sensor.threshold.min * 1.1 || newValue > sensor.threshold.max * 0.9) {
          status = 'warning';
        }

        return {
          ...sensor,
          value: parseFloat(newValue.toFixed(1)),
          status,
          timestamp: new Date(),
          batteryLevel: sensor.batteryLevel ? Math.max(20, sensor.batteryLevel - Math.random() * 0.1) : undefined,
          signalStrength: Math.max(60, Math.min(100, sensor.signalStrength + (Math.random() - 0.5) * 10))
        };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSensorIcon = (type: string) => {
    switch (type) {
      case 'temperature': return <Thermometer className="h-5 w-5 text-blue-500" />;
      case 'power': return <Zap className="h-5 w-5 text-yellow-500" />;
      case 'humidity': return <Droplets className="h-5 w-5 text-cyan-500" />;
      case 'vibration': return <Activity className="h-5 w-5 text-purple-500" />;
      default: return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'normal': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const criticalSensors = sensors.filter(s => s.status === 'critical');
  const warningSensors = sensors.filter(s => s.status === 'warning');

  return (
    <div className="space-y-6">
      {/* Critical Alerts */}
      {criticalSensors.length > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-800">
            <strong>Critical Sensor Alert:</strong> {criticalSensors.length} sensor(s) outside normal parameters
          </AlertDescription>
        </Alert>
      )}

      {/* Sensor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sensors.map((sensor) => (
          <Card key={sensor.id} className={`transition-all duration-300 ${
            sensor.status === 'critical' ? 'border-red-300 shadow-lg' : 
            sensor.status === 'warning' ? 'border-orange-300' : 'border-gray-200'
          }`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getSensorIcon(sensor.sensorType)}
                  <span className="font-medium text-sm">{sensor.location}</span>
                </div>
                <Badge className={getStatusColor(sensor.status)}>
                  {sensor.status.toUpperCase()}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    sensor.status === 'critical' ? 'text-red-600' :
                    sensor.status === 'warning' ? 'text-orange-600' : 'text-green-600'
                  }`}>
                    {sensor.value}{sensor.unit}
                  </div>
                  <div className="text-xs text-gray-500">
                    Range: {sensor.threshold.min} - {sensor.threshold.max}{sensor.unit}
                  </div>
                </div>
                
                {sensor.batteryLevel !== undefined && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Battery</span>
                      <span>{sensor.batteryLevel.toFixed(0)}%</span>
                    </div>
                    <Progress value={sensor.batteryLevel} className="h-2" />
                  </div>
                )}
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    {sensor.signalStrength > 80 ? 
                      <Wifi className="h-3 w-3 text-green-500" /> : 
                      <WifiOff className="h-3 w-3 text-red-500" />
                    }
                    <span>{sensor.signalStrength.toFixed(0)}%</span>
                  </div>
                  <span>{sensor.timestamp.toLocaleTimeString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Historical Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-purple-500" />
            <span>24-Hour Sensor Trends</span>
            <Badge className="bg-purple-100 text-purple-800">Live Data</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temperature" stroke="#3b82f6" strokeWidth={2} name="Temperature (°C)" />
              <Line type="monotone" dataKey="vibration" stroke="#8b5cf6" strokeWidth={2} name="Vibration (mm/s)" />
              <Line type="monotone" dataKey="power" stroke="#eab308" strokeWidth={2} name="Power (kW)" />
              <Line type="monotone" dataKey="humidity" stroke="#06b6d4" strokeWidth={2} name="Humidity (%)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default IoTSensorDashboard;
