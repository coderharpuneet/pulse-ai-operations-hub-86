
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, Clock, DollarSign } from 'lucide-react';

interface MaintenancePrediction {
  id: string;
  equipmentId: string;
  equipmentName: string;
  failureProbability: number;
  timeToFailure: number;
  failureType: string;
  recommendedAction: string;
  potentialCost: number;
  preventiveCost: number;
  savings: number;
  confidenceLevel: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  lastUpdated: Date;
}

const PredictiveMaintenanceAI = () => {
  const [predictions, setPredictions] = useState<MaintenancePrediction[]>([
    {
      id: 'PRED-001',
      equipmentId: 'COOL-003',
      equipmentName: 'Cooling Unit C1',
      failureProbability: 85,
      timeToFailure: 72,
      failureType: 'Compressor failure',
      recommendedAction: 'Replace compressor seals and check refrigerant levels',
      potentialCost: 2500,
      preventiveCost: 450,
      savings: 2050,
      confidenceLevel: 92,
      urgency: 'critical',
      lastUpdated: new Date()
    },
    {
      id: 'PRED-002',
      equipmentId: 'CONV-001',
      equipmentName: 'Conveyor Belt A',
      failureProbability: 68,
      timeToFailure: 168,
      failureType: 'Belt wear',
      recommendedAction: 'Schedule belt replacement and pulley alignment',
      potentialCost: 800,
      preventiveCost: 200,
      savings: 600,
      confidenceLevel: 78,
      urgency: 'high',
      lastUpdated: new Date()
    },
    {
      id: 'PRED-003',
      equipmentId: 'LIFT-002',
      equipmentName: 'Forklift FL-205',
      failureProbability: 45,
      timeToFailure: 240,
      failureType: 'Battery degradation',
      recommendedAction: 'Perform battery maintenance and load testing',
      potentialCost: 1200,
      preventiveCost: 150,
      savings: 1050,
      confidenceLevel: 85,
      urgency: 'medium',
      lastUpdated: new Date()
    },
    {
      id: 'PRED-004',
      equipmentId: 'SCAN-004',
      equipmentName: 'Barcode Scanner S12',
      failureProbability: 25,
      timeToFailure: 720,
      failureType: 'Lens deterioration',
      recommendedAction: 'Clean lens and recalibrate scanner',
      potentialCost: 300,
      preventiveCost: 50,
      savings: 250,
      confidenceLevel: 65,
      urgency: 'low',
      lastUpdated: new Date()
    }
  ]);

  const [aiInsights, setAiInsights] = useState({
    totalPotentialSavings: 3950,
    equipmentAtRisk: 4,
    maintenanceEfficiency: 87,
    predictionAccuracy: 91
  });

  // Simulate AI prediction updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPredictions(prev => prev.map(pred => {
        const timeDecrement = Math.random() * 2;
        const newTimeToFailure = Math.max(1, pred.timeToFailure - timeDecrement);
        const newProbability = Math.min(95, pred.failureProbability + (Math.random() - 0.5) * 5);
        
        let urgency: 'low' | 'medium' | 'high' | 'critical' = 'low';
        if (newTimeToFailure < 48) urgency = 'critical';
        else if (newTimeToFailure < 120) urgency = 'high';
        else if (newTimeToFailure < 240) urgency = 'medium';

        return {
          ...pred,
          timeToFailure: parseFloat(newTimeToFailure.toFixed(1)),
          failureProbability: parseFloat(newProbability.toFixed(1)),
          urgency,
          lastUpdated: new Date()
        };
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatTime = (hours: number) => {
    if (hours < 24) return `${hours.toFixed(1)} hours`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days}d ${remainingHours.toFixed(0)}h`;
  };

  const criticalPredictions = predictions.filter(p => p.urgency === 'critical');
  const highPredictions = predictions.filter(p => p.urgency === 'high');

  return (
    <div className="space-y-6">
      {/* AI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Potential Savings</p>
              <p className="text-2xl font-bold text-green-600">${aiInsights.totalPotentialSavings}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm text-gray-600">Equipment at Risk</p>
              <p className="text-2xl font-bold text-red-600">{aiInsights.equipmentAtRisk}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">AI Accuracy</p>
              <p className="text-2xl font-bold text-blue-600">{aiInsights.predictionAccuracy}%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-purple-500" />
            <div>
              <p className="text-sm text-gray-600">Efficiency</p>
              <p className="text-2xl font-bold text-purple-600">{aiInsights.maintenanceEfficiency}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Critical Alerts */}
      {criticalPredictions.length > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-800">
            <strong>Critical Maintenance Alert:</strong> {criticalPredictions.length} equipment failure(s) predicted within 48 hours
          </AlertDescription>
        </Alert>
      )}

      {/* Predictions List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-purple-500" />
            <span>AI Predictive Maintenance Analysis</span>
            <Badge className="bg-purple-100 text-purple-800">Machine Learning</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {predictions.map((prediction) => (
              <div
                key={prediction.id}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  prediction.urgency === 'critical' ? 'bg-red-50 border-red-200' :
                  prediction.urgency === 'high' ? 'bg-orange-50 border-orange-200' :
                  'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900">{prediction.equipmentName}</h4>
                    <p className="text-sm text-gray-600">Predicted failure: {prediction.failureType}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getUrgencyColor(prediction.urgency)}>
                      {prediction.urgency.toUpperCase()}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      {prediction.confidenceLevel}% confidence
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Failure Probability</span>
                      <span className="font-medium">{prediction.failureProbability}%</span>
                    </div>
                    <Progress value={prediction.failureProbability} className="h-2" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">
                      {formatTime(prediction.timeToFailure)}
                    </div>
                    <div className="text-xs text-gray-500">Time to failure</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      ${prediction.savings}
                    </div>
                    <div className="text-xs text-gray-500">Potential savings</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Recommended Action:</strong> {prediction.recommendedAction}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Preventive cost: ${prediction.preventiveCost}</span>
                    <span>Failure cost: ${prediction.potentialCost}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    Last updated: {prediction.lastUpdated.toLocaleTimeString()}
                  </span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      Schedule Maintenance
                    </Button>
                    {prediction.urgency === 'critical' && (
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Emergency Action
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictiveMaintenanceAI;
