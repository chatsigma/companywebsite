import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Copy, RefreshCw, Building, CheckCircle, MessageCircle } from 'lucide-react';

const AutoReply = () => {
  const [businessType, setBusinessType] = useState('');
  const [useCase, setUseCase] = useState('');
  const [generatedTemplates, setGeneratedTemplates] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const businessTypes = [
    'E-commerce', 'Restaurant', 'Healthcare', 'Education', 'Real Estate',
    'Beauty & Wellness', 'Technology', 'Finance', 'Travel', 'Fitness',
    'Photography', 'Legal Services', 'Marketing Agency', 'Consulting', 'Other'
  ];

  const useCases = [
    'Welcome Message', 'Order Confirmation', 'Appointment Booking', 'Customer Support',
    'Product Inquiry', 'Service Information', 'Pricing Request', 'Availability Check',
    'Feedback Collection', 'Follow-up Message', 'Promotional Offer', 'Event Invitation'
  ];

  const templates = {
    'welcome-ecommerce': [
      "👋 Welcome to {business}! Thanks for reaching out. We're here to help you find the perfect products. How can we assist you today?",
      "Hello! 🛍️ Thanks for contacting {business}. We offer amazing deals on quality products. What are you looking for today?",
      "Hi there! Welcome to {business} 🌟 Your satisfaction is our priority. How can we make your shopping experience amazing?",
      "Greetings! 🎉 Thanks for choosing {business}. We're excited to help you discover our latest collection. What interests you?"
    ],
    'welcome-restaurant': [
      "🍽️ Welcome to {business}! Thanks for contacting us. We're ready to serve you delicious food. How can we help you today?",
      "Hello! 👨‍🍳 Thanks for reaching out to {business}. We'd love to take your order or answer any questions. What can we do for you?",
      "Hi there! 🥘 Welcome to {business} - where great taste meets excellent service. How can we satisfy your cravings today?",
      "Greetings! 🍴 Thanks for choosing {business}. We're here to make your dining experience memorable. What would you like to know?"
    ],
    'order-ecommerce': [
      "✅ Order confirmed! Your order #{orderNumber} has been received and is being processed. You'll receive tracking details soon. Thank you for choosing {business}!",
      "🎉 Great news! Your order has been confirmed. Order ID: #{orderNumber}. We'll notify you once it's shipped. Thanks for shopping with {business}!",
      "📦 Order received! We're preparing your items with care. Order #{orderNumber} will be shipped within 24-48 hours. Stay tuned for updates!",
      "✨ Thank you for your order! #{orderNumber} is confirmed and will be processed shortly. We appreciate your business at {business}!"
    ],
    'appointment-healthcare': [
      "📅 Appointment confirmed! Your appointment with Dr. {doctor} is scheduled for {date} at {time}. Please arrive 15 minutes early. See you soon!",
      "✅ Your appointment is booked! Date: {date}, Time: {time}. If you need to reschedule, please let us know 24 hours in advance.",
      "🏥 Appointment scheduled successfully! We'll see you on {date} at {time}. Please bring your ID and insurance card. Thank you!",
      "📋 Confirmed! Your {service} appointment is set for {date} at {time}. We look forward to providing you with excellent care."
    ],
    'support-general': [
      "🤝 Thanks for contacting our support team! We've received your message and will respond within 2-4 hours. Your satisfaction is important to us.",
      "💬 Hello! Our support team is here to help. We'll get back to you as soon as possible with a solution. Thanks for your patience!",
      "🔧 Support request received! We're working on your inquiry and will provide a detailed response shortly. Thank you for reaching out.",
      "👨‍💻 Hi there! Our technical team has been notified of your request. We'll resolve this quickly and keep you updated. Thanks!"
    ]
  };

  const generateTemplates = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const key = `${useCase.toLowerCase().replace(/\s+/g, '-')}-${businessType.toLowerCase().replace(/\s+/g, '-')}`;
      let selectedTemplates = templates[key as keyof typeof templates];
      
      if (!selectedTemplates) {
        // Fallback to generic templates based on use case
        const useCaseKey = useCase.toLowerCase().replace(/\s+/g, '-');
        selectedTemplates = templates[`${useCaseKey}-general` as keyof typeof templates] || 
                          templates['support-general'];
      }
      
      const businessName = businessType || 'Your Business';
      const processedTemplates = selectedTemplates.map(template => 
        template.replace(/{business}/g, businessName)
      );
      
      setGeneratedTemplates(processedTemplates);
      setIsGenerating(false);
    }, 1500);
  };

  const copyTemplate = (template: string, index: number) => {
    navigator.clipboard.writeText(template);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Generate smart auto-reply templates...";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/CHAT_SIGMA_LOGO-removebg-preview.png" 
                alt="Chat Sigma" 
                className="h-10 w-10"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Auto-Reply Template Generator</h1>
          <p className="text-xl opacity-90 h-8">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Template Settings</h2>
              <p className="text-gray-600">Configure your auto-reply templates</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Use Case</label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                  >
                    <option value="">Select use case</option>
                    {useCases.map((use) => (
                      <option key={use} value={use}>{use}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={generateTemplates}
                disabled={!businessType || !useCase || isGenerating}
                className="w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1da851] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Templates
                  </>
                )}
              </button>
            </div>

            {/* Floating Graphics */}
            <div className="relative mt-8">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center animate-float">
                <Bot className="h-8 w-8 text-[#25D366]" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#F6C90E]/20 rounded-xl flex items-center justify-center animate-float-delay-1">
                <Sparkles className="h-6 w-6 text-[#F6C90E]" />
              </div>
            </div>
          </div>

          {/* Generated Templates Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Generated Templates</h3>
              
              {generatedTemplates.length > 0 ? (
                <div className="space-y-4">
                  {generatedTemplates.map((template, index) => (
                    <div
                      key={index}
                      className="group bg-gray-50 p-6 rounded-xl border-2 border-gray-100 hover:border-[#25D366] transition-all duration-300 transform hover:scale-102"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <span className="ml-3 text-sm font-medium text-gray-500">Template {index + 1}</span>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <p className="text-gray-800 leading-relaxed">{template}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => copyTemplate(template, index)}
                          className="ml-4 p-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#1565C0] transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedIndex === index ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Select business type and use case to generate templates</p>
                </div>
              )}
            </div>

            {/* Tips Section */}
            <div className="bg-[#25D366]/10 rounded-2xl p-6">
              <h4 className="font-bold text-[#333333] mb-4">💡 Template Tips</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personalize templates with customer names when possible</li>
                <li>• Keep messages concise and action-oriented</li>
                <li>• Include relevant emojis for better engagement</li>
                <li>• Test templates before implementing them</li>
                <li>• Update templates regularly based on feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoReply;