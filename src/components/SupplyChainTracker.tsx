
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Truck, MapPin, Leaf, AlertTriangle } from 'lucide-react';

const SupplyChainTracker = () => {
  const suppliers = [
    {
      name: 'Green Farms Co.',
      location: 'California',
      category: 'Organic Produce',
      sustainability: 95,
      carbon: 'Low',
      certifications: ['Organic', 'Fair Trade'],
      distance: 250,
      impact: 'Reduced 45% carbon vs. alternatives'
    },
    {
      name: 'EcoPackaging Ltd.',
      location: 'Texas',
      category: 'Sustainable Packaging',
      sustainability: 88,
      carbon: 'Very Low',
      certifications: ['FSC Certified', 'Recyclable'],
      distance: 180,
      impact: '100% recyclable materials'
    },
    {
      name: 'Local Dairy Collective',
      location: 'Arkansas',
      category: 'Dairy Products',
      sustainability: 92,
      carbon: 'Low',
      certifications: ['Local', 'Grass-fed'],
      distance: 85,
      impact: 'Supports 12 local farms'
    }
  ];

  const metrics = [
    { label: 'Sustainable Suppliers', value: 78, target: 85, unit: '%' },
    { label: 'Carbon Footprint Reduction', value: 23, target: 30, unit: '%' },
    { label: 'Local Sourcing', value: 45, target: 50, unit: '%' },
    { label: 'Packaging Sustainability', value: 67, target: 75, unit: '%' }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Sustainable Supply Chain</h3>
        <div className="flex items-center space-x-2">
          <Leaf className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-green-600">B+ Sustainability Score</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h4 className="font-medium text-gray-900 mb-4">Key Suppliers</h4>
          <div className="space-y-4">
            {suppliers.map((supplier, index) => (
              <div key={index} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h5 className="font-medium text-gray-900">{supplier.name}</h5>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{supplier.location}</span>
                      <span>•</span>
                      <span>{supplier.distance} miles</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {supplier.sustainability}% Sustainable
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-gray-500">Category</div>
                    <div className="text-sm font-medium">{supplier.category}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Carbon Impact</div>
                    <Badge className={
                      supplier.carbon === 'Very Low' ? 'bg-green-100 text-green-800' :
                      supplier.carbon === 'Low' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }>
                      {supplier.carbon}
                    </Badge>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="text-xs text-gray-500 mb-1">Certifications</div>
                  <div className="flex flex-wrap gap-1">
                    {supplier.certifications.map((cert, certIndex) => (
                      <Badge key={certIndex} className="bg-gray-100 text-gray-700 text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="text-xs text-green-600 font-medium">{supplier.impact}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-4">Supply Chain Metrics</h4>
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">{metric.label}</span>
                  <span className="text-sm text-gray-600">{metric.value}{metric.unit}</span>
                </div>
                <Progress value={(metric.value / metric.target) * 100} className="mb-1" />
                <div className="text-xs text-gray-500">Target: {metric.target}{metric.unit}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Truck className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Transportation Impact</span>
            </div>
            <div className="text-xs text-blue-700">
              Average shipping distance reduced by 18% this quarter through local sourcing initiatives.
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SupplyChainTracker;
