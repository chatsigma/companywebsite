import React, { useState, useEffect, useRef } from 'react';
import { Check, Star, ArrowRight, Zap, Rocket, Trophy, Users, Bot, MessageCircle, Clock, Shield, Award, Headphones, ChevronDown, ChevronUp } from 'lucide-react';

const PricingPage = () => {
  const [showUSD, setShowUSD] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const sectionRefs = useRef<{[key: string]: React.RefObject<HTMLDivElement>}>({
    hero: useRef(null),
    pricing: useRef(null),
    benefits: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  });
  
  const plansINR = [
    {
      name: 'Free Forever',
      emoji: '🎁',
      price: '₹0',
      period: '/month',
      description: 'Perfect for small businesses',
      popular: false,
      features: [
        'WhatsApp Business API access',
        '100 messages/month',
        'Basic chatbot builder',
        'Email support',
        '1 team member',
        'Basic analytics',
        'Standard templates',
        'Mobile app access'
      ],
      cta: 'Start Free Trial',
      ctaLink: 'https://app.chatsigma.com/vb/'
    },
    {
      name: 'Launch',
      emoji: '🚀',
      price: '₹999',
      period: '/month',
      description: 'For growing businesses',
      popular: false,
      features: [
        'Everything in Free, plus:',
        'Unlimited messages',
        'Advanced chatbot builder',
        'Priority email & chat support',
        '5 team members',
        'Advanced analytics & reports',
        'Custom templates',
        'Basic integrations',
        'Dedicated account manager'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/'
    },
    {
      name: 'Elevate',
      emoji: '⚡',
      price: '₹1,999',
      period: '/month',
      description: 'For scaling businesses',
      popular: true,
      features: [
        'Everything in Launch, plus:',
        'Unlimited messages',
        'Advanced AI with custom training',
        '24/7 priority support',
        '15 team members',
        'Custom integrations',
        'Advanced automation workflows',
        'API access',
        'Dedicated account manager',
        'Quarterly strategy sessions'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/'
    },
    {
      name: 'Dominance',
      emoji: '👑',
      price: '₹2,999',
      period: '/month',
      description: 'For enterprise businesses',
      popular: false,
      features: [
        'Everything in Elevate, plus:',
        'Unlimited messages',
        'Custom AI solutions',
        '24/7 priority support',
        'Unlimited team members',
        'Enterprise integrations',
        'Custom development',
        'White-label options',
        'Dedicated account manager',
        'Monthly strategy sessions',
        'SLA guarantee'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/'
    }
  ];
  
  const plansUSD = [
    {
      name: 'Free Forever',
      emoji: '🎁',
      price: '$0',
      period: '/month',
      description: 'Perfect for small businesses',
      popular: false,
      features: [
        'WhatsApp Business API access',
        '100 messages/month',
        'Basic chatbot builder',
        'Email support',
        '1 team member',
        'Basic analytics',
        'Standard templates',
        'Mobile app access'
      ],
      cta: 'Start Free Trial',
      ctaLink: 'https://app.chatsigma.com/vb/'
    },
    {
      name: 'Launch',
      emoji: '🚀',
      price: '$12',
      period: '/month',
      description: 'For growing businesses',
      popular: false,
      features: [
        'Everything in Free, plus:',
        'Unlimited messages',
        'Advanced chatbot builder',
        'Priority email & chat support',
        '5 team members',
        'Advanced analytics & reports',
        'Custom templates',
        'Basic integrations',
        'Dedicated account manager'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/'
    },
    {
      name: 'Elevate',
      emoji: '⚡',
      price: '$24',
      period: '/month',
      description: 'For scaling businesses',
      popular: true,
      features: [
        'Everything in Launch, plus:',
        'Unlimited messages',
        'Advanced AI with custom training',
        '24/7 priority support',
        '15 team members',
        'Custom integrations',
        'Advanced automation workflows',
        'API access',
        'Dedicated account manager',
        'Quarterly strategy sessions'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/'
    },
    {
      name: 'Dominance',
      emoji: '👑',
      price: '$36',
      period: '/month',
      description: 'For enterprise businesses',
      popular: false,
      features: [
        'Everything in Elevate, plus:',
        'Unlimited messages',
        'Custom AI solutions',
        '24/7 priority support',
        'Unlimited team members',
        'Enterprise integrations',
        'Custom development',
        'White-label options',
        'Dedicated account manager',
        'Monthly strategy sessions',
        'SLA guarantee'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/'
    }
  ];
  
  const plans = showUSD ? plansUSD : plansINR;
  
  const benefits = [
    {
      icon: MessageCircle,
      title: '5x More Conversions',
      description: 'Businesses using ChatSigma see 5x higher conversion rates on average'
    },
    {
      icon: Bot,
      title: 'Automate 70% of Replies',
      description: 'Our AI chatbots can handle up to 70% of customer inquiries automatically'
    },
    {
      icon: Users,
      title: 'Trusted Globally',
      description: 'Over 2,000+ businesses across 30+ countries trust ChatSigma'
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial with full access to all features. No credit card required to start, and you can cancel anytime."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, UPI (for Indian customers), and bank transfers for enterprise customers."
    },
    {
      question: "What happens if I exceed my message limit?",
      answer: "If you exceed your monthly message limit on the Free plan, you'll need to upgrade to a paid plan for unlimited messaging. We'll notify you before you reach your limit."
    },
    {
      question: "Do you offer custom plans?",
      answer: "Yes, for businesses with specific needs, we offer custom plans. Contact our sales team to discuss your requirements."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key].current) {
        observer.observe(sectionRefs.current[key].current!);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-50">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#1877F2]/10 rounded-full blur-3xl animate-pulse-delayed"></div>
        
        {/* Floating icons */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: 0.1 + Math.random() * 0.1
            }}
          >
            {i % 4 === 0 ? (
              <MessageCircle 
                className="text-[#25D366]" 
                size={10 + Math.random() * 15} 
              />
            ) : i % 4 === 1 ? (
              <Bot 
                className="text-[#1877F2]" 
                size={10 + Math.random() * 15} 
              />
            ) : i % 4 === 2 ? (
              <Zap 
                className="text-[#F6C90E]" 
                size={10 + Math.random() * 15} 
              />
            ) : (
              <Shield 
                className="text-[#25D366]" 
                size={10 + Math.random() * 15} 
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Hero Section */}
      <section 
        id="hero-section" 
        ref={sectionRefs.current.hero}
        className={`relative pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['hero-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black mt-10 sm:mt-6">
            Simple, transparent plans for every business
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-4 sm:mb-6">
            Upgrade anytime as your business grows. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        id="pricing-section"
        ref={sectionRefs.current.pricing}
        className={`py-6 sm:py-8 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['pricing-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'} z-10 relative`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Currency Toggle */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-lg">
              <button
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${!showUSD ? 'bg-[#25D366] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setShowUSD(false)}
              >
                ₹ INR
              </button>
              <button
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${showUSD ? 'bg-[#1877F2] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setShowUSD(true)}
              >
                $ USD
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 overflow-hidden ${
                  plan.popular ? 'lg:scale-[1.03] z-10' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Top border */}
                <div className="h-2 w-full bg-[#25D366]"></div>
                
                <div className={`absolute -top-4 right-4 z-20 popular-badge ${!plan.popular && 'hidden'}`}>
                  <div className="bg-[#25D366] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg animate-pulse">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    Most Popular
                  </div>
                </div>
                
                {/* Plan Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{plan.emoji}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-[#25D366]">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 my-6"></div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 min-h-[320px]">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0">
                          <Check className="h-5 w-5 text-[#25D366]" />
                        </div>
                        <span className={`text-gray-700 ${feature.includes('Dedicated account manager') ? 'font-medium' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 sm:py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center relative overflow-hidden group"
                  >
                    <span className="absolute -inset-x-10 top-0 bottom-0 h-full w-20 bg-white/20 transform -skew-x-12 group-hover:animate-shine"></span>
                    <span className="relative z-10 flex items-center">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits-section"
        ref={sectionRefs.current.benefits}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['benefits-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why businesses choose ChatSigma</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their customer communication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] border border-gray-100 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-3 transition-transform">
                    <benefit.icon className="h-8 w-8 text-[#25D366]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#25D366]/10 rounded-full blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section 
        id="faq-section"
        ref={sectionRefs.current.faq}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-1000 ${isVisible['faq-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {activeFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[#25D366]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#25D366]" />
                  )}
                </button>
                
                <div 
                  className={`px-6 pb-4 transition-all duration-300 ${
                    activeFAQ === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        id="cta-section"
        ref={sectionRefs.current.cta}
        className={`py-10 sm:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['cta-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#25D366] rounded-3xl p-6 sm:p-10 text-white text-center overflow-hidden shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-30 animate-slide-bg"></div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/30 rounded-full blur-xl animate-float-delay-1"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/25 rounded-full blur-lg animate-float-delay-2"></div>
              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/25 rounded-full blur-lg animate-float"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
                Start your 7-day free trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://app.chatsigma.com/vb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#25D366] rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center sm:min-w-[180px] relative overflow-hidden group"
                >
                  <span className="absolute -inset-x-10 top-0 bottom-0 h-full w-20 bg-[#25D366]/10 transform -skew-x-12 group-hover:animate-shine"></span>
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                </a>
                <a
                  href="https://calendly.com/chatsigma-info/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-xl text-base sm:text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center sm:min-w-[180px] relative overflow-hidden group"
                >
                  <span className="absolute -inset-x-10 top-0 bottom-0 h-full w-20 bg-white/10 transform -skew-x-12 group-hover:animate-shine"></span>
                  <span className="relative z-10">Schedule Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;