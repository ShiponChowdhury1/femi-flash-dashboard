import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { colors } from '@/src/constants/colors';

interface SubscriptionStatsCardProps {
  title: string;
  value: string | number;
  growth: number;
}

export const SubscriptionStatsCard: React.FC<SubscriptionStatsCardProps> = ({
  title,
  value,
  growth,
}) => {
  const isPositive = growth >= 0;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div>
        <p className="text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>
          {title}
        </p>
        <h3 className="text-2xl font-bold mb-2" style={{ color: colors.textPrimary }}>
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
    </Card>
  );
};
