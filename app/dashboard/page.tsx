'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { StatsCard, UserGrowthChart, MonthlyRevenueChart, RecentActivityTable } from '@/src/features/dashboard';
import { useAppSelector } from '@/src/store/hooks';

export default function DashboardPage() {
  const { stats } = useAppSelector((state) => state.dashboard);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-8 space-y-6">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#374151]">Dashboard</h1>
          <p className="text-[#ABABAB] mt-1 text-[18px]">Manage the platform with full control and clarity.</p>
        </div>

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
