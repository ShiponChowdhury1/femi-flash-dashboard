import React from 'react';
import { Card } from '@/src/components/ui/Card';

interface NotificationStatsCardProps {
  label: string;
  value: string | number;
}

export const NotificationStatsCard: React.FC<NotificationStatsCardProps> = ({
  label,
  value,
}) => {
  return (
    <Card className="p-6">
      <div className="space-y-2">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </Card>
  );
};
