'use client';

import React from 'react';
import { Input } from '../ui/Input';
import { colors } from '@/src/constants/colors';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showSearch = true,
}) => {
  return (
    <header
      className="px-8 py-6 border-b"
      style={{
        backgroundColor: colors.surface,
        borderColor: colors.border,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 max-w-md">
          {showSearch && (
            <Input
              placeholder="Search for something"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Notifications"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: colors.textSecondary }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
              <img
                src="/avatar-placeholder.png"
                alt="Admin"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236B7280"%3E%3Cpath d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/%3E%3C/svg%3E';
                }}
              />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>
                Jessie Doe
              </p>
              <p className="text-xs" style={{ color: colors.textSecondary }}>
                Super Admin
              </p>
            </div>
          </div>
        </div>
      </div>

      {title && (
        <div>
          <h2 className="text-2xl font-semibold" style={{ color: colors.textPrimary }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
    </header>
  );
};
