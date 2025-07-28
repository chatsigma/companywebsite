import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle, Users, Zap, CheckCircle, Play, Bot, BarChart3 } from 'lucide-react';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const targetText = 'WhatsApp Automation';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= targetText.length) {
        setAnimatedText(targetText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-[#25D366]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-[#006AFF]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 sm:w-56 md:w-80 h-36 sm:h-56 md:h-80 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating 3D elements - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 sm:left-1/4 bg-gradient-to-br from-[#25D366] to-[#1da851] rounded-lg sm:rounded-2xl p-1.5 sm:p-2 md:p-3 animate-float shadow-lg sm:shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
          <MessageCircle className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/6 sm:right-1/4 bg-gradient-to-br from-[#006AFF] to-[#0052CC] rounded-lg sm:rounded-2xl p-1.5 sm:p-2 md:p-3 animate-float-delay-1 shadow-lg sm:shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
          <Bot className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 sm:left-1/3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg sm:rounded-2xl p-1.5 sm:p-2 md:p-3 animate-float-delay-2 shadow-lg sm:shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
          <BarChart3 className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </div>
        <div className="absolute top-1/2 right-1/4 sm:right-1/3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg sm:rounded-2xl p-1.5 sm:p-2 md:p-3 animate-float shadow-lg sm:shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          <Users className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-32 pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left overflow-mobile">
            {/* Badge */}
            <div className="inline-flex items-center px-2 sm:px-3 md:px-6 py-1 sm:py-1.5 md:py-3 bg-gradient-to-r from-[#25D366]/20 to-[#006AFF]/20 rounded-full text-white text-xs font-medium mb-3 sm:mb-4 md:mb-8 border border-white/20 backdrop-blur-sm mx-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" 
                alt="Meta" 
                className="h-3 w-6 sm:h-4 sm:w-8 md:h-5 md:w-10 mr-1 sm:mr-1.5 md:mr-2 object-contain"
              />
              <span className="hidden sm:inline whitespace-nowrap">Meta Official Business Partner</span>
              <span className="sm:hidden whitespace-nowrap">Meta Official Business Partner</span>
            </div>

            {/* Main headline - Responsive text sizes */}
            <h1 className="hero-mobile-text sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-6 leading-tight px-1 sm:px-2 lg:px-0">
              Transform Your Business with
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] via-[#00D4AA] to-[#006AFF] animate-pulse">
                  {animatedText}
                </span>
                <span className="animate-pulse text-[#25D366]">|</span>
              </span>
              <br />
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F6C90E] to-[#25D366]">
                That Actually Works
              </span>
            </h1>

            {/* Subheadline - Responsive */}
            <p className="hero-mobile-subtext sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 md:mb-8 leading-relaxed px-2 sm:px-3 lg:px-0">
              Join 2,000+ businesses using ChatSigma's official WhatsApp Business API to automate conversations, 
              capture leads, and increase sales by 45% - all with 0% markup pricing.
            </p>

            {/* CTA buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-4 mb-3 sm:mb-4 md:mb-8 px-2 sm:px-3 lg:px-0">
              <a 
                href="https://app.chatsigma.com/auth/register/vendor" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-full sm:w-auto btn-mobile sm:px-4 md:px-6 lg:px-8 sm:py-2.5 md:py-3 lg:py-4 bg-gradient-to-r from-[#25D366] to-[#1da851] text-white rounded-lg sm:text-sm md:text-base lg:text-lg font-semibold hover:from-[#1da851] hover:to-[#25D366] transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl animate-pulse"
              >
                Start Free Trial
                <ArrowRight className="ml-1 sm:ml-1.5 md:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://calendly.com/contactchatsigma/whatsapp-automation-with-chatsigma"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto btn-mobile sm:px-4 md:px-6 lg:px-8 sm:py-2.5 md:py-3 lg:py-4 border-2 border-white/30 text-white rounded-lg sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Play className="mr-1 sm:mr-1.5 md:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Watch Demo
              </a>
            </div>

            {/* Trust indicators - Mobile responsive */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-1 sm:space-y-0 sm:space-x-3 lg:space-x-6 text-gray-400 text-xs px-2 sm:px-0">
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 text-[#25D366] mr-1" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 text-[#25D366] mr-1" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 text-[#25D366] mr-1" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right side - Mobile optimized graphics */}
          <div className="relative mt-4 sm:mt-6 lg:mt-0 px-2 sm:px-0 lg:scale-110 xl:scale-125">
            {/* Mobile-optimized animated graphic container */}
            <div className="relative z-10 transform perspective-1000 hover:scale-105 transition-transform duration-500 max-w-[90%] mx-auto">
              {/* Central animated container - Mobile responsive */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl md:rounded-2xl p-1.5 sm:p-2 md:p-4 shadow-lg sm:shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500 max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto">
                {/* Animated WhatsApp Interface - Mobile optimized */}
                <div className="bg-gradient-to-br from-[#25D366] to-[#1da851] rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-4 text-white relative overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-white/10 rounded-full animate-ping"></div>
                  <div className="absolute bottom-0 left-0 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-white/5 rounded-full animate-pulse delay-500"></div>
                  
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2 md:mb-3 relative z-10">
                    <div className="flex items-center space-x-1 sm:space-x-1.5">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                        <MessageCircle className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3" />
                      </div>
                      <div>
                        <div className="font-semibold text-xs">ChatSigma</div>
                        <div className="text-xs opacity-80 flex items-center hidden sm:flex">
                          <div className="w-1 h-1 bg-green-400 rounded-full mr-0.5 animate-pulse"></div>
                          Online
                        </div>
                      </div>
                    </div>
                    <div className="text-xs opacity-80 hidden md:block">Active Now</div>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-1.5 relative z-10">
                    <div className="bg-white/20 rounded-md p-1 sm:p-1.5 animate-slide-in-left">
                      <div className="text-xs">🤖 Welcome!</div>
                    </div>
                    <div className="bg-white/10 rounded-md p-1 sm:p-1.5 ml-1.5 sm:ml-2 animate-slide-in-right delay-500">
                      <div className="text-xs">Need help</div>
                    </div>
                    <div className="bg-white/20 rounded-md p-1 sm:p-1.5 animate-slide-in-left delay-1000">
                      <div className="text-xs">Perfect! ✨</div>
                    </div>
                    <div className="bg-white/15 rounded-md p-1 sm:p-1.5 animate-slide-in-left delay-1500">
                      <div className="text-xs flex items-center">
                        <div className="animate-spin rounded-full h-1 w-1 sm:h-1.5 sm:w-1.5 border-b border-white mr-0.5 sm:mr-1"></div>
                        <span className="hidden sm:inline">Setting up...</span>
                        <span className="sm:hidden">Setup...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile-optimized floating metrics cards */}
              <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 md:-top-2 md:-left-2 bg-white rounded-md p-1 sm:p-1.5 shadow-md animate-float transform hover:scale-110 transition-transform scale-90">
                <div className="flex items-center space-x-0.5">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#25D366] rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs font-bold text-gray-800">2.8K</div>
                    <div className="text-xs text-gray-600 hidden md:block">Messages</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 md:-bottom-2 md:-right-2 bg-white rounded-md p-1 sm:p-1.5 shadow-md animate-float-delay-1 transform hover:scale-110 transition-transform scale-90">
                <div className="flex items-center space-x-0.5">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#006AFF] rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs font-bold text-gray-800">98%</div>
                    <div className="text-xs text-gray-600 hidden md:block">Delivery</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-2 sm:-right-3 md:-right-4 bg-white rounded-md p-1 sm:p-1.5 shadow-md animate-float-delay-2 transform hover:scale-110 transition-transform scale-90">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#25D366] animate-bounce">+45%</div>
                  <div className="text-xs text-gray-600 hidden md:block">Sales</div>
                </div>
              </div>
              
              <div className="absolute top-1/4 -left-2 sm:-left-3 md:-left-4 bg-white rounded-md p-1 sm:p-1.5 shadow-md animate-float transform hover:scale-110 transition-transform scale-90">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-600 hidden md:block">Support</div>
                </div>
              </div>
            </div>
            
            {/* Background decoration - Mobile responsive */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-[#006AFF]/20 rounded-lg sm:rounded-xl md:rounded-2xl blur-lg sm:blur-xl md:blur-xl transform rotate-6 scale-100 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;