import { DashboardStats } from '../types/dashboard';
import { ChartDataPoint } from '../types/common';

export const dashboardStats: DashboardStats = {
  totalUsers: 4231,
  totalUsersGrowth: 12.5,
  activeSubscriptions: 1847,
  activeSubscriptionsGrowth: 8.2,
  monthlyRevenue: 42800,
  monthlyRevenueGrowth: 20.1,
  websitesPublished: 892,
  websitesPublishedGrowth: 15.3,
};

export const userGrowthData = {
  totalUsers: [
    { label: 'Jan', value: 50, date: '2026-01' },
    { label: 'Feb', value: 75, date: '2026-02' },
    { label: 'Mar', value: 60, date: '2026-03' },
    { label: 'Apr', value: 90, date: '2026-04' },
    { label: 'May', value: 85, date: '2026-05' },
    { label: 'Jun', value: 70, date: '2026-06' },
  ] as ChartDataPoint[],
  subscriptionUsers: [
    { label: 'Jan', value: 30, date: '2026-01' },
    { label: 'Feb', value: 45, date: '2026-02' },
    { label: 'Mar', value: 40, date: '2026-03' },
    { label: 'Apr', value: 60, date: '2026-04' },
    { label: 'May', value: 55, date: '2026-05' },
    { label: 'Jun', value: 50, date: '2026-06' },
  ] as ChartDataPoint[],
  inactiveUsers: [
    { label: 'Jan', value: 20, date: '2026-01' },
    { label: 'Feb', value: 30, date: '2026-02' },
    { label: 'Mar', value: 20, date: '2026-03' },
    { label: 'Apr', value: 30, date: '2026-04' },
    { label: 'May', value: 30, date: '2026-05' },
    { label: 'Jun', value: 20, date: '2026-06' },
  ] as ChartDataPoint[],
  dateRange: 'Last 6 Months',
};

export const monthlyRevenueData: ChartDataPoint[] = [
  { label: 'Jan', value: 40, date: '2026-01' },
  { label: 'Jan', value: 50, date: '2026-01' },
  { label: 'Jan', value: 65, date: '2026-01' },
  { label: 'Jan', value: 45, date: '2026-01' },
  { label: 'Feb', value: 55, date: '2026-02' },
  { label: 'Feb', value: 70, date: '2026-02' },
  { label: 'Feb', value: 60, date: '2026-02' },
  { label: 'Feb', value: 50, date: '2026-02' },
  { label: 'Mar', value: 75, date: '2026-03' },
  { label: 'Mar', value: 65, date: '2026-03' },
  { label: 'Mar', value: 55, date: '2026-03' },
  { label: 'Mar', value: 70, date: '2026-03' },
  { label: 'Apr', value: 80, date: '2026-04' },
  { label: 'Apr', value: 90, date: '2026-04' },
  { label: 'Apr', value: 85, date: '2026-04' },
  { label: 'Apr', value: 75, date: '2026-04' },
];
