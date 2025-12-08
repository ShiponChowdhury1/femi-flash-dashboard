'use client';

import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Pagination } from '@/src/components/ui/Pagination';
import { PaymentHistory } from '@/src/types/revenue';
import { PaymentDetailsModal } from './PaymentDetailsModal';

interface PaymentHistoryTableProps {
  data: PaymentHistory[];
}

export const PaymentHistoryTable: React.FC<PaymentHistoryTableProps> = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentHistory | null>(null);
  const itemsPerPage = 4;

  // Filter data
  const filteredData = selectedFilter === 'All' 
    ? data 
    : data.filter(item => item.plan === selectedFilter);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const filters = ['All', 'Starter', 'Professional', 'Business'];

  const getPlanStyles = (plan: string) => {
    switch (plan) {
      case 'Professional':
        return {
          bg: '#E0E7FF',
          color: '#4338CA',
          border: '#C7D2FE',
        };
      case 'Business':
        return {
          bg: '#DBEAFE',
          color: '#1E40AF',
          border: '#BFDBFE',
        };
      case 'Starter':
        return {
          bg: '#F3F4F6',
          color: '#374151',
          border: '#E5E7EB',
        };
      default:
        return {
          bg: '#F3F4F6',
          color: '#374151',
          border: '#E5E7EB',
        };
    }
  };

  const handleOpenModal = (payment: PaymentHistory) => {
    setSelectedPayment(payment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPayment(null);
  };

  return (
    <>
      <PaymentDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        payment={selectedPayment}
      />
      
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Payment History</h3>
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setSelectedFilter(filter);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">User name</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Email</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((payment) => (
                  <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">{payment.userName}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{payment.email}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">${payment.amount}</td>
                    <td className="py-4 px-4">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border"
                        style={{
                          backgroundColor: getPlanStyles(payment.plan).bg,
                          color: getPlanStyles(payment.plan).color,
                          borderColor: getPlanStyles(payment.plan).border,
                        }}
                      >
                        {payment.plan}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`text-sm font-medium ${
                        payment.status === 'Completed' ? 'text-green-600' :
                        payment.status === 'Failed' ? 'text-red-600' :
                        'text-yellow-600'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{payment.date}</td>
                    <td className="py-4 px-4">
                      <button 
                        onClick={() => handleOpenModal(payment)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </Card>
    </>
  );
};
