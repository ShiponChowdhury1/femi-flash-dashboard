import { ChartDataPoint } from './common';

export interface DashboardStats {
  totalUsers: number;
  totalUsersGrowth: number;
  activeSubscriptions: number;
  activeSubscriptionsGrowth: number;
  monthlyRevenue: number;
  monthlyRevenueGrowth: number;
  websitesPublished: number;
  websitesPublishedGrowth: number;
}

export interface UserGrowthData {
  totalUsers: ChartDataPoint[];
  subscriptionUsers: ChartDataPoint[];
  inactiveUsers: ChartDataPoint[];
  dateRange: string;
}

export interface DashboardState {
  stats: DashboardStats;
  userGrowth: UserGrowthData;
  monthlyRevenue: ChartDataPoint[];
  recentActivity: any[]; // Will be typed with User type
  loading: boolean;
  error?: string;
  filters: {
    userGrowthPeriod: 'This Month' | 'Last Month' | 'Last 3 Months' | 'Last 6 Months';
    revenuePeriod: 'This Month' | 'Last Month' | 'Last 3 Months' | 'Last 6 Months';
  };
}
