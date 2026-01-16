import React from 'react';
import { Coffee, Calendar, Star, Users, ArrowRight, CheckCircle } from 'lucide-react';

const HospitalityPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Booking Confirmations',
      description: 'Instant booking confirmations and check-in reminders for guests'
    },
    {
      icon: Coffee,
      title: 'Concierge Services',
      description: 'Automated concierge services and local recommendations'
    },
    {
      icon: Star,
      title: 'Guest Feedback',
      description: 'Collect guest feedback and reviews to improve service quality'
    },
    {
      icon: Users,
      title: 'Guest Support',
      description: '24/7 automated guest support for inquiries and requests'
    }
  ];

  const useCases = [
    'Hotel booking confirmations',
    'Check-in/check-out reminders',
    'Room service orders',
    'Local attraction recommendations',
    'Guest satisfaction surveys',
    'Special offers and promotions'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1877F2] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Coffee className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Hospitality WhatsApp Automation</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Enhance guest experience and streamline hotel operations with automated messaging
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center mr-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black">{feature.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Hospitality Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-[#1877F2] mr-3 flex-shrink-0" />
                <span className="text-black">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1877F2] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Guest Experience?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hotels that have improved guest satisfaction by 80% with ChatSigma
          </p>
          <button className="px-8 py-4 bg-white text-[#1877F2] rounded-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 flex items-center mx-auto">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalityPage;