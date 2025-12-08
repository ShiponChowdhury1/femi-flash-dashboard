'use client';

import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { NotificationSetting } from '@/src/types/notification';

interface NotificationSettingsProps {
  settings: NotificationSetting[];
  onToggle: (id: string) => void;
}

export const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  settings,
  onToggle,
}) => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Notifications settings</h3>
      <div className="space-y-4">
        {settings.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between py-2"
          >
            <div>
              <p className="text-sm text-gray-700">
                {setting.label}
                {setting.description && (
                  <span className="text-gray-500"> - {setting.description}</span>
                )}
              </p>
            </div>
            <button
              onClick={() => onToggle(setting.id)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                setting.enabled ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  setting.enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};
