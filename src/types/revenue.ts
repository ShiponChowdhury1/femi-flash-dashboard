export interface RevenueCardData {
  label: string;
  amount: number;
  growth: number;
  isPositive: boolean;
}

export interface EarningsDataPoint {
  month: string;
  amount: number;
}

export interface PlanRevenue {
  plan: string;
  percentage: number;
  amount: number;
  color: string;
}

export interface PaymentHistory {
  id: string;
  userName: string;
  email: string;
  amount: number;
  plan: string;
  status: 'Completed' | 'Failed' | 'Pending';
  date: string;
}

export interface RevenueData {
  date: string;
  amount: number;
  subscriptions: number;
  plan?: string;
}

export interface RevenueStats {
  total: number;
  growth: number;
  currency: string;
}

export interface RevenueState {
  data: RevenueData[];
  stats: RevenueStats;
  loading: boolean;
  error?: string;
}
