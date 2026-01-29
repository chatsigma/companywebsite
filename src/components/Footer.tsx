import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin, Heart, Award } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/#features-section' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'API Documentation', href: '/api-documentation' },
    { name: 'Get Verified', href: '/whatsapp-bluetick-verification' }
  ];

  const industries = [
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Hospitality', href: '/industries/hospitality' }
  ];

  const resources = [
    { name: 'Help Center', href: '/resources/help-center' },
    { name: 'Getting Started', href: '/resources/getting-started' },
    { name: 'Video Tutorials', href: '/resources/video-tutorials' },
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'Webinars', href: '/resources/webinars' },
    { name: 'Best Practices', href: '/resources/best-practices' },
    { name: 'Community', href: '/resources/community' }
  ];

  const tools = [
    { name: 'QR Generator', href: '/tools/qr-generator' },
    { name: 'Message Link', href: '/tools/message-link' },
    { name: 'Chat Button', href: '/tools/chat-button' },
    { name: 'Group Link', href: '/tools/group-link' },
    { name: 'Bio Generator', href: '/tools/bio-generator' },
    { name: 'Number Validator', href: '/tools/number-validator' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/image.png"
                alt="ChatSigma Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              The most powerful WhatsApp Business API platform for automating customer conversations and growing your business.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@chatsigma.com" className="hover:text-[#25D366] transition-colors">info@chatsigma.com</a>
              </div>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-3 flex-shrink-0" />
                <a href="mailto:support@chatsigma.com" className="hover:text-[#25D366] transition-colors">support@chatsigma.com</a>
              </div>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-3 flex-shrink-0" />
                <a href="tel:+919220304949" className="hover:text-[#25D366] transition-colors">+91 9220304949</a>
              </div>
              <div className="flex items-center text-gray-400 text-sm sm:text-base">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-3 flex-shrink-0" />
                <span>Noida Sector 61, India</span>
              </div>
            </div>
            <div className="mt-6 flex items-center text-gray-400">
              <Heart className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-sm">Proudly made in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#25D366] transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link
                    to={industry.href}
                    className="text-gray-400 hover:text-[#25D366] transition-colors text-sm sm:text-base"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.slice(0, 4).map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.href}
                    className="text-gray-400 hover:text-[#25D366] transition-colors text-sm sm:text-base"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              {tools.slice(0, 3).map((tool, index) => (
                <li key={index}>
                  <Link
                    to={tool.href}
                    className="text-gray-400 hover:text-[#25D366] transition-colors text-sm sm:text-base"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="https://www.instagram.com/chatsigma_official" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.805-.332-.21-.21-.332-.49-.332-.805s.122-.595.332-.805c.21-.21.49-.332.805-.332s.595.122.805.332c.21.21.332.49.332.805s-.122.595-.332.805c-.21.21-.49.332-.805.332z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1JiPfCqz4c/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://youtube.com/@thechatsigma?si=wxe0IxMgpLStB0Bk" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-xs sm:text-sm text-center">
              <span>© 2024 ChatSigma Technologies (OPC) Private Limited. All rights reserved.</span>
              <div className="flex space-x-4 md:space-x-6">
                <Link to="/privacy-policy" className="hover:text-[#25D366] transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-[#25D366] transition-colors">Terms of Service</Link>
                <Link to="/cookie-policy" className="hover:text-[#25D366] transition-colors">Cookie Policy</Link>
                <Link to="/sitemap.xml" className="hover:text-[#25D366] transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;