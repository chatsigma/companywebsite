import React from 'react';
import { Truck, TrendingUp, Users, MessageCircle, CheckCircle, ArrowRight, Zap, BarChart3, MapPin, Package } from 'lucide-react';

const LogisticsPage = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Real-Time Tracking',
      description: 'Automated shipment tracking updates and delivery notifications via WhatsApp',
      benefits: ['Live tracking updates', 'Reduced WISMO calls', 'Better transparency']
    },
    {
      icon: MapPin,
      title: 'Delivery Coordination',
      description: 'Seamless delivery scheduling, address verification, and customer coordination',
      benefits: ['Flexible scheduling', 'Failed delivery reduction', 'Higher success rates']
    },
    {
      icon: Package,
      title: 'Proof of Delivery',
      description: 'Automated POD collection with photos, signatures, and recipient confirmation',
      benefits: ['Digital documentation', 'Dispute resolution', 'Compliance tracking']
    },
    {
      icon: Users,
      title: 'Fleet Management',
      description: 'Coordinate with drivers, dispatchers, and field teams through automated workflows',
      benefits: ['Better coordination', 'Reduced delays', 'Improved efficiency']
    }
  ];

  const useCases = [
    {
      title: 'Shipment Lifecycle',
      description: 'End-to-end shipment tracking and communication',
      steps: ['Booking confirmation', 'Pickup notification', 'In-transit updates', 'Delivery confirmation with POD']
    },
    {
      title: 'Last-Mile Delivery',
      description: 'Optimize final delivery with customer engagement',
      steps: ['Out for delivery alert', 'ETA and location sharing', 'Address verification', 'Delivery feedback collection']
    },
    {
      title: 'Exception Management',
      description: 'Proactive handling of delivery exceptions',
      steps: ['Delay notification with reason', 'Rescheduling options', 'Alternative delivery arrangements', 'Resolution updates']
    },
    {
      title: 'Warehouse Operations',
      description: 'Streamline warehouse communication and updates',
      steps: ['Inventory receipt confirmation', 'Storage location updates', 'Pick-up readiness alerts', 'Quality inspection reports']
    }
  ];

  const statistics = [
    { value: '70%', label: 'Reduction in WISMO Calls' },
    { value: '40%', label: 'Improved Delivery Success' },
    { value: '50%', label: 'Faster Exception Resolution' },
    { value: '95%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Truck className="h-4 w-4 mr-2" />
                Logistics & Transportation
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Optimize Logistics Operations with WhatsApp Automation
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Reduce WISMO calls by 70%, improve delivery success by 40%, and enhance customer satisfaction
                with ChatSigma's logistics WhatsApp automation.
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
                      <div className="font-semibold">Out for Delivery</div>
                      <div className="text-sm opacity-80">Your package arrives in 30 minutes</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Live Tracking</div>
                      <div className="text-sm opacity-80">Track your driver in real-time</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Delivered Successfully</div>
                      <div className="text-sm opacity-80">POD collected - Signature confirmed</div>
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
              Complete Logistics Communication Suite
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From shipment tracking to delivery coordination, automate every aspect of your logistics operations with WhatsApp.
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
              See how leading logistics companies use ChatSigma to automate shipment communications and improve delivery rates
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
              Ready to Transform Your Logistics Operations?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join leading logistics companies already using ChatSigma to automate shipment communications and boost efficiency.
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

export default LogisticsPage;
