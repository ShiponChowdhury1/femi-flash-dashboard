import { PlanType, StatusType } from './common';

export interface User {
  id: string;
  name: string;
  email: string;
  contact?: string;
  plan: PlanType;
  status: StatusType;
  created: string; // ISO date string
  lastActive?: string;
  avatar?: string;
}

export interface UsersState {
  list: User[];
  loading: boolean;
  error?: string;
  filters: {
    search: string;
    plan: PlanType | 'All';
    status: StatusType | 'All';
  };
  pagination: {
    page: number;
    pageSize: number;
    total: number;
  };
}
