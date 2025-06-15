
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Leaf, Users, TrendingUp } from 'lucide-react';

const CustomerImpactVisualization = () => {
  const sustainableProducts = [
    {
      category: 'Organic Produce',
      sales: 89,
      growth: '+12%',
      impact: '2.3 tons pesticides avoided',
      customers: 3420
    },
    {
      category: 'Eco-Friendly Packaging',
      sales: 76,
      growth: '+23%',
      impact: '1.8 tons plastic reduced',
      customers: 2156
    },
    {
      category: 'Local Products',
      sales: 67,
      growth: '+8%',
      impact: '450 miles avg shipping reduced',
      customers: 1834
    },
    {
      category: 'Energy Efficient Appliances',
      sales: 82,
      growth: '+15%',
      impact: '12 MWh energy savings potential',
      customers: 892
    }
  ];

  const customerEngagement = [
    {
      initiative: 'Reusable Bag Program',
      participation: 78,
      impact: '15,000 plastic bags saved/month',
      growth: '+5%'
    },
    {
      initiative: 'Electronics Recycling',
      participation: 45,
      impact: '500 devices recycled',
      growth: '+18%'
    },
    {
      initiative: 'Sustainable Living Tips',
      participation: 67,
      impact: '2,340 households engaged',
      growth: '+12%'
    },
    {
      initiative: 'Carbon Footprint Tracker',
      participation: 34,
      impact: '890 customers tracking impact',
      growth: '+28%'
    }
  ];

  const communityImpact = {
    totalCustomers: 12450,
    activelyEngaged: 8920,
    sustainablePurchases: 45780,
    co2Saved: 127.5,
    wasteReduced: 89.2
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Customer Impact Visualization</h3>
        <div className="flex items-center space-x-2">
          <Heart className="h-5 w-5 text-pink-600" />
          <span className="text-sm font-medium text-pink-600">72% Customer Satisfaction</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Sustainable Product Performance</h4>
          <div className="space-y-4">
            {sustainableProducts.map((product, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium text-gray-900">{product.category}</h5>
                  <Badge className="bg-green-100 text-green-800">
                    {product.growth} growth
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-gray-500">Sales Performance</div>
                    <div className="text-lg font-bold text-gray-900">{product.sales}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Customers</div>
                    <div className="text-lg font-bold text-gray-900">{product.customers.toLocaleString()}</div>
                  </div>
                </div>
                
                <Progress value={product.sales} className="mb-2" />
                <div className="text-xs text-green-600 font-medium">{product.impact}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-4">Customer Engagement Programs</h4>
          <div className="space-y-4">
            {customerEngagement.map((program, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{program.initiative}</span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">{program.growth}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Participation Rate</span>
                    <span className="font-medium">{program.participation}%</span>
                  </div>
                  <Progress value={program.participation} className="h-2" />
                  <div className="text-xs text-blue-600 font-medium">{program.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-blue-900">{communityImpact.totalCustomers.toLocaleString()}</div>
          <div className="text-xs text-blue-700">Total Customers</div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Heart className="h-6 w-6 text-green-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-green-900">{communityImpact.activelyEngaged.toLocaleString()}</div>
          <div className="text-xs text-green-700">Actively Engaged</div>
        </div>
        
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <ShoppingCart className="h-6 w-6 text-purple-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-purple-900">{communityImpact.sustainablePurchases.toLocaleString()}</div>
          <div className="text-xs text-purple-700">Sustainable Purchases</div>
        </div>
        
        <div className="text-center p-4 bg-teal-50 rounded-lg">
          <Leaf className="h-6 w-6 text-teal-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-teal-900">{communityImpact.co2Saved}</div>
          <div className="text-xs text-teal-700">Tons CO2 Saved</div>
        </div>
        
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-orange-900">{communityImpact.wasteReduced}</div>
          <div className="text-xs text-orange-700">Tons Waste Reduced</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
        <div className="text-center">
          <div className="text-sm font-medium text-gray-900 mb-1">Community Environmental Impact</div>
          <div className="text-2xl font-bold text-green-600 mb-1">216.7 Tons CO2 Equivalent Saved</div>
          <div className="text-xs text-gray-700">
            Through customer participation in sustainability programs, equivalent to removing 47 cars from the road for a year
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomerImpactVisualization;
