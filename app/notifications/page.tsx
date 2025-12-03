'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Card } from '@/src/components/ui/Card';

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Notifications" subtitle="Manage system notifications and alerts." />
      
      <div className="p-8">
        <Card>
          <p className="text-gray-600">Notifications feature coming soon...</p>
        </Card>
      </div>
    </div>
  );
}
