'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Card } from '@/src/components/ui/Card';

export default function RevenuePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Revenue" subtitle="Track and analyze revenue streams." />
      
      <div className="p-8">
        <Card>
          <p className="text-gray-600">Revenue analytics feature coming soon...</p>
        </Card>
      </div>
    </div>
  );
}
