import React from 'react';
import { Plane, TrendingUp, Users, MessageCircle, CheckCircle, ArrowRight, Zap, BarChart3, Clock, Shield } from 'lucide-react';

const AviationPage = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Flight Updates & Alerts',
      description: 'Automated flight status updates, gate changes, and delay notifications via WhatsApp',
      benefits: ['Real-time notifications', 'Reduced airport queries', 'Better passenger experience']
    },
    {
      icon: Plane,
      title: 'Booking Confirmations',
      description: 'Instant booking confirmations with e-tickets and travel details sent directly to passengers',
      benefits: ['Instant confirmations', 'Digital boarding passes', 'Paperless travel']
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: '24/7 automated support for booking inquiries, baggage tracking, and travel assistance',
      benefits: ['Instant responses', 'Multilingual support', 'Reduced call volumes']
    },
    {
      icon: TrendingUp,
      title: 'Ancillary Sales',
      description: 'Upsell seats, meals, and baggage through personalized WhatsApp recommendations',
      benefits: ['Increase revenue', 'Personalized offers', 'Higher conversion rates']
    }
  ];

  const useCases = [
    {
      title: 'Pre-Flight Engagement',
      description: 'Complete passenger journey automation from booking to boarding',
      steps: ['Booking confirmed → Instant WhatsApp ticket', 'Web check-in reminder 24h before', 'Gate assignment notification', 'Boarding time alerts']
    },
    {
      title: 'In-Flight Services',
      description: 'Enhance passenger experience with proactive communication',
      steps: ['Meal preference collection', 'In-flight entertainment guide', 'Duty-free shopping catalog', 'Connection flight details']
    },
    {
      title: 'Post-Flight Follow-up',
      description: 'Build loyalty and gather feedback after travel',
      steps: ['Landing confirmation', 'Baggage claim information', 'Feedback survey', 'Loyalty program updates']
    },
    {
      title: 'Disruption Management',
      description: 'Proactive communication during delays or cancellations',
      steps: ['Delay notification with reasons', 'Rebooking options', 'Hotel accommodation details', 'Compensation information']
    }
  ];

  const statistics = [
    { value: '60%', label: 'Reduction in Support Calls' },
    { value: '45%', label: 'Increase in Ancillary Sales' },
    { value: '98%', label: 'Message Open Rate' },
    { value: '3Min', label: 'Average Response Time' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Plane className="h-4 w-4 mr-2" />
                Aviation Automation
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Transform Passenger Experience with WhatsApp Automation
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Reduce support calls by 60%, increase ancillary sales by 45%, and deliver exceptional passenger
                service with ChatSigma's aviation WhatsApp automation.
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

            <div className="relative">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Flight BA123 Boarding Soon</div>
                      <div className="text-sm opacity-80">Gate 12B - Boarding at 10:30 AM</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Web Check-in Available</div>
                      <div className="text-sm opacity-80">Check in now and choose your seat</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Plane className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Upgrade Your Seat</div>
                      <div className="text-sm opacity-80">Extra legroom available for $49</div>
                    </div>
                  </div>
                </div>
              </div>

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

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#25D366] mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Complete Aviation Communication Suite
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From booking confirmations to post-flight feedback, automate every touchpoint of the passenger journey with WhatsApp.
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
              See how leading airlines use ChatSigma to automate passenger communications and enhance travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              Ready to Transform Your Aviation Operations?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join leading airlines already using ChatSigma to automate passenger communications and boost satisfaction scores.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://app.chatsigma.com/vb/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="https://calendly.com/chatsigma-info/new-meeting" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AviationPage;
