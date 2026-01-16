import React from 'react';
import { FileText, TrendingUp, Clock, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Real success stories from businesses using ChatSigma
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Coming Soon */}
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-[#25D366] rounded-3xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-16 w-16 text-white animate-pulse" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#F6C90E] rounded-full flex items-center justify-center animate-bounce">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Case Studies Coming Soon!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're documenting amazing success stories from our customers. Learn how businesses 
            across industries are achieving remarkable results with ChatSigma.
          </p>
          
          <div className="bg-[#25D366]/10 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Find:</h3>
            <ul className="space-y-3 text-gray-600 text-left">
              <li className="flex items-center">
                <TrendingUp className="h-5 w-5 text-[#25D366] mr-3" />
                45% increase in sales conversions
              </li>
              <li className="flex items-center">
                <TrendingUp className="h-5 w-5 text-[#25D366] mr-3" />
                60% reduction in customer support costs
              </li>
              <li className="flex items-center">
                <TrendingUp className="h-5 w-5 text-[#25D366] mr-3" />
                80% improvement in response times
              </li>
              <li className="flex items-center">
                <TrendingUp className="h-5 w-5 text-[#25D366] mr-3" />
                Real implementation strategies
              </li>
            </ul>
          </div>
          
          <button className="px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors flex items-center mx-auto">
            <FileText className="mr-2 h-5 w-5" />
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;