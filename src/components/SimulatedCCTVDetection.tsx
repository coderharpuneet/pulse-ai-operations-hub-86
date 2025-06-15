
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Video, Upload, Play, AlertTriangle, Eye, Brain, Download } from 'lucide-react';

const SimulatedCCTVDetection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const sampleDetections = [
    {
      timestamp: '00:00:15',
      type: 'Person Detection',
      confidence: 97,
      location: { x: 245, y: 180, w: 85, h: 220 },
      description: 'Individual detected in electronics section'
    },
    {
      timestamp: '00:00:28',
      type: 'Suspicious Behavior',
      confidence: 84,
      location: { x: 320, y: 150, w: 75, h: 200 },
      description: 'Loitering behavior detected - 30+ seconds stationary'
    },
    {
      timestamp: '00:00:42',
      type: 'Object Interaction',
      confidence: 91,
      location: { x: 380, y: 200, w: 60, h: 40 },
      description: 'Person handling merchandise without purchase intent'
    },
    {
      timestamp: '00:01:05',
      type: 'Exit Detection',
      confidence: 88,
      location: { x: 150, y: 120, w: 70, h: 180 },
      description: 'Person moving toward exit with concealed item'
    }
  ];

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file.name);
      setAnalysisResults(null);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResults({
        duration: '1:23',
        totalDetections: sampleDetections.length,
        riskScore: 'High',
        summary: 'Potential shoplifting incident detected. Subject shows suspicious behavior patterns consistent with theft activity.',
        detections: sampleDetections
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 75) return 'text-orange-600';
    return 'text-red-600';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Suspicious Behavior': return 'bg-red-100 text-red-800';
      case 'Object Interaction': return 'bg-orange-100 text-orange-800';
      case 'Person Detection': return 'bg-blue-100 text-blue-800';
      case 'Exit Detection': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Video className="h-5 w-5 text-blue-500" />
          <span>Simulated CCTV Detection</span>
          <Badge className="bg-purple-100 text-purple-800">AI Demo</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Upload Section */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 flex items-center">
            <Upload className="h-4 w-4 mr-2" />
            Upload Video for Analysis
          </h4>
          <div className="space-y-3">
            <Input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="cursor-pointer"
            />
            {videoFile && (
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Video className="h-4 w-4" />
                <span>Selected: {videoFile}</span>
              </div>
            )}
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-3">Or Try Our Demo Video</h4>
          <div className="flex items-center space-x-3">
            <div className="w-20 h-12 bg-gray-300 rounded flex items-center justify-center">
              <Play className="h-6 w-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Sample_Store_Footage.mp4</p>
              <p className="text-xs text-gray-600">Electronics section - 1:23 duration</p>
            </div>
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="min-w-[120px]"
            >
              {isAnalyzing ? (
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 animate-pulse" />
                  <span>Analyzing...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Analyze Footage</span>
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Analysis Progress */}
        {isAnalyzing && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Brain className="h-5 w-5 text-blue-500 animate-pulse" />
              <div className="flex-1">
                <p className="font-medium text-blue-900">AI Analysis in Progress</p>
                <p className="text-sm text-blue-700">Processing video with YOLOv8 + DeepSort algorithms...</p>
              </div>
            </div>
            <div className="mt-3 w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '70%' }} />
            </div>
          </div>
        )}

        {/* Analysis Results */}
        {analysisResults && (
          <div className="space-y-6">
            {/* Summary Alert */}
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-red-800">
                <strong>Risk Assessment: {analysisResults.riskScore}</strong><br />
                {analysisResults.summary}
              </AlertDescription>
            </Alert>

            {/* Analysis Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{analysisResults.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{analysisResults.totalDetections}</div>
                  <div className="text-sm text-gray-600">Detections</div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">87%</div>
                  <div className="text-sm text-gray-600">Avg Confidence</div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{analysisResults.riskScore}</div>
                  <div className="text-sm text-gray-600">Risk Level</div>
                </div>
              </Card>
            </div>

            {/* Detection Timeline */}
            <div>
              <h4 className="font-semibold mb-3">Detection Timeline</h4>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {analysisResults.detections.map((detection: any, index: number) => (
                  <div key={index} className="border rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          {detection.timestamp}
                        </Badge>
                        <Badge className={getTypeColor(detection.type)}>
                          {detection.type}
                        </Badge>
                      </div>
                      <span className={`text-sm font-medium ${getConfidenceColor(detection.confidence)}`}>
                        {detection.confidence}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{detection.description}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      Bounding Box: x={detection.location.x}, y={detection.location.y}, {detection.location.w}×{detection.location.h}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Options */}
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-1" />
                View Annotated Video
              </Button>
              <Button variant="outline" size="sm">
                <AlertTriangle className="h-4 w-4 mr-1" />
                Create Incident Report
              </Button>
            </div>
          </div>
        )}

        {/* Demo Info */}
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-purple-900 mb-2">AI Detection Capabilities</h4>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Real-time person detection and tracking</li>
            <li>• Behavioral analysis (loitering, suspicious movement)</li>
            <li>• Object interaction monitoring</li>
            <li>• Theft pattern recognition</li>
            <li>• Crowd density analysis</li>
            <li>• Facial recognition (privacy-compliant)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimulatedCCTVDetection;
