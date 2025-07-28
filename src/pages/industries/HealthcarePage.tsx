import React from 'react';
import { Heart, Calendar, Shield, Users, Clock, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const HealthcarePage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Appointment Reminders',
      description: 'Automated appointment confirmations and reminders to reduce no-shows by up to 60%'
    },
    {
      icon: Heart,
      title: 'Patient Care Updates',
      description: 'Send medication reminders, health tips, and follow-up care instructions'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Secure, encrypted messaging that meets healthcare privacy standards'
    },
    {
      icon: Users,
      title: 'Multi-Provider Support',
      description: 'Manage communications across multiple doctors and healthcare providers'
    }
  ];

  const useCases = [
    'Appointment scheduling and reminders',
    'Prescription refill notifications',
    'Lab result notifications',
    'Health screening reminders',
    'Emergency alerts and updates',
    'Patient satisfaction surveys'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Healthcare WhatsApp Automation</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Enhance patient care and streamline healthcare communications with automated WhatsApp messaging
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
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Healthcare Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center p-4 bg-red-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Practice?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join healthcare providers who have improved patient engagement by 70% with ChatSigma
          </p>
          <button className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 flex items-center mx-auto">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthcarePage;