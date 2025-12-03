'use client';

import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Button } from '@/src/components/ui/Button';
import { PlanCard, SubscriptionStatsCard, SubscriptionActivityTable } from '@/src/features/subscriptions';
import { mockSubscriptionStats, subscriptionPlans } from '@/src/data/subscriptions';

export default function SubscriptionsPage() {
  const handleEditPlan = (planName: string) => {
    console.log('Edit plan:', planName);
    // Add edit logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showSearch={false} />
      
      <div className="p-8 space-y-6">
        {/* Page Title with Create Button */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Subscriptions Management</h1>
            <p className="text-gray-600 mt-1">Manage subscription plans and view detailed metrics.</p>
          </div>
          <Button
            variant="primary"
            className="bg-[#003425] hover:bg-[#004d35]"
          >
            + Create Custom Plan
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SubscriptionStatsCard
            title="Starter User"
            value={`${mockSubscriptionStats.starterUsers.toLocaleString()}+`}
            growth={mockSubscriptionStats.starterGrowth}
          />
          <SubscriptionStatsCard
            title="Professional users"
            value={`${mockSubscriptionStats.professionalUsers.toLocaleString()}+`}
            growth={mockSubscriptionStats.professionalGrowth}
          />
          <SubscriptionStatsCard
            title="Business users"
            value={`$${mockSubscriptionStats.businessRevenue.toLocaleString()}`}
            growth={mockSubscriptionStats.businessGrowth}
          />
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              users={plan.users}
              duration={plan.duration}
              price={plan.price}
              highlights={plan.highlights}
              onEdit={() => handleEditPlan(plan.name)}
            />
          ))}
        </div>

        {/* Recent Activity Table */}
        <SubscriptionActivityTable />
      </div>
    </div>
  );
}
