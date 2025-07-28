import React from 'react';
import { Target, Lightbulb, Clock, ArrowRight } from 'lucide-react';

const BestPractices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Target className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Best Practices</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Expert tips and strategies for WhatsApp automation success
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Coming Soon */}
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-[#25D366] to-[#006AFF] rounded-3xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Lightbulb className="h-16 w-16 text-white animate-pulse" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#F6C90E] rounded-full flex items-center justify-center animate-bounce">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Best Practices Guide Coming Soon!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're compiling the most effective strategies and best practices from successful 
            WhatsApp automation campaigns. Learn from the experts and avoid common pitfalls.
          </p>
          
          <div className="bg-gradient-to-r from-[#25D366]/10 to-[#006AFF]/10 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn:</h3>
            <ul className="space-y-3 text-gray-600 text-left">
              <li className="flex items-center">
                <Target className="h-5 w-5 text-[#25D366] mr-3" />
                Message timing optimization
              </li>
              <li className="flex items-center">
                <Target className="h-5 w-5 text-[#25D366] mr-3" />
                Conversation flow design
              </li>
              <li className="flex items-center">
                <Target className="h-5 w-5 text-[#25D366] mr-3" />
                Compliance and regulations
              </li>
              <li className="flex items-center">
                <Target className="h-5 w-5 text-[#25D366] mr-3" />
                Performance optimization
              </li>
            </ul>
          </div>
          
          <button className="px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors flex items-center mx-auto">
            <Lightbulb className="mr-2 h-5 w-5" />
            Start Learning Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestPractices;