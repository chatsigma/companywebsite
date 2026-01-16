import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, DollarSign, GraduationCap, Home, Coffee, ArrowLeft, ArrowRight } from 'lucide-react';

const Industries = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'Automate order confirmations, track shipments, and recover abandoned carts with personalized WhatsApp messages.',
      features: ['Order notifications', 'Cart abandonment', 'Customer support', 'Product catalog'],
      color: 'from-[#25D366] to-[#006AFF]',
      path: '/industries/ecommerce',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-[#25D366]/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#25D366]/30"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <ShoppingBag className="h-6 sm:h-10 w-6 sm:w-10 text-[#25D366]" />
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
      icon: Heart,
      title: 'Healthcare',
      description: 'Send appointment reminders, health tips, and medication alerts to improve patient engagement and care.',
      features: ['Appointment reminders', 'Health alerts', 'Telemedicine support', 'Patient engagement'],
      color: 'from-red-500 to-pink-600',
      path: '/industries/healthcare',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-red-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-red-500/30"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <Heart className="h-6 sm:h-10 w-6 sm:w-10 text-red-500" />
            </div>
            <div className="flex space-x-1 justify-center">
              <div className="w-1 sm:w-2 h-4 sm:h-8 bg-red-500 rounded animate-pulse"></div>
              <div className="w-1 sm:w-2 h-3 sm:h-6 bg-pink-500 rounded animate-pulse delay-200"></div>
              <div className="w-1 sm:w-2 h-5 sm:h-10 bg-red-500 rounded animate-pulse delay-400"></div>
              <div className="w-1 sm:w-2 h-2 sm:h-4 bg-pink-600 rounded animate-pulse delay-600"></div>
            </div>
          </div>
          <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-3 sm:w-6 h-3 sm:h-6 bg-red-500 rounded-full animate-ping"></div>
        </div>
      )
    },
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'Secure transaction alerts, payment reminders, and financial advice through encrypted WhatsApp communication.',
      features: ['Transaction alerts', 'Payment reminders', 'Account updates', 'Financial advice'],
      color: 'from-green-500 to-emerald-600',
      path: '/industries/finance',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-green-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-green-500/30"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <DollarSign className="h-6 sm:h-10 w-6 sm:w-10 text-green-500" />
            </div>
            <div className="flex space-x-1 sm:space-x-2 justify-center">
              <div className="w-3 sm:w-6 h-3 sm:h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">$</div>
              <div className="w-3 sm:w-6 h-3 sm:h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs">€</div>
              <div className="w-3 sm:w-6 h-3 sm:h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">£</div>
            </div>
          </div>
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-4 sm:w-8 h-4 sm:h-8 bg-green-500 rounded-full animate-bounce"></div>
        </div>
      )
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Engage students with course updates, assignment reminders, and instant support through WhatsApp.',
      features: ['Course notifications', 'Assignment reminders', 'Student support', 'Parent communication'],
      color: 'from-yellow-500 to-orange-600',
      path: '/industries/education',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-[#25D366]/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#25D366]/30"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <GraduationCap className="h-6 sm:h-10 w-6 sm:w-10 text-yellow-500" />
            </div>
            <div className="flex space-x-1 justify-center">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-orange-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-600 rounded-full animate-pulse delay-600"></div>
            </div>
          </div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-3 sm:w-6 h-3 sm:h-6 bg-orange-600 rounded-full animate-bounce delay-200"></div>
        </div>
      )
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Generate leads, schedule property visits, and send market updates to potential buyers and sellers.',
      features: ['Lead generation', 'Property alerts', 'Virtual tours', 'Market updates'],
      color: 'from-indigo-500 to-blue-600',
      path: '/industries/real-estate',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-[#1877F2]/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#1877F2]/30"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <Home className="h-6 sm:h-10 w-6 sm:w-10 text-indigo-500" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-indigo-500 rounded"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-blue-600 rounded"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-blue-500 rounded"></div>
              <div className="w-2 sm:w-4 h-2 sm:h-4 bg-indigo-600 rounded"></div>
            </div>
          </div>
          <div className="absolute top-3 sm:top-6 left-3 sm:left-6 w-3 sm:w-5 h-3 sm:h-5 bg-indigo-500 rounded-full animate-pulse"></div>
        </div>
      )
    },
    {
      icon: Coffee,
      title: 'Hospitality',
      description: 'Enhance guest experience with booking confirmations, concierge services, and feedback collection.',
      features: ['Booking confirmations', 'Concierge services', 'Guest support', 'Feedback collection'],
      color: 'from-purple-500 to-pink-600',
      path: '/industries/hospitality',
      customGraphic: (
        <div className="relative w-full h-32 sm:h-48 bg-[#1877F2]/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[#1877F2]/30"></div>
          <div className="relative z-10">
            <div className="w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-4 transform hover:scale-110 transition-transform">
              <Coffee className="h-6 sm:h-10 w-6 sm:w-10 text-purple-500" />
            </div>
            <div className="flex space-x-1 sm:space-x-2 justify-center">
              <div className="w-1 sm:w-2 h-3 sm:h-6 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-1 sm:w-2 h-4 sm:h-8 bg-pink-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-1 sm:w-2 h-2 sm:h-4 bg-purple-600 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
          <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 w-2 sm:w-4 h-2 sm:h-4 bg-pink-600 rounded-full animate-bounce"></div>
        </div>
      )
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-mobile sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0">
            Tailored Solutions by Industry
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
            Discover how ChatSigma transforms businesses across different industries with specialized WhatsApp automation.
          </p>
        </div>

        <div className="relative">
          {/* Scroll buttons - Hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Mobile: Grid layout, Desktop: Auto-scrolling */}
          <div className="lg:overflow-hidden">
            {/* Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white card-mobile sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Custom Graphic */}
                  <div className="relative overflow-hidden">
                    {industry.customGraphic}
                  </div>
                  
                  <div className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#25D366] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={industry.path}
                      className="w-full btn-mobile sm:py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors block text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Auto-scrolling */}
            <div className="hidden lg:flex animate-auto-swipe space-x-6 py-4 overflow-mobile">
              {[...industries, ...industries].map((industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Custom Graphic */}
                  <div className="relative overflow-hidden">
                    {industry.customGraphic}
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-[#25D366] rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={industry.path}
                      className="w-full py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors block text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;