'use client';

import React, { useMemo, useState } from 'react';
import { Table } from '@/src/components/ui/Table';
import { Badge } from '@/src/components/ui/Badge';
import { Pagination } from '@/src/components/ui/Pagination';
import { useAppSelector, useAppDispatch } from '@/src/store/hooks';
import { setPage } from '../slice';
import { User } from '@/src/types/user';
import { UserDetailsModal } from './UserDetailsModal';
import { MoreVertical } from 'lucide-react';

export const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list, filters, pagination } = useAppSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSuspendUser = async (userId: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (success) {
          console.log('User suspended:', userId);
          resolve();
        } else {
          reject(new Error('Failed to suspend user'));
        }
      }, 1000);
    });
  };

  const handleUpdateUser = async (userId: string, name: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (success) {
          console.log('User updated:', userId, name);
          resolve();
        } else {
          reject(new Error('Failed to update user'));
        }
      }, 1000);
    });
  };

  const filteredUsers = useMemo(() => {
    let filtered = [...list];

    // Search filter
    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(search) ||
          user.email.toLowerCase().includes(search) ||
          user.contact?.toLowerCase().includes(search)
      );
    }

    // Plan filter
    if (filters.plan !== 'All') {
      filtered = filtered.filter((user) => user.plan === filters.plan);
    }

    // Status filter
    if (filters.status !== 'All') {
      filtered = filtered.filter((user) => user.status === filters.status);
    }

    return filtered;
  }, [list, filters]);

  const totalPages = Math.ceil(filteredUsers.length / pagination.pageSize);
  const paginatedUsers = filteredUsers.slice(
    (pagination.page - 1) * pagination.pageSize,
    pagination.page * pagination.pageSize
  );

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>User name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Contact</Table.Head>
            <Table.Head>Plan</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Created</Table.Head>
            <Table.Head> </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paginatedUsers.map((user: User) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.contact || '-'}</Table.Cell>
              <Table.Cell>
                <Badge type="plan" value={user.plan} />
              </Table.Cell>
              <Table.Cell>
                <Badge type="status" value={user.status} />
              </Table.Cell>
              <Table.Cell>{user.created}</Table.Cell>
              <Table.Cell>
                <button 
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => handleUserClick(user)}
                >
                  <MoreVertical size={20} />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination
            currentPage={pagination.page}
            totalPages={totalPages}
            onPageChange={(page) => dispatch(setPage(page))}
          />
        </div>
      )}

      <UserDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
        onSuspendUser={handleSuspendUser}
        onUpdateUser={handleUpdateUser}
      />
    </>
  );
};
