'use client';

import React, { useState } from 'react';
import { Header } from '@/src/components/layout/Header';
import {
  NotificationStatsCard,
  NotificationSettings,
  RecentNotifications,
  NotificationsModal,
} from '@/src/features/notifications/components';
import {
  notificationStats,
  notificationSettings,
  recentNotifications,
} from '@/src/data/notifications';

export default function NotificationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [settings, setSettings] = useState(notificationSettings);

  const handleToggleSetting = (id: string) => {
    setSettings((prev) =>
      prev.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Notifications"
        subtitle="Manage notifications and send broadcasts to users."
      />

      <div className="p-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NotificationStatsCard
            label="Total Notifications"
            value={`${notificationStats.total}+`}
          />
          <NotificationStatsCard
            label="Unread"
            value={notificationStats.unread}
          />
          <NotificationStatsCard label="Read" value={notificationStats.read} />
        </div>

        {/* Notification Settings */}
        <NotificationSettings settings={settings} onToggle={handleToggleSetting} />

        {/* Recent Notifications */}
        <RecentNotifications
          notifications={recentNotifications}
          onNotificationClick={handleOpenModal}
        />
      </div>

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        notifications={recentNotifications}
      />
    </div>
  );
}
