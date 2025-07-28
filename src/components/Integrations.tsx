import React, { useState } from 'react';
import { Search, ArrowRight, ExternalLink, Star, Zap, Shield, Clock } from 'lucide-react';

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'E-commerce', 'CRM', 'Marketing', 'Analytics', 'Payment', 'Productivity'];

  const integrations = [
    {
      name: 'Shopify',
      category: 'E-commerce',
      description: 'Sync orders, customers, and products. Send order confirmations and shipping updates.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png',
      color: 'from-[#96BF48] to-[#7AB800]',
      brandColor: '#96BF48',
      features: ['Order sync', 'Customer data', 'Abandoned cart recovery'],
      rating: 4.9,
      users: '10K+',
      setup: '5 min'
    },
    {
      name: 'Salesforce',
      category: 'CRM',
      description: 'Connect leads, contacts, and opportunities. Automate follow-ups and nurture campaigns.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Salesforce-Logo.png',
      color: 'from-[#00A1E0] to-[#0073E6]',
      brandColor: '#00A1E0',
      features: ['Lead management', 'Contact sync', 'Opportunity tracking'],
      rating: 4.8,
      users: '25K+',
      setup: '10 min'
    },
    {
      name: 'HubSpot',
      category: 'CRM',
      description: 'Integrate with HubSpot CRM for seamless lead management and customer communication.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/HubSpot-Logo.png',
      color: 'from-[#FF7A59] to-[#FF5C35]',
      brandColor: '#FF7A59',
      features: ['Contact management', 'Deal tracking', 'Email integration'],
      rating: 4.7,
      users: '15K+',
      setup: '8 min'
    },
    {
      name: 'WooCommerce',
      category: 'E-commerce',
      description: 'WordPress e-commerce integration for order management and customer support.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/WooCommerce-Logo.png',
      color: 'from-[#96588A] to-[#7A4A7A]',
      brandColor: '#96588A',
      features: ['Order notifications', 'Product catalog', 'Customer support'],
      rating: 4.6,
      users: '8K+',
      setup: '7 min'
    },
    {
      name: 'Stripe',
      category: 'Payment',
      description: 'Payment processing integration for transaction notifications and billing updates.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Stripe-Logo.png',
      color: 'from-[#635BFF] to-[#4F46E5]',
      brandColor: '#635BFF',
      features: ['Payment alerts', 'Invoice notifications', 'Subscription updates'],
      rating: 4.9,
      users: '20K+',
      setup: '5 min'
    },
    {
      name: 'Google',
      category: 'Analytics',
      description: 'Track WhatsApp campaign performance and customer engagement metrics.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png',
      color: 'from-[#4285F4] to-[#1A73E8]',
      brandColor: '#4285F4',
      features: ['Campaign tracking', 'Conversion metrics', 'User behavior'],
      rating: 4.5,
      users: '30K+',
      setup: '12 min'
    },
    {
      name: 'Mailchimp',
      category: 'Marketing',
      description: 'Sync email lists and create cross-channel marketing campaigns.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Mailchimp-Logo.png',
      color: 'from-[#FFE01B] to-[#F7D917]',
      brandColor: '#FFE01B',
      features: ['List sync', 'Campaign automation', 'Audience segmentation'],
      rating: 4.4,
      users: '12K+',
      setup: '6 min'
    },
    {
      name: 'Zapier',
      category: 'Productivity',
      description: 'Connect with 5000+ apps through Zapier automation workflows.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Zapier-Logo.png',
      color: 'from-[#FF4A00] to-[#E63900]',
      brandColor: '#FF4A00',
      features: ['Workflow automation', '5000+ app connections', 'Custom triggers'],
      rating: 4.8,
      users: '50K+',
      setup: '3 min'
    },
    {
      name: 'Slack',
      category: 'Productivity',
      description: 'Get WhatsApp notifications and manage conversations from Slack.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Slack-Logo.png',
      color: 'from-[#4A154B] to-[#350D36]',
      brandColor: '#4A154B',
      features: ['Message notifications', 'Team collaboration', 'Channel integration'],
      rating: 4.6,
      users: '18K+',
      setup: '4 min'
    },
    {
      name: 'Microsoft',
      category: 'Productivity',
      description: 'Integrate with Microsoft Office 365 and Teams for seamless workflow.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png',
      color: 'from-[#00BCF2] to-[#0078D4]',
      brandColor: '#00BCF2',
      features: ['Office 365 sync', 'Teams integration', 'Calendar sync'],
      rating: 4.7,
      users: '9K+',
      setup: '6 min'
    },
    {
      name: 'PayPal',
      category: 'Payment',
      description: 'Send payment confirmations and transaction updates via WhatsApp.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/PayPal-Logo.png',
      color: 'from-[#003087] to-[#002C5F]',
      brandColor: '#003087',
      features: ['Payment notifications', 'Transaction alerts', 'Refund updates'],
      rating: 4.6,
      users: '14K+',
      setup: '5 min'
    },
    {
      name: 'Amazon',
      category: 'E-commerce',
      description: 'Connect with Amazon marketplace for order management and notifications.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
      color: 'from-[#FF9900] to-[#E68900]',
      brandColor: '#FF9900',
      features: ['Order sync', 'Inventory updates', 'Customer notifications'],
      rating: 4.8,
      users: '22K+',
      setup: '7 min'
    }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">60+ Native Integrations</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Connect Chat Sigma with your favorite tools and platforms. No coding required – just plug and play.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Zap className="h-5 w-5" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield className="h-5 w-5" />
              <span>Enterprise security</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Clock className="h-5 w-5" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#25D366] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIntegrations.map((integration, index) => (
            <div
              key={integration.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${integration.color}`}></div>
              
              <div className="p-8">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div 
                    className="w-16 h-16 bg-white rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-md border-2 border-transparent group-hover:shadow-lg"
                    style={{
                      borderColor: integration.brandColor + '30',
                      boxShadow: `0 4px 15px ${integration.brandColor}20`
                    }}
                  >
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="h-10 w-auto max-w-[48px] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.style.display = 'block';
                      }}
                    />
                    <div 
                      className="hidden text-xs font-bold text-center"
                      style={{ color: integration.brandColor }}
                    >
                      {integration.name}
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold text-gray-900 transition-colors"
                      style={{ 
                        '--hover-color': integration.brandColor 
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = integration.brandColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#111827';
                      }}
                    >
                      {integration.name}
                    </h3>
                    <span 
                      className="text-sm text-white px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: integration.brandColor }}
                    >
                      {integration.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {integration.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#25D366] rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{integration.rating}</span>
                  </div>
                  <div>{integration.users} users</div>
                  <div>{integration.setup} setup</div>
                </div>

                {/* CTA Button */}
                <button 
                  className="w-full py-3 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${integration.brandColor}, ${integration.brandColor}CC)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${integration.brandColor}DD, ${integration.brandColor})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${integration.brandColor}, ${integration.brandColor}CC)`;
                  }}
                >
                  Connect Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Integration CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Integration?</h3>
            <p className="text-xl mb-8 opacity-90">
              Can't find your integration? Our team will build it for you at no extra cost.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors transform hover:scale-105">
              Request Integration
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;