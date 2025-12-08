'use client';

import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { EarningsDataPoint } from '@/src/types/revenue';

interface TotalEarningsChartProps {
  data: EarningsDataPoint[];
  totalEarnings: number;
  growth: number;
}

export const TotalEarningsChart: React.FC<TotalEarningsChartProps> = ({
  data,
  totalEarnings,
  growth,
}) => {
  const [selectedMonth, setSelectedMonth] = useState('This Month');

  const maxValue = Math.max(...data.map(d => d.amount));
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Earnings</h3>
          <p className="text-3xl font-bold text-gray-900">${totalEarnings.toLocaleString()}</p>
          <p className="text-sm text-green-600 mt-1">+{growth}% from last month</p>
        </div>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
          <option>Last 6 Months</option>
        </select>
      </div>

      {/* Chart */}
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full flex items-end justify-between gap-1">
          {data.map((point, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full relative" style={{ height: '100%' }}>
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                  style={{ height: `${(point.amount / maxValue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="ml-8 mt-2 flex justify-between text-xs text-gray-500">
          {months.map((month) => (
            <span key={month} className="flex-1 text-center">{month}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};
