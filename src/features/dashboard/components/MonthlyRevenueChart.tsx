'use client';

import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { colors } from '@/src/constants/colors';
import { useAppSelector, useAppDispatch } from '@/src/store/hooks';
import { setRevenuePeriod } from '../slice';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const MonthlyRevenueChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { monthlyRevenue, filters } = useAppSelector((state) => state.dashboard);

  const chartData = monthlyRevenue.reduce((acc, item) => {
    const existing = acc.find((d) => d.month === item.label);
    if (existing) {
      existing.revenue += item.value;
    } else {
      acc.push({ month: item.label, revenue: item.value });
    }
    return acc;
  }, [] as { month: string; revenue: number }[]);

  const periods = ['This Month', 'Last Month', 'Last 3 Months', 'Last 6 Months'] as const;

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold" style={{ color: colors.textPrimary }}>
            Monthly Revenue
          </h3>
          <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
            Subscription revenue over the month
          </p>
        </div>
        <select
          value={filters.revenuePeriod}
          onChange={(e) =>
            dispatch(setRevenuePeriod(e.target.value as typeof filters.revenuePeriod))
          }
          className="px-3 py-2 rounded-lg border text-sm"
          style={{
            backgroundColor: colors.surface,
            borderColor: colors.border,
            color: colors.textPrimary,
          }}
        >
          {periods.map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.borderLight} />
          <XAxis dataKey="month" stroke={colors.textMuted} />
          <YAxis stroke={colors.textMuted} />
          <Tooltip />
          <Bar dataKey="revenue" fill={colors.chartPrimary} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
