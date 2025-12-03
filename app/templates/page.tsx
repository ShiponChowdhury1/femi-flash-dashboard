'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Card } from '@/src/components/ui/Card';

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Templates" subtitle="Manage content templates and themes." />
      
      <div className="p-8">
        <Card>
          <p className="text-gray-600">Templates feature coming soon...</p>
        </Card>
      </div>
    </div>
  );
}
