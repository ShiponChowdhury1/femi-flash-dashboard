'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Card } from '@/src/components/ui/Card';
import { UsersFilters, UsersTable } from '@/src/features/users';

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header showSearch={false} />
      
      <div className="p-8 space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600 mt-1">Manage and monitor all platform users.</p>
        </div>

        <Card>
          <UsersFilters />
          <UsersTable />
        </Card>
      </div>
    </div>
  );
}
