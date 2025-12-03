import { PlanType, StatusType } from './common';

export interface Subscription {
  id: string;
  userId: string;
  plan: PlanType;
  status: StatusType;
  startDate: string;
  endDate?: string;
  price: number;
  autoRenew: boolean;
}

export interface SubscriptionsState {
  list: Subscription[];
  loading: boolean;
  error?: string;
}
