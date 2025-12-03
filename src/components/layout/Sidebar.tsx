'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/src/constants/navigation';
import { colors } from '@/src/constants/colors';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside
      className="w-64 min-h-screen fixed left-0 top-0 flex flex-col"
      style={{ backgroundColor: colors.sidebarBg }}
    >
      <div className="p-6">
        <h1 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
          YOU FIT DO AM
        </h1>
      </div>

      <nav className="flex-1 px-3">
        {navigationItems.map((item) => {
          const isActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);
          
          return (
            <Link
              key={item.id}
              href={item.path}
              className="flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: isActive ? colors.sidebarButton : 'transparent',
                color: isActive ? '#FFFFFF' : colors.textPrimary,
              }}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
