import React, { ButtonHTMLAttributes } from 'react';
import { colors } from '@/src/constants/colors';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: `bg-[${colors.paginationPrimary}] text-white hover:bg-[#3451D3] focus:ring-[${colors.paginationPrimary}]`,
    secondary: `bg-[${colors.sidebarButton}] text-white hover:bg-[#004d35] focus:ring-[${colors.sidebarButton}]`,
    outline: `border-2 border-[${colors.border}] bg-transparent hover:bg-[${colors.surface}] text-[${colors.textPrimary}]`,
    ghost: `bg-transparent hover:bg-[${colors.borderLight}] text-[${colors.textSecondary}]`,
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
