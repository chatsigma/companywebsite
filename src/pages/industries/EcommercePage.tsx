import React from 'react';
import { ShoppingBag, TrendingUp, Users, MessageCircle, CheckCircle, ArrowRight, Zap, BarChart3 } from 'lucide-react';

const EcommercePage = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Order Confirmations',
      description: 'Automatically send order confirmations with tracking details via WhatsApp',
      benefits: ['Instant notifications', 'Reduced support queries', 'Better customer experience']
    },
    {
      icon: ShoppingBag,
      title: 'Cart Abandonment Recovery',
      description: 'Win back customers with personalized WhatsApp messages for abandoned carts',
      benefits: ['Recover 30% more sales', 'Personalized reminders', 'Automated follow-ups']
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: '24/7 automated customer support for order inquiries and product questions',
      benefits: ['Instant responses', 'Multilingual support', 'Escalation to human agents']
    },
    {
      icon: TrendingUp,
      title: 'Sales Notifications',
      description: 'Keep customers updated about flash sales, new arrivals, and exclusive offers',
      benefits: ['Higher engagement', 'Increased repeat purchases', 'Targeted promotions']
    }
  ];

  const useCases = [
    {
      title: 'Order Management',
      description: 'Complete order lifecycle automation from confirmation to delivery',
      steps: ['Order placed → Instant WhatsApp confirmation', 'Payment confirmed → Processing notification', 'Shipped → Tracking details shared', 'Delivered → Feedback request']
    },
    {
      title: 'Customer Acquisition',
      description: 'Convert website visitors into WhatsApp subscribers for better engagement',
      steps: ['Website popup → WhatsApp opt-in', 'Welcome message → Product catalog', 'Personalized recommendations', 'Exclusive offers for subscribers']
    },
    {
      title: 'Post-Purchase Engagement',
      description: 'Build long-term relationships with customers after purchase',
      steps: ['Delivery confirmation', 'Usage tips and tutorials', 'Review and rating request', 'Cross-sell related products']
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
                <ShoppingBag className="h-4 w-4 mr-2" />
                E-commerce Automation
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Boost Your E-commerce Sales with WhatsApp Automation
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Increase conversions by 45%, reduce cart abandonment by 30%, and provide instant customer support 
                with ChatSigma's e-commerce WhatsApp automation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://app.chatsigma.com/vb/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Start Free Trial
                </a>
                <a href="https://app.chatsigma.com/vb/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all">
                  View Demo
                </a>
              </div>
            </div>
            
            {/* Animated E-commerce Graphics */}
            <div className="relative">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Order #12345 Confirmed!</div>
                      <div className="text-sm opacity-80">Your iPhone 15 Pro is being processed</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-[#006AFF] rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Flash Sale Alert! 🔥</div>
                      <div className="text-sm opacity-80">50% off on selected items - Limited time</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <ShoppingBag className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Cart Reminder</div>
                      <div className="text-sm opacity-80">You left something in your cart...</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center animate-float">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center animate-float-delay-1">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Complete E-commerce Automation Suite
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From order confirmations to customer support, automate every aspect of your e-commerce business with WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                </div>

                <p className="text-gray-700 mb-6">{feature.description}</p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#25D366] mr-2" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-700">
              See how leading e-commerce brands use ChatSigma to automate their WhatsApp communications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-black mb-4">{useCase.title}</h3>
                <p className="text-gray-700 mb-6">{useCase.description}</p>

                <div className="space-y-3">
                  {useCase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                      </div>
                      <span className="text-sm text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#25D366] rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your E-commerce Business?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join 500+ e-commerce brands already using ChatSigma to automate their WhatsApp communications and boost sales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://app.chatsigma.com/vb/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="https://app.chatsigma.com/vb/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;