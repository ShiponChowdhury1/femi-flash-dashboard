'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/src/constants/navigation';
import { colors } from '@/src/constants/colors';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  DollarSign, 
  Bell, 
  BookDashed, 
  BookCheck, 
  Settings, 
  LogOut 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  dashboard: <LayoutDashboard size={20} />,
  users: <Users size={20} />,
  subscriptions: <CreditCard size={20} />,
  revenue: <DollarSign size={20} />,
  notifications: <Bell size={20} />,
  templates: <BookDashed size={20} />,
  published: <BookCheck size={20} />,
  settings: <Settings size={20} />,
  logout: <LogOut size={20} />,
};

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  // Separate logout from other items
  const mainItems = navigationItems.filter((item) => item.id !== 'logout');
  const logoutItem = navigationItems.find((item) => item.id === 'logout');

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

      <nav className="flex-1 px-3 flex flex-col">
        <div className="flex-1">
          {mainItems.map((item) => {
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
                {iconMap[item.id]}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Logout button at bottom */}
        {logoutItem && (
          <div className="pb-4">
            <Link
              href={logoutItem.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: pathname === logoutItem.path ? colors.sidebarButton : 'transparent',
                color: pathname === logoutItem.path ? '#FFFFFF' : colors.textPrimary,
              }}
            >
              {iconMap[logoutItem.id]}
              <span className="text-sm font-medium">{logoutItem.label}</span>
            </Link>
          </div>
        )}
      </nav>
    </aside>
  );
};
