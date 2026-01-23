import React, { useState } from 'react';
import { Code, Eye, Copy, MessageCircle, Palette, Type, CheckCircle, Download } from 'lucide-react';

const ChatButton = () => {
  const [buttonText, setButtonText] = useState('Chat with us');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [buttonColor, setButtonColor] = useState('#25D366');
  const [textColor, setTextColor] = useState('#ffffff');
  const [buttonSize, setButtonSize] = useState('medium');
  const [buttonStyle, setButtonStyle] = useState('rounded');
  const [showIcon, setShowIcon] = useState(true);
  const [position, setPosition] = useState('bottom-right');
  const [copied, setCopied] = useState(false);

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const styleClasses = {
    rounded: 'rounded-lg',
    pill: 'rounded-full',
    square: 'rounded-none'
  };

  const positionClasses = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6'
  };

  const generateCSS = () => {
    return `.whatsapp-chat-button {
  ${positionClasses[position as keyof typeof positionClasses].replace('fixed ', '')};
  background-color: ${buttonColor};
  color: ${textColor};
  border: none;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;
  text-decoration: none;
}

.whatsapp-chat-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.whatsapp-chat-button svg {
  width: 20px;
  height: 20px;
}`;
  };

  const generateHTML = () => {
    const waLink = phoneNumber ? `https://wa.me/${phoneNumber.replace(/[^\d+]/g, '')}` : 'https://wa.me/919220304943?text=Hey%20Team%20Chatsigma%20I%20want%20to%20automate%20my%20business%20via%20ChatSigma';
    
    return `<a href="${waLink}" class="whatsapp-chat-button ${sizeClasses[buttonSize as keyof typeof sizeClasses]} ${styleClasses[buttonStyle as keyof typeof styleClasses]}" target="_blank">
  ${showIcon ? '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>' : ''}
  ${buttonText}
</a>`;
  };

  const copyCode = () => {
    const fullCode = `<!-- WhatsApp Chat Button -->
<style>
${generateCSS()}
</style>

${generateHTML()}`;
    
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <img
                src="/2.png"
                alt="Chat Sigma"
                className="h-10 w-10"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Chat Button Embed Generator</h1>
          <p className="text-xl opacity-90">Create customizable WhatsApp chat buttons for your website</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-[#333333] mb-6">Customize Button</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                  <div className="relative">
                    <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      value={buttonText}
                      onChange={(e) => setButtonText(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#25D366] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1234567890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#25D366] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Button Color</label>
                    <div className="relative">
                      <input
                        type="color"
                        value={buttonColor}
                        onChange={(e) => setButtonColor(e.target.value)}
                        className="w-full h-12 border border-gray-300 rounded-lg cursor-pointer"
                      />
                      <Palette className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-full h-12 border border-gray-300 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <select
                    value={buttonSize}
                    onChange={(e) => setButtonSize(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#25D366] focus:outline-none"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
                  <select
                    value={buttonStyle}
                    onChange={(e) => setButtonStyle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#25D366] focus:outline-none"
                  >
                    <option value="rounded">Rounded</option>
                    <option value="pill">Pill</option>
                    <option value="square">Square</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#25D366] focus:outline-none"
                  >
                    <option value="bottom-right">Bottom Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="top-left">Top Left</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showIcon"
                    checked={showIcon}
                    onChange={(e) => setShowIcon(e.target.checked)}
                    className="h-4 w-4 text-[#25D366] focus:ring-[#25D366] border-gray-300 rounded"
                  />
                  <label htmlFor="showIcon" className="ml-2 text-sm text-gray-700">Show WhatsApp Icon</label>
                </div>
              </div>
            </div>
          </div>

          {/* Preview and Code */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#333333]">Live Preview</h3>
                <Eye className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="relative bg-gray-100 rounded-xl p-8 min-h-64 overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <div className="relative text-center text-gray-500 py-16">
                  <p>Your website content goes here...</p>
                </div>
                
                {/* Floating Button Preview */}
                <div className={positionClasses[position as keyof typeof positionClasses]}>
                  <button
                    style={{ backgroundColor: buttonColor, color: textColor }}
                    className={`${sizeClasses[buttonSize as keyof typeof sizeClasses]} ${styleClasses[buttonStyle as keyof typeof styleClasses]} font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    {showIcon && <MessageCircle className="h-5 w-5" />}
                    {buttonText}
                  </button>
                </div>

                {/* Floating Graphics */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center animate-float">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div className="absolute bottom-4 right-20 w-8 h-8 bg-[#1877F2]/20 rounded-full animate-float-delay-1"></div>
              </div>
            </div>

            {/* Generated Code */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#333333]">Generated Code</h3>
                <button
                  onClick={copyCode}
                  className="px-4 py-2 bg-[#1877F2] text-white rounded-lg font-semibold hover:bg-[#1565C0] transition-colors flex items-center"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{`<!-- WhatsApp Chat Button -->
<style>
${generateCSS()}
</style>

${generateHTML()}`}</code>
                </pre>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Instructions:</strong> Copy the code above and paste it into your website's HTML, 
                  preferably before the closing &lt;/body&gt; tag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatButton;