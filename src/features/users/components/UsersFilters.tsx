'use client';

import React from 'react';
import { Input } from '@/src/components/ui/Input';
import { colors } from '@/src/constants/colors';
import { useAppSelector, useAppDispatch } from '@/src/store/hooks';
import { setSearchFilter, setPlanFilter } from '../slice';
import { PlanType } from '@/src/types/common';

export const UsersFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.users);

  const tabs: Array<'All' | PlanType> = ['All', 'Starter', 'Professional', 'Business'];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search users..."
            value={filters.search}
            onChange={(e) => dispatch(setSearchFilter(e.target.value))}
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
        </div>
      </div>

      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setPlanFilter(tab))}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{
              backgroundColor: filters.plan === tab ? colors.borderLight : 'transparent',
              color: filters.plan === tab ? colors.textPrimary : colors.textSecondary,
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
