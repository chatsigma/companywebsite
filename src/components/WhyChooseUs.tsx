import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Clock, Users, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newItems = [...prev];
              newItems[index] = true;
              return newItems;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: CheckCircle,
      title: 'Official WhatsApp Partner',
      description: 'Direct partnership with WhatsApp ensures reliable service and compliance with all policies.',
      color: 'text-[#25D366]',
      bgColor: 'bg-[#25D366]/10',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-[#25D366]/20 to-[#1da851]/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <div className="text-xl sm:text-3xl">🤝</div>
            </div>
            <div className="text-center">
              <div className="w-10 sm:w-16 h-10 sm:h-16 bg-[#25D366] rounded-full mx-auto flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                WA
              </div>
            </div>
          </div>
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 sm:w-8 h-4 sm:h-8 bg-[#25D366] rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-3 sm:w-6 h-3 sm:h-6 bg-[#1da851] rounded-full animate-pulse delay-500"></div>
        </div>
      )
    },
    {
      icon: Clock,
      title: 'Lightning Fast Setup',
      description: 'Get started in under 5 minutes with our streamlined onboarding process and intuitive interface.',
      color: 'text-[#006AFF]',
      bgColor: 'bg-[#006AFF]/10',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-[#006AFF]/20 to-[#0052CC]/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#006AFF]/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <div className="text-xl sm:text-3xl">⚡</div>
            </div>
            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#006AFF] rounded-full animate-bounce"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#0052CC] rounded-full animate-bounce delay-200"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#006AFF] rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
          <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-3 sm:w-6 h-3 sm:h-6 bg-[#006AFF] rounded-full animate-ping"></div>
        </div>
      )
    },
    {
      icon: Users,
      title: 'Dedicated Success Team',
      description: 'Personal account manager and dedicated support team to ensure your success from day one.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <div className="text-xl sm:text-3xl">👥</div>
            </div>
            <div className="flex space-x-1 sm:space-x-2">
              <div className="w-4 sm:w-8 h-4 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">A</div>
              <div className="w-4 sm:w-8 h-4 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">B</div>
              <div className="w-4 sm:w-8 h-4 sm:h-8 bg-purple-700 rounded-full flex items-center justify-center text-white text-xs">C</div>
            </div>
          </div>
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-3 sm:w-5 h-3 sm:h-5 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-2 sm:w-4 h-2 sm:h-4 bg-purple-700 rounded-full animate-pulse delay-700"></div>
        </div>
      )
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support from WhatsApp experts ready to help you maximize results.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <div className="text-xl sm:text-3xl">🎧</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                <div className="w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
                Online
              </div>
            </div>
          </div>
          <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-3 sm:w-6 h-3 sm:h-6 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-2 sm:w-4 h-2 sm:h-4 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>
      )
    }
  ];

  return (
    <section className="section-mobile sm:py-12 md:py-16 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 animate-text-glow px-2 sm:px-0">
            <span className="block sm:inline">Why 2,000+ Businesses</span> <span className="block sm:inline">Choose ChatSigma</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
            Experience the difference with our enterprise-grade platform, dedicated support, and proven results.
          </p>
          <div className="mt-3 sm:mt-4 md:mt-6 text-center">
            <span className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white rounded-full text-xs sm:text-sm md:text-base font-medium mx-2 sm:mx-0">
              <span className="hidden sm:inline">✨ No matter you're startup or enterprise level organization - ChatSigma got you covered!</span>
              <span className="sm:hidden">✨ For startups & enterprises</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              data-index={index}
              className={`group transition-all duration-700 transform ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white card-mobile sm:rounded-xl sm:p-4 md:p-6 shadow-sm hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Custom Graphic */}
                <div className="mb-3 sm:mb-4 md:mb-6">
                  {reason.customGraphic}
                </div>
                
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2 md:mb-3 group-hover:text-[#25D366] transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section with blink animation */}
        <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden mx-2 sm:mx-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#006AFF]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-3 sm:top-5 md:top-10 left-3 sm:left-5 md:left-10 w-12 sm:w-16 md:w-32 h-12 sm:h-16 md:h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-3 sm:bottom-5 md:bottom-10 right-3 sm:right-5 md:right-10 w-8 sm:w-12 md:w-24 h-8 sm:h-12 md:h-24 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-6 sm:w-8 md:w-16 h-6 sm:h-8 md:h-16 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 text-white text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0">Ready to Transform Your Business?</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 opacity-90 px-2 sm:px-4 md:px-0">
              Join thousands of businesses already using ChatSigma to automate their WhatsApp communications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4">
              <a 
                href="https://app.chatsigma.com/auth/register/vendor" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto btn-mobile sm:px-6 md:px-8 sm:py-3 md:py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 animate-blink"
              >
                Start Free Trial
              </a>
              <a 
                href="https://calendly.com/contactchatsigma/whatsapp-automation-with-chatsigma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto btn-mobile sm:px-6 md:px-8 sm:py-3 md:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all transform hover:scale-105"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;