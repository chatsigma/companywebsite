import React from 'react';
import { DollarSign, Shield, TrendingUp, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

const FinancePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-grade security with end-to-end encryption for all financial communications'
    },
    {
      icon: TrendingUp,
      title: 'Investment Updates',
      description: 'Real-time portfolio updates and market alerts to keep clients informed'
    },
    {
      icon: CreditCard,
      title: 'Payment Reminders',
      description: 'Automated payment due dates and transaction confirmations'
    },
    {
      icon: DollarSign,
      title: 'Financial Advisory',
      description: 'Personalized financial tips and advisory messages to clients'
    }
  ];

  const useCases = [
    'Transaction alerts and confirmations',
    'Payment due reminders',
    'Account balance notifications',
    'Investment portfolio updates',
    'Loan application status',
    'Financial planning consultations'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Finance WhatsApp Automation</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Secure financial communications and automated banking services through WhatsApp
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
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Finance Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-[#25D366] mr-3 flex-shrink-0" />
                <span className="text-black">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#25D366] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Financial Services?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join financial institutions that have increased customer engagement by 85% with ChatSigma
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

export default FinancePage;