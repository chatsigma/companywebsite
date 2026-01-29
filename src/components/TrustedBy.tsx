import React from 'react';

const TrustedBy = () => {
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