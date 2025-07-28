import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Zap } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What is the WhatsApp Business API?',
      answer: 'The WhatsApp Business API is a solution that enables medium and large businesses to communicate with customers at scale. It allows you to send messages, receive replies, and automate conversations through WhatsApp.',
      icon: MessageCircle,
      color: 'text-[#25D366]'
    },
    {
      question: 'How is ChatSigma different from other WhatsApp tools?',
      answer: 'ChatSigma is an official WhatsApp Business API partner with 0% markup pricing. We offer advanced automation, AI-powered chatbots, comprehensive analytics, and 24/7 support. Our platform is designed for enterprise-scale businesses.',
      icon: Zap,
      color: 'text-[#006AFF]'
    },
    {
      question: 'Can I integrate ChatSigma with my existing systems?',
      answer: 'Yes! ChatSigma offers 60+ native integrations including Shopify, Salesforce, HubSpot, and more. We also provide robust APIs and webhooks for custom integrations with your existing systems.',
      icon: HelpCircle,
      color: 'text-purple-600'
    },
    {
      question: 'What are the pricing plans?',
      answer: 'We offer flexible pricing based on your message volume. Our plans start from $49/month for small businesses and scale up for enterprise needs. Contact us for a custom quote based on your requirements.',
      icon: MessageCircle,
      color: 'text-orange-600'
    },
    {
      question: 'How long does it take to set up?',
      answer: 'Most businesses are up and running within 24-48 hours. Our team handles the WhatsApp Business API verification process and helps you configure your first chatbot flows.',
      icon: Zap,
      color: 'text-[#25D366]'
    },
    {
      question: 'Do you provide customer support?',
      answer: 'Yes! We offer 24/7 customer support through chat, email, and phone. Enterprise customers also get dedicated account managers and priority support.',
      icon: HelpCircle,
      color: 'text-red-600'
    },
    {
      question: 'Is my data secure with ChatSigma?',
      answer: 'Absolutely. We use enterprise-grade security with end-to-end encryption, are SOC 2 certified, and comply with GDPR and other data protection regulations. Your data is never shared with third parties.',
      icon: MessageCircle,
      color: 'text-[#006AFF]'
    },
    {
      question: 'Can I try ChatSigma before purchasing?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial period.',
      icon: Zap,
      color: 'text-green-600'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#25D366] to-[#006AFF] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 md:-top-2 md:-right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 md:-bottom-2 md:-left-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
            Everything you need to know about ChatSigma and WhatsApp Business API automation.
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden hover:shadow-md sm:hover:shadow-lg transition-all duration-500 border-l-2 sm:border-l-4 ${
                openItems.includes(index) ? 'border-[#25D366] shadow-lg' : 'border-transparent'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-inset"
              >
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-1 min-w-0">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg md:rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? 'from-[#25D366]/20 to-[#006AFF]/20' : ''
                  }`}>
                    <faq.icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${openItems.includes(index) ? faq.color : 'text-gray-600'} transition-colors`} />
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-[#25D366] transition-colors text-xs sm:text-sm md:text-base pr-2 sm:pr-4">
                    {faq.question}
                  </span>
                </div>
                <div className={`transform transition-transform duration-300 flex-shrink-0 ${openItems.includes(index) ? 'rotate-180' : ''}`}>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#25D366]" />
                  ) : (
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-500 group-hover:text-[#25D366] transition-colors" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-3 sm:px-4 md:px-8 pb-3 sm:pb-4 md:pb-5 animate-slide-down">
                  <div className="pl-8 sm:pl-12 md:pl-16">
                    <div className="h-px bg-gradient-to-r from-[#25D366]/30 to-transparent mb-2 sm:mb-3 md:mb-4"></div>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 text-center">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#25D366] to-[#006AFF] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto">
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
            <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
              Still have questions? We're here to help.
            </p>
            <a href="https://wa.me/919220304943?text=Hi%20Team%20ChatSigma%2C%20I%20want%20support" target="_blank" rel="noopener noreferrer" className="inline-block px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-[#25D366] to-[#1da851] text-white rounded-lg font-semibold hover:from-[#1da851] hover:to-[#25D366] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;