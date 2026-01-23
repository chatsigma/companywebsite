import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle, Phone, Star, Users, Zap, Shield, BarChart3, Bot, QrCode, Link as LinkIcon, Code, UserPlus, FileText, CheckCircle, Eye, MessageSquare, Award, Plane, Car, Store, Factory, Truck, Compass, Scale, Smartphone, Film, Heart, Building2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const featuresDropdown = [
    { title: 'WhatsApp Business API', icon: MessageCircle, desc: 'Official WhatsApp integration' },
    { title: 'Chatbot Builder', icon: Bot, desc: 'AI-powered automated responses' },
    { title: 'Bulk Messaging', icon: Users, desc: 'Broadcast to thousands instantly' },
    { title: 'Analytics & Reports', icon: BarChart3, desc: 'Track performance metrics' },
    { title: 'Team Collaboration', icon: Users, desc: 'Multi-agent support system' },
    { title: 'Complete Business Automation', icon: Zap, desc: 'Share your process, we automate it' },
  ];

  const toolsDropdown = [
    { title: 'QR & Link Generator', icon: QrCode, desc: 'Generate WhatsApp QR codes', path: '/tools/qr-generator' },
    { title: 'Pre-filled Message Link', icon: MessageSquare, desc: 'Create message links', path: '/tools/message-link' },
    { title: 'Chat Button Generator', icon: Code, desc: 'Embed chat buttons', path: '/tools/chat-button' },
    { title: 'Group Link Beautifier', icon: UserPlus, desc: 'Style group links', path: '/tools/group-link' },
    { title: 'Bio Generator', icon: FileText, desc: 'Business bio suggestions', path: '/tools/bio-generator' },
    { title: 'Number Validator', icon: CheckCircle, desc: 'Validate phone numbers', path: '/tools/number-validator' },
    { title: 'CTA Preview Generator', icon: Eye, desc: 'Create CTA previews', path: '/tools/cta-generator' },
    { title: 'Auto-Reply Templates', icon: Bot, desc: 'Message templates', path: '/tools/auto-reply' },
  ];

  const industriesDropdown = [
    { title: 'E-commerce', icon: Star, desc: 'Boost online sales', path: '/industries/ecommerce' },
    { title: 'Healthcare', icon: Phone, desc: 'Patient communication', path: '/industries/healthcare' },
    { title: 'Finance', icon: Shield, desc: 'Secure transactions', path: '/industries/finance' },
    { title: 'Education', icon: Users, desc: 'Student engagement', path: '/industries/education' },
    { title: 'Real Estate', icon: Zap, desc: 'Lead management', path: '/industries/real-estate' },
    { title: 'Hospitality', icon: MessageCircle, desc: 'Guest services', path: '/industries/hospitality' },
    { title: 'Aviation', icon: Plane, desc: 'Passenger experience', path: '/industries/aviation' },
    { title: 'Automotive', icon: Car, desc: 'Vehicle sales & service', path: '/industries/automotive' },
    { title: 'Retail', icon: Store, desc: 'Customer engagement', path: '/industries/retail' },
    { title: 'Manufacturing', icon: Factory, desc: 'Production automation', path: '/industries/manufacturing' },
    { title: 'Logistics', icon: Truck, desc: 'Shipment tracking', path: '/industries/logistics' },
    { title: 'Travel & Tourism', icon: Compass, desc: 'Booking management', path: '/industries/travel-tourism' },
    { title: 'Insurance', icon: Shield, desc: 'Policy management', path: '/industries/insurance' },
    { title: 'Legal Services', icon: Scale, desc: 'Client communication', path: '/industries/legal-services' },
    { title: 'Telecommunications', icon: Smartphone, desc: 'Customer support', path: '/industries/telecommunications' },
    { title: 'Media & Entertainment', icon: Film, desc: 'Audience engagement', path: '/industries/media-entertainment' },
    { title: 'Non-Profit', icon: Heart, desc: 'Donor engagement', path: '/industries/non-profit' },
    { title: 'Government', icon: Building2, desc: 'Citizen services', path: '/industries/government' },
  ];

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    } border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/chatsigma-logo.svg"
                alt="ChatSigma Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 object-contain drop-shadow-sm"
                onError={(e) => {
                  // Fallback: Try PNG, then show icon
                  const target = e.currentTarget;
                  if (target.src.includes('.svg')) {
                    target.src = '/CHAT_SIGMA_LOGO-removebg-preview.png';
                  } else {
                    target.style.display = 'none';
                    const fallbackIcon = target.nextElementSibling as HTMLElement;
                    if (fallbackIcon && fallbackIcon.classList.contains('logo-fallback')) {
                      fallbackIcon.style.display = 'flex';
                    }
                  }
                }}
                loading="eager"
              />
              <div
                className="logo-fallback hidden h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 items-center justify-center bg-gradient-to-br from-[#25D366] to-[#1da851] rounded-lg text-white font-bold text-sm sm:text-base shadow-lg"
                style={{ display: 'none' }}
              >
                CS
              </div>
              <span className="text-xl sm:text-2xl font-bold text-black">
                ChatSigma
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-black hover:text-[#25D366] transition-colors font-medium ${
                location.pathname === '/' ? 'text-[#25D366] font-semibold' : ''
              }`}
            >
              Home
            </Link>
            
            <div className="relative">
              <button
                className="flex items-center text-black hover:text-[#25D366] transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('features')}
                onMouseLeave={() => setActiveDropdown(null)}
                onClick={scrollToFeatures}
              >
                Features <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'features' && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-[9999]"
                  onMouseEnter={() => setActiveDropdown('features')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-1 gap-3">
                    {featuresDropdown.map((item, index) => (
                      <button
                        key={index}
                        onClick={scrollToFeatures}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="h-5 w-5 text-[#25D366] mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className={`text-black hover:text-[#25D366] transition-colors font-medium ${
                location.pathname === '/pricing' ? 'text-[#25D366] font-semibold' : ''
              }`}
            >
              Pricing
            </Link>
            
            <div className="relative">
              <button
                className="flex items-center text-black hover:text-[#25D366] transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('tools')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Tools <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'tools' && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-h-96 overflow-y-auto z-[9999]"
                  onMouseEnter={() => setActiveDropdown('tools')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-1 gap-3 pb-2">
                    {toolsDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors min-h-[60px]"
                      >
                        <item.icon className="h-5 w-5 text-[#25D366] mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center text-black hover:text-[#25D366] transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'industries' && (
                <div
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-h-96 overflow-y-auto z-[9999]"
                  onMouseEnter={() => setActiveDropdown('industries')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {industriesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="h-5 w-5 text-[#25D366] mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/integrations" 
              className={`text-black hover:text-[#25D366] transition-colors font-medium ${
                location.pathname === '/integrations' ? 'text-[#25D366] font-semibold' : ''
              }`}
            >
              Integrations
            </Link>
            
            <Link 
              to="/whatsapp-bluetick-verification" 
              className={`text-black hover:text-[#25D366] transition-colors font-medium ${
                location.pathname === '/whatsapp-bluetick-verification' ? 'text-[#25D366] font-semibold' : ''
              }`}
            >
              <span className="flex items-center">
                <Award className="h-4 w-4 mr-1 text-blue-500 animate-gradient-blink" />
                Get Verified
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className={`text-black hover:text-[#25D366] transition-colors font-medium ${
                location.pathname === '/contact' ? 'text-[#25D366] font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://app.chatsigma.com/vb/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 xl:px-6 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1da851] transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg text-sm xl:text-base"
            >
              Free Trial
            </a>
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 xl:px-6 py-2 text-[#25D366] border-2 border-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-200 font-semibold text-sm xl:text-base"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-black hover:text-[#25D366] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-screen overflow-y-auto">
          <div className="px-4 py-2 space-y-1">
            <Link 
              to="/" 
              className={`block py-3 text-black hover:text-[#25D366] font-medium rounded-lg hover:bg-gray-50 px-3 ${
                location.pathname === '/' ? 'text-[#25D366] bg-gray-50' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <button 
              onClick={scrollToFeatures} 
              className="block py-3 text-black hover:text-[#25D366] text-left w-full font-medium rounded-lg hover:bg-gray-50 px-3"
            >
              Features
            </button>
            
            <Link 
              to="/pricing" 
              className={`block py-3 text-black hover:text-[#25D366] font-medium rounded-lg hover:bg-gray-50 px-3 ${
                location.pathname === '/pricing' ? 'text-[#25D366] bg-gray-50' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {/* Mobile Tools Submenu */}
            <div className="py-2">
              <div className="text-gray-500 font-medium px-3 py-2 text-sm">Tools</div>
              <div className="pl-6 space-y-1">
                {toolsDropdown.map((tool, index) => (
                  <Link
                    key={index}
                    to={tool.path}
                    className="block py-2 text-sm text-gray-600 hover:text-[#25D366] rounded px-3 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {tool.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Industries Submenu */}
            <div className="py-2">
              <div className="text-gray-500 font-medium px-3 py-2 text-sm">Industries</div>
              <div className="pl-6 space-y-1">
                {industriesDropdown.map((industry, index) => (
                  <Link
                    key={index}
                    to={industry.path}
                    className="block py-2 text-sm text-gray-600 hover:text-[#25D366] rounded px-3 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/integrations" 
              className={`block py-3 text-black hover:text-[#25D366] font-medium rounded-lg hover:bg-gray-50 px-3 ${
                location.pathname === '/integrations' ? 'text-[#25D366] bg-gray-50' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </Link>

            <Link 
              to="/whatsapp-bluetick-verification" 
              className={`block py-3 text-black hover:text-[#25D366] font-medium rounded-lg hover:bg-gray-50 px-3 ${
                location.pathname === '/whatsapp-bluetick-verification' ? 'text-[#25D366] bg-gray-50' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-blue-500 animate-gradient-blink" />
                Get Verified
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className={`block py-3 text-black hover:text-[#25D366] font-medium rounded-lg hover:bg-gray-50 px-3 ${
                location.pathname === '/contact' ? 'text-[#25D366] bg-gray-50' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 pb-4">
              <a href="https://app.chatsigma.com/vb/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 text-[#25D366] border-2 border-[#25D366] rounded-lg font-semibold hover:bg-[#25D366] hover:text-white transition-all text-center">
                Sign In
              </a>
              <a href="https://app.chatsigma.com/vb/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-[#25D366] text-white rounded-lg font-semibold shadow-lg text-center">
                Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;