import React from 'react';
import { BarChart3, TrendingUp, Eye, MessageSquare, Users, Clock, CheckCircle, ArrowRight, PieChart, Activity } from 'lucide-react';

const Analytics = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Real-Time Insights',
      description: 'Monitor your WhatsApp performance with live data and instant updates'
    },
    {
      icon: Eye,
      title: 'Detailed Reporting',
      description: 'Comprehensive reports on message delivery, engagement, and customer behavior'
    },
    {
      icon: Users,
      title: 'Customer Analytics',
      description: 'Understand your audience with detailed customer journey and interaction data'
    },
    {
      icon: Activity,
      title: 'Performance Tracking',
      description: 'Track KPIs, conversion rates, and ROI across all your WhatsApp campaigns'
    }
  ];

  const metrics = [
    'Message delivery rates',
    'Read and response rates',
    'Customer engagement scores',
    'Conversation flow analysis',
    'Agent performance metrics',
    'Campaign effectiveness',
    'Customer satisfaction scores',
    'Revenue attribution'
  ];

  const dashboardFeatures = [
    {
      title: 'Message Analytics',
      description: 'Track message delivery, read rates, and response times across all conversations',
      icon: MessageSquare,
      stats: ['98% Delivery Rate', '75% Read Rate', '2.3s Avg Response']
    },
    {
      title: 'Customer Insights',
      description: 'Understand customer behavior, preferences, and journey through your funnel',
      icon: Users,
      stats: ['5,000+ Contacts', '45% Engagement', '3.2 Avg Sessions']
    },
    {
      title: 'Campaign Performance',
      description: 'Measure the success of your marketing campaigns and optimize for better results',
      icon: TrendingUp,
      stats: ['25% Conversion', '4.5x ROI', '12% CTR']
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
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics & Reports
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Data-Driven WhatsApp Insights
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Make informed decisions with comprehensive analytics and reporting. 
                Track performance, understand customers, and optimize your WhatsApp strategy.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://app.chatsigma.com/vb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  View Dashboard
                </a>
                <a 
                  href="https://app.chatsigma.com/vb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
                >
                  See Reports
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-4">Analytics Dashboard</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-300">98%</div>
                      <div className="text-sm opacity-80">Delivery Rate</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-300">75%</div>
                      <div className="text-sm opacity-80">Read Rate</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-300">45%</div>
                      <div className="text-sm opacity-80">Response Rate</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-300">4.5x</div>
                      <div className="text-sm opacity-80">ROI</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold">Campaign Performance</span>
                      <TrendingUp className="h-4 w-4 text-green-300" />
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
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
              Why Analytics Matter?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Turn your WhatsApp data into actionable insights that drive business growth and improve customer experience.
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

      {/* Metrics List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Key Metrics We Track
            </h2>
            <p className="text-xl text-gray-700">
              Monitor the metrics that matter most to your business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#25D366] mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Comprehensive Dashboard
            </h2>
            <p className="text-xl text-gray-700">
              Get a complete view of your WhatsApp performance in one place
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                </div>

                <p className="text-gray-700 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <span className="text-sm font-medium text-gray-600">{stat.split(' ')[0]}</span>
                      <span className="text-lg font-bold text-[#25D366]">{stat.split(' ').slice(1).join(' ')}</span>
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
            Ready to Unlock Your Data Insights?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start making data-driven decisions with comprehensive WhatsApp analytics
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              View Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;