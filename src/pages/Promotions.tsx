
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Users, BarChart3, Zap, Clock } from 'lucide-react';

const Promotions = () => {
  const campaigns = [
    {
      id: 1,
      name: 'Back to School Electronics',
      status: 'active',
      performance: 87,
      engagement: '12.4K',
      conversion: '8.2%',
      revenue: '$142K'
    },
    {
      id: 2,
      name: 'Weekend Grocery Deals',
      status: 'active',
      performance: 94,
      engagement: '23.1K',
      conversion: '12.7%',
      revenue: '$89K'
    },
    {
      id: 3,
      name: 'Fall Fashion Preview',
      status: 'scheduled',
      performance: 0,
      engagement: '0',
      conversion: '0%',
      revenue: '$0'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Promotions AI</h1>
          <p className="text-gray-600">AI-powered promotional campaigns and optimization</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span>Active Campaigns</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">47</div>
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
              <div className="text-3xl font-bold text-blue-600">89%</div>
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
              <div className="text-3xl font-bold text-purple-600">$2.4M</div>
              <p className="text-sm text-gray-600">This month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-orange-500" />
              <span>Campaign Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                    <Badge className={campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Performance:</span>
                      <div className="font-medium">{campaign.performance}%</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Engagement:</span>
                      <div className="font-medium">{campaign.engagement}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Conversion:</span>
                      <div className="font-medium">{campaign.conversion}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Revenue:</span>
                      <div className="font-medium">{campaign.revenue}</div>
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
