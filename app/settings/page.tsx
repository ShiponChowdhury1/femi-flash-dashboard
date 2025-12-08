'use client';

import React, { useState } from 'react';
import { Header } from '@/src/components/layout/Header';
import { 
  SettingsSidebar, 
  GeneralSettings, 
  PersonalInformation, 
  PasswordSecurity, 
  About, 
  TermsOfUse, 
  PrivacyPolicy 
} from '@/src/features/settings/components';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('general');

  const renderContent = () => {
    switch (activeSection) {
      case 'general':
        return <GeneralSettings />;
      case 'personal':
        return <PersonalInformation />;
      case 'security':
        return <PasswordSecurity />;
      case 'about':
        return <About />;
      case 'terms':
        return <TermsOfUse />;
      case 'privacy':
        return <PrivacyPolicy />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Settings" subtitle="Manage your dashboard and platform settings." />
      
      <div className="flex h-[calc(100vh-120px)]">
        <SettingsSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
