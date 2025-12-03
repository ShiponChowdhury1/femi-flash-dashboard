import React from 'react';
import { Card } from '@/src/components/ui/Card';
import { colors } from '@/src/constants/colors';
import { Users, Calendar, DollarSign } from 'lucide-react';

interface PlanCardProps {
  name: string;
  description: string;
  users: number;
  duration: string;
  price: number;
  highlights: string[];
  onEdit: () => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  name,
  description,
  users,
  duration,
  price,
  highlights,
  onEdit,
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ color: colors.textPrimary }}>
            {name}
          </h3>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {description}
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Users size={16} style={{ color: colors.textSecondary }} />
            <span style={{ color: colors.textPrimary }}>{users.toLocaleString()} users</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} style={{ color: colors.textSecondary }} />
            <span style={{ color: colors.textPrimary }}>Duration: {duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign size={16} style={{ color: colors.textSecondary }} />
            <span style={{ color: colors.textPrimary }}>
              Price: ${price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <p className="text-sm font-semibold mb-2" style={{ color: colors.textPrimary }}>
            Highlight of the plan
          </p>
          <ul className="space-y-1.5">
            {highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm"
                style={{ color: colors.textSecondary }}
              >
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          style={{
            backgroundColor: 'transparent',
            border: `1px solid ${colors.border}`,
            color: colors.textPrimary,
          }}
        >
          Edit Plan
        </button>
      </div>
    </Card>
  );
};
