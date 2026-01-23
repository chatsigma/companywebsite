import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919220304943?text=Hey%20Team%20Chatsigma%20I%20want%20to%20automate%20my%20business%20via%20ChatSigma', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {isExpanded ? (
        <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-[320px] group hover:shadow-[0_20px_60px_rgba(37,211,102,0.4)] transition-all duration-500 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] via-[#25D366] to-[#128C7E] opacity-100"></div>

            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-full transition-all duration-200 z-10 hover:rotate-90"
              aria-label="Close widget"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="relative w-full p-5 flex items-start gap-4 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative flex-shrink-0 mt-1">
                <div className="absolute -inset-1 bg-white/40 rounded-full animate-ping-slow"></div>
                <div className="absolute -inset-0.5 bg-white/30 rounded-full animate-pulse"></div>
                <div className="relative bg-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" fill="currentColor" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#10B981] border-2 border-white rounded-full animate-pulse"></div>
              </div>

              <div className="flex-1 text-left pr-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="text-base font-bold text-white leading-tight tracking-wide">
                    We're Here to Help 24/7
                  </div>
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                </div>
                <div className="text-sm text-white/95 leading-relaxed font-medium mb-2">
                  Talk to Our Agents Now
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-white/90 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                  <span className="font-semibold">Online</span>
                </div>
              </div>
            </button>

            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>

            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_10px_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 z-50 border-4 border-white animate-bounce-slow group"
          aria-label="Open WhatsApp"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">1</span>
          </div>
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-75"></div>
        </button>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px) translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0) translateY(0);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
