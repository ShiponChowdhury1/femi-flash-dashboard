export interface Notification {
  id: string;
  type: 'signup' | 'payment' | 'published' | 'failed';
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}

export interface NotificationStats {
  total: number;
  unread: number;
  read: number;
}

export interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}
