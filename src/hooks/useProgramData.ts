
import { useState, useEffect } from 'react';

export const useProgramData = (isRunning: boolean) => {
  const [convergenceData, setConvergenceData] = useState<any[]>([]);
  const [performanceData, setPerformanceData] = useState<any[]>([]);

  const generateRealtimeConvergenceData = (step: number, inputData: any) => {
    const data = [];
    const matrixSize = inputData?.matrixSize || 3;
    const maxSteps = Math.min(step + 1, matrixSize * 3);
    
    console.log(`📊 Generating convergence data for step ${step}, matrix size ${matrixSize}`);
    
    for (let i = 1; i <= maxSteps; i++) {
      // Error decreases based on matrix size and complexity
      const complexityFactor = matrixSize / 3;
      const baseError = Math.exp(-i * (0.3 / complexityFactor));
      const noise = Math.random() * 0.05;
      
      data.push({
        iteration: i,
        error: baseError + noise,
        residual: baseError * 0.7 + noise * 0.5,
        progress: (i / (matrixSize * 3)) * 100,
        matrixSize: matrixSize
      });
    }
    return data;
  };

  const generateRealtimePerformanceData = (step: number, inputData: any) => {
    if (!inputData) return [];
    
    const currentMatrixSize = inputData.matrixSize;
    const mode = inputData.mode;
    
    console.log(`⚡ Generating performance data for ${currentMatrixSize}x${currentMatrixSize} matrix`);
    
    // Create performance data based on current execution
    const sizes = [];
    for (let size = 2; size <= Math.max(5, currentMatrixSize); size++) {
      if (size <= currentMatrixSize || step > size * 10) {
        sizes.push(size);
      }
    }
    
    const data = sizes.map(size => {
      // Performance scaling based on actual matrix operations
      const luComplexity = Math.pow(size, 3) / 1000;
      const substitutionComplexity = Math.pow(size, 2) / 1000;
      
      // Add realistic variation
      const variation = 1 + (Math.random() - 0.5) * 0.3;
      
      return {
        matrixSize: `${size}x${size}`,
        luTime: luComplexity * variation,
        forwardTime: substitutionComplexity * 0.3 * variation,
        backwardTime: substitutionComplexity * 0.4 * variation,
        totalTime: (luComplexity + substitutionComplexity * 0.7) * variation,
        mode: size === currentMatrixSize ? mode : 'reference',
        isActive: size === currentMatrixSize
      };
    });
    
    return data;
  };

  useEffect(() => {
    if (!isRunning) {
      // Generate static data when not running
      const staticConvergenceData = [];
      for (let i = 1; i <= 8; i++) {
        staticConvergenceData.push({
          iteration: i,
          error: Math.exp(-i * 0.4) * (Math.random() * 0.1 + 0.01),
          residual: Math.exp(-i * 0.3) * (Math.random() * 0.05 + 0.005),
          progress: (i / 8) * 100,
          matrixSize: 3
        });
      }
      setConvergenceData(staticConvergenceData);

      const staticPerfData = [3, 4, 5].map(size => ({
        matrixSize: `${size}x${size}`,
        luTime: Math.pow(size, 3) / 1000 * (1 + Math.random() * 0.2),
        forwardTime: Math.pow(size, 2) / 1000 * 0.3 * (1 + Math.random() * 0.2),
        backwardTime: Math.pow(size, 2) / 1000 * 0.4 * (1 + Math.random() * 0.2),
        totalTime: Math.pow(size, 3) / 1000 * 1.7 * (1 + Math.random() * 0.2),
        mode: 'static',
        isActive: false
      }));
      setPerformanceData(staticPerfData);
    }
  }, [isRunning]);

  const updateChartData = (executionStep: number, inputData: any) => {
    if (!inputData) return;
    
    console.log(`🔄 Updating charts - Step: ${executionStep}, Matrix: ${inputData.matrixSize}x${inputData.matrixSize}`);
    
    const convergenceData = generateRealtimeConvergenceData(Math.floor(executionStep / 3), inputData);
    const performanceData = generateRealtimePerformanceData(executionStep, inputData);
    
    setConvergenceData(convergenceData);
    setPerformanceData(performanceData);
  };

  return {
    convergenceData,
    performanceData,
    updateChartData
  };
};
