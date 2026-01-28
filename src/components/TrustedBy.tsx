import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

const TrustedBy = () => {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const companies = [
    {
      name: 'Trusted Partner 1',
      logo: '/2.png',
      color: '#25D366',
      fallbackText: 'TP1'
    },
    {
      name: 'Trusted Partner 2',
      logo: '/6.jpg',
      color: '#006AFF',
      fallbackText: 'TP2'
    },
    {
      name: 'Trusted Partner 3',
      logo: '/LAST3.jpg',
      color: '#9C27B0',
      fallbackText: 'TP3'
    },
    {
      name: 'Trusted Partner 4',
      logo: '/5.png',
      color: '#FF9800',
      fallbackText: 'TP4'
    },
    {
      name: 'Trusted Partner 5',
      logo: '/1.png',
      color: '#F44336',
      fallbackText: 'TP5'
    },
    {
      name: 'Trusted Partner 6',
      logo: '/3.jpg',
      color: '#4CAF50',
      fallbackText: 'TP6'
    }
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0">
            Trusted by 2,000+ Businesses Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-0">
            From startups to mid-market companies, businesses choose ChatSigma for reliable WhatsApp automation
          </p>
        </div>

        {/* Company logos with mobile optimization */}
        <div className="relative overflow-hidden bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-8 mb-6 sm:mb-8 md:mb-12 shadow-md sm:shadow-lg">
          <div className="absolute inset-0 bg-[#25D366]/3"></div>
          <div className="relative">
            <div className="flex animate-scroll-fast">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-2 sm:mx-3 md:mx-6 group"
                >
                  <div 
                    className="bg-white rounded-md sm:rounded-lg md:rounded-xl p-3 sm:p-4 md:p-8 shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-110 sm:hover:scale-125 min-w-[120px] sm:min-w-[180px] md:min-w-[240px] h-16 sm:h-24 md:h-32 flex items-center justify-center border-2 border-transparent hover:border-opacity-50 relative overflow-hidden"
                    style={{ 
                      '--hover-border-color': company.color,
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = company.color;
                      e.currentTarget.style.boxShadow = `0 10px 25px ${company.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {/* Company Logo or Fallback */}
                    {imageErrors[index] ? (
                      <div className="flex flex-col items-center justify-center h-full w-full">
                        <div
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white"
                          style={{ backgroundColor: company.color }}
                        >
                          <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-xs mt-2 text-gray-600 font-semibold text-center px-2">{company.name}</span>
                      </div>
                    ) : (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-10 sm:h-14 md:h-18 w-auto max-w-[100px] sm:max-w-[160px] md:max-w-[200px] object-contain transition-all duration-300"
                        loading="eager"
                        onError={() => handleImageError(index)}
                      />
                    )}

                    {/* Brand color accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: company.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats with mobile optimization */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="text-center group">
            <div className="relative mb-2 sm:mb-3 md:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#25D366] rounded-lg sm:rounded-xl md:rounded-2xl mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 sm:border-4 border-white shadow-md sm:shadow-lg">
                <div className="text-white text-sm sm:text-lg md:text-2xl">🏢</div>
              </div>
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 md:-top-2 md:-right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#006AFF] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#F6C90E] rounded-full animate-bounce"></div>
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2">2,000+</div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base">Active Businesses</div>
          </div>
          
          <div className="text-center group">
            <div className="relative mb-2 sm:mb-3 md:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#006AFF] rounded-lg sm:rounded-xl md:rounded-2xl mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 sm:border-4 border-white shadow-md sm:shadow-lg">
                <div className="text-white text-sm sm:text-lg md:text-2xl">💬</div>
              </div>
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 md:-top-2 md:-right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#25D366] rounded-full animate-pulse delay-300"></div>
              <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-500 rounded-full animate-bounce delay-200"></div>
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2">50M+</div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base">Messages Sent</div>
          </div>
          
          <div className="text-center group">
            <div className="relative mb-2 sm:mb-3 md:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-purple-500 rounded-lg sm:rounded-xl md:rounded-2xl mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 sm:border-4 border-white shadow-md sm:shadow-lg">
                <div className="text-white text-sm sm:text-lg md:text-2xl">⚡</div>
              </div>
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 md:-top-2 md:-right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-orange-500 rounded-full animate-pulse delay-500"></div>
              <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#25D366] rounded-full animate-bounce delay-400"></div>
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2">99.9%</div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base">Uptime</div>
          </div>
          
          <div className="text-center group">
            <div className="relative mb-2 sm:mb-3 md:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-500 rounded-lg sm:rounded-xl md:rounded-2xl mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 sm:border-4 border-white shadow-md sm:shadow-lg">
                <div className="text-white text-sm sm:text-lg md:text-2xl">🎧</div>
              </div>
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 md:-top-2 md:-right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-[#25D366] rounded-full animate-pulse delay-700"></div>
              <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#006AFF] rounded-full animate-bounce delay-600"></div>
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2">24/7</div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;