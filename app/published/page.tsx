'use client';

import React, { useState } from 'react';
import { Header } from '@/src/components/layout/Header';
import {
  PublishedSitesTable,
  SiteDetailsModal,
} from '@/src/features/published/components';
import { publishedSites } from '@/src/data/published';
import { PublishedSite } from '@/src/types/published';

export default function PublishedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState<PublishedSite | null>(null);

  const handleSiteClick = (site: PublishedSite) => {
    setSelectedSite(site);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSite(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Published Websites"
        subtitle="Monitor and manage all published websites."
      />

      <div className="p-8">
        <PublishedSitesTable sites={publishedSites} onSiteClick={handleSiteClick} />
      </div>

      <SiteDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        site={selectedSite}
      />
    </div>
  );
}
