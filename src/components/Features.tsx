import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Bot, Users, BarChart3, Zap, Settings } from 'lucide-react';

const Features = () => {
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

  const features = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Business API',
      description: 'Official WhatsApp Business API integration with 0% markup. Send messages, receive replies, and manage conversations at scale.',
      color: 'text-[#25D366]',
      bgGradient: 'from-[#25D366] to-[#1da851]',
      path: '/features/whatsapp-business-api',
      illustration: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-[#25D366]/20 to-[#1da851]/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-lg sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <MessageCircle className="h-6 sm:h-12 w-6 sm:w-12 text-[#25D366] mx-auto" />
            </div>
            <div className="flex space-x-1 sm:space-x-2 justify-center">
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#25D366] rounded-full animate-bounce"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#006AFF] rounded-full animate-bounce delay-200"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#25D366] rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-4 sm:w-8 h-4 sm:h-8 bg-[#25D366] rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-3 sm:w-6 h-3 sm:h-6 bg-[#006AFF] rounded-full animate-pulse delay-500"></div>
        </div>
      )
    },
    {
      icon: Bot,
      title: 'AI-Powered Chatbot',
      description: 'Build intelligent chatbots with our drag-and-drop builder. Automate responses, qualify leads, and provide 24/7 customer support.',
      color: 'text-[#006AFF]',
      bgGradient: 'from-[#006AFF] to-[#0052CC]',
      path: '/features/ai-chatbot',
      illustration: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-[#006AFF]/20 to-[#0052CC]/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#006AFF]/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-lg sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <Bot className="h-6 sm:h-12 w-6 sm:w-12 text-[#006AFF] mx-auto" />
            </div>
            <div className="flex space-x-1 sm:space-x-2 justify-center">
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#006AFF] rounded-full animate-bounce"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#0052CC] rounded-full animate-bounce delay-200"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-[#006AFF] rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
          <div className="absolute top-3 sm:top-6 left-3 sm:left-6 w-2 sm:w-4 h-2 sm:h-4 bg-[#006AFF] rounded-full animate-bounce"></div>
          <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 w-3 sm:w-5 h-3 sm:h-5 bg-[#0052CC] rounded-full animate-bounce delay-300"></div>
        </div>
      )
    },
    {
      icon: Users,
      title: 'Bulk Messaging',
      description: 'Send personalized messages to thousands of customers instantly. Perfect for promotions, announcements, and customer engagement.',
      color: 'text-purple-600',
      bgGradient: 'from-purple-500 to-purple-700',
      path: '/features/bulk-messaging',
      illustration: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-lg sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <Users className="h-6 sm:h-12 w-6 sm:w-12 text-purple-600 mx-auto" />
            </div>
            <div className="flex space-x-1 sm:space-x-2 justify-center">
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-purple-600 rounded-full animate-bounce delay-200"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-purple-700 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
          <div className="absolute top-1 sm:top-2 right-4 sm:right-8 w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 sm:bottom-8 left-1 sm:left-2 w-2 sm:w-4 h-2 sm:h-4 bg-purple-700 rounded-full animate-ping delay-700"></div>
        </div>
      )
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Track message delivery, open rates, and customer engagement. Make data-driven decisions with comprehensive analytics.',
      color: 'text-orange-600',
      bgGradient: 'from-orange-500 to-red-500',
      path: '/features/analytics',
      illustration: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-lg sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <BarChart3 className="h-6 sm:h-12 w-6 sm:w-12 text-orange-600 mx-auto" />
            </div>
            <div className="flex space-x-1 sm:space-x-2 justify-center">
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-red-500 rounded-full animate-bounce delay-200"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-orange-600 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-3 sm:w-6 h-3 sm:h-6 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-3 sm:w-5 h-3 sm:h-5 bg-red-500 rounded-full animate-pulse delay-1000"></div>
        </div>
      )
    },
    {
      icon: Settings,
      title: 'Complete Business Automation',
      description: 'Share your business process with us, and we\'ll automate it within WhatsApp. From lead generation to customer support - we\'ve got you covered!',
      color: 'text-green-600',
      bgGradient: 'from-green-500 to-emerald-600',
      path: '/features/business-automation',
      illustration: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-lg sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <Settings className="h-6 sm:h-12 w-6 sm:w-12 text-green-600 mx-auto" />
            </div>
            <div className="flex space-x-1 sm:space-x-2 justify-center">
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-emerald-600 rounded-full animate-bounce delay-200"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-green-600 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
          <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-2 sm:w-4 h-2 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-2 sm:w-3 h-2 sm:h-3 bg-emerald-600 rounded-full animate-pulse delay-500"></div>
        </div>
      )
    },
    {
      icon: Zap,
      title: 'Fast Integration',
      description: 'Get up and running in minutes with our simple API and webhooks. Seamlessly integrate with your existing systems.',
      color: 'text-yellow-600',
      bgGradient: 'from-yellow-500 to-orange-500',
      path: '/features/fast-integration',
      illustration: (
        <div className="relative w-full h-32 sm:h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-lg sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <Zap className="h-6 sm:h-12 w-6 sm:w-12 text-yellow-600 mx-auto" />
            </div>
            <div className="flex space-x-1 sm:space-x-2 justify-center">
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-yellow-500 rounded-full animate-bounce"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-orange-500 rounded-full animate-bounce delay-200"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-yellow-600 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
          <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-3 sm:w-5 h-3 sm:h-5 bg-yellow-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-2 sm:w-4 h-2 sm:h-4 bg-orange-500 rounded-full animate-bounce delay-300"></div>
        </div>
      )
    }
  ];

  return (
    <section id="features-section" className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
            Powerful Features for Every Business
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
            Everything you need to automate WhatsApp conversations, manage leads, and grow your business efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`group bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform ${
                visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } hover:scale-102 sm:hover:scale-105`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Feature Illustration */}
              <div className="relative overflow-hidden">
                {feature.illustration}
              </div>
              
              <div className="p-4 sm:p-6 md:p-8">
                <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg bg-gradient-to-r ${feature.bgGradient} mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-[#25D366] transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                  {feature.description}
                </p>
                
                <Link to={feature.path} className="text-[#25D366] font-semibold hover:text-[#1da851] transition-colors flex items-center text-xs sm:text-sm md:text-base">
                  Learn More
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;