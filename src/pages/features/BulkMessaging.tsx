import React from 'react';
import { Users, Send, Target, BarChart3, Clock, CheckCircle, ArrowRight, MessageSquare, Globe, Zap } from 'lucide-react';

const BulkMessaging = () => {
  const benefits = [
    {
      icon: Send,
      title: 'Mass Communication',
      description: 'Send personalized messages to thousands of customers simultaneously'
    },
    {
      icon: Target,
      title: 'Audience Segmentation',
      description: 'Target specific customer groups based on behavior, location, and preferences'
    },
    {
      icon: BarChart3,
      title: 'Campaign Analytics',
      description: 'Track delivery rates, open rates, and engagement metrics in real-time'
    },
    {
      icon: Clock,
      title: 'Scheduled Campaigns',
      description: 'Schedule messages for optimal delivery times across different time zones'
    }
  ];

  const features = [
    'Personalized message templates',
    'Contact list management',
    'Delivery scheduling',
    'A/B testing capabilities',
    'Rich media support',
    'Compliance management',
    'Real-time analytics',
    'Automated follow-ups'
  ];

  const campaignTypes = [
    {
      title: 'Promotional Campaigns',
      description: 'Drive sales with targeted promotional messages and special offers',
      icon: Target,
      examples: ['Flash sales', 'New product launches', 'Seasonal offers', 'Discount codes']
    },
    {
      title: 'Transactional Messages',
      description: 'Keep customers informed with order updates and notifications',
      icon: CheckCircle,
      examples: ['Order confirmations', 'Shipping updates', 'Payment receipts', 'Delivery notifications']
    },
    {
      title: 'Engagement Campaigns',
      description: 'Build relationships with valuable content and updates',
      icon: MessageSquare,
      examples: ['Newsletter updates', 'Event invitations', 'Survey requests', 'Feedback collection']
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
                <Users className="h-4 w-4 mr-2" />
                Bulk Messaging
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Reach Thousands of Customers Instantly
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Send personalized WhatsApp messages to your entire customer base. 
                Perfect for promotions, announcements, and customer engagement campaigns.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://app.chatsigma.com/vb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Campaign
                </a>
                <a
                  href="https://app.chatsigma.com/vb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
                >
                  View Examples
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Campaign Dashboard</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-sm opacity-80">Messages Sent</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm opacity-80">Delivered</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl font-bold">45%</div>
                      <div className="text-sm opacity-80">Opened</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Flash Sale Campaign</span>
                      <span className="text-green-300">✓ Sent</span>
                    </div>
                    <div className="text-sm opacity-80">5,000 recipients</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Product Launch</span>
                      <span className="text-yellow-300">⏳ Scheduled</span>
                    </div>
                    <div className="text-sm opacity-80">3,200 recipients</div>
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
              Why Use Bulk Messaging?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Reach your entire customer base with personalized messages that drive engagement and sales.
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
              Powerful Bulk Messaging Features
            </h2>
            <p className="text-xl text-gray-700">
              Everything you need to run successful WhatsApp marketing campaigns
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

      {/* Campaign Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Campaign Types
            </h2>
            <p className="text-xl text-gray-700">
              Choose the right campaign type for your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                    <campaign.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{campaign.title}</h3>
                </div>

                <p className="text-gray-700 mb-6">{campaign.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-black mb-3">Examples:</h4>
                  {campaign.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#25D366] rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Launch Your First Campaign?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start reaching thousands of customers with personalized WhatsApp messages
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://app.chatsigma.com/vb/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              Start Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://app.chatsigma.com/vb/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkMessaging;