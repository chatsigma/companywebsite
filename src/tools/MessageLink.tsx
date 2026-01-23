import React, { useState } from 'react';
import { MessageSquare, Copy, Phone, Type, CheckCircle, ArrowRight, Send } from 'lucide-react';

const MessageLink = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!phoneNumber) return;

    const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const waLink = cleanNumber ? `https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ''}` : 'https://wa.me/919220304943?text=Hey%20Team%20Chatsigma%20I%20want%20to%20automate%20my%20business%20via%20ChatSigma';
    setGeneratedLink(waLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const testLink = () => {
    if (generatedLink) {
      window.open(generatedLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/CHAT_SIGMA_LOGO-removebg-preview.png" 
                alt="Chat Sigma" 
                className="h-10 w-10"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Pre-filled Message Link Generator</h1>
          <p className="text-xl opacity-90">Create WhatsApp links with pre-filled messages for instant communication</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Create Your Message Link</h2>
              <p className="text-gray-600">Enter phone number and your custom message</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Phone className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1234567890"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors text-lg"
                />
              </div>

              <div className="relative">
                <Type className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello! I'm interested in your services..."
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors text-lg resize-none"
                />
                <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                  {message.length}/1000
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={!phoneNumber}
                className="w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1da851] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                Generate Message Link
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Animated Chat Bubbles */}
            <div className="relative mt-8">
              <div className="absolute -top-4 -right-4 bg-[#25D366] rounded-2xl p-3 animate-float shadow-lg">
                <div className="text-white text-sm max-w-32">Hey there! 👋</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-200 rounded-2xl p-3 animate-float-delay-1 shadow-lg">
                <div className="text-gray-700 text-sm max-w-32">How can I help?</div>
              </div>
              <div className="absolute top-1/2 right-8 bg-[#1877F2] rounded-2xl p-2 animate-float-delay-2 shadow-lg">
                <Send className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            {/* Phone Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Message Preview</h3>
              
              <div className="bg-gray-900 rounded-3xl p-6 max-w-sm mx-auto">
                <div className="bg-[#25D366] rounded-t-2xl p-4 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm opacity-80">Online</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-b-2xl min-h-32">
                  {message ? (
                    <div className="bg-[#E3F2FD] rounded-lg p-3 ml-8 mb-2">
                      <p className="text-sm text-gray-800">{message}</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 py-8">
                      <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">Your message will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Generated Link */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Generated Link</h3>
              
              {generatedLink ? (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                    <p className="text-sm text-gray-600 break-all">{generatedLink}</p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={copyToClipboard}
                      className="flex-1 py-3 bg-[#1877F2] text-white rounded-lg font-semibold hover:bg-[#1565C0] transition-colors flex items-center justify-center"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-5 w-5" />
                          Copy
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={testLink}
                      className="flex-1 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors flex items-center justify-center"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Test Link
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-8 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-500">Generated link will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageLink;