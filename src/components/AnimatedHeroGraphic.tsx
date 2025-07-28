import React from 'react';
import { MessageCircle, Users, BarChart3, Zap, Settings, CheckCircle, Smartphone, Globe, Shield, TrendingUp } from 'lucide-react';

const AnimatedHeroGraphic = () => {
  const platforms = [
    { name: 'Shopify', color: '#96BF48', icon: '🛍️', delay: 0 },
    { name: 'Salesforce', color: '#00A1E0', icon: '☁️', delay: 1 },
    { name: 'HubSpot', color: '#FF7A59', icon: '🧡', delay: 2 },
    { name: 'Stripe', color: '#635BFF', icon: '💳', delay: 3 },
    { name: 'Zapier', color: '#FF4A00', icon: '⚡', delay: 4 },
    { name: 'Google', color: '#4285F4', icon: '📊', delay: 5 }
  ];

  const features = [
    { icon: MessageCircle, label: 'WhatsApp API', color: '#25D366' },
    { icon: Users, label: 'CRM Integration', color: '#006AFF' },
    { icon: BarChart3, label: 'Analytics', color: '#9C27B0' },
    { icon: Zap, label: 'Automation', color: '#FF9800' },
    { icon: Settings, label: 'Workflows', color: '#F44336' },
    { icon: CheckCircle, label: 'Verified', color: '#4CAF50' }
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-3xl">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#006AFF]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Central Business Person */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Professional Character */}
        <div className="relative">
          {/* Person Illustration */}
          <div className="w-40 h-48 mx-auto relative">
            {/* Head */}
            <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mx-auto mb-3 relative shadow-lg">
              {/* Professional hairstyle */}
              <div className="absolute -top-2 left-2 right-2 h-6 bg-gradient-to-br from-amber-800 to-amber-900 rounded-t-full"></div>
              {/* Eyes */}
              <div className="absolute top-6 left-5 w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute top-6 right-5 w-2 h-2 bg-gray-800 rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-6 h-2 border-b-2 border-gray-800 rounded-full"></div>
            </div>
            
            {/* Professional Attire */}
            <div className="w-24 h-28 bg-gradient-to-br from-blue-600 to-blue-700 rounded-t-2xl mx-auto relative shadow-lg">
              {/* Shirt collar */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-b-lg"></div>
              {/* Tie */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-12 bg-gradient-to-b from-red-600 to-red-700 rounded-b-lg"></div>
              
              {/* Arms */}
              <div className="absolute -left-4 top-6 w-8 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg transform rotate-12 shadow-md"></div>
              <div className="absolute -right-4 top-6 w-8 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg transform -rotate-12 shadow-md"></div>
              
              {/* Smartphone in hand */}
              <div className="absolute -right-2 top-8 w-5 h-8 bg-gray-900 rounded-lg transform -rotate-12 shadow-lg">
                <div className="w-4 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded m-0.5 animate-pulse">
                  {/* WhatsApp interface on phone */}
                  <div className="w-3 h-1 bg-[#25D366] rounded mt-1 mx-auto animate-pulse"></div>
                  <div className="w-2 h-0.5 bg-white rounded mt-1 ml-1"></div>
                  <div className="w-2.5 h-0.5 bg-white rounded mt-0.5 ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting Platform Logos */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {platforms.map((platform, index) => {
              const angle = (index * 60) * (Math.PI / 180);
              const radius = 140;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute animate-orbit"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    animationDelay: `${platform.delay * 0.5}s`,
                    animationDuration: '12s'
                  }}
                >
                  <div 
                    className="flex items-center space-x-2 px-4 py-2 rounded-full shadow-xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20"
                    style={{ 
                      backgroundColor: platform.color,
                      boxShadow: `0 8px 32px ${platform.color}40`
                    }}
                  >
                    <span className="text-lg">{platform.icon}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap">
                      {platform.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inner Feature Ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {features.map((feature, index) => {
              const angle = (index * 60 + 30) * (Math.PI / 180); // Offset by 30 degrees
              const radius = 90;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-float"
                    style={{ 
                      backgroundColor: feature.color,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Success Metrics */}
      <div className="absolute top-16 right-16 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-float transform hover:scale-110 transition-transform border border-white/20">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-[#25D366]" />
          <div>
            <div className="text-2xl font-bold text-[#25D366]">+45%</div>
            <div className="text-xs text-gray-600">Sales Growth</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-16 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-float-delay-1 transform hover:scale-110 transition-transform border border-white/20">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-[#006AFF]" />
          <div>
            <div className="text-2xl font-bold text-[#006AFF]">2,000+</div>
            <div className="text-xs text-gray-600">Businesses</div>
          </div>
        </div>
      </div>

      <div className="absolute top-24 left-20 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-float-delay-2 transform hover:scale-110 transition-transform border border-white/20">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-purple-600" />
          <div>
            <div className="text-2xl font-bold text-purple-600">99.9%</div>
            <div className="text-xs text-gray-600">Uptime</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-20 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-float transform hover:scale-110 transition-transform border border-white/20">
        <div className="flex items-center space-x-2">
          <Globe className="h-5 w-5 text-orange-600" />
          <div>
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-xs text-gray-600">Support</div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#25D366] to-[#006AFF] rounded-full animate-float-particle opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Pulsing Connection Lines */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-96 h-96 border border-[#25D366]/20 rounded-full animate-ping"></div>
        <div className="absolute top-8 left-8 w-80 h-80 border border-[#006AFF]/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-16 left-16 w-64 h-64 border border-purple-500/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* WhatsApp Message Bubbles */}
      <div className="absolute top-32 left-32 bg-[#25D366] text-white p-3 rounded-2xl rounded-bl-sm shadow-lg animate-float max-w-xs">
        <div className="text-sm">🤖 Automated response sent!</div>
        <div className="text-xs opacity-80 mt-1">Customer inquiry handled</div>
      </div>

      <div className="absolute bottom-32 right-32 bg-white text-gray-800 p-3 rounded-2xl rounded-br-sm shadow-lg animate-float-delay-1 max-w-xs border border-gray-200">
        <div className="text-sm">✅ Integration successful</div>
        <div className="text-xs text-gray-600 mt-1">All systems connected</div>
      </div>
    </div>
  );
};

export default AnimatedHeroGraphic;