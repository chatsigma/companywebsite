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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Professional Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,211,102,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,211,102,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Subtle Professional Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#25D366]/8 rounded-full blur-3xl animate-float-smooth"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-[#006AFF]/8 rounded-full blur-3xl animate-wave"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00D4AA]/6 rounded-full blur-3xl"></div>
      </div>

      {/* Professional Floating Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-[15%] bg-gradient-to-br from-[#25D366]/30 to-[#00D4AA]/30 backdrop-blur-sm rounded-xl p-3 animate-float-smooth shadow-xl border border-white/10">
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
        </div>
        <div className="absolute top-[30%] right-[15%] bg-gradient-to-br from-[#006AFF]/30 to-[#00D4AA]/30 backdrop-blur-sm rounded-xl p-3 animate-wave shadow-xl border border-white/10">
          <Bot className="h-5 w-5 text-[#006AFF]" />
        </div>
        <div className="absolute bottom-[35%] left-[20%] bg-gradient-to-br from-[#00D4AA]/30 to-[#006AFF]/30 backdrop-blur-sm rounded-xl p-3 animate-particle-float shadow-xl border border-white/10">
          <BarChart3 className="h-5 w-5 text-[#00D4AA]" />
        </div>
        <div className="absolute top-1/2 right-[20%] bg-gradient-to-br from-[#25D366]/30 to-[#006AFF]/30 backdrop-blur-sm rounded-xl p-3 animate-float-smooth shadow-xl border border-white/10">
          <Users className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Subtle Light Rays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#25D366]/30 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#006AFF]/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-32 pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left overflow-mobile">
            {/* Badges Container - Both badges together */}
            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* V2 Badge - Slim version with animation */}
              <div className="v2-badge px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full inline-flex items-center transform hover:scale-105 transition-transform duration-300">
                <span className="v2-badge-text text-white text-xs sm:text-sm font-bold relative z-10 whitespace-nowrap">
                  Introducing ChatSigma V2
                </span>
              </div>

              {/* Meta Badge - Similar style without animation */}
              <div className="meta-badge px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full inline-flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png"
                  alt="Meta"
                  className="h-4 w-8 sm:h-4.5 sm:w-9 object-contain"
                />
                <span className="text-white text-xs sm:text-sm font-bold whitespace-nowrap">
                  Meta Official Tech Partner
                </span>
              </div>
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

            {/* Enhanced CTA buttons with gradient animations */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-4 mb-3 sm:mb-4 md:mb-8 px-2 sm:px-3 lg:px-0">
              <a
                href="https://app.chatsigma.com/vb/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto btn-mobile sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 gradient-bg-animated text-white rounded-xl sm:text-sm md:text-base lg:text-lg font-bold transition-all duration-500 transform hover:scale-110 flex items-center justify-center shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </a>
              <a
                href="https://calendly.com/contactchatsigma/whatsapp-automation-with-chatsigma"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto btn-mobile sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 glass-morphism text-white rounded-xl sm:text-sm md:text-base lg:text-lg font-bold transition-all duration-500 transform hover:scale-110 flex items-center justify-center shadow-xl hover:shadow-2xl border-2 border-[#25D366]/30"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-125 transition-transform duration-300" />
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

          {/* Right side - Enhanced with 3D effects */}
          <div className="relative mt-4 sm:mt-6 lg:mt-0 px-2 sm:px-0 lg:scale-110 xl:scale-125">
            {/* Enhanced animated graphic container with depth */}
            <div className="relative z-10 transform perspective-1000 animate-float-smooth max-w-[90%] mx-auto">
              {/* Central animated container with glass morphism */}
              <div className="relative glass-morphism rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 shadow-2xl transform card-3d-hover max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto">
                {/* Enhanced WhatsApp Interface with animated gradient */}
                <div className="gradient-bg-animated rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-5 text-white relative overflow-hidden">
                  {/* Animated background elements with enhanced effects */}
                  <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-white/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-0 left-0 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/2 right-1/4 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-[#00D4AA]/30 rounded-full animate-bounce"></div>
                  
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
              
              {/* Enhanced floating metrics cards with gradient effects */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 glass-morphism rounded-lg p-2 sm:p-2.5 shadow-2xl animate-float-smooth card-3d-hover scale-90 sm:scale-100 border-2 border-[#25D366]/30">
                <div className="flex items-center space-x-1 sm:space-x-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-[#25D366] to-[#00D4AA] rounded-full animate-ping"></div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">2.8K</div>
                    <div className="text-xs text-gray-300 hidden md:block">Messages</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 glass-morphism rounded-lg p-2 sm:p-2.5 shadow-2xl animate-wave card-3d-hover scale-90 sm:scale-100 border-2 border-[#006AFF]/30">
                <div className="flex items-center space-x-1 sm:space-x-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-[#006AFF] to-[#00D4AA] rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">98%</div>
                    <div className="text-xs text-gray-300 hidden md:block">Delivery</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-2 sm:-right-3 md:-right-5 glass-morphism rounded-lg p-2 sm:p-2.5 shadow-2xl animate-particle-float card-3d-hover scale-90 sm:scale-100 border-2 border-[#00D4AA]/30">
                <div className="text-center">
                  <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-[#25D366] to-[#00D4AA] bg-clip-text text-transparent animate-pulse">+45%</div>
                  <div className="text-xs text-gray-300 hidden md:block">Sales</div>
                </div>
              </div>

              <div className="absolute top-1/4 -left-2 sm:-left-3 md:-left-5 glass-morphism rounded-lg p-2 sm:p-2.5 shadow-2xl animate-float-smooth card-3d-hover scale-90 sm:scale-100 border-2 border-[#25D366]/30">
                <div className="text-center">
                  <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-[#006AFF] to-[#00D4AA] bg-clip-text text-transparent">24/7</div>
                  <div className="text-xs text-gray-300 hidden md:block">Support</div>
                </div>
              </div>
            </div>

            {/* Enhanced background decoration with animated gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/30 via-[#00D4AA]/20 to-[#006AFF]/30 rounded-lg sm:rounded-xl md:rounded-2xl blur-2xl transform rotate-6 scale-110 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-[#006AFF]/20 via-[#00D4AA]/10 to-[#25D366]/20 rounded-lg sm:rounded-xl md:rounded-2xl blur-3xl transform -rotate-6 scale-105 animate-float-delay-1"></div>
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