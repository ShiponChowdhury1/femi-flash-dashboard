import { Notification, NotificationStats, NotificationSetting } from '../types/notification';

export const notificationStats: NotificationStats = {
  total: 100,
  unread: 10,
  read: 10,
};

export const notificationSettings: NotificationSetting[] = [
  {
    id: '1',
    label: 'New Signups',
    description: 'Receive notifications for newsignups',
    enabled: true,
  },
  {
    id: '2',
    label: 'Receive notifications for payment alerts',
    description: '',
    enabled: false,
  },
  {
    id: '3',
    label: 'Receive notifications for publishedsites',
    description: '',
    enabled: false,
  },
  {
    id: '4',
    label: 'Receive notifications for system errors',
    description: '',
    enabled: false,
  },
  {
    id: '5',
    label: 'Community support',
    description: '',
    enabled: false,
  },
  {
    id: '6',
    label: 'FlashBuilder branding',
    description: '',
    enabled: false,
  },
];

export const recentNotifications: Notification[] = [
  {
    id: '1',
    type: 'signup',
    title: 'New User Signup',
    description: 'John Doe signed up for Professional plan',
    time: '5 minutes ago',
    isRead: false,
  },
  {
    id: '2',
    type: 'payment',
    title: 'Payment Received',
    description: 'Sarah Smith paid $99 for Business plan',
    time: '5 minutes ago',
    isRead: false,
  },
  {
    id: '3',
    type: 'published',
    title: 'Website Published',
    description: 'Mike Johnson published "Tech Startup"',
    time: '5 minutes ago',
    isRead: false,
  },
  {
    id: '4',
    type: 'failed',
    title: 'Payment Failed',
    description: 'Payment failed for Emily Brown',
    time: '5 minutes ago',
    isRead: false,
  },
  {
    id: '5',
    type: 'signup',
    title: 'New User Signup',
    description: 'John Doe signed up for Professional plan',
    time: '5 minutes ago',
    isRead: true,
  },
  {
    id: '6',
    type: 'payment',
    title: 'Payment Received',
    description: 'Sarah Smith paid $99 for Business plan',
    time: '5 minutes ago',
    isRead: true,
  },
  {
    id: '7',
    type: 'published',
    title: 'Website Published',
    description: 'Mike Johnson published "Tech Startup"',
    time: '5 minutes ago',
    isRead: true,
  },
  {
    id: '8',
    type: 'failed',
    title: 'Payment Failed',
    description: 'Payment failed for Emily Brown',
    time: '5 minutes ago',
    isRead: true,
  },
  {
    id: '9',
    type: 'signup',
    title: 'New User Signup',
    description: 'John Doe signed up for Professional plan',
    time: '5 minutes ago',
    isRead: true,
  },
  {
    id: '10',
    type: 'payment',
    title: 'Payment Received',
    description: 'Sarah Smith paid $99 for Business plan',
    time: '5 minutes ago',
    isRead: true,
  },
];
