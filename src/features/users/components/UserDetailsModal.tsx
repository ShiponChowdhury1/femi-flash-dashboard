'use client';

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@/src/components/ui/Modal';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { User } from '@/src/types/user';
import { CheckCircle, XCircle } from 'lucide-react';

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onSuspendUser: (userId: string) => Promise<void>;
  onUpdateUser: (userId: string, name: string) => Promise<void>;
}

type ModalView = 'details' | 'edit' | 'suspend' | 'success' | 'failed';

export const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  isOpen,
  onClose,
  user,
  onSuspendUser,
  onUpdateUser
}) => {
  const [currentView, setCurrentView] = useState<ModalView>('details');
  const [editedName, setEditedName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (isOpen && user) {
      setCurrentView('details');
      setEditedName(user.name);
    }
  }, [isOpen, user]);

  if (!user) return null;

  const handleEditUser = () => {
    setCurrentView('edit');
  };

  const handleSuspendClick = () => {
    setCurrentView('suspend');
  };

  const handleConfirmSuspend = async () => {
    setIsLoading(true);
    try {
      await onSuspendUser(user.id);
      setCurrentView('success');
    } catch {
      setCurrentView('failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    setIsLoading(true);
    try {
      await onUpdateUser(user.id, editedName);
      setCurrentView('success');
    } catch {
      setCurrentView('failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setCurrentView('details');
  };

  const handleSuccessConfirm = () => {
    onClose();
  };

  const handleModalClose = () => {
    setCurrentView('details');
    onClose();
  };

  // User Details View
  if (currentView === 'details') {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose} size="md">
        <ModalHeader title="User Details" subtitle={`${user.plan} user`} />
        <ModalBody>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <p className="text-base font-medium text-gray-900">{user.name}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <p className="text-base text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Plan</label>
                <p className="text-base text-gray-900">{user.plan}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Status</label>
                <p className="text-base text-gray-900">{user.status}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Member since</label>
                <p className="text-base text-gray-900">{user.created}</p>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={handleEditUser}>
            Edit User
          </Button>
          <Button 
            onClick={handleSuspendClick}
            style={{ backgroundColor: '#DC2626' }}
            className="text-white hover:opacity-90"
          >
            Suspend
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  // Edit User View
  if (currentView === 'edit') {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose} size="md">
        <ModalHeader title="User Details" subtitle={`${user.plan} user`} />
        <ModalBody>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Full Name</label>
              <Input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                placeholder="Enter full name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <p className="text-base text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Plan</label>
                <p className="text-base text-gray-900">{user.plan}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Status</label>
                <p className="text-base text-gray-900">{user.status}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Member since</label>
                <p className="text-base text-gray-900">{user.created}</p>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setCurrentView('details')}>
            Cancel
          </Button>
          <Button 
            onClick={handleSaveEdit}
            disabled={isLoading}
            style={{ backgroundColor: '#003425' }}
            className="text-white hover:opacity-90"
          >
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  // Suspend Confirmation View
  if (currentView === 'suspend') {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose} size="sm">
        <ModalBody>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Suspend User</h3>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to suspend this user?
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setCurrentView('details')}>
            Cancel
          </Button>
          <Button 
            onClick={handleConfirmSuspend}
            disabled={isLoading}
            style={{ backgroundColor: '#DC2626' }}
            className="text-white hover:opacity-90"
          >
            {isLoading ? 'Suspending...' : 'Suspend'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  // Success View
  if (currentView === 'success') {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose} size="sm">
        <ModalBody>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Success</h3>
            <p className="text-gray-600 text-center mb-6">
              Action is done successfully!
            </p>
            <Button 
              onClick={handleSuccessConfirm}
              style={{ backgroundColor: '#003425' }}
              className="text-white hover:opacity-90 min-w-[120px]"
            >
              Confirm
            </Button>
          </div>
        </ModalBody>
      </Modal>
    );
  }

  // Failed View
  if (currentView === 'failed') {
    return (
      <Modal isOpen={isOpen} onClose={handleModalClose} size="sm">
        <ModalBody>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Failed</h3>
            <p className="text-gray-600 text-center mb-6">
              Action is failed!
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={handleRetry}
                className="min-w-[100px]"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleRetry}
                style={{ backgroundColor: '#DC2626' }}
                className="text-white hover:opacity-90 min-w-[100px]"
              >
                Re-Try
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }

  return null;
};
