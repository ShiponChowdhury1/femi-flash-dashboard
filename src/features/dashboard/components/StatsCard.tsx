import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { colors } from '@/src/constants/colors';

interface StatsCardProps {
  title: string;
  value: string | number;
  growth: number;
  icon?: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, growth, icon }) => {
  const isPositive = growth >= 0;

  return (
    <Card className="hover:shadow-lg transition-shadow min-h-[140px]">
      <div className="flex items-start justify-between h-full">
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-sm font-medium mb-3" style={{ color: colors.textSecondary }}>
            {title}
          </p>
          <h3 className="text-3xl font-bold mb-3" style={{ color: colors.textPrimary }}>
            {value}
          </h3>
          <div className="flex items-center gap-1">
            <span
              className="text-sm font-medium"
              style={{ color: isPositive ? colors.statusActive : colors.statusInactive }}
            >
              {isPositive ? '↑' : '↓'} {Math.abs(growth)}%
            </span>
            <span className="text-sm" style={{ color: colors.textMuted }}>
              from last month
            </span>
          </div>
        </div>
        {icon && (
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: colors.borderLight }}
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
