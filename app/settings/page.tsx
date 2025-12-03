'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Card } from '@/src/components/ui/Card';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Settings" subtitle="Configure application settings and preferences." />
      
      <div className="p-8">
        <Card>
          <p className="text-gray-600">Settings feature coming soon...</p>
        </Card>
      </div>
    </div>
  );
}
