import React, { useState, useEffect, useRef } from 'react';
import { Check, Star, ArrowRight, Zap, Rocket, Trophy, Users, Bot, MessageCircle, Clock, Shield, Award, Headphones, ChevronDown, ChevronUp, Sparkles, TrendingUp, Target, BarChart3, HeartHandshake, Building2 } from 'lucide-react';

const PricingPage = () => {
  const [showUSD, setShowUSD] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const sectionRefs = useRef<{[key: string]: React.RefObject<HTMLDivElement>}>({
    hero: useRef(null),
    pricing: useRef(null),
    benefits: useRef(null),
    comparison: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  });
  
  const plansINR = [
    {
      name: 'Essestional',
      icon: Rocket,
      price: '₹7,999',
      originalPrice: '₹9,999',
      period: '/quarterly',
      description: 'Perfect for growing businesses',
      tagline: 'Best Value',
      popular: false,
      features: [
        'WhatsApp Business API access',
        'Unlimited messages',
        'Advanced chatbot builder',
        'Priority email & chat support',
        '5 team members',
        'Advanced analytics & reports',
        'Custom templates',
        'Basic integrations (CRM, E-commerce)',
        'Dedicated account manager'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/',
      gradient: 'from-[#25D366]/5 to-[#25D366]/10'
    },
    {
      name: 'Automation Pro',
      icon: Trophy,
      price: '₹16,999',
      originalPrice: '₹19,999',
      period: '/half-yearly',
      description: 'For scaling businesses',
      tagline: 'Most Popular',
      popular: true,
      features: [
        'Everything in Essestional, plus:',
        'Unlimited messages',
        'Advanced AI with custom training',
        '24/7 priority support',
        '15 team members',
        'Custom integrations',
        'Advanced automation workflows',
        'Full API access',
        'Dedicated account manager',
        'Quarterly strategy sessions'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/',
      gradient: 'from-[#25D366]/10 to-[#25D366]/20'
    },
    {
      name: 'Automation Max',
      icon: Building2,
      price: '₹34,999',
      originalPrice: '₹49,999',
      period: '/yearly',
      description: 'For enterprise businesses',
      tagline: 'Ultimate Power',
      popular: false,
      features: [
        'Everything in Automation Pro, plus:',
        'Unlimited everything',
        'Custom AI solutions & training',
        '24/7 priority support + hotline',
        'Unlimited team members',
        'Enterprise integrations',
        'Custom development support',
        'White-label options',
        'Dedicated success manager',
        'Monthly strategy sessions',
        '99.9% SLA guarantee'
      ],
      cta: 'Contact Sales',
      ctaLink: 'https://app.chatsigma.com/vb/',
      gradient: 'from-[#1877F2]/5 to-[#1877F2]/10'
    }
  ];
  
  const plansUSD = [
    {
      name: 'Essestional',
      icon: Rocket,
      price: '$96',
      originalPrice: '$120',
      period: '/quarterly',
      description: 'Perfect for growing businesses',
      tagline: 'Best Value',
      popular: false,
      features: [
        'WhatsApp Business API access',
        'Unlimited messages',
        'Advanced chatbot builder',
        'Priority email & chat support',
        '5 team members',
        'Advanced analytics & reports',
        'Custom templates',
        'Basic integrations (CRM, E-commerce)',
        'Dedicated account manager'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/',
      gradient: 'from-[#25D366]/5 to-[#25D366]/10'
    },
    {
      name: 'Automation Pro',
      icon: Trophy,
      price: '$204',
      originalPrice: '$240',
      period: '/half-yearly',
      description: 'For scaling businesses',
      tagline: 'Most Popular',
      popular: true,
      features: [
        'Everything in Essestional, plus:',
        'Unlimited messages',
        'Advanced AI with custom training',
        '24/7 priority support',
        '15 team members',
        'Custom integrations',
        'Advanced automation workflows',
        'Full API access',
        'Dedicated account manager',
        'Quarterly strategy sessions'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.chatsigma.com/vb/',
      gradient: 'from-[#25D366]/10 to-[#25D366]/20'
    },
    {
      name: 'Automation Max',
      icon: Building2,
      price: '$420',
      originalPrice: '$600',
      period: '/yearly',
      description: 'For enterprise businesses',
      tagline: 'Ultimate Power',
      popular: false,
      features: [
        'Everything in Automation Pro, plus:',
        'Unlimited everything',
        'Custom AI solutions & training',
        '24/7 priority support + hotline',
        'Unlimited team members',
        'Enterprise integrations',
        'Custom development support',
        'White-label options',
        'Dedicated success manager',
        'Monthly strategy sessions',
        '99.9% SLA guarantee'
      ],
      cta: 'Contact Sales',
      ctaLink: 'https://app.chatsigma.com/vb/',
      gradient: 'from-[#1877F2]/5 to-[#1877F2]/10'
    }
  ];
  
  const plans = showUSD ? plansUSD : plansINR;
  
  const benefits = [
    {
      icon: TrendingUp,
      title: '5x More Conversions',
      description: 'Businesses using ChatSigma see 5x higher conversion rates on average',
      stat: '500%',
      color: '#25D366'
    },
    {
      icon: Bot,
      title: 'Automate 70% of Replies',
      description: 'Our AI chatbots can handle up to 70% of customer inquiries automatically',
      stat: '70%',
      color: '#1877F2'
    },
    {
      icon: Users,
      title: 'Trusted Globally',
      description: 'Over 2,000+ businesses across 30+ countries trust ChatSigma',
      stat: '2000+',
      color: '#25D366'
    },
    {
      icon: Clock,
      title: 'Save 20+ Hours Weekly',
      description: 'Automate repetitive tasks and focus on what matters most',
      stat: '20hrs',
      color: '#1877F2'
    },
    {
      icon: Target,
      title: '98% Customer Satisfaction',
      description: 'Industry-leading satisfaction scores from our customers',
      stat: '98%',
      color: '#25D366'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption and compliance with global standards',
      stat: '100%',
      color: '#1877F2'
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#25D366]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#1877F2]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#25D366]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Floating icons */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-particle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          >
            {i % 5 === 0 ? (
              <MessageCircle className="text-[#25D366]" size={12 + Math.random() * 20} />
            ) : i % 5 === 1 ? (
              <Bot className="text-[#1877F2]" size={12 + Math.random() * 20} />
            ) : i % 5 === 2 ? (
              <Zap className="text-[#25D366]" size={12 + Math.random() * 20} />
            ) : i % 5 === 3 ? (
              <Shield className="text-[#1877F2]" size={12 + Math.random() * 20} />
            ) : (
              <Star className="text-[#25D366]" size={12 + Math.random() * 20} />
            )}
          </div>
        ))}
      </div>
      
      {/* Hero Section */}
      <section
        id="hero-section"
        ref={sectionRefs.current.hero}
        className={`relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['hero-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366]/10 to-[#1877F2]/10 border border-[#25D366]/20 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-[#25D366]" />
            <span className="text-sm font-semibold text-gray-900">Trusted by 2,000+ businesses worldwide</span>
            <Sparkles className="w-4 h-4 text-[#1877F2]" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black leading-tight">
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-[#25D366] to-[#1877F2] bg-clip-text text-transparent animate-gradient">
              Pricing Plans
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose the perfect plan for your business. Scale as you grow.
            <br />
            <span className="font-semibold text-gray-900">No hidden fees. No surprises. Cancel anytime.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#25D366]" />
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#25D366]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#25D366]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing-section"
        ref={sectionRefs.current.pricing}
        className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['pricing-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'} z-10 relative`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Currency Toggle */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5 shadow-lg border border-gray-200">
              <button
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  !showUSD
                    ? 'bg-[#25D366] text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:bg-white'
                }`}
                onClick={() => setShowUSD(false)}
              >
                <span className="text-lg">₹</span>
                <span>INR</span>
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  showUSD
                    ? 'bg-[#1877F2] text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:bg-white'
                }`}
                onClick={() => setShowUSD(true)}
              >
                <span className="text-lg">$</span>
                <span>USD</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredPlan(index)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative bg-white rounded-3xl shadow-2xl transition-all duration-500 transform border-2 overflow-hidden ${
                    plan.popular
                      ? 'lg:scale-105 border-[#25D366] z-20'
                      : 'border-gray-200 hover:border-[#25D366]/50 hover:scale-105 z-10'
                  } ${hoveredPlan === index ? 'shadow-[0_20px_60px_rgba(37,211,102,0.3)]' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} transition-opacity duration-500 ${hoveredPlan === index ? 'opacity-100' : 'opacity-50'}`}></div>

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
                      <div className="bg-gradient-to-r from-[#25D366] to-[#1ea952] text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center shadow-2xl animate-bounce-slow whitespace-nowrap">
                        <Star className="h-3.5 w-3.5 mr-1.5 text-yellow-300 fill-current animate-pulse" />
                        {plan.tagline}
                      </div>
                    </div>
                  )}

                  {/* Plan Content */}
                  <div className="relative z-10 p-8">
                    {/* Icon & Name */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-transform duration-500 ${
                        hoveredPlan === index ? 'scale-110 rotate-3' : ''
                      } ${plan.popular ? 'bg-[#25D366]' : 'bg-gray-900'}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      {!plan.popular && (
                        <p className="text-sm text-gray-600 font-medium">{plan.tagline}</p>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex flex-col mb-2">
                        {plan.originalPrice && (
                          <span className="text-2xl font-semibold text-gray-400 line-through mb-1">
                            {plan.originalPrice}
                          </span>
                        )}
                        <div className="flex items-baseline">
                          <span className={`text-5xl font-bold ${plan.popular ? 'text-[#25D366]' : 'text-gray-900'}`}>
                            {plan.price}
                          </span>
                          <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={plan.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden group mb-8 shadow-lg ${
                        plan.popular
                          ? 'bg-[#25D366] text-white hover:bg-[#1ea952]'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      <span className="absolute -inset-x-10 top-0 bottom-0 h-full w-20 bg-white/20 transform -skew-x-12 group-hover:animate-shine"></span>
                      <span className="relative z-10 flex items-center">
                        {plan.cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>

                    {/* Features List */}
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                          style={{ animationDelay: `${featureIndex * 0.05}s`, animationFillMode: 'forwards' }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              plan.popular ? 'bg-[#25D366]' : 'bg-gray-900'
                            }`}>
                              <Check className="h-3 w-3 text-white" strokeWidth={3} />
                            </div>
                          </div>
                          <span
                            className={`text-sm leading-relaxed ${
                              feature.includes('Everything in') ? 'font-bold text-gray-900' : 'text-gray-700'
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                    plan.popular ? 'bg-[#25D366]' : 'bg-gray-900'
                  } ${hoveredPlan === index ? 'h-2' : ''}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits-section"
        ref={sectionRefs.current.benefits}
        className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['benefits-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'} bg-gradient-to-br from-gray-50 to-white relative overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#25D366]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#1877F2]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full px-6 py-2 mb-6">
              <Trophy className="w-5 h-5 text-[#25D366]" />
              <span className="text-sm font-semibold text-gray-900">Why Choose ChatSigma</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their customer communication with ChatSigma
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#25D366]/30 relative overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#25D366]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg"
                        style={{ backgroundColor: benefit.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Stat Badge */}
                      <div className="bg-gray-100 group-hover:bg-[#25D366]/10 px-4 py-2 rounded-full transition-all duration-300">
                        <span className="text-2xl font-bold" style={{ color: benefit.color }}>
                          {benefit.stat}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#25D366] transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-2"
                    style={{ backgroundColor: benefit.color }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section
        id="faq-section"
        ref={sectionRefs.current.faq}
        className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${isVisible['faq-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-full px-6 py-2 mb-6">
              <Headphones className="w-5 h-5 text-[#1877F2]" />
              <span className="text-sm font-semibold text-gray-900">Got Questions?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about ChatSigma pricing and features
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-hidden ${
                  activeFAQ === index ? 'border-[#25D366]' : 'border-gray-200 hover:border-[#25D366]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="font-bold text-lg text-gray-900 pr-4 group-hover:text-[#25D366] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFAQ === index ? 'bg-[#25D366] rotate-180' : 'bg-gray-100 group-hover:bg-[#25D366]/10'
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-colors ${
                        activeFAQ === index ? 'text-white' : 'text-gray-600 group-hover:text-[#25D366]'
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ${
                    activeFAQ === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-[#25D366]/20 via-[#25D366]/50 to-[#25D366]/20 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              Still have questions? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/chatsigma-info/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1ea952] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Schedule a Call
              </a>
              <a
                href="mailto:support@chatsigma.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section
        id="cta-section"
        ref={sectionRefs.current.cta}
        className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['cta-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'} bg-gradient-to-br from-gray-50 to-white relative overflow-hidden`}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#25D366]/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="relative bg-gradient-to-br from-[#25D366] via-[#1ea952] to-[#128C7E] rounded-3xl p-10 sm:p-16 text-white text-center overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] animate-slide-bg"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Limited Time Offer</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Transform Your
                <br />
                Customer Communication?
              </h2>

              {/* Subheading */}
              <p className="text-lg sm:text-xl md:text-2xl mb-4 opacity-95 max-w-3xl mx-auto leading-relaxed">
                Join 2,000+ businesses already using ChatSigma to automate conversations and boost sales
              </p>
              <p className="text-base sm:text-lg mb-10 opacity-90 max-w-2xl mx-auto">
                Start your 7-day free trial today. No credit card required. Cancel anytime.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Free 7-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>No credit card needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Cancel anytime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://app.chatsigma.com/vb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#25D366] rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center min-w-[200px] relative overflow-hidden group"
                >
                  <span className="absolute -inset-x-10 top-0 bottom-0 h-full w-24 bg-[#25D366]/10 transform -skew-x-12 group-hover:animate-shine"></span>
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a
                  href="https://calendly.com/chatsigma-info/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-3 border-white text-white rounded-xl text-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-w-[200px] relative overflow-hidden group"
                >
                  <span className="absolute -inset-x-10 top-0 bottom-0 h-full w-24 bg-white/10 transform -skew-x-12 group-hover:animate-shine"></span>
                  <span className="relative z-10 flex items-center">
                    <Headphones className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </span>
                </a>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex items-center justify-center gap-2 text-sm opacity-90">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <span className="font-semibold">Join 2,000+ happy customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;