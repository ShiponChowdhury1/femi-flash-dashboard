'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Card } from '@/src/components/ui/Card';

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Subscriptions" subtitle="Manage all subscription plans and billing." />
      
      <div className="p-8">
        <Card>
          <p className="text-gray-600">Subscriptions feature coming soon...</p>
        </Card>
      </div>
    </div>
  );
}
