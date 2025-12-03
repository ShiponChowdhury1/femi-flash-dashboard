import React, { InputHTMLAttributes } from 'react';
import { colors } from '@/src/constants/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1.5" style={{ color: colors.textPrimary }}>
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: colors.textMuted }}>
            {icon}
          </div>
        )}
        <input
          className={`w-full px-4 py-2 rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 ${
            icon ? 'pl-10' : ''
          } ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#4361EE]'} ${className}`}
          style={{
            backgroundColor: '#F3F4F6',
            borderColor: error ? '#EF4444' : colors.border,
            color: colors.textPrimary,
          }}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
