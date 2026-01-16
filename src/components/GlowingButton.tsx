import React from 'react';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary'
}) => {
  const baseClasses = "relative font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg text-sm md:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 overflow-hidden";
  
  const variantClasses = variant === 'primary'
    ? "bg-[#25D366] text-white shadow-lg hover:shadow-2xl"
    : "bg-[#1877F2] text-white shadow-lg hover:shadow-2xl";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className} group`}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12"></div>
      {children}
    </button>
  );
};