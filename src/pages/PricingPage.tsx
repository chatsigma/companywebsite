import React, { useState, useEffect, useRef } from 'react';
import { Check, Star, ArrowRight, Zap, Rocket, Trophy, Users, Bot, MessageCircle, Clock, Shield, Award, Headphones, ChevronDown, ChevronUp, Sparkles, TrendingUp, Target, BarChart3, HeartHandshake, Building2, CheckCircle2, Calendar, UserCheck, FileCheck, Settings, X } from 'lucide-react';

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
        'Free Business API',
        'Send Bulk broadcast',
        'Bulk import & export',
        'Define Customers Segments',
        'Share products & Catalogues',
        'Detailed Broadcast Analytics',
        'Excel import & Export',
        'Google sheets integration',
        'Access on mobile and web',
        'Unlimited tags',
        'Team Inbox (1 owner + 5 agents Free)',
        '10 Custom Attributes',
        '10 Custom Columns',
        'Email & Chat Support',
        'Basic FAQ Bot',
        'Facebook Lead Integration (Autosync)',
        '10 Workflow Automation',
        '25,000 Contacts',
        'WhatsApp Inbuilt forms (survey, leads, feedback)'
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
        'Everything available in Essestional +',
        'Team Inbox (10 Agents FREE)',
        'Automated Ordering Bot',
        '5+ 3rd Party integrations (Custom)',
        'Developer API',
        'Advanced Campaign Reports',
        'Monthly Business Overview Meeting (Virtual)',
        'Facebook Lead Integration (Autosync)',
        '1 AI Assistant to handle customers queries 24/7',
        'Advanced FAQ Bot',
        '25 Workflow Automation',
        '2,50,000 Contacts',
        'Project Assignment Feature',
        'Task Assignment Feature',
        'Shopify & Woocommerce Integration',
        '24/7 priority Chat support'
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
        'Everything available in Automation Pro +',
        'Team Inbox (Unlimited Agents)',
        'Unlimited Chatbot',
        'Unlimited Contacts',
        'Unlimited 3rd party integration',
        'Developer API',
        '50 Workflow Automation',
        '50 Advanced Chatbots',
        'Complex Automation Journey',
        'Special Integrations',
        'Unlimited Columns',
        '24/7 Priority Call & Chat Support'
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
        'Free Business API',
        'Send Bulk broadcast',
        'Bulk import & export',
        'Define Customers Segments',
        'Share products & Catalogues',
        'Detailed Broadcast Analytics',
        'Excel import & Export',
        'Google sheets integration',
        'Access on mobile and web',
        'Unlimited tags',
        'Team Inbox (1 owner + 5 agents Free)',
        '10 Custom Attributes',
        '10 Custom Columns',
        'Email & Chat Support',
        'Basic FAQ Bot',
        'Facebook Lead Integration (Autosync)',
        '10 Workflow Automation',
        '25,000 Contacts',
        'WhatsApp Inbuilt forms (survey, leads, feedback)'
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
        'Everything available in Essestional +',
        'Team Inbox (10 Agents FREE)',
        'Automated Ordering Bot',
        '5+ 3rd Party integrations (Custom)',
        'Developer API',
        'Advanced Campaign Reports',
        'Monthly Business Overview Meeting (Virtual)',
        'Facebook Lead Integration (Autosync)',
        '1 AI Assistant to handle customers queries 24/7',
        'Advanced FAQ Bot',
        '25 Workflow Automation',
        '2,50,000 Contacts',
        'Project Assignment Feature',
        'Task Assignment Feature',
        'Shopify & Woocommerce Integration',
        '24/7 priority Chat support'
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
        'Everything available in Automation Pro +',
        'Team Inbox (Unlimited Agents)',
        'Unlimited Chatbot',
        'Unlimited Contacts',
        'Unlimited 3rd party integration',
        'Developer API',
        '50 Workflow Automation',
        '50 Advanced Chatbots',
        'Complex Automation Journey',
        'Special Integrations',
        'Unlimited Columns',
        '24/7 Priority Call & Chat Support'
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
        className={`relative pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['hero-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366]/10 to-[#1877F2]/10 border border-[#25D366]/20 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-[#25D366]" />
            <span className="text-sm font-semibold text-gray-900">Trusted by 2,000+ businesses worldwide</span>
            <Sparkles className="w-4 h-4 text-[#1877F2]" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
            <span className="bg-gradient-to-r from-[#25D366] to-[#1877F2] bg-clip-text text-transparent animate-gradient">
              Simple, Transparent Pricing
            </span>
            <br />
            for WhatsApp Automation That Scales
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 leading-relaxed">
            Access the official WhatsApp Business API with powerful automation, AI-driven workflows, and enterprise-grade integrations — all in one platform.
          </p>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg text-gray-700 mb-8">
            <span className="font-semibold">Official WhatsApp Business API</span>
            <span className="text-gray-400">•</span>
            <span className="font-semibold">Meta-compliant</span>
            <span className="text-gray-400">•</span>
            <span className="font-semibold">Built for growing businesses</span>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#1ea952] shadow-lg hover:shadow-xl"
          >
            View Plans
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing-section"
        ref={sectionRefs.current.pricing}
        className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['pricing-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'} z-10 relative`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Currency Toggle */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1 shadow-md border border-gray-200">
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  !showUSD
                    ? 'bg-[#25D366] text-white shadow-md'
                    : 'text-gray-700 hover:bg-white'
                }`}
                onClick={() => setShowUSD(false)}
              >
                <span className="text-base">₹</span>
                <span>INR</span>
              </button>
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  showUSD
                    ? 'bg-[#25D366] text-white shadow-md'
                    : 'text-gray-700 hover:bg-white'
                }`}
                onClick={() => setShowUSD(true)}
              >
                <span className="text-base">$</span>
                <span>USD</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredPlan(index)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative bg-white rounded-3xl shadow-2xl transition-all duration-500 transform border-2 ${
                    plan.popular
                      ? 'lg:scale-105 border-[#25D366] z-20'
                      : 'border-gray-200 hover:border-[#25D366]/50 hover:scale-105 z-10'
                  } ${hoveredPlan === index ? 'shadow-[0_20px_60px_rgba(37,211,102,0.3)]' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} transition-opacity duration-500 rounded-3xl ${hoveredPlan === index ? 'opacity-100' : 'opacity-50'}`}></div>

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-50">
                      <div className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-gray-900 px-5 py-2 rounded-full text-sm font-black flex items-center shadow-2xl whitespace-nowrap border-2 border-white">
                        <Star className="h-4 w-4 mr-1.5 text-gray-900 fill-current" />
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
                      } bg-[#25D366]`}>
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
                          <span className="text-5xl font-bold text-[#25D366]">
                            {plan.price}
                          </span>
                          <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                          style={{ animationDelay: `${featureIndex * 0.05}s`, animationFillMode: 'forwards' }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#25D366]">
                              <Check className="h-3 w-3 text-white" strokeWidth={3} />
                            </div>
                          </div>
                          <span
                            className={`text-sm leading-relaxed ${
                              feature.includes('Everything in') || feature.includes('Everything available') ? 'font-bold text-gray-900' : 'text-gray-700'
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={plan.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden group shadow-lg bg-[#25D366] text-white hover:bg-[#1ea952]"
                    >
                      <span className="absolute -inset-x-10 top-0 bottom-0 h-full w-20 bg-white/20 transform -skew-x-12 group-hover:animate-shine"></span>
                      <span className="relative z-10 flex items-center">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 bg-[#25D366] rounded-b-3xl ${hoveredPlan === index ? 'h-2' : ''}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp Business API Conversational Cost Pricing Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              WhatsApp Business API Conversational Cost Pricing
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              WhatsApp charges additional charges per conversation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* User initiated conversation */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  User initiated conversation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Whenever a business replies to a user within the 24 hour customer service window, that message initiates a user-initiated conversation
                </p>
              </div>

              {/* Business initiated conversation */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Business initiated conversation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A conversation that initiates from a business sending a user a message outside the 24-hour customer service window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided Onboarding Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#25D366]/5 to-[#1877F2]/5 rounded-3xl shadow-xl border-2 border-[#25D366]/20 p-8 sm:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 right-10 w-40 h-40 bg-[#25D366]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1877F2]/20 rounded-full blur-3xl"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full px-4 py-2 mb-6">
                  <Award className="w-4 h-4 text-[#25D366]" />
                  <span className="text-sm font-semibold text-gray-900">Premium Support</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Guided Onboarding & Setup — Included at No Extra Cost
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our onboarding specialists work closely with you to ensure a smooth, compliant, and results-driven setup, so you can start using WhatsApp automation confidently from day one.
                </p>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: UserCheck,
                      text: 'Assistance with Facebook Page approval and Meta Business verification'
                    },
                    {
                      icon: Settings,
                      text: 'WhatsApp Business number registration and configuration'
                    },
                    {
                      icon: Users,
                      text: 'Importing contacts and setting up broadcast lists correctly'
                    },
                    {
                      icon: Shield,
                      text: 'Compliance best practices to protect your number and avoid bans'
                    },
                    {
                      icon: Target,
                      text: 'Strategic guidance to design automation that supports your business goals'
                    }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-300">
                          <Icon className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-gray-700 leading-relaxed pt-2 font-medium">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <a
                  href="https://calendly.com/chatsigma-info/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1ea952] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Schedule a Setup & Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right Graphics */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  {/* Main Visual Card */}
                  <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="space-y-6">
                      {/* Setup Progress */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#25D366] rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Setup Progress: 85%</p>
                        </div>
                      </div>

                      {/* Setup Steps */}
                      <div className="space-y-3">
                        {[
                          { text: 'Meta Business Verification', done: true },
                          { text: 'WhatsApp Number Registration', done: true },
                          { text: 'Contact Import & Segmentation', done: true },
                          { text: 'Automation Setup', done: false }
                        ].map((step, index) => (
                          <div key={index} className="flex items-center gap-3">
                            {step.done ? (
                              <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                            )}
                            <span className={`text-sm ${step.done ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                              {step.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="bg-[#25D366]/10 rounded-xl p-4">
                          <p className="text-2xl font-bold text-[#25D366]">24/7</p>
                          <p className="text-xs text-gray-600">Support Available</p>
                        </div>
                        <div className="bg-[#1877F2]/10 rounded-xl p-4">
                          <p className="text-2xl font-bold text-[#1877F2]">100%</p>
                          <p className="text-xs text-gray-600">Compliant Setup</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#25D366] to-[#1ea952] text-white px-6 py-3 rounded-full shadow-2xl transform rotate-12 hover:rotate-6 transition-transform">
                    <p className="text-sm font-bold">FREE Setup!</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#25D366]/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -top-8 left-1/2 w-16 h-16 bg-[#1877F2]/20 rounded-full blur-xl animate-float"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Plans and Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compare plans and features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs with our detailed feature comparison
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#25D366]/10 to-[#1877F2]/10 border-b-2 border-gray-200">
                    <th className="text-left p-6 text-gray-900 font-bold text-lg">Features</th>
                    <th className="text-center p-6 text-gray-900 font-bold text-lg">Essestional</th>
                    <th className="text-center p-6 text-gray-900 font-bold text-lg">
                      Automation Pro
                    </th>
                    <th className="text-center p-6 text-gray-900 font-bold text-lg">Automation Max</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      icon: Users,
                      feature: 'Team Inbox',
                      essestional: '1 owner + 5 agents',
                      pro: '10 agents',
                      max: 'Unlimited agents'
                    },
                    {
                      icon: MessageCircle,
                      feature: 'No. of messages',
                      essestional: 'Unlimited',
                      pro: 'Unlimited',
                      max: 'Unlimited'
                    },
                    {
                      icon: MessageCircle,
                      feature: 'No. of conversations',
                      essestional: 'Unlimited',
                      pro: 'Unlimited',
                      max: 'Unlimited'
                    },
                    {
                      icon: Users,
                      feature: 'No. of customers',
                      essestional: '25,000',
                      pro: '2,50,000',
                      max: 'Unlimited'
                    },
                    {
                      icon: Users,
                      feature: 'No. of agents',
                      essestional: '5 agents',
                      pro: '10 agents',
                      max: 'Custom'
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Conversation tags',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Conversation and message search',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Filtering based on tags and agents',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: Bot,
                      feature: 'Basic FAQ Bot',
                      essestional: true,
                      pro: 'Advanced',
                      max: 'Unlimited'
                    },
                    {
                      icon: Zap,
                      feature: 'Workflow Automation',
                      essestional: '10',
                      pro: '25',
                      max: '50'
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Bulk broadcast',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Bulk import & export',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: Target,
                      feature: 'Define Customer Segments',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Share products & Catalogues',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: BarChart3,
                      feature: 'Detailed Broadcast Analytics',
                      essestional: true,
                      pro: 'Advanced',
                      max: 'Advanced'
                    },
                    {
                      icon: FileCheck,
                      feature: 'Excel import & Export',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Google sheets integration',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Access on mobile and web',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Facebook Lead Integration',
                      essestional: true,
                      pro: true,
                      max: true
                    },
                    {
                      icon: Bot,
                      feature: 'AI Assistant (24/7)',
                      essestional: false,
                      pro: '1',
                      max: 'Unlimited'
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Automated Ordering Bot',
                      essestional: false,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: '3rd Party integrations',
                      essestional: false,
                      pro: '5+ Custom',
                      max: 'Unlimited'
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Developer API',
                      essestional: false,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Shopify & Woocommerce Integration',
                      essestional: false,
                      pro: true,
                      max: true
                    },
                    {
                      icon: CheckCircle2,
                      feature: 'Task & Project Assignment',
                      essestional: false,
                      pro: true,
                      max: true
                    },
                    {
                      icon: Headphones,
                      feature: 'Support',
                      essestional: 'Email & Chat',
                      pro: '24/7 Priority',
                      max: 'Dedicated Manager'
                    }
                  ].map((row, index) => {
                    const Icon = row.icon;
                    return (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                        }`}
                      >
                        <td className="p-4 sm:p-6">
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                              <Icon className="w-4 h-4 text-[#25D366]" />
                            </div>
                            <span className="text-gray-900 font-medium text-sm sm:text-base">{row.feature}</span>
                          </div>
                        </td>
                        <td className="p-4 sm:p-6 text-center">
                          {typeof row.essestional === 'boolean' ? (
                            row.essestional ? (
                              <Check className="w-5 h-5 text-[#25D366] mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700 font-medium text-sm sm:text-base">{row.essestional}</span>
                          )}
                        </td>
                        <td className="p-4 sm:p-6 text-center bg-[#25D366]/5">
                          {typeof row.pro === 'boolean' ? (
                            row.pro ? (
                              <Check className="w-5 h-5 text-[#25D366] mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-[#25D366] font-bold text-sm sm:text-base">{row.pro}</span>
                          )}
                        </td>
                        <td className="p-4 sm:p-6 text-center">
                          {typeof row.max === 'boolean' ? (
                            row.max ? (
                              <Check className="w-5 h-5 text-[#25D366] mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700 font-medium text-sm sm:text-base">{row.max}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-[#25D366]/5 to-[#1877F2]/5 p-8 text-center border-t-2 border-gray-200">
              <p className="text-gray-600 mb-4 font-medium">Ready to get started?</p>
              <a
                href="https://app.chatsigma.com/vb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1ea952] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                Choose Your Plan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits-section"
        ref={sectionRefs.current.benefits}
        className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['benefits-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'} bg-gradient-to-br from-gray-50 to-white relative overflow-hidden`}
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
        className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${isVisible['faq-section'] ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-full px-6 py-2 mb-6">
              <Headphones className="w-5 h-5 text-[#1877F2]" />
              <span className="text-sm font-semibold text-gray-900">Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about ChatSigma pricing and features
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 overflow-hidden ${
                  activeFAQ === index ? 'border-[#25D366]' : 'border-gray-200 hover:border-[#25D366]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="font-semibold text-base text-gray-900 pr-4 group-hover:text-[#25D366] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFAQ === index ? 'bg-[#25D366] rotate-180' : 'bg-gray-100 group-hover:bg-[#25D366]/10'
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-colors ${
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
                  <div className="px-6 pb-4">
                    <div className="w-full h-px bg-gradient-to-r from-[#25D366]/20 via-[#25D366]/50 to-[#25D366]/20 mb-3"></div>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support CTA */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-5 text-base">
              Still have questions? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/chatsigma-info/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1ea952] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
              <a
                href="https://wa.me/919205457478"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1ea952] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;