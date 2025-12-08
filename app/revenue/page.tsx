'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import {
  RevenueStatsCard,
  TotalEarningsChart,
  RevenueByPlanChart,
  PaymentHistoryTable,
} from '@/src/features/revenue/components';
import {
  revenueCards,
  totalEarningsData,
  totalEarnings,
  earningsGrowth,
  planRevenueData,
  paymentHistoryData,
} from '@/src/data/revenue';

export default function RevenuePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="Revenue" 
        subtitle="Track all financial metrics and payment history." 
      />
      
      <div className="p-8 space-y-6">
        {/* Revenue Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueCards.map((card, index) => (
            <RevenueStatsCard
              key={index}
              label={card.label}
              amount={card.amount}
              growth={card.growth}
              isPositive={card.isPositive}
            />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TotalEarningsChart
            data={totalEarningsData}
            totalEarnings={totalEarnings}
            growth={earningsGrowth}
          />
          <RevenueByPlanChart data={planRevenueData} />
        </div>

        {/* Payment History Table */}
        <PaymentHistoryTable data={paymentHistoryData} />
      </div>
    </div>
  );
}
