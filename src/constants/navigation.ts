export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  order: number;
}

export const navigationItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    order: 1,
  },
  {
    id: 'users',
    label: 'Users',
    icon: 'users',
    path: '/users',
    order: 2,
  },
  {
    id: 'subscriptions',
    label: 'Subscriptions',
    icon: 'subscriptions',
    path: '/subscriptions',
    order: 3,
  },
  {
    id: 'revenue',
    label: 'Revenue',
    icon: 'revenue',
    path: '/revenue',
    order: 4,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'notifications',
    path: '/notifications',
    order: 5,
  },
  {
    id: 'templates',
    label: 'Templates',
    icon: 'templates',
    path: '/templates',
    order: 6,
  },
  {
    id: 'published',
    label: 'Published',
    icon: 'published',
    path: '/published',
    order: 7,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    path: '/settings',
    order: 8,
  },
  {
    id: 'logout',
    label: 'Logout',
    icon: 'logout',
    path: '/logout',
    order: 9,
  },
];
