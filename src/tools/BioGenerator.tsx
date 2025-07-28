import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, Copy, RefreshCw, Building, CheckCircle, Brain, Zap } from 'lucide-react';

const BioGenerator = () => {
  const [businessType, setBusinessType] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [description, setDescription] = useState('');
  const [tone, setTone] = useState('professional');
  const [generatedBios, setGeneratedBios] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [loadingText, setLoadingText] = useState('');

  const businessTypes = [
    'Restaurant', 'E-commerce Store', 'Consulting', 'Healthcare', 'Education',
    'Real Estate', 'Beauty & Wellness', 'Technology', 'Finance', 'Travel',
    'Fitness', 'Photography', 'Legal Services', 'Marketing Agency', 'Other'
  ];

  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'casual', label: 'Casual' },
    { value: 'creative', label: 'Creative' },
    { value: 'formal', label: 'Formal' }
  ];

  // AI-powered bio generation templates
  const bioTemplates = {
    restaurant: {
      professional: [
        "🍽️ {name} | Authentic culinary experiences since [year] | Fresh ingredients, traditional recipes | 📍 [Location] | 📞 Call for reservations",
        "👨‍🍳 {name} - Where flavor meets tradition | Specializing in {cuisine} cuisine | 🌟 Award-winning dishes | 🚚 Delivery & takeout available",
        "🥘 Welcome to {name} | Farm-to-table dining experience | 👨‍👩‍👧‍👦 Family-owned restaurant | 📅 Book your table today",
        "🍴 {name} | Crafting memorable dining moments | Fresh, local ingredients | 🎉 Private events & catering | ⭐ 5-star rated"
      ],
      friendly: [
        "🍽️ Hey there! Welcome to {name}! 😊 We're cooking up something special just for you | 📱 Order now for a taste of happiness!",
        "👋 {name} here! Your neighborhood's favorite food spot 🏠 | Serving smiles with every meal | 🚚 Quick delivery to your door!",
        "🥘 Hi! We're {name} and we LOVE good food! 💕 | Come hungry, leave happy | 📞 Call us - we're always ready to chat!",
        "🍴 {name} - where friends become family! 👨‍👩‍👧‍👦 | Delicious food, warm atmosphere | 🎉 Let's make your day better!"
      ]
    },
    ecommerce: {
      professional: [
        "🛍️ {name} | Premium {products} for discerning customers | ✅ Quality guaranteed | 🚚 Worldwide shipping | 💳 Secure payments",
        "🏪 {name} - Your trusted online marketplace | Curated selection of {products} | 📦 Fast shipping | 🔒 100% secure checkout",
        "✨ {name} | Elevating your {category} experience | 🌟 Top-rated products | 💯 Customer satisfaction guaranteed | 📞 24/7 support",
        "🛒 {name} | Where quality meets affordability | Specializing in {products} | 🎯 Best deals online | 🔄 Easy returns"
      ],
      casual: [
        "🛍️ Hey! Welcome to {name}! 😄 We've got the coolest {products} you'll ever find | 📦 Super fast shipping | Let's shop!",
        "👋 {name} here! Your go-to spot for awesome {products} 🔥 | Great prices, even better vibes | 💬 Hit us up anytime!",
        "🛒 What's up! {name} bringing you the best {products} around 🌟 | No boring stuff here | 🚚 We deliver happiness!",
        "✨ {name} - making shopping fun again! 🎉 | Amazing {products} at crazy good prices | 📱 Shop now, thank us later!"
      ]
    },
    consulting: {
      professional: [
        "💼 {name} | Strategic {service} consulting | 📈 Driving business growth since [year] | 🎯 Results-driven solutions | 📅 Free consultation",
        "🎯 {name} - Your {service} success partner | 💡 Expert guidance, proven strategies | 🏆 Trusted by 500+ businesses | 📞 Let's talk",
        "⚡ {name} | Transforming businesses through {service} excellence | 📊 Data-driven insights | 🚀 Accelerate your growth",
        "💡 {name} | {service} expertise that delivers results | 🔍 Strategic analysis | 💪 Implementation support | 📈 Measurable outcomes"
      ],
      friendly: [
        "👋 Hi! I'm {name}, your friendly {service} consultant! 😊 | Let's grow your business together | 💬 Always here to help!",
        "🤝 {name} here! Making {service} simple and fun 🎉 | Your success is my mission | 📞 Call me - let's chat about your goals!",
        "💼 Hey there! {name} at your service! 😄 | Turning {service} challenges into opportunities | 🚀 Ready to level up?",
        "✨ {name} - your {service} buddy! 👫 | No corporate jargon, just real solutions | 💡 Let's make magic happen together!"
      ]
    },
    healthcare: {
      professional: [
        "🏥 {name} | Compassionate {service} care | 👩‍⚕️ Licensed professionals | 📅 Convenient scheduling | 🩺 Your health, our priority",
        "❤️ {name} - Dedicated to your wellbeing | Comprehensive {service} services | 🌟 Patient-centered care | 📞 24/7 support available",
        "🩺 {name} | Advanced {service} solutions | 👨‍⚕️ Experienced medical team | 🏆 Accredited facility | 📋 Easy appointment booking",
        "💊 {name} | Your trusted {service} provider | 🔬 State-of-the-art technology | 👥 Caring staff | 🕒 Flexible hours"
      ],
      friendly: [
        "👋 Hi! Welcome to {name}! 😊 | We're here to take great care of you | 💕 Your health journey starts here | 📞 Call us anytime!",
        "🏥 {name} - where caring meets healing! ❤️ | Friendly staff, expert care | 😊 We make healthcare comfortable | Let's chat!",
        "🩺 Hey there! {name} family here! 👨‍👩‍👧‍👦 | Making healthcare less scary, more caring | 💬 Always here to listen!",
        "💊 {name} - your health, our heart! 💕 | Gentle care with a smile | 🌟 Making you feel better is what we do best!"
      ]
    },
    default: {
      professional: [
        "✨ {name} | Professional {service} services | 🎯 Quality guaranteed | 📞 Contact us today | 🌟 Trusted by hundreds",
        "🚀 {name} - Your {service} experts | 💼 Reliable solutions | 🏆 Excellence in every project | 📧 Get your free quote",
        "⭐ {name} | Specializing in {service} | 💡 Innovation meets expertise | 🔥 Premium quality | 💬 Let's discuss your needs",
        "💎 {name} - Where {service} excellence begins | 🎯 Tailored solutions | 📈 Proven results | 📱 Message us now"
      ],
      friendly: [
        "👋 Hey! Welcome to {name}! 😊 | We're awesome at {service} | 💬 Let's chat about how we can help you!",
        "🌟 {name} here! Your friendly {service} team! 🎉 | Making things easy and fun | 📞 Give us a call - we love to talk!",
        "✨ Hi there! {name} bringing you amazing {service}! 💕 | We're here to make your day better | 💬 Hit us up anytime!",
        "🚀 {name} - your {service} buddies! 👫 | Great work, even better vibes | 😄 Ready to help you succeed!"
      ]
    }
  };

  const loadingMessages = [
    "🧠 ChatSigma AI is analyzing your business...",
    "✨ Crafting the perfect bio for you...",
    "🎯 Optimizing for maximum impact...",
    "💡 Adding creative touches...",
    "🚀 Almost ready with your bios!"
  ];

  const generateBios = () => {
    setIsGenerating(true);
    setLoadingText(loadingMessages[0]);
    
    // Simulate AI thinking with changing messages
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[messageIndex]);
    }, 800);
    
    setTimeout(() => {
      clearInterval(messageInterval);
      
      // AI logic to generate intelligent bios
      const businessCategory = businessType.toLowerCase().replace(/\s+/g, '');
      const toneKey = tone as keyof typeof bioTemplates.default;
      
      // Select appropriate templates
      let templates = bioTemplates[businessCategory as keyof typeof bioTemplates]?.[toneKey] || 
                     bioTemplates.default[toneKey];
      
      // AI enhancement based on user input
      const enhancedBios = templates.map(template => {
        let bio = template;
        
        // Replace placeholders with intelligent suggestions
        bio = bio.replace(/{name}/g, businessName || generateBusinessName(businessType));
        bio = bio.replace(/{service}/g, generateServiceDescription(businessType, description));
        bio = bio.replace(/{products}/g, generateProductDescription(businessType, description));
        bio = bio.replace(/{cuisine}/g, generateCuisineType(description));
        bio = bio.replace(/{category}/g, businessType.toLowerCase());
        bio = bio.replace(/\[year\]/g, new Date().getFullYear().toString());
        bio = bio.replace(/\[Location\]/g, 'Your City');
        
        // Add tone-specific enhancements
        return enhanceToneSpecific(bio, tone);
      });

      setGeneratedBios(enhancedBios);
      setIsGenerating(false);
      setLoadingText('');
    }, 4000);
  };

  const generateBusinessName = (type: string) => {
    const names = {
      'Restaurant': 'Delicious Bites',
      'E-commerce Store': 'Premium Shop',
      'Consulting': 'Expert Solutions',
      'Healthcare': 'Care Plus',
      'Education': 'Learning Hub',
      'Real Estate': 'Property Pro',
      'Beauty & Wellness': 'Glow Studio',
      'Technology': 'Tech Innovators',
      'Finance': 'Money Matters',
      'Travel': 'Journey Makers'
    };
    return names[type as keyof typeof names] || 'Your Business';
  };

  const generateServiceDescription = (type: string, desc: string) => {
    if (desc) {
      // Extract key service words from description
      const serviceWords = desc.toLowerCase().match(/\b(service|solution|consulting|support|care|treatment|training|design|development|management)\w*/g);
      if (serviceWords && serviceWords.length > 0) {
        return serviceWords[0];
      }
    }
    
    const services = {
      'Restaurant': 'dining',
      'E-commerce Store': 'shopping',
      'Consulting': 'business consulting',
      'Healthcare': 'medical care',
      'Education': 'learning',
      'Real Estate': 'property',
      'Beauty & Wellness': 'beauty',
      'Technology': 'tech solutions',
      'Finance': 'financial',
      'Travel': 'travel planning'
    };
    return services[type as keyof typeof services] || 'professional services';
  };

  const generateProductDescription = (type: string, desc: string) => {
    if (desc) {
      // Extract product-related words
      const productWords = desc.toLowerCase().match(/\b(product|item|good|merchandise|equipment|tool|device|software|app)\w*/g);
      if (productWords && productWords.length > 0) {
        return productWords[0] + 's';
      }
    }
    
    const products = {
      'E-commerce Store': 'premium products',
      'Technology': 'software solutions',
      'Beauty & Wellness': 'beauty products',
      'Fitness': 'fitness equipment',
      'Photography': 'photography services'
    };
    return products[type as keyof typeof products] || 'quality products';
  };

  const generateCuisineType = (desc: string) => {
    if (desc) {
      const cuisines = ['italian', 'chinese', 'indian', 'mexican', 'japanese', 'thai', 'french', 'american'];
      const foundCuisine = cuisines.find(cuisine => desc.toLowerCase().includes(cuisine));
      if (foundCuisine) return foundCuisine;
    }
    return 'international';
  };

  const enhanceToneSpecific = (bio: string, selectedTone: string) => {
    switch (selectedTone) {
      case 'friendly':
        return bio + ' 😊';
      case 'casual':
        return bio.replace(/\./g, '!').replace(/Contact us/g, 'Hit us up');
      case 'creative':
        return '🎨 ' + bio + ' ✨';
      case 'formal':
        return bio.replace(/!/g, '.').replace(/😊|🎉|🔥/g, '');
      default:
        return bio;
    }
  };

  const copyBio = (bio: string, index: number) => {
    navigator.clipboard.writeText(bio);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "Create the perfect WhatsApp Business bio...";

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
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#1877F2] text-white py-16">
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
          <h1 className="text-4xl font-bold mb-4">WhatsApp Business Bio Generator</h1>
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
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Business Information</h2>
              <p className="text-gray-600">Tell us about your business to generate perfect bios</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Your Business Name"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                >
                  <option value="">Select business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of your products/services..."
                  rows={3}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                >
                  {tones.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={generateBios}
                disabled={!businessType || isGenerating}
                className="w-full py-4 bg-gradient-to-r from-[#25D366] to-[#1877F2] text-white rounded-xl font-semibold hover:from-[#1da851] hover:to-[#1565C0] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <Brain className="mr-2 h-5 w-5 animate-pulse" />
                    <span className="animate-pulse">{loadingText}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate AI Bio Ideas
                  </>
                )}
              </button>
            </div>

            {/* Floating Graphics */}
            <div className="relative mt-8">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#25D366]/20 to-[#1877F2]/20 rounded-2xl flex items-center justify-center animate-float">
                <FileText className="h-8 w-8 text-[#25D366]" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#F6C90E]/20 to-[#25D366]/20 rounded-xl flex items-center justify-center animate-float-delay-1">
                <Sparkles className="h-6 w-6 text-[#F6C90E]" />
              </div>
            </div>
          </div>

          {/* Generated Bios Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Brain className="h-6 w-6 text-[#25D366] mr-3" />
                <h3 className="text-xl font-bold text-[#333333]">AI-Generated Bio Ideas</h3>
              </div>
              
              {isGenerating ? (
                <div className="text-center py-12">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#1877F2] rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Brain className="h-8 w-8 text-white animate-bounce" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-ping"></div>
                  </div>
                  <p className="text-[#25D366] font-medium animate-pulse">{loadingText}</p>
                  <div className="flex justify-center mt-4 space-x-1">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#1877F2] rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-[#F6C90E] rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              ) : generatedBios.length > 0 ? (
                <div className="space-y-4">
                  {generatedBios.map((bio, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#25D366] transition-all duration-300 transform hover:scale-102"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#25D366] to-[#1877F2] rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <span className="ml-3 text-sm font-medium text-gray-500">AI Bio Option {index + 1}</span>
                            <Zap className="ml-2 h-4 w-4 text-[#F6C90E]" />
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                            <p className="text-gray-800 leading-relaxed">{bio}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => copyBio(bio, index)}
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
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Fill in your business details and click generate to see AI bio suggestions</p>
                </div>
              )}
            </div>

            {/* Tips Section */}
            <div className="bg-gradient-to-r from-[#25D366]/10 to-[#1877F2]/10 rounded-2xl p-6">
              <h4 className="font-bold text-[#333333] mb-4">🤖 AI Bio Tips</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Our AI analyzes your business type for optimal suggestions</li>
                <li>• Include your main service/product for better results</li>
                <li>• Try different tones to match your brand personality</li>
                <li>• Keep bios under 139 characters for optimal display</li>
                <li>• Update regularly with current offers and achievements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioGenerator;