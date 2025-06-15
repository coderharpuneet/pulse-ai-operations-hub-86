import { BlockchainTransaction, CriticalIssue, ProductTrace, ComplianceMetrics, BlockchainData } from '../types/blockchain';
import { PredictiveAnalyticsData, RiskPrediction, PerformanceMetric, SupplyChainInsight, TrendData } from '../types/predictive';

class BlockchainSimulationService {
  private data: BlockchainData;
  private subscribers: ((data: BlockchainData) => void)[] = [];
  private simulationInterval: NodeJS.Timeout | null = null;

  constructor() {
    this.data = this.initializeData();
  }

  private initializeData(): BlockchainData {
    return {
      transactions: this.generateInitialTransactions(),
      criticalIssues: this.generateInitialIssues(),
      traceabilityData: this.generateInitialTraceability(),
      complianceMetrics: this.generateInitialMetrics(),
      predictiveAnalytics: this.generateInitialPredictiveAnalytics(),
      lastUpdate: new Date(),
      networkStatus: 'synchronized'
    };
  }

  private generateInitialTransactions(): BlockchainTransaction[] {
    const types: BlockchainTransaction['type'][] = ['food_safety', 'supplier_audit', 'product_recall', 'carbon_tracking'];
    const statuses: BlockchainTransaction['status'][] = ['verified', 'action_required', 'pending'];
    const priorities: BlockchainTransaction['priority'][] = ['critical', 'high', 'medium', 'low'];
    
    const locations = [
      'Produce Section', 'Global Supply Chain', 'Store Network', 'Transportation',
      'Distribution Center', 'Manufacturing Plant', 'Warehouse', 'Cold Storage'
    ];

    const details = {
      food_safety: [
        'Romaine lettuce batch traced from farm to shelf - E.coli test: NEGATIVE',
        'Temperature monitoring alert - Cold chain maintained',
        'Organic certification verified for produce batch',
        'Pesticide residue test completed - Within acceptable limits'
      ],
      supplier_audit: [
        'Supplier factory inspection completed - Labor standards verified',
        'Environmental compliance audit passed',
        'Quality management system certification renewed',
        'Ethical sourcing standards confirmed'
      ],
      product_recall: [
        'Instant recall triggered for Lot#ABC123 - 47 stores affected',
        'Precautionary recall initiated - Foreign object detected',
        'Voluntary recall completed - Label discrepancy resolved',
        'Emergency recall - Allergen contamination detected'
      ],
      carbon_tracking: [
        'Shipment carbon footprint: 2.3 kg CO2 - 15% below target',
        'Transportation emissions calculated - Route optimized',
        'Packaging materials carbon impact assessed',
        'Supply chain carbon offset verified'
      ]
    };

    return Array.from({ length: 6 }, (_, i) => {
      const type = types[Math.floor(Math.random() * types.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const priority = priorities[Math.floor(Math.random() * priorities.length)];
      
      return {
        id: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 3)}`,
        type,
        location: locations[Math.floor(Math.random() * locations.length)],
        timestamp: `${Math.floor(Math.random() * 30) + 1} min ago`,
        status,
        details: details[type][Math.floor(Math.random() * details[type].length)],
        priority,
        blockHeight: Math.floor(Math.random() * 1000000) + 500000,
        hash: `0x${Math.random().toString(16).substr(2, 64)}`
      };
    });
  }

  private generateInitialIssues(): CriticalIssue[] {
    const issues = [
      {
        id: 1,
        title: 'Food Safety Alert',
        description: 'Potential contamination detected in Batch #FRZ2024001',
        affectedProducts: 1247,
        storesImpacted: 23,
        timeToResolve: '4 hours',
        status: 'investigating' as const,
        severity: 'critical' as const,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      },
      {
        id: 2,
        title: 'Supplier Compliance',
        description: 'Factory audit reveals working condition violations',
        affectedProducts: 3456,
        storesImpacted: 156,
        timeToResolve: '72 hours',
        status: 'action_required' as const,
        severity: 'high' as const,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 24 hours ago
      },
      {
        id: 3,
        title: 'Counterfeit Detection',
        description: 'Suspicious electronics batch identified in supply chain',
        affectedProducts: 89,
        storesImpacted: 7,
        timeToResolve: '24 hours',
        status: 'resolved' as const,
        severity: 'medium' as const,
        createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000) // 48 hours ago
      }
    ];

    return issues;
  }

  private generateInitialTraceability(): ProductTrace[] {
    return [
      {
        product: 'Organic Bananas',
        origin: 'Ecuador - Farm Co-op #247',
        journey: ['Harvested', 'Processed', 'Shipped', 'Distributed', 'Shelved'],
        carbonFootprint: '1.2 kg CO2',
        laborCompliance: 'Verified',
        qualityChecks: 'Passed (3/3)',
        lastUpdated: new Date()
      },
      {
        product: 'Ground Beef',
        origin: 'Texas Ranch - ID: TX-4429',
        journey: ['Raised', 'Processed', 'Packaged', 'Cold Chain', 'Delivered'],
        carbonFootprint: '15.7 kg CO2',
        laborCompliance: 'Verified',
        qualityChecks: 'Passed (5/5)',
        lastUpdated: new Date()
      }
    ];
  }

  private generateInitialMetrics(): ComplianceMetrics {
    return {
      foodSafetyScore: 99.7,
      traceTime: 2.3,
      activeRecalls: 4,
      suppliersVerified: 12847,
      regulatoryCompliance: 98.2,
      supplierAudits: {
        total: 847,
        passed: 784,
        failed: 41,
        pending: 22
      },
      responseTime: {
        average: 2.1,
        foodSafety: 1.8,
        productRecalls: 2.3,
        complianceIssues: 2.7
      }
    };
  }

  private generateInitialPredictiveAnalytics(): PredictiveAnalyticsData {
    return {
      riskPredictions: this.generateRiskPredictions(),
      performanceMetrics: this.generatePerformanceMetrics(),
      supplyChainInsights: this.generateSupplyChainInsights(),
      trendData: this.generateTrendData()
    };
  }

  private generateRiskPredictions(): RiskPrediction[] {
    const predictions = [
      {
        id: 'risk-001',
        category: 'food_safety' as const,
        title: 'Potential E.coli Contamination',
        description: 'AI detected abnormal temperature patterns in cold storage facility TX-001 that may lead to bacterial growth.',
        riskScore: 78,
        probability: 65,
        impact: 'high' as const,
        timeframe: '48-72 hours',
        affectedProducts: 15420,
        preventiveActions: ['Immediate temperature audit', 'Enhanced sanitization', 'Product testing'],
        confidenceLevel: 87,
        createdAt: new Date()
      },
      {
        id: 'risk-002',
        category: 'supply_disruption' as const,
        title: 'Supplier Delivery Delays',
        description: 'Weather patterns and traffic data suggest 35% chance of delivery delays from key supplier in next 5 days.',
        riskScore: 45,
        probability: 35,
        impact: 'medium' as const,
        timeframe: '3-5 days',
        affectedProducts: 8900,
        preventiveActions: ['Alternative routing', 'Backup supplier activation', 'Inventory buffer'],
        confidenceLevel: 72,
        createdAt: new Date()
      },
      {
        id: 'risk-003',
        category: 'quality' as const,
        title: 'Produce Quality Degradation',
        description: 'Machine learning models predict accelerated spoilage rates for organic produce based on storage conditions.',
        riskScore: 62,
        probability: 58,
        impact: 'medium' as const,
        timeframe: '24-48 hours',
        affectedProducts: 3200,
        preventiveActions: ['Optimize storage humidity', 'Priority distribution', 'Quality inspections'],
        confidenceLevel: 91,
        createdAt: new Date()
      },
      {
        id: 'risk-004',
        category: 'compliance' as const,
        title: 'Regulatory Audit Alert',
        description: 'Pattern analysis indicates higher probability of surprise FDA inspection based on recent industry incidents.',
        riskScore: 55,
        probability: 42,
        impact: 'high' as const,
        timeframe: '1-2 weeks',
        affectedProducts: 0,
        preventiveActions: ['Documentation review', 'Staff training', 'Process audits'],
        confidenceLevel: 68,
        createdAt: new Date()
      }
    ];

    return predictions;
  }

  private generatePerformanceMetrics(): PerformanceMetric[] {
    return [
      {
        id: 'metric-001',
        name: 'Supply Chain Efficiency',
        value: 94.2,
        unit: '%',
        trend: 'up',
        changePercent: 2.1,
        benchmark: 89.5,
        target: 95.0,
        category: 'efficiency'
      },
      {
        id: 'metric-002',
        name: 'Food Safety Score',
        value: 99.1,
        unit: '%',
        trend: 'stable',
        changePercent: 0.0,
        benchmark: 97.8,
        target: 99.5,
        category: 'safety'
      },
      {
        id: 'metric-003',
        name: 'Carbon Footprint',
        value: 2.34,
        unit: 'kg CO2/item',
        trend: 'down',
        changePercent: -5.2,
        benchmark: 2.67,
        target: 2.20,
        category: 'sustainability'
      },
      {
        id: 'metric-004',
        name: 'Quality Compliance',
        value: 98.7,
        unit: '%',
        trend: 'up',
        changePercent: 1.3,
        benchmark: 96.2,
        target: 99.0,
        category: 'quality'
      }
    ];
  }

  private generateSupplyChainInsights(): SupplyChainInsight[] {
    return [
      {
        id: 'insight-001',
        type: 'cost_saving',
        title: 'Optimize Transportation Routes',
        description: 'AI identified 12% fuel savings by consolidating deliveries and optimizing route planning across 47 stores.',
        potentialSavings: 245000,
        implementationTime: '2-3 weeks',
        difficulty: 'medium',
        priority: 'high',
        roiPercent: 340
      },
      {
        id: 'insight-002',
        type: 'efficiency',
        title: 'Automated Inventory Reordering',
        description: 'Machine learning can predict demand patterns and automate 89% of routine reorder decisions.',
        potentialSavings: 156000,
        implementationTime: '4-6 weeks',
        difficulty: 'hard',
        priority: 'medium',
        roiPercent: 220
      },
      {
        id: 'insight-003',
        type: 'risk_mitigation',
        title: 'Supplier Diversification',
        description: 'Reduce single-supplier dependency for critical items by establishing relationships with 3 backup suppliers.',
        potentialSavings: 89000,
        implementationTime: '6-8 weeks',
        difficulty: 'medium',
        priority: 'high',
        roiPercent: 180
      },
      {
        id: 'insight-004',
        type: 'optimization',
        title: 'Cold Chain Enhancement',
        description: 'IoT-based temperature monitoring can reduce spoilage by 23% and improve food safety compliance.',
        potentialSavings: 312000,
        implementationTime: '3-4 weeks',
        difficulty: 'easy',
        priority: 'critical',
        roiPercent: 450
      }
    ];
  }

  private generateTrendData() {
    const now = new Date();
    const generateTrend = (baseValue: number, variance: number, points: number = 10) => {
      return Array.from({ length: points }, (_, i) => ({
        timestamp: new Date(now.getTime() - (points - i) * 30 * 60 * 1000), // 30 min intervals
        value: baseValue + (Math.random() - 0.5) * variance,
        category: 'trend'
      }));
    };

    return {
      foodSafety: generateTrend(98.5, 2),
      supplierPerformance: generateTrend(94, 8),
      carbonFootprint: generateTrend(2.4, 0.6),
      responseTime: generateTrend(2.1, 0.8)
    };
  }

  private simulateRealTimeUpdates() {
    // Simulate new transactions
    if (Math.random() < 0.3) {
      const newTransaction = this.generateRandomTransaction();
      this.data.transactions.unshift(newTransaction);
      
      // Keep only latest 10 transactions
      if (this.data.transactions.length > 10) {
        this.data.transactions = this.data.transactions.slice(0, 10);
      }
    }

    // Simulate metric updates
    if (Math.random() < 0.2) {
      this.updateMetrics();
    }

    // Update timestamp
    this.data.lastUpdate = new Date();
    
    // Notify subscribers
    this.notifySubscribers();
  }

  private generateRandomTransaction(): BlockchainTransaction {
    const types: BlockchainTransaction['type'][] = ['food_safety', 'supplier_audit', 'product_recall', 'carbon_tracking'];
    const statuses: BlockchainTransaction['status'][] = ['verified', 'action_required', 'pending'];
    const priorities: BlockchainTransaction['priority'][] = ['critical', 'high', 'medium', 'low'];
    
    const type = types[Math.floor(Math.random() * types.length)];
    
    return {
      id: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 3)}`,
      type,
      location: 'Real-time Update',
      timestamp: 'Just now',
      status: statuses[Math.floor(Math.random() * statuses.length)],
      details: `Real-time ${type.replace('_', ' ')} update - Block confirmed`,
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      blockHeight: Math.floor(Math.random() * 1000000) + 500000,
      hash: `0x${Math.random().toString(16).substr(2, 64)}`
    };
  }

  private updateMetrics() {
    const metrics = this.data.complianceMetrics;
    
    // Small random variations
    metrics.foodSafetyScore += (Math.random() - 0.5) * 0.1;
    metrics.traceTime += (Math.random() - 0.5) * 0.1;
    
    // Ensure realistic bounds
    metrics.foodSafetyScore = Math.max(95, Math.min(100, metrics.foodSafetyScore));
    metrics.traceTime = Math.max(1.5, Math.min(3.0, metrics.traceTime));
  }

  private notifySubscribers() {
    this.subscribers.forEach(callback => callback(this.data));
  }

  public subscribe(callback: (data: BlockchainData) => void): () => void {
    this.subscribers.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.subscribers.indexOf(callback);
      if (index > -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }

  public getData(): BlockchainData {
    return { ...this.data };
  }

  public startSimulation() {
    if (this.simulationInterval) return;
    
    console.log('Starting blockchain simulation...');
    this.simulationInterval = setInterval(() => {
      this.simulateRealTimeUpdates();
    }, 3000); // Update every 3 seconds
  }

  public stopSimulation() {
    if (this.simulationInterval) {
      clearInterval(this.simulationInterval);
      this.simulationInterval = null;
      console.log('Blockchain simulation stopped');
    }
  }
}

export const blockchainService = new BlockchainSimulationService();
