'use client';

import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Table } from '@/src/components/ui/Table';
import { Badge } from '@/src/components/ui/Badge';
import { Pagination } from '@/src/components/ui/Pagination';
import { colors } from '@/src/constants/colors';
import { mockUsers } from '@/src/data/users';
import { PlanType } from '@/src/types/common';

export const SubscriptionActivityTable: React.FC = () => {
  const [activePlan, setActivePlan] = useState<'All' | PlanType>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const filteredData =
    activePlan === 'All'
      ? mockUsers
      : mockUsers.filter((user) => user.plan === activePlan);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const tabs: Array<'All' | PlanType> = ['All', 'Starter', 'Professional', 'Business'];

  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4" style={{ color: colors.textPrimary }}>
          Recent Activity
        </h3>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActivePlan(tab);
                setCurrentPage(1);
              }}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: activePlan === tab ? colors.borderLight : 'transparent',
                color: activePlan === tab ? colors.textPrimary : colors.textSecondary,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>User name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Contact</Table.Head>
            <Table.Head>Plan</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Created</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paginatedData.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.contact}</Table.Cell>
              <Table.Cell>
                <Badge type="plan" value={user.plan} />
              </Table.Cell>
              <Table.Cell>
                <Badge type="status" value={user.status} />
              </Table.Cell>
              <Table.Cell>{user.created}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </Card>
  );
};
