export const colors = {
  // Sidebar
  sidebarBg: '#D1D5DB',
  sidebarButton: '#003425',
  
  // Surface
  surface: '#FFFFFF',
  
  // Input
  inputBg: 'rgba(255, 255, 255, 0.102)', // #FFFFFF1A
  
  // Charts
  chartPrimary: '#7987FF',
  
  // Buttons
  paginationPrimary: '#4361EE',
  
  // Status colors
  statusActive: '#10B981',
  statusInactive: '#EF4444',
  
  // Text
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  
  // Borders
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
} as const;

export type ColorKey = keyof typeof colors;
