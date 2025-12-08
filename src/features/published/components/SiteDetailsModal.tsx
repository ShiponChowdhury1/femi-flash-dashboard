'use client';

import React from 'react';
import { Modal } from '@/src/components/ui/Modal';
import { PublishedSite } from '@/src/types/published';

interface SiteDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  site: PublishedSite | null;
}

export const SiteDetailsModal: React.FC<SiteDetailsModalProps> = ({
  isOpen,
  onClose,
  site,
}) => {
  if (!site) return null;

  const handleVisitSite = () => {
    window.open(`https://${site.url}`, '_blank');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={site.siteName}>
      <div className="p-6 space-y-6">
        {/* Site Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site Name
          </label>
          <input
            type="text"
            value={site.siteName}
            readOnly
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none"
          />
        </div>

        {/* Site Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site Description
          </label>
          <textarea
            value={site.description}
            readOnly
            rows={3}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none resize-none"
          />
        </div>

        {/* Category tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category tags
          </label>
          <div className="flex flex-wrap gap-2">
            {site.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Site link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site link
          </label>
          <a
            href={`https://${site.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700 underline"
          >
            www.{site.url}
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50"
          >
            Close
          </button>
          <button
            onClick={handleVisitSite}
            className="px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
          >
            Visit Site
          </button>
        </div>
      </div>
    </Modal>
  );
};
