'use client';

import React from 'react';
import { Template } from '@/src/types/template';

interface TemplateCardProps {
  template: Template;
  onView: (template: Template) => void;
  onDelete: (template: Template) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onView,
  onDelete,
}) => {
  const [showActions, setShowActions] = React.useState(false);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover"
        />
        {showActions && (
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button
              onClick={() => onView(template)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              View
            </button>
            <button
              onClick={() => onDelete(template)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {template.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{template.description}</p>
      </div>
    </div>
  );
};
