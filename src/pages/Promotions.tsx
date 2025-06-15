
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Target, Users, BarChart3, Zap, Clock, AlertTriangle, CheckCircle, Loader2, ArrowUp, ArrowDown, Eye, ShoppingCart, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Campaign {
  id: number;
  name: string;
  status: 'active' | 'scheduled' | 'paused' | 'optimizing';
  performance: number;
  engagement: string;
  conversion: string;
  revenue: string;
  trend: 'up' | 'down' | 'stable';
  inventoryLevel: number;
  targetReached: boolean;
  autoOptimize: boolean;
  issueAlert?: string;
  recommendation?: string;
}

const Promotions = () => {
  const { toast } = useToast();
  const [processingCampaigns, setProcessingCampaigns] = useState<Record<number, boolean>>({});
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: 'Back to School Electronics',
      status: 'active',
      performance: 87,
      engagement: '12.4K',
      conversion: '8.2%',
      revenue: '$142K',
      trend: 'up',
      inventoryLevel: 23,
      targetReached: false,
      autoOptimize: true,
      issueAlert: 'Low inventory detected',
      recommendation: 'Reduce promotion intensity by 15%'
    },
    {
      id: 2,
      name: 'Weekend Grocery Deals',
      status: 'optimizing',
      performance: 94,
      engagement: '23.1K',
      conversion: '12.7%',
      revenue: '$89K',
      trend: 'up',
      inventoryLevel: 78,
      targetReached: true,
      autoOptimize: true
    },
    {
      id: 3,
      name: 'Fall Fashion Preview',
      status: 'paused',
      performance: 45,
      engagement: '3.2K',
      conversion: '2.1%',
      revenue: '$12K',
      trend: 'down',
      inventoryLevel: 92,
      targetReached: false,
      autoOptimize: false,
      issueAlert: 'Poor performance',
      recommendation: 'Adjust targeting to 25-35 age group'
    },
    {
      id: 4,
      name: 'Holiday Electronics Bundle',
      status: 'active',
      performance: 76,
      engagement: '18.7K',
      conversion: '9.4%',
      revenue: '$203K',
      trend: 'stable',
      inventoryLevel: 34,
      targetReached: false,
      autoOptimize: true,
      issueAlert: 'Inventory critical',
      recommendation: 'Pause promotion or increase prices'
    }
  ]);

  const [metrics, setMetrics] = useState({
    activeCampaigns: 47,
    avgPerformance: 89,
    totalRevenue: 2.4,
    optimizationsSaved: 127,
    alertsResolved: 23,
    inventoryTurnover: 4.2
  });

  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      // Update campaign metrics
      setCampaigns(prev => prev.map(campaign => {
        const perfChange = (Math.random() - 0.5) * 10;
        const newPerformance = Math.max(0, Math.min(100, campaign.performance + perfChange));
        const inventoryChange = Math.random() < 0.3 ? (Math.random() - 0.5) * 5 : 0;
        const newInventoryLevel = Math.max(0, Math.min(100, campaign.inventoryLevel + inventoryChange));
        
        let newStatus = campaign.status;
        let newIssueAlert = campaign.issueAlert;
        let newRecommendation = campaign.recommendation;

        // Auto-optimization logic
        if (campaign.autoOptimize && campaign.status === 'active') {
          if (newInventoryLevel < 25) {
            newIssueAlert = 'Low inventory detected';
            newRecommendation = `Reduce promotion intensity by ${Math.ceil((25 - newInventoryLevel) / 2) * 5}%`;
          } else if (newPerformance < 50) {
            newIssueAlert = 'Poor performance';
            newRecommendation = 'Adjust targeting or creative assets';
          } else if (newPerformance > 85 && newInventoryLevel > 60) {
            newIssueAlert = undefined;
            newRecommendation = 'Consider increasing promotion budget';
          }

          if (Math.random() < 0.1 && newPerformance < 60) {
            newStatus = 'optimizing';
          }
        }

        return {
          ...campaign,
          performance: newPerformance,
          inventoryLevel: newInventoryLevel,
          status: newStatus,
          issueAlert: newIssueAlert,
          recommendation: newRecommendation,
          trend: perfChange > 2 ? 'up' : perfChange < -2 ? 'down' : 'stable'
        };
      }));

      // Update overall metrics
      setMetrics(prev => ({
        ...prev,
        avgPerformance: Math.max(80, Math.min(95, prev.avgPerformance + (Math.random() - 0.5) * 3)),
        totalRevenue: Math.max(2.0, Math.min(3.0, prev.totalRevenue + (Math.random() - 0.5) * 0.1)),
        optimizationsSaved: prev.optimizationsSaved + (Math.random() < 0.2 ? 1 : 0),
        alertsResolved: prev.alertsResolved + (Math.random() < 0.15 ? 1 : 0)
      }));

      setLastUpdate(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCampaignAction = async (campaignId: number, action: string) => {
    console.log(`Executing action: ${action} for campaign ${campaignId}`);
    
    setProcessingCampaigns(prev => ({ ...prev, [campaignId]: true }));

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setCampaigns(prev => prev.map(campaign => {
        if (campaign.id === campaignId) {
          switch (action) {
            case 'optimize':
              return { 
                ...campaign, 
                status: 'optimizing' as const,
                issueAlert: undefined 
              };
            case 'pause':
              return { 
                ...campaign, 
                status: 'paused' as const 
              };
            case 'resume':
              return { 
                ...campaign, 
                status: 'active' as const 
              };
            case 'apply-recommendation':
              return {
                ...campaign,
                performance: Math.min(100, campaign.performance + 15),
                issueAlert: undefined,
                recommendation: undefined
              };
            default:
              return campaign;
          }
        }
        return campaign;
      }));

      toast({
        title: "Action Completed",
        description: getActionMessage(action),
        duration: 3000,
      });

    } catch (error) {
      console.error('Campaign action failed:', error);
      toast({
        title: "Action Failed",
        description: "Failed to execute the action. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setProcessingCampaigns(prev => ({ ...prev, [campaignId]: false }));
    }
  };

  const getActionMessage = (action: string): string => {
    const messages: Record<string, string> = {
      'optimize': 'Campaign optimization initiated using AI algorithms',
      'pause': 'Campaign paused to prevent inventory depletion',
      'resume': 'Campaign resumed with updated parameters',
      'apply-recommendation': 'AI recommendation applied successfully'
    };
    return messages[action] || 'Action completed successfully';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down': return <ArrowDown className="h-4 w-4 text-red-500" />;
      default: return <div className="h-4 w-4"></div>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'optimizing': return <Badge className="bg-blue-100 text-blue-800 animate-pulse">AI Optimizing</Badge>;
      case 'paused': return <Badge className="bg-yellow-100 text-yellow-800">Paused</Badge>;
      default: return <Badge variant="secondary">Scheduled</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Promotions AI</h1>
              <p className="text-gray-600">Real-time promotional optimization and inventory management</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live optimization active</span>
              <span>•</span>
              <span>Updated {Math.floor((Date.now() - lastUpdate.getTime()) / 1000)}s ago</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span>Active Campaigns</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{metrics.activeCampaigns}</div>
              <p className="text-sm text-gray-600">Running promotions</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Target className="h-5 w-5 text-blue-500" />
                <span>Avg Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{metrics.avgPerformance.toFixed(1)}%</div>
              <p className="text-sm text-gray-600">Campaign success rate</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <span>Total Revenue</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">${metrics.totalRevenue.toFixed(1)}M</div>
              <p className="text-sm text-gray-600">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Zap className="h-5 w-5 text-orange-500" />
                <span>AI Optimizations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{metrics.optimizationsSaved}</div>
              <p className="text-sm text-gray-600">Auto-saved costs</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span>Alerts Resolved</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-teal-600">{metrics.alertsResolved}</div>
              <p className="text-sm text-gray-600">Today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Package className="h-5 w-5 text-indigo-500" />
                <span>Inventory Turn</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-indigo-600">{metrics.inventoryTurnover.toFixed(1)}x</div>
              <p className="text-sm text-gray-600">Weekly average</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-orange-500" />
              <span>Live Campaign Intelligence</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-gray-900 text-lg">{campaign.name}</h3>
                      {getStatusBadge(campaign.status)}
                      {campaign.issueAlert && (
                        <div className="flex items-center space-x-1">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          <span className="text-sm text-red-600">{campaign.issueAlert}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(campaign.trend)}
                      <span className="text-sm font-medium">{campaign.performance.toFixed(1)}%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <span className="text-gray-600 text-sm">Engagement:</span>
                      <div className="font-medium">{campaign.engagement}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Conversion:</span>
                      <div className="font-medium">{campaign.conversion}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Revenue:</span>
                      <div className="font-medium">{campaign.revenue}</div>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Performance:</span>
                      <div className="space-y-1">
                        <Progress value={campaign.performance} className="h-2" />
                        <span className="text-xs text-gray-500">{campaign.performance.toFixed(1)}%</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Inventory Level:</span>
                      <div className="space-y-1">
                        <Progress 
                          value={campaign.inventoryLevel} 
                          className={`h-2 ${campaign.inventoryLevel < 25 ? 'bg-red-100' : 'bg-green-100'}`} 
                        />
                        <span className={`text-xs ${campaign.inventoryLevel < 25 ? 'text-red-600' : 'text-green-600'}`}>
                          {campaign.inventoryLevel.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {campaign.recommendation && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <Eye className="h-4 w-4 text-blue-500 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-blue-900">AI Recommendation:</p>
                          <p className="text-sm text-blue-700">{campaign.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {campaign.autoOptimize && (
                        <Badge variant="outline" className="text-xs">
                          Auto-Optimize ON
                        </Badge>
                      )}
                      {campaign.targetReached && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Target Reached
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {campaign.recommendation && (
                        <Button 
                          size="sm" 
                          variant="default"
                          className="text-xs bg-blue-600 hover:bg-blue-700"
                          onClick={() => handleCampaignAction(campaign.id, 'apply-recommendation')}
                          disabled={processingCampaigns[campaign.id]}
                        >
                          {processingCampaigns[campaign.id] ? (
                            <>
                              <Loader2 className="h-3 w-3 animate-spin mr-1" />
                              Applying...
                            </>
                          ) : (
                            'Apply AI Fix'
                          )}
                        </Button>
                      )}
                      
                      {campaign.status === 'active' && campaign.issueAlert && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-xs"
                          onClick={() => handleCampaignAction(campaign.id, 'pause')}
                          disabled={processingCampaigns[campaign.id]}
                        >
                          {processingCampaigns[campaign.id] ? (
                            <>
                              <Loader2 className="h-3 w-3 animate-spin mr-1" />
                              Pausing...
                            </>
                          ) : (
                            'Emergency Pause'
                          )}
                        </Button>
                      )}
                      
                      {campaign.status === 'paused' && (
                        <Button 
                          size="sm" 
                          variant="default"
                          className="text-xs"
                          onClick={() => handleCampaignAction(campaign.id, 'resume')}
                          disabled={processingCampaigns[campaign.id]}
                        >
                          {processingCampaigns[campaign.id] ? (
                            <>
                              <Loader2 className="h-3 w-3 animate-spin mr-1" />
                              Resuming...
                            </>
                          ) : (
                            'Resume'
                          )}
                        </Button>
                      )}
                      
                      {campaign.status === 'active' && !campaign.issueAlert && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-xs"
                          onClick={() => handleCampaignAction(campaign.id, 'optimize')}
                          disabled={processingCampaigns[campaign.id]}
                        >
                          {processingCampaigns[campaign.id] ? (
                            <>
                              <Loader2 className="h-3 w-3 animate-spin mr-1" />
                              Optimizing...
                            </>
                          ) : (
                            'AI Optimize'
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Promotions;
