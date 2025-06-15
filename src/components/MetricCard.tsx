
import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: ReactNode;
  gradient?: string;
  children?: ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend = 'neutral',
  icon,
  gradient = 'bg-white',
  children
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className={`p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up ${gradient}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
          {change && (
            <p className={`text-sm font-medium ${getTrendColor()}`}>
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="ml-4 p-3 bg-gradient-pulse rounded-lg text-white">
            {icon}
          </div>
        )}
      </div>
      {children && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          {children}
        </div>
      )}
    </Card>
  );
};

export default MetricCard;
