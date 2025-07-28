import React from 'react';

interface PulsingBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const PulsingBadge: React.FC<PulsingBadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
      <div className="relative bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm">
        {children}
      </div>
    </div>
  );
};