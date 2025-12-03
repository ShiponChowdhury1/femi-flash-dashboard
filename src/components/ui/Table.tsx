import React, { ReactNode } from 'react';
import { colors } from '@/src/constants/colors';

interface TableProps {
  children: ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: ReactNode;
}

interface TableBodyProps {
  children: ReactNode;
}

interface TableRowProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

interface TableHeadProps {
  children: ReactNode;
  className?: string;
}

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> & {
  Header: React.FC<TableHeaderProps>;
  Body: React.FC<TableBodyProps>;
  Row: React.FC<TableRowProps>;
  Head: React.FC<TableHeadProps>;
  Cell: React.FC<TableCellProps>;
} = ({ children, className = '' }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full border-collapse ${className}`}>
        {children}
      </table>
    </div>
  );
};

Table.Header = ({ children }) => (
  <thead style={{ backgroundColor: colors.borderLight }}>
    {children}
  </thead>
);

Table.Body = ({ children }) => (
  <tbody style={{ backgroundColor: colors.surface }}>
    {children}
  </tbody>
);

Table.Row = ({ children, onClick, className = '' }) => (
  <tr
    onClick={onClick}
    className={`border-b transition-colors ${onClick ? 'cursor-pointer hover:bg-gray-50' : ''} ${className}`}
    style={{ borderColor: colors.border }}
  >
    {children}
  </tr>
);

Table.Head = ({ children, className = '' }) => (
  <th
    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${className}`}
    style={{ color: colors.textSecondary }}
  >
    {children}
  </th>
);

Table.Cell = ({ children, className = '' }) => (
  <td
    className={`px-6 py-4 whitespace-nowrap text-sm ${className}`}
    style={{ color: colors.textPrimary }}
  >
    {children}
  </td>
);
