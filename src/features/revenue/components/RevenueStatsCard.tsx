import React from 'react';
import { Card } from '@/src/components/ui/Card';

interface RevenueStatsCardProps {
  label: string;
  amount: number;
  growth: number;
  isPositive: boolean;
}

export const RevenueStatsCard: React.FC<RevenueStatsCardProps> = ({
  label,
  amount,
  growth,
  isPositive,
}) => {
  const formattedAmount = label === 'Avg. Revenue per User' 
    ? `$${amount.toFixed(2)}` 
    : `$${amount.toLocaleString()}`;
  
  const formattedGrowth = label === 'Avg. Revenue per User'
    ? `$${growth.toFixed(2)}`
    : `+${growth}%`;

  return (
    <Card className="p-6">
      <div className="space-y-2">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-3xl font-bold text-gray-900">{formattedAmount}</p>
        <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {formattedGrowth} ↑
        </p>
      </div>
    </Card>
  );
};
