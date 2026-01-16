import React from 'react';
import { Check } from 'lucide-react';

interface StickyButtonProps {
  text: string;
  onClick: () => void;
}

export const StickyButton: React.FC<StickyButtonProps> = ({ text, onClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-[#25D366] shadow-2xl border-t-2 border-white md:hidden z-50">
      <button
        onClick={onClick}
        className="w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base"
      >
        <Check className="w-4 h-4" />
        {text}
      </button>
    </div>
  );
};