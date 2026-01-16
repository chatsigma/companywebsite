import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 animate-bounce border-2 md:border-4 border-white"
      style={{ animationDuration: '2s' }}
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};