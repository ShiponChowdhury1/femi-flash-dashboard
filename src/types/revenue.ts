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
