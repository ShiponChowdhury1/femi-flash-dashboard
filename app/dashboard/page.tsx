'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { StatsCard, UserGrowthChart, MonthlyRevenueChart, RecentActivityTable } from '@/src/features/dashboard';
import { useAppSelector } from '@/src/store/hooks';

export default function DashboardPage() {
  const { stats } = useAppSelector((state) => state.dashboard);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Dashboard" subtitle="Manage the platform with full control and clarity." />
      
      <div className="p-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total User"
            value={`${stats.totalUsers.toLocaleString()}+`}
            growth={stats.totalUsersGrowth}
          />
          <StatsCard
            title="Active Subscriptions"
            value={`${stats.activeSubscriptions.toLocaleString()}+`}
            growth={stats.activeSubscriptionsGrowth}
          />
          <StatsCard
            title="Monthly Revenue"
            value={`$${stats.monthlyRevenue.toLocaleString()}`}
            growth={stats.monthlyRevenueGrowth}
          />
          <StatsCard
            title="Websites Published"
            value={`${stats.websitesPublished.toLocaleString()}+`}
            growth={stats.websitesPublishedGrowth}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserGrowthChart />
          <MonthlyRevenueChart />
        </div>

        {/* Recent Activity Table */}
        <RecentActivityTable />
      </div>
    </div>
  );
}
