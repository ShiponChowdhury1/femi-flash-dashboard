import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardState, DashboardStats, UserGrowthData } from '@/src/types/dashboard';
import { ChartDataPoint } from '@/src/types/common';
import { dashboardStats, userGrowthData, monthlyRevenueData } from '@/src/data/dashboard';
import { mockUsers } from '@/src/data/users';

const initialState: DashboardState = {
  stats: dashboardStats,
  userGrowth: userGrowthData,
  monthlyRevenue: monthlyRevenueData,
  recentActivity: mockUsers.slice(0, 4),
  loading: false,
  filters: {
    userGrowthPeriod: 'This Month',
    revenuePeriod: 'This Month',
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setStats(state, action: PayloadAction<DashboardStats>) {
      state.stats = action.payload;
    },
    setUserGrowth(state, action: PayloadAction<UserGrowthData>) {
      state.userGrowth = action.payload;
    },
    setMonthlyRevenue(state, action: PayloadAction<ChartDataPoint[]>) {
      state.monthlyRevenue = action.payload;
    },
    setRecentActivity(state, action: PayloadAction<any[]>) {
      state.recentActivity = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
    setUserGrowthPeriod(state, action: PayloadAction<DashboardState['filters']['userGrowthPeriod']>) {
      state.filters.userGrowthPeriod = action.payload;
    },
    setRevenuePeriod(state, action: PayloadAction<DashboardState['filters']['revenuePeriod']>) {
      state.filters.revenuePeriod = action.payload;
    },
  },
});

export const {
  setStats,
  setUserGrowth,
  setMonthlyRevenue,
  setRecentActivity,
  setLoading,
  setError,
  setUserGrowthPeriod,
  setRevenuePeriod,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
