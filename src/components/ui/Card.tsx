import React, { ReactNode } from 'react';
import { colors } from '@/src/constants/colors';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = true,
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  return (
    <div
      className={`rounded-lg ${paddingStyles[padding]} ${shadow ? 'shadow-md' : ''} ${className}`}
      style={{
        backgroundColor: colors.surface,
        borderColor: colors.borderLight,
      }}
    >
      {children}
    </div>
  );
};
