'use client';

import React from 'react';

export default function About() {
  return (
    <div className="space-y-6">
      {/* Application Info */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Information</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Application Name</span>
            <span className="text-sm font-medium text-gray-900">FemiFlash Dashboard</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Version</span>
            <span className="text-sm font-medium text-gray-900">1.0.0</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Release Date</span>
            <span className="text-sm font-medium text-gray-900">December 2025</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-gray-600">Build Number</span>
            <span className="text-sm font-medium text-gray-900">2025.12.08</span>
          </div>
        </div>
      </div>

      {/* About FemiFlash */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">About FemiFlash</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            FemiFlash is a comprehensive platform designed to help businesses manage their
            online presence, subscriptions, and revenue streams efficiently.
          </p>
          <p>
            Our mission is to provide powerful tools that enable businesses to grow and
            succeed in the digital landscape.
          </p>
        </div>
      </div>

      {/* Contact & Support */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact & Support</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-gray-600">📧</span>
            <div>
              <p className="text-sm font-medium text-gray-900">Email Support</p>
              <a href="mailto:support@femiflash.com" className="text-sm text-green-600 hover:underline">
                support@femiflash.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gray-600">🌐</span>
            <div>
              <p className="text-sm font-medium text-gray-900">Website</p>
              <a href="https://femiflash.com" className="text-sm text-green-600 hover:underline">
                www.femiflash.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-gray-600">📚</span>
            <div>
              <p className="text-sm font-medium text-gray-900">Documentation</p>
              <a href="https://docs.femiflash.com" className="text-sm text-green-600 hover:underline">
                docs.femiflash.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Credits</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>© 2025 FemiFlash. All rights reserved.</p>
          <p>Developed with ❤️ by the FemiFlash Team</p>
        </div>
      </div>
    </div>
  );
}
