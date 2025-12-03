export type PlanType = 'Starter' | 'Professional' | 'Business';

export type StatusType = 'Active' | 'Inactive' | 'Pending';

export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

export interface FilterOptions {
  search?: string;
  plan?: PlanType | 'All';
  status?: StatusType | 'All';
  dateFrom?: string;
  dateTo?: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  date?: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: PaginationMeta;
  error?: string;
}
