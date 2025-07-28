import React from 'react';
import { Zap, Code, Plug, Clock, CheckCircle, ArrowRight, Globe, Settings, Shield, Layers } from 'lucide-react';

const FastIntegration = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Lightning Fast Setup',
      description: 'Get your WhatsApp integration running in under 5 minutes with our simple setup process'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Clean APIs, comprehensive documentation, and SDKs for popular programming languages'
    },
    {
      icon: Plug,
      title: '60+ Pre-built Integrations',
      description: 'Connect with popular tools like Shopify, Salesforce, HubSpot, and more with one click'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with OAuth 2.0, API keys, and encrypted data transmission'
    }
  ];

  const integrationMethods = [
    {
      title: 'REST API',
      description: 'Simple HTTP requests to send messages, manage contacts, and handle webhooks',
      icon: Code,
      features: ['RESTful endpoints', 'JSON responses', 'Rate limiting', 'Error handling']
    },
    {
      title: 'Webhooks',
      description: 'Real-time notifications for incoming messages and delivery status updates',
      icon: Zap,
      features: ['Real-time events', 'Secure delivery', 'Retry mechanism', 'Event filtering']
    },
    {
      title: 'SDKs & Libraries',
      description: 'Official SDKs for popular programming languages and frameworks',
      icon: Layers,
      features: ['Node.js SDK', 'Python SDK', 'PHP SDK', 'React components']
    }
  ];

  const features = [
    'RESTful API endpoints',
    'Real-time webhooks',
    'Official SDKs',
    'Comprehensive documentation',
    'Sandbox environment',
    'Rate limiting protection',
    'Error handling & retries',
    'Authentication & security'
  ];

  const popularIntegrations = [
    { name: 'Shopify', logo: '🛍️', category: 'E-commerce' },
    { name: 'Salesforce', logo: '☁️', category: 'CRM' },
    { name: 'HubSpot', logo: '🧡', category: 'Marketing' },
    { name: 'Stripe', logo: '💳', category: 'Payments' },
    { name: 'Zapier', logo: '⚡', category: 'Automation' },
    { name: 'Google Sheets', logo: '📊', category: 'Productivity' },
    { name: 'Slack', logo: '💬', category: 'Communication' },
    { name: 'WordPress', logo: '📝', category: 'CMS' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Fast Integration
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Integrate WhatsApp in Minutes, Not Days
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Simple APIs, comprehensive documentation, and 60+ pre-built integrations. 
                Get your WhatsApp automation up and running faster than ever.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://app.chatsigma.com/auth/register/vendor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Integration
                </a>
                <a 
                  href="https://app.chatsigma.com/auth/register/vendor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
                >
                  View Docs
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="text-green-400 text-sm font-mono">
                    <div>curl -X POST \</div>
                    <div className="ml-4">https://api.chatsigma.com/v1/messages \</div>
                    <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                    <div className="ml-4">-H "Content-Type: application/json" \</div>
                    <div className="ml-4">{`-d '{`}</div>
                    <div className="ml-8">"to": "+1234567890",</div>
                    <div className="ml-8">"message": "Hello from ChatSigma!"</div>
                    <div className="ml-4">{`}'`}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-300">5min</div>
                    <div className="text-sm opacity-80">Setup Time</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-300">60+</div>
                    <div className="text-sm opacity-80">Integrations</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Integration Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for developers, designed for speed, and optimized for reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#006AFF] rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multiple Integration Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the integration method that works best for your tech stack
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {integrationMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#006AFF] rounded-xl flex items-center justify-center mr-4">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{method.description}</p>
                
                <div className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#25D366] mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools in just one click
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularIntegrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="text-4xl mb-3">{integration.logo}</div>
                <h3 className="font-bold text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-sm text-gray-500">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Developer-First Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything developers need for seamless integration
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Integrating?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get your WhatsApp integration up and running in minutes with our developer-friendly platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://app.chatsigma.com/auth/register/vendor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              Start Integration
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://app.chatsigma.com/auth/register/vendor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastIntegration;