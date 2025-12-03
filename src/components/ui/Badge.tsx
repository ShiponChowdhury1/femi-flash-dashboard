import React from 'react';
import { PlanType, StatusType } from '@/src/types/common';
import { colors } from '@/src/constants/colors';

interface BadgeProps {
  type: 'plan' | 'status';
  value: PlanType | StatusType;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, value, className = '' }) => {
  const getStyles = () => {
    if (type === 'plan') {
      const planStyles = {
        Starter: { bg: '#E0E7FF', color: '#4338CA', border: '#C7D2FE' },
        Professional: { bg: '#FEE2E2', color: '#991B1B', border: '#FECACA' },
        Business: { bg: '#DBEAFE', color: '#1E40AF', border: '#BFDBFE' },
      };
      return planStyles[value as PlanType];
    } else {
      const statusStyles = {
        Active: { bg: '#D1FAE5', color: colors.statusActive, border: '#A7F3D0' },
        Inactive: { bg: '#FEE2E2', color: colors.statusInactive, border: '#FECACA' },
        Pending: { bg: '#FEF3C7', color: '#D97706', border: '#FDE68A' },
      };
      return statusStyles[value as StatusType];
    }
  };

  const styles = getStyles();

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${className}`}
      style={{
        backgroundColor: styles.bg,
        color: styles.color,
        borderColor: styles.border,
      }}
    >
      {value}
    </span>
  );
};
