
export interface RiskPrediction {
  id: string;
  category: 'food_safety' | 'supply_disruption' | 'quality' | 'compliance' | 'logistics';
  title: string;
  description: string;
  riskScore: number; // 0-100
  probability: number; // 0-100
  impact: 'low' | 'medium' | 'high' | 'critical';
  timeframe: string;
  affectedProducts: number;
  preventiveActions: string[];
  confidenceLevel: number;
  createdAt: Date;
}

export interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  benchmark: number;
  target: number;
  category: 'efficiency' | 'quality' | 'safety' | 'sustainability';
}

export interface SupplyChainInsight {
  id: string;
  type: 'optimization' | 'risk_mitigation' | 'cost_saving' | 'efficiency';
  title: string;
  description: string;
  potentialSavings: number;
  implementationTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  priority: 'low' | 'medium' | 'high' | 'critical';
  roiPercent: number;
}

export interface TrendData {
  timestamp: Date;
  value: number;
  category: string;
}

export interface PredictiveAnalyticsData {
  riskPredictions: RiskPrediction[];
  performanceMetrics: PerformanceMetric[];
  supplyChainInsights: SupplyChainInsight[];
  trendData: {
    foodSafety: TrendData[];
    supplierPerformance: TrendData[];
    carbonFootprint: TrendData[];
    responseTime: TrendData[];
  };
}
