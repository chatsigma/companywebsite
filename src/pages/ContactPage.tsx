import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Users, Zap } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Ready to transform your business with WhatsApp automation? Let's discuss how ChatSigma can help you grow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Let's Start a Conversation</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Whether you're a startup or enterprise, we're here to help you automate your WhatsApp communications 
                and scale your business efficiently.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#25D366]">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366]/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email Us</h3>
                    <p className="text-gray-600 text-sm sm:text-base">info@chatsigma.com</p>
                    <p className="text-gray-600 text-sm sm:text-base">support@chatsigma.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#006AFF]">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#006AFF]/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#006AFF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Call or WhatsApp</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+91 9220304949</p>
                    <p className="text-xs sm:text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Visit Our Office</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Noida Sector 61</p>
                    <p className="text-gray-600 text-sm sm:text-base">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-[#25D366]/10 to-[#006AFF]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Why Choose ChatSigma?</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#25D366]" />
                  <span className="text-gray-700 text-sm sm:text-base">24/7 Expert Support</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#006AFF]" />
                  <span className="text-gray-700 text-sm sm:text-base">Dedicated Success Team</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  <span className="text-gray-700 text-sm sm:text-base">Lightning Fast Setup</span>
                </div>
              </div>
            </div>

            {/* Animated Graphics */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#25D366]/20 to-[#006AFF]/20 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[#25D366]" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#F6C90E]/20 to-[#25D366]/20 rounded-lg sm:rounded-xl flex items-center justify-center animate-float-delay-1">
                <Send className="h-4 w-4 sm:h-6 sm:w-6 text-[#F6C90E]" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white rounded-lg text-base sm:text-lg font-semibold hover:from-[#1da851] hover:to-[#0052CC] transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;