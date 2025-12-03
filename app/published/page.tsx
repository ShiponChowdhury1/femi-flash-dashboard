'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Card } from '@/src/components/ui/Card';

export default function PublishedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Published" subtitle="View all published websites and content." />
      
      <div className="p-8">
        <Card>
          <p className="text-gray-600">Published content feature coming soon...</p>
        </Card>
      </div>
    </div>
  );
}
