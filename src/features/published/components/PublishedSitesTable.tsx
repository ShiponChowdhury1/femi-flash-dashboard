'use client';

import React, { useState } from 'react';
import { Card } from '@/src/components/ui/Card';
import { Pagination } from '@/src/components/ui/Pagination';
import { PublishedSite } from '@/src/types/published';

interface PublishedSitesTableProps {
  sites: PublishedSite[];
  onSiteClick: (site: PublishedSite) => void;
}

export const PublishedSitesTable: React.FC<PublishedSitesTableProps> = ({
  sites,
  onSiteClick,
}) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter sites
  const filteredSites =
    selectedFilter === 'All'
      ? sites
      : selectedFilter === 'Published'
      ? sites.filter((site) => site.status === 'Live')
      : sites.filter((site) => site.status === 'Unpublished');

  // Pagination
  const totalPages = Math.ceil(filteredSites.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSites = filteredSites.slice(startIndex, endIndex);

  const filters = ['All', 'Published', 'Unpublished'];

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
      default:
        return {
          bg: '#F3F4F6',
          color: '#374151',
          border: '#E5E7EB',
        };
    }
  };

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Sites</h3>
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
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Site Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  URL
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Plan
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                  Date Published
                </th>
                <th className="text-left py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {currentSites.map((site) => (
                <tr
                  key={site.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-900">
                    {site.siteName}
                  </td>
                  <td className="py-4 px-4">
                    <a
                      href={`https://${site.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {site.url}
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border"
                      style={{
                        backgroundColor: getPlanStyles(site.plan).bg,
                        color: getPlanStyles(site.plan).color,
                        borderColor: getPlanStyles(site.plan).border,
                      }}
                    >
                      {site.plan}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-sm font-medium ${
                        site.status === 'Live'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {site.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    {site.datePublished}
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => onSiteClick(site)}
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
  );
};
