import React from 'react';

interface PulsingBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const PulsingBadge: React.FC<PulsingBadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-[#1877F2] rounded-full animate-ping opacity-75"></div>
      <div className="relative bg-[#25D366] text-white px-2 py-1 md:px-4 md:py-2 rounded-full font-bold text-xs md:text-sm">
        {children}
      </div>
    </div>
  );
};