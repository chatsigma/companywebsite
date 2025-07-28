import React from 'react';
import { Video, Play, Clock, ArrowRight } from 'lucide-react';

const VideoTutorials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Video className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Video Tutorials</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Learn ChatSigma with our comprehensive video tutorial library
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Coming Soon */}
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-[#25D366] to-[#006AFF] rounded-3xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Play className="h-16 w-16 text-white animate-pulse" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#F6C90E] rounded-full flex items-center justify-center animate-bounce">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Video Tutorials Coming Soon!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're creating comprehensive video tutorials for your ease and knowledge. 
            From basic setup to advanced automation strategies - have patience, we will be live soon!
          </p>
          
          <div className="bg-gradient-to-r from-[#25D366]/10 to-[#006AFF]/10 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect:</h3>
            <ul className="space-y-3 text-gray-600 text-left">
              <li className="flex items-center">
                <Play className="h-5 w-5 text-[#25D366] mr-3" />
                Platform overview and navigation
              </li>
              <li className="flex items-center">
                <Play className="h-5 w-5 text-[#25D366] mr-3" />
                Setting up your first chatbot
              </li>
              <li className="flex items-center">
                <Play className="h-5 w-5 text-[#25D366] mr-3" />
                Advanced automation workflows
              </li>
              <li className="flex items-center">
                <Play className="h-5 w-5 text-[#25D366] mr-3" />
                Analytics and reporting
              </li>
            </ul>
          </div>
          
          <button className="px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors flex items-center mx-auto">
            <Video className="mr-2 h-5 w-5" />
            Get Notified When Live
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;