import React from 'react';
import { MessageCircle, Shield, Zap, Users, BarChart3, CheckCircle, ArrowRight, Globe, Clock, Star } from 'lucide-react';

const WhatsAppBusinessAPI = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Official WhatsApp Integration',
      description: 'Direct access to WhatsApp Business API with 0% markup pricing and full compliance'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get your WhatsApp Business API up and running in under 5 minutes'
    },
    {
      icon: Users,
      title: 'Scale Unlimited',
      description: 'Handle thousands of conversations simultaneously without any limitations'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track message delivery, read rates, and customer engagement in real-time'
    }
  ];

  const features = [
    'Send & receive messages at scale',
    'Rich media support (images, videos, documents)',
    'Message templates for notifications',
    'Two-way conversations',
    'Webhook integrations',
    'Multi-agent support',
    'Auto-reply capabilities',
    'Contact management'
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide instant support to customers with automated responses and human handoff',
      icon: MessageCircle
    },
    {
      title: 'Marketing Campaigns',
      description: 'Send promotional messages, product updates, and personalized offers',
      icon: Star
    },
    {
      title: 'Order Management',
      description: 'Send order confirmations, shipping updates, and delivery notifications',
      icon: CheckCircle
    },
    {
      title: 'Appointment Booking',
      description: 'Automate appointment scheduling and send reminders to reduce no-shows',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Business API
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Official WhatsApp Business API Integration
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Connect directly with WhatsApp's official API. Send messages, automate conversations, 
                and scale your business communication with 0% markup pricing.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://app.chatsigma.com/vb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Free Trial
                </a>
                <a 
                  href="https://app.chatsigma.com/vb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
                >
                  View Demo
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">API Connected ✅</div>
                      <div className="text-sm opacity-80">Ready to send messages</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-[#006AFF] rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">1,000+ Contacts</div>
                      <div className="text-sm opacity-80">Synced and ready</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">98% Delivery Rate</div>
                      <div className="text-sm opacity-80">Messages delivered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Why Choose Our WhatsApp Business API?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get direct access to WhatsApp's official API with enterprise-grade features and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{benefit.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Complete API Features
            </h2>
            <p className="text-xl text-gray-700">
              Everything you need to build powerful WhatsApp integrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#25D366] mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Popular Use Cases
            </h2>
            <p className="text-xl text-gray-700">
              See how businesses use WhatsApp API to grow and automate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{useCase.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started with WhatsApp API?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of businesses already using ChatSigma's WhatsApp Business API
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppBusinessAPI;