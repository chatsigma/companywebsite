import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919220304943?text=Hey%20Team%20Chatsigma%20I%20want%20to%20automate%20my%20business%20via%20ChatSigma', '_blank');
  };

  return (
    <>
      {isExpanded ? (
        <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
          <div className="relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-2xl shadow-2xl overflow-hidden max-w-[280px] hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close widget"
            >
              <X className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="w-full p-4 pr-8 flex items-center gap-3 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                <div className="relative bg-white p-2.5 rounded-full">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
              </div>

              <div className="flex-1 text-left">
                <div className="text-sm font-semibold leading-tight">
                  We're Here to Help 24X7
                </div>
                <div className="text-xs mt-1 opacity-95 leading-tight">
                  Talk to Our Agents now
                </div>
              </div>
            </button>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 border-4 border-white animate-bounce"
          style={{ animationDuration: '2s' }}
          aria-label="Open WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};
