'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Card } from '@/src/components/ui/Card';
import { UsersFilters, UsersTable } from '@/src/features/users';

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Users Management" subtitle="Manage and monitor all platform users." />
      
      <div className="p-8">
        <Card>
          <UsersFilters />
          <UsersTable />
        </Card>
      </div>
    </div>
  );
}
