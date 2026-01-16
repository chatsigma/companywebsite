import React from 'react';
import { Code, Wrench, Clock, Rocket, ArrowRight } from 'lucide-react';

const APIDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Code className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">API Documentation</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive documentation for ChatSigma's WhatsApp Business API
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Coming Soon Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-[#25D366] rounded-3xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Wrench className="h-16 w-16 text-white animate-pulse" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#F6C90E] rounded-full flex items-center justify-center animate-bounce">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Documentation Coming Soon!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're working hard to create comprehensive API documentation that will help you integrate 
            ChatSigma's powerful WhatsApp automation features into your applications.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold">
            <Rocket className="h-5 w-5 mr-2" />
            Launching at the Earliest
          </div>
        </div>

        {/* What to Expect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Complete API Reference</h3>
            <p className="text-gray-600">
              Detailed documentation for all endpoints, parameters, and response formats
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#1877F2] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Start Guides</h3>
            <p className="text-gray-600">
              Step-by-step tutorials to get you up and running in minutes
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Code Examples</h3>
            <p className="text-gray-600">
              Ready-to-use code samples in multiple programming languages
            </p>
          </div>
        </div>

        {/* Notify Me Section */}
        <div className="bg-[#25D366] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Get Notified When It's Ready</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be the first to know when our API documentation goes live. We'll send you an email 
            as soon as it's available.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              Notify Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help in the Meantime?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get started with ChatSigma's API
          </p>
          <button className="px-8 py-4 bg-[#1877F2] text-white rounded-lg font-semibold hover:bg-[#1565C0] transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentation;