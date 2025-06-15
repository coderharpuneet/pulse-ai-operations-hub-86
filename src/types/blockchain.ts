
export interface BlockchainTransaction {
  id: string;
  type: 'food_safety' | 'supplier_audit' | 'product_recall' | 'carbon_tracking';
  location: string;
  timestamp: string;
  status: 'verified' | 'action_required' | 'pending';
  details: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  blockHeight?: number;
  hash?: string;
}

export interface CriticalIssue {
  id: number;
  title: string;
  description: string;
  affectedProducts: number;
  storesImpacted: number;
  timeToResolve: string;
  status: 'investigating' | 'action_required' | 'resolved';
  severity: 'critical' | 'high' | 'medium' | 'low';
  createdAt: Date;
}

export interface ProductTrace {
  product: string;
  origin: string;
  journey: string[];
  carbonFootprint: string;
  laborCompliance: string;
  qualityChecks: string;
  lastUpdated: Date;
}

export interface ComplianceMetrics {
  foodSafetyScore: number;
  traceTime: number;
  activeRecalls: number;
  suppliersVerified: number;
  regulatoryCompliance: number;
  supplierAudits: {
    total: number;
    passed: number;
    failed: number;
    pending: number;
  };
  responseTime: {
    average: number;
    foodSafety: number;
    productRecalls: number;
    complianceIssues: number;
  };
}

export interface BlockchainData {
  transactions: BlockchainTransaction[];
  criticalIssues: CriticalIssue[];
  traceabilityData: ProductTrace[];
  complianceMetrics: ComplianceMetrics;
  lastUpdate: Date;
  networkStatus: 'synchronized' | 'syncing' | 'error';
}
