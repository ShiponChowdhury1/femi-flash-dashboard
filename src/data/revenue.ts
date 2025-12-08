import { RevenueCardData, EarningsDataPoint, PlanRevenue, PaymentHistory } from '../types/revenue';

export const revenueCards: RevenueCardData[] = [
  {
    label: 'Total Revenue',
    amount: 171478,
    growth: 23.1,
    isPositive: true,
  },
  {
    label: 'Monthly Revenue',
    amount: 45678,
    growth: 15.8,
    isPositive: true,
  },
  {
    label: 'Avg. Revenue per User',
    amount: 42.80,
    growth: 32.5,
    isPositive: true,
  },
];

export const totalEarningsData: EarningsDataPoint[] = [
  { month: 'Jan', amount: 50 },
  { month: 'Jan', amount: 60 },
  { month: 'Jan', amount: 45 },
  { month: 'Feb', amount: 55 },
  { month: 'Feb', amount: 65 },
  { month: 'Feb', amount: 50 },
  { month: 'Mar', amount: 60 },
  { month: 'Mar', amount: 70 },
  { month: 'Mar', amount: 55 },
  { month: 'Apr', amount: 75 },
  { month: 'Apr', amount: 85 },
  { month: 'Apr', amount: 70 },
  { month: 'May', amount: 90 },
  { month: 'May', amount: 100 },
  { month: 'May', amount: 85 },
  { month: 'Jun', amount: 95 },
  { month: 'Jun', amount: 85 },
  { month: 'Jun', amount: 75 },
];

export const planRevenueData: PlanRevenue[] = [
  {
    plan: 'Professional',
    percentage: 65,
    amount: 7250,
    color: '#4F46E5',
  },
  {
    plan: 'Business',
    percentage: 20,
    amount: 1000,
    color: '#F59E0B',
  },
  {
    plan: 'Starter',
    percentage: 15,
    amount: 1000,
    color: '#EF4444',
  },
];

export const paymentHistoryData: PaymentHistory[] = [
  {
    id: '1',
    userName: 'Zeus grey',
    email: 'zeus@example.com',
    amount: 29.99,
    plan: 'Professional',
    status: 'Completed',
    date: '15-Dec-2025',
  },
  {
    id: '2',
    userName: 'Zeus grey',
    email: 'zeus@example.com',
    amount: 29.99,
    plan: 'Professional',
    status: 'Completed',
    date: '15-Dec-2025',
  },
  {
    id: '3',
    userName: 'Hera green',
    email: 'hera@example.com',
    amount: 89.99,
    plan: 'Business',
    status: 'Failed',
    date: '05-Jan-2026',
  },
  {
    id: '4',
    userName: 'Hera green',
    email: 'hera@example.com',
    amount: 89.99,
    plan: 'Business',
    status: 'Failed',
    date: '05-Jan-2026',
  },
  {
    id: '5',
    userName: 'Apollo smith',
    email: 'apollo@example.com',
    amount: 29.99,
    plan: 'Professional',
    status: 'Completed',
    date: '12-Dec-2025',
  },
  {
    id: '6',
    userName: 'Athena wise',
    email: 'athena@example.com',
    amount: 89.99,
    plan: 'Business',
    status: 'Completed',
    date: '10-Dec-2025',
  },
  {
    id: '7',
    userName: 'Poseidon blue',
    email: 'poseidon@example.com',
    amount: 9.99,
    plan: 'Starter',
    status: 'Completed',
    date: '08-Dec-2025',
  },
  {
    id: '8',
    userName: 'Artemis hunt',
    email: 'artemis@example.com',
    amount: 29.99,
    plan: 'Professional',
    status: 'Pending',
    date: '05-Dec-2025',
  },
];

export const totalEarnings = 329000;
export const earningsGrowth = 12.5;
