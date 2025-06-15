
import { useState, useEffect } from 'react';

export const useProgramData = (isRunning: boolean) => {
  const [convergenceData, setConvergenceData] = useState<any[]>([]);
  const [performanceData, setPerformanceData] = useState<any[]>([]);

  const generateRealtimeConvergenceData = (step: number) => {
    const data = [];
    const maxSteps = Math.min(step + 1, 10);
    for (let i = 1; i <= maxSteps; i++) {
      data.push({
        iteration: i,
        error: Math.exp(-i * 0.5) * (Math.random() * 0.1 + 0.001),
        residual: Math.exp(-i * 0.3) * (Math.random() * 0.05 + 0.0005),
        progress: (i / 10) * 100
      });
    }
    return data;
  };

  const generateRealtimePerformanceData = (step: number) => {
    const sizes = [3, 5, 10, 25, 50, 100];
    const maxSizes = Math.min(step / 10 + 1, 6);
    const data = sizes.slice(0, maxSizes).map(size => ({
      matrixSize: `${size}x${size}`,
      luTime: Math.pow(size, 3) * 0.001 + Math.random() * 0.5,
      forwardTime: Math.pow(size, 2) * 0.0005 + Math.random() * 0.1,
      backwardTime: Math.pow(size, 2) * 0.0005 + Math.random() * 0.1
    }));
    return data;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRunning) {
        const staticData = [];
        for (let i = 1; i <= 10; i++) {
          staticData.push({
            iteration: i,
            error: Math.exp(-i * 0.5) * Math.random() * 0.1 + 0.001,
            residual: Math.exp(-i * 0.3) * Math.random() * 0.05 + 0.0005,
            progress: (i / 10) * 100
          });
        }
        setConvergenceData(staticData);

        const sizes = [3, 5, 10, 25, 50, 100];
        const staticPerfData = sizes.map(size => ({
          matrixSize: `${size}x${size}`,
          luTime: Math.pow(size, 3) * 0.001 + Math.random() * 0.5,
          forwardTime: Math.pow(size, 2) * 0.0005 + Math.random() * 0.1,
          backwardTime: Math.pow(size, 2) * 0.0005 + Math.random() * 0.1
        }));
        setPerformanceData(staticPerfData);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const updateChartData = (executionStep: number) => {
    const convergenceData = generateRealtimeConvergenceData(Math.floor(executionStep / 8));
    const performanceData = generateRealtimePerformanceData(executionStep);
    setConvergenceData(convergenceData);
    setPerformanceData(performanceData);
  };

  return {
    convergenceData,
    performanceData,
    updateChartData
  };
};
