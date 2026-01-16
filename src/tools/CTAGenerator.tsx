import React, { useState } from 'react';
import { Eye, Download, Copy, Palette, Type, CheckCircle, ArrowRight } from 'lucide-react';

const CTAGenerator = () => {
  const [businessName, setBusinessName] = useState('');
  const [ctaText, setCtaText] = useState('Contact Us Now');
  const [description, setDescription] = useState('');
  const [buttonStyle, setButtonStyle] = useState('modern');
  const [colorScheme, setColorScheme] = useState('whatsapp');
  const [size, setSize] = useState('medium');
  const [copied, setCopied] = useState(false);

  const colorSchemes = {
    whatsapp: {
      primary: '#25D366',
      secondary: '#128C7E',
      accent: '#DCF8C6',
      text: '#ffffff'
    },
    meta: {
      primary: '#1877F2',
      secondary: '#42A5F5',
      accent: '#E3F2FD',
      text: '#ffffff'
    },
    gradient: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      text: '#ffffff'
    },
    orange: {
      primary: '#F6C90E',
      secondary: '#F39C12',
      accent: '#FEF9E7',
      text: '#333333'
    }
  };

  const currentScheme = colorSchemes[colorScheme as keyof typeof colorSchemes];

  const generateCTACard = () => {
    const scheme = currentScheme;
    const sizeClasses = {
      small: { padding: '16px', fontSize: '14px', buttonPadding: '8px 16px' },
      medium: { padding: '24px', fontSize: '16px', buttonPadding: '12px 24px' },
      large: { padding: '32px', fontSize: '18px', buttonPadding: '16px 32px' }
    };

    const currentSize = sizeClasses[size as keyof typeof sizeClasses];

    return `<div style="
  max-width: 400px;
  background: linear-gradient(135deg, ${scheme.primary}, ${scheme.secondary});
  border-radius: 20px;
  padding: ${currentSize.padding};
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
  text-align: center;
">
  <div style="
    position: absolute;
    top: -50px;
    right: -50px;
    width: 100px;
    height: 100px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
  "></div>
  
  <div style="position: relative; z-index: 2;">
    <h2 style="
      margin: 0 0 12px 0;
      font-size: 24px;
      font-weight: 700;
      color: white;
    ">${businessName || 'Your Business'}</h2>
    
    ${description ? `<p style="
      margin: 0 0 24px 0;
      opacity: 0.9;
      line-height: 1.5;
      font-size: ${currentSize.fontSize};
    ">${description}</p>` : ''}
    
    <a href="https://wa.me/1234567890" target="_blank" style="
      display: inline-block;
      background: rgba(255,255,255,0.2);
      color: white;
      text-decoration: none;
      padding: ${currentSize.buttonPadding};
      border-radius: 25px;
      font-weight: 600;
      font-size: ${currentSize.fontSize};
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255,255,255,0.3);
    " onmouseover="this.style.background='rgba(255,255,255,0.3)'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='translateY(0)'">
      ${ctaText} →
    </a>
  </div>
</div>`;
  };

  const copyHTML = () => {
    navigator.clipboard.writeText(generateCTACard());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHTML = () => {
    const blob = new Blob([generateCTACard()], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cta-card.html';
    a.click();
    URL.revokeObjectURL(url);
  };

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
          <h1 className="text-4xl font-bold mb-4">CTA Link Preview Generator</h1>
          <p className="text-xl opacity-90">Create stunning call-to-action cards for your business</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Customize Your CTA</h2>
              <p className="text-gray-600">Create compelling call-to-action cards</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Your Business Name"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
                <div className="relative">
                  <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={ctaText}
                    onChange={(e) => setCtaText(e.target.value)}
                    placeholder="Contact Us Now"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of your offer..."
                  rows={3}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color Scheme</label>
                  <select
                    value={colorScheme}
                    onChange={(e) => setColorScheme(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#25D366] focus:outline-none"
                  >
                    <option value="whatsapp">WhatsApp Green</option>
                    <option value="meta">Meta Blue</option>
                    <option value="gradient">Purple Gradient</option>
                    <option value="orange">Orange</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#25D366] focus:outline-none"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Floating Graphics */}
            <div className="relative mt-8">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center animate-float">
                <Eye className="h-8 w-8 text-[#25D366]" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#F6C90E]/20 rounded-xl flex items-center justify-center animate-float-delay-1">
                <Palette className="h-6 w-6 text-[#F6C90E]" />
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Live Preview</h3>
              
              <div className="flex justify-center">
                <div
                  style={{
                    maxWidth: '400px',
                    background: `linear-gradient(135deg, ${currentScheme.primary}, ${currentScheme.secondary})`,
                    borderRadius: '20px',
                    padding: size === 'small' ? '16px' : size === 'large' ? '32px' : '24px',
                    color: 'white',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%'
                  }}></div>
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{
                      margin: '0 0 12px 0',
                      fontSize: '24px',
                      fontWeight: 700,
                      color: 'white'
                    }}>
                      {businessName || 'Your Business'}
                    </h2>
                    
                    {description && (
                      <p style={{
                        margin: '0 0 24px 0',
                        opacity: 0.9,
                        lineHeight: 1.5,
                        fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px'
                      }}>
                        {description}
                      </p>
                    )}
                    
                    <button
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        border: '2px solid rgba(255,255,255,0.3)',
                        padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
                        borderRadius: '25px',
                        fontWeight: 600,
                        fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {ctaText} →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Export Options</h3>
              
              <div className="space-y-4">
                <button
                  onClick={copyHTML}
                  className="w-full py-4 bg-[#1877F2] text-white rounded-xl font-semibold hover:bg-[#1565C0] transition-colors flex items-center justify-center"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Copied HTML!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-5 w-5" />
                      Copy HTML Code
                    </>
                  )}
                </button>
                
                <button
                  onClick={downloadHTML}
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1da851] transition-colors flex items-center justify-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download HTML File
                </button>
              </div>
            </div>

            {/* Usage Tips */}
            <div className="bg-[#25D366]/10 rounded-2xl p-6">
              <h4 className="font-bold text-[#333333] mb-4">💡 Usage Tips</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Use action-oriented text like "Get Started", "Contact Now"</li>
                <li>• Keep descriptions concise and compelling</li>
                <li>• Test different color schemes for your brand</li>
                <li>• Update the WhatsApp number in the generated code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAGenerator;