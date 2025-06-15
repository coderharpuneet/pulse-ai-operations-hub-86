import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Shield, CheckCircle, Eye, Link, Blocks, AlertTriangle, Clock, MapPin, Truck, Leaf, Users, FileText, Zap, Search, Filter, SortAsc, SortDesc } from 'lucide-react';
import { useBlockchainData } from '../hooks/useBlockchainData';
import { BlockchainTransaction } from '../types/blockchain';
import PredictiveAnalytics from './PredictiveAnalytics';

const BlockchainTrustLedger = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState<BlockchainTransaction | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const { data: blockchainData, isLoading, error, isConnected } = useBlockchainData();

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Connecting to blockchain network...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error || !blockchainData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-600">Error loading blockchain data: {error}</p>
        </div>
      </div>
    );
  }

  const { transactions, criticalIssues, traceabilityData, complianceMetrics } = blockchainData;

  // Filter and sort transactions
  const filteredTransactions = transactions
    .filter(tx => {
      const matchesSearch = tx.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tx.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tx.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || tx.type === filterType;
      const matchesStatus = filterStatus === 'all' || tx.status === filterStatus;
      return matchesSearch && matchesType && matchesStatus;
    })
    .sort((a, b) => {
      const aTime = new Date(a.timestamp === 'Just now' ? Date.now() : Date.now() - parseInt(a.timestamp) * 60000);
      const bTime = new Date(b.timestamp === 'Just now' ? Date.now() : Date.now() - parseInt(b.timestamp) * 60000);
      return sortOrder === 'desc' ? bTime.getTime() - aTime.getTime() : aTime.getTime() - bTime.getTime();
    });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'food_safety': return <Shield className="h-4 w-4 text-white" />;
      case 'supplier_audit': return <Users className="h-4 w-4 text-white" />;
      case 'product_recall': return <AlertTriangle className="h-4 w-4 text-white" />;
      case 'carbon_tracking': return <Leaf className="h-4 w-4 text-white" />;
      default: return <Blocks className="h-4 w-4 text-white" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'food_safety': return <Badge className="bg-red-100 text-red-800">Food Safety</Badge>;
      case 'supplier_audit': return <Badge className="bg-blue-100 text-blue-800">Supplier Audit</Badge>;
      case 'product_recall': return <Badge className="bg-orange-100 text-orange-800">Product Recall</Badge>;
      case 'carbon_tracking': return <Badge className="bg-green-100 text-green-800">Carbon Tracking</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilterType('all');
    setFilterStatus('all');
    setSortOrder('desc');
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{complianceMetrics.foodSafetyScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-600">Food Safety Score</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{complianceMetrics.traceTime.toFixed(1)}s</div>
              <div className="text-sm text-gray-600">Product Trace Time</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{complianceMetrics.activeRecalls}</div>
              <div className="text-sm text-gray-600">Active Recalls</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{complianceMetrics.suppliersVerified.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Suppliers Verified</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="activity">Live Activity</TabsTrigger>
          <TabsTrigger value="issues">Critical Issues</TabsTrigger>
          <TabsTrigger value="traceability">Product Traceability</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Dashboard</TabsTrigger>
          <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Real-Time Blockchain Activity</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                <span className="text-sm text-gray-600">
                  {isConnected ? 'Network synchronized' : 'Network disconnected'}
                </span>
              </div>
            </div>

            {/* Enhanced Filters and Search */}
            <div className="mb-6 space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-64">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="food_safety">Food Safety</SelectItem>
                    <SelectItem value="supplier_audit">Supplier Audit</SelectItem>
                    <SelectItem value="product_recall">Product Recall</SelectItem>
                    <SelectItem value="carbon_tracking">Carbon Tracking</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="action_required">Action Required</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                  className="flex items-center gap-2"
                >
                  {sortOrder === 'desc' ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
                  Sort
                </Button>

                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Clear Filters
                </Button>
              </div>
              
              <div className="text-sm text-gray-500">
                Showing {filteredTransactions.length} of {transactions.length} transactions
              </div>
            </div>

            <div className="space-y-4">
              {filteredTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      {getTypeIcon(tx.type)}
                    </div>
                    <div className={`absolute -top-1 -right-1 w-4 h-4 ${getPriorityColor(tx.priority)} rounded-full border-2 border-white`}></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-mono text-gray-600">{tx.id}</span>
                        {getTypeBadge(tx.type)}
                      </div>
                      <div className="flex items-center space-x-1">
                        {tx.status === 'verified' ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-xs text-green-600">Verified</span>
                          </>
                        ) : (
                          <>
                            <Clock className="h-4 w-4 text-orange-500" />
                            <span className="text-xs text-orange-600">Action Required</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm text-gray-900">{tx.details}</div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Location: {tx.location}</span>
                        <span>{tx.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="ghost" className="flex-shrink-0" onClick={() => setSelectedTransaction(tx)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Transaction Details</DialogTitle>
                      </DialogHeader>
                      {selectedTransaction && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-700">Transaction ID</label>
                              <p className="text-sm font-mono text-gray-900 bg-gray-50 p-2 rounded">{selectedTransaction.id}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-700">Block Height</label>
                              <p className="text-sm text-gray-900">{selectedTransaction.blockHeight?.toLocaleString()}</p>
                            </div>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium text-gray-700">Hash</label>
                            <p className="text-sm font-mono text-gray-900 bg-gray-50 p-2 rounded break-all">{selectedTransaction.hash}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-700">Type</label>
                              <div className="mt-1">{getTypeBadge(selectedTransaction.type)}</div>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-700">Priority</label>
                              <div className="mt-1">
                                <Badge className={getPriorityColor(selectedTransaction.priority).replace('bg-', 'bg-opacity-20 text-') + '-800'}>
                                  {selectedTransaction.priority.toUpperCase()}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-gray-700">Details</label>
                            <p className="text-sm text-gray-900 mt-1">{selectedTransaction.details}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-gray-700">Location</label>
                              <p className="text-sm text-gray-900">{selectedTransaction.location}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-gray-700">Timestamp</label>
                              <p className="text-sm text-gray-900">{selectedTransaction.timestamp}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              ))}

              {filteredTransactions.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">
                    <Search className="h-12 w-12 mx-auto" />
                  </div>
                  <p className="text-gray-600">No transactions match your current filters</p>
                  <Button variant="outline" size="sm" onClick={resetFilters} className="mt-2">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="issues" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {criticalIssues.map((issue) => (
              <Card key={issue.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className={`h-5 w-5 ${
                      issue.status === 'resolved' ? 'text-green-500' : 
                      issue.status === 'investigating' ? 'text-orange-500' : 'text-red-500'
                    }`} />
                    <h4 className="font-semibold text-gray-900">{issue.title}</h4>
                  </div>
                  <Badge className={
                    issue.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    issue.status === 'investigating' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }>
                    {issue.status.replace('_', ' ')}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{issue.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">{issue.affectedProducts.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Products Affected</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">{issue.storesImpacted}</div>
                    <div className="text-xs text-gray-600">Stores Impacted</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">ETA: {issue.timeToResolve}</span>
                  </div>
                  <Button size="sm" variant={issue.status === 'resolved' ? 'outline' : 'default'}>
                    {issue.status === 'resolved' ? 'View Report' : 'Take Action'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="traceability" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {traceabilityData.map((product, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">{product.product}</h4>
                  <Button size="sm" variant="outline">
                    <MapPin className="h-4 w-4 mr-1" />
                    Track
                  </Button>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Origin:</span>
                    <span className="text-sm text-gray-600">{product.origin}</span>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-700">Supply Chain Journey:</span>
                    <div className="flex items-center space-x-2 mt-2">
                      {product.journey.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center">
                          <div className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {step}
                          </div>
                          {stepIndex < product.journey.length - 1 && (
                            <div className="w-2 h-0.5 bg-blue-300 mx-1"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">Carbon Footprint:</span>
                      <span className="text-xs font-medium">{product.carbonFootprint}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">Labor Compliance:</span>
                      <span className="text-xs font-medium text-green-600">{product.laborCompliance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">Quality Checks:</span>
                      <span className="text-xs font-medium text-green-600">{product.qualityChecks}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{complianceMetrics.regulatoryCompliance.toFixed(1)}%</div>
                <div className="text-sm text-gray-600 mb-4">Regulatory Compliance</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>FDA Standards</span>
                    <span className="text-green-600">✓ Compliant</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor Laws</span>
                    <span className="text-green-600">✓ Compliant</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Environmental</span>
                    <span className="text-orange-600">⚠ Review</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{complianceMetrics.supplierAudits.total}</div>
                <div className="text-sm text-gray-600 mb-4">Supplier Audits This Month</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Passed</span>
                    <span className="text-green-600">{complianceMetrics.supplierAudits.passed} ({((complianceMetrics.supplierAudits.passed / complianceMetrics.supplierAudits.total) * 100).toFixed(1)}%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Failed</span>
                    <span className="text-red-600">{complianceMetrics.supplierAudits.failed} ({((complianceMetrics.supplierAudits.failed / complianceMetrics.supplierAudits.total) * 100).toFixed(1)}%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending</span>
                    <span className="text-orange-600">{complianceMetrics.supplierAudits.pending} ({((complianceMetrics.supplierAudits.pending / complianceMetrics.supplierAudits.total) * 100).toFixed(1)}%)</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{complianceMetrics.responseTime.average.toFixed(1)}s</div>
                <div className="text-sm text-gray-600 mb-4">Average Response Time</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Food Safety</span>
                    <span className="text-green-600">{complianceMetrics.responseTime.foodSafety.toFixed(1)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Product Recalls</span>
                    <span className="text-green-600">{complianceMetrics.responseTime.productRecalls.toFixed(1)}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Issues</span>
                    <span className="text-orange-600">{complianceMetrics.responseTime.complianceIssues.toFixed(1)}s</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Predictive Intelligence & Analytics</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                <span className="text-sm text-gray-600">AI models running</span>
              </div>
            </div>
            <PredictiveAnalytics data={blockchainData.predictiveAnalytics} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlockchainTrustLedger;
