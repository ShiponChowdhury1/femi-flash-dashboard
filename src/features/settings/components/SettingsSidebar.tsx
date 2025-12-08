'use client';

import React from 'react';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
}

const sidebarItems: SidebarItem[] = [
  { id: 'general', label: 'General Settings', icon: '⚙️' },
  { id: 'personal', label: 'Personal Information\'s', icon: '👤' },
  { id: 'security', label: 'Password & Security', icon: '🔒' },
  { id: 'about', label: 'About', icon: 'ℹ️' },
  { id: 'terms', label: 'Term of Use', icon: '📄' },
  { id: 'privacy', label: 'Privacy Policy', icon: '🔐' },
];

interface SettingsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function SettingsSidebar({ activeSection, onSectionChange }: SettingsSidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="space-y-2">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeSection === item.id
                ? 'bg-green-50 text-green-700 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
