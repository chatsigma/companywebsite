import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 relative z-20">
      <button
        className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset relative z-30 pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="font-semibold text-gray-900 text-base pr-4">{question}</span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 border-t border-gray-100 relative z-30">
          <p className="text-gray-600 text-sm leading-relaxed pt-3">{answer}</p>
        </div>
      )}
    </div>
  );
};