import React from 'react';
import { Users, Target, Award, Globe, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '2,000+', label: 'Active Businesses', icon: Users },
    { number: '50M+', label: 'Messages Sent', icon: Globe },
    { number: '99.9%', label: 'Uptime', icon: Award },
    { number: '24/7', label: 'Support', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#1877F2] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">About ChatSigma</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Empowering businesses worldwide with intelligent WhatsApp automation solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Mission Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To revolutionize business communication by making WhatsApp automation accessible, 
            intelligent, and effective for businesses of all sizes. We believe in the power of 
            conversational commerce to transform customer relationships.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#25D366] to-[#1877F2] rounded-xl sm:rounded-2xl mx-auto flex items-center justify-center mb-3 sm:mb-4">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">ChatSigma Technologies (OPC) Private Limited</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Proudly made in India ❤️ with a vision to serve businesses globally
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Headquarters</div>
              <div className="text-gray-600 text-sm sm:text-base">Noida Sector 61, India</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Founded</div>
              <div className="text-gray-600 text-sm sm:text-base">2024</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900 text-sm sm:text-base">Industry</div>
              <div className="text-gray-600 text-sm sm:text-base">Business Automation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;