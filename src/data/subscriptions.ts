import { Subscription } from '@/src/types/subscription';

export const mockSubscriptionStats = {
  starterUsers: 4231,
  starterGrowth: 12.5,
  professionalUsers: 1847,
  professionalGrowth: 8.2,
  businessRevenue: 42800,
  businessGrowth: 20.1,
};

export const subscriptionPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Description of the plan.',
    users: 1243,
    duration: 'Free trial',
    price: 0,
    highlights: [
      'Highlight 1 goes here description',
      'Highlight 2 goes here description',
      'Highlight 3 goes here description',
      'Highlight 4 goes here description',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Description of the plan.',
    users: 1243,
    duration: '2 weeks',
    price: 29.0,
    highlights: [
      'Highlight 1 goes here description',
      'Highlight 2 goes here description',
      'Highlight 3 goes here description',
      'Highlight 4 goes here description',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Description of the plan.',
    users: 1243,
    duration: 'Per month',
    price: 49.99,
    highlights: [
      'Highlight 1 goes here description',
      'Highlight 2 goes here description',
      'Highlight 3 goes here description',
      'Highlight 4 goes here description',
    ],
  },
];
