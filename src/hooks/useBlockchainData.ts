
import { useState, useEffect } from 'react';
import { BlockchainData } from '../types/blockchain';
import { blockchainService } from '../services/blockchainSimulation';

export const useBlockchainData = () => {
  const [data, setData] = useState<BlockchainData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Initializing blockchain data hook...');
    
    try {
      // Get initial data
      const initialData = blockchainService.getData();
      setData(initialData);
      setIsLoading(false);
      
      // Subscribe to updates
      const unsubscribe = blockchainService.subscribe((updatedData) => {
        console.log('Received blockchain data update:', updatedData.lastUpdate);
        setData(updatedData);
      });
      
      // Start simulation
      blockchainService.startSimulation();
      
      // Cleanup on unmount
      return () => {
        console.log('Cleaning up blockchain data hook...');
        unsubscribe();
        blockchainService.stopSimulation();
      };
    } catch (err) {
      console.error('Error initializing blockchain data:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
    error,
    isConnected: data?.networkStatus === 'synchronized'
  };
};
