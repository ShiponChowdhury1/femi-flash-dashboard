'use client';

import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { colors } from '@/src/constants/colors';
import { useAppSelector, useAppDispatch } from '@/src/store/hooks';
import { setUserGrowthPeriod } from '../slice';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const UserGrowthChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userGrowth, filters } = useAppSelector((state) => state.dashboard);

  const chartData = userGrowth.totalUsers.map((item, index) => ({
    month: item.label,
    'Total User': item.value,
    'Subscriptions users': userGrowth.subscriptionUsers[index]?.value || 0,
    'Inactive users': userGrowth.inactiveUsers[index]?.value || 0,
  }));

  const periods = ['This Month', 'Last Month', 'Last 3 Months', 'Last 6 Months'] as const;

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold" style={{ color: colors.textPrimary }}>
            User Growth Analytics
          </h3>
          <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
            Total users over the last 6 months
          </p>
        </div>
        <select
          value={filters.userGrowthPeriod}
          onChange={(e) =>
            dispatch(setUserGrowthPeriod(e.target.value as typeof filters.userGrowthPeriod))
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
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.borderLight} />
          <XAxis dataKey="month" stroke={colors.textMuted} />
          <YAxis stroke={colors.textMuted} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Total User"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6', r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Subscriptions users"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ fill: '#8B5CF6', r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Inactive users"
            stroke="#EC4899"
            strokeWidth={2}
            dot={{ fill: '#EC4899', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
