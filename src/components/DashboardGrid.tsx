
import React from 'react';
import MetricCard from './MetricCard';
import { 
  Truck, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Leaf,
  Database,
  Clock
} from 'lucide-react';

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <MetricCard
        title="Live Store Traffic"
        value="2,847"
        change="+12% vs yesterday"
        trend="up"
        icon={<Users className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-blue-50 to-white"
      />
      
      <MetricCard
        title="Active Dock Bays"
        value="23/28"
        change="5 available"
        trend="neutral"
        icon={<Truck className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-teal-50 to-white"
      />
      
      <MetricCard
        title="AI Sales Boost"
        value="$127k"
        change="+8.4% from AI promos"
        trend="up"
        icon={<TrendingUp className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-green-50 to-white"
      />
      
      <MetricCard
        title="Sustainability Score"
        value="87%"
        change="+3 points today"
        trend="up"
        icon={<Leaf className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-emerald-50 to-white"
      />
      
      <MetricCard
        title="Critical Alerts"
        value="7"
        change="2 resolved this hour"
        trend="down"
        icon={<AlertTriangle className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-orange-50 to-white"
      />
      
      <MetricCard
        title="Inventory Accuracy"
        value="99.2%"
        change="AI-verified"
        trend="up"
        icon={<Database className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-purple-50 to-white"
      />
      
      <MetricCard
        title="Avg Dock Wait"
        value="14 min"
        change="-5 min improvement"
        trend="down"
        icon={<Clock className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-indigo-50 to-white"
      />
      
      <MetricCard
        title="Cart Conversion"
        value="73.8%"
        change="+2.1% vs last week"
        trend="up"
        icon={<ShoppingCart className="h-6 w-6" />}
        gradient="bg-gradient-to-br from-pink-50 to-white"
      />
    </div>
  );
};

export default DashboardGrid;
