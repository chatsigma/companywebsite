import React from 'react';
import { Home, MapPin, Calendar, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const RealEstatePage = () => {
  const features = [
    {
      icon: Home,
      title: 'Property Alerts',
      description: 'Instant notifications about new listings matching client preferences'
    },
    {
      icon: Calendar,
      title: 'Viewing Schedules',
      description: 'Automated booking and reminders for property viewings'
    },
    {
      icon: TrendingUp,
      title: 'Market Updates',
      description: 'Regular market trends and property value updates to clients'
    },
    {
      icon: MapPin,
      title: 'Location Services',
      description: 'Share property locations and neighborhood information instantly'
    }
  ];

  const useCases = [
    'New property listing alerts',
    'Property viewing appointments',
    'Market analysis reports',
    'Mortgage application updates',
    'Property documentation sharing',
    'Client follow-up automation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Home className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Real Estate WhatsApp Automation</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Streamline property sales and enhance client relationships with automated messaging
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
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
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
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Real Estate Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center p-4 bg-orange-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-[#25D366] mr-3 flex-shrink-0" />
                <span className="text-black">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#25D366] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Real Estate Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join real estate professionals who have increased sales by 65% with ChatSigma
          </p>
          <button className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 flex items-center mx-auto">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePage;