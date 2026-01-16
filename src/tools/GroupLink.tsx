import React, { useState } from 'react';
import { UserPlus, Copy, Eye, Download, Users, CheckCircle, Link, Share2 } from 'lucide-react';

const GroupLink = () => {
  const [groupLink, setGroupLink] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [cardStyle, setCardStyle] = useState('modern');
  const [colorScheme, setColorScheme] = useState('whatsapp');
  const [copied, setCopied] = useState(false);

  const extractGroupInfo = (link: string) => {
    if (link.includes('chat.whatsapp.com')) {
      const urlParts = link.split('/');
      const inviteCode = urlParts[urlParts.length - 1];
      return { isValid: true, inviteCode };
    }
    return { isValid: false, inviteCode: null };
  };

  const colorSchemes = {
    whatsapp: {
      primary: '#25D366',
      secondary: '#128C7E',
      accent: '#DCF8C6',
      text: '#075E54'
    },
    meta: {
      primary: '#1877F2',
      secondary: '#42A5F5',
      accent: '#E3F2FD',
      text: '#1565C0'
    },
    gradient: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      text: '#4c1d95'
    }
  };

  const currentScheme = colorSchemes[colorScheme as keyof typeof colorSchemes];
  const groupInfo = extractGroupInfo(groupLink);

  const generateCardHTML = () => {
    const scheme = currentScheme;
    
    return `<div style="
  max-width: 400px;
  background: linear-gradient(135deg, ${scheme.primary}, ${scheme.secondary});
  border-radius: 20px;
  padding: 24px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
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
  
  <div style="display: flex; align-items: center; margin-bottom: 16px;">
    <div style="
      width: 50px;
      height: 50px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
    ">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zm-5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0-4c-3.87 0-7 3.13-7 7 0 1.57.52 3.01 1.39 4.17L2 22l3.83-1.39C7.99 21.48 9.43 22 11 22h1c3.87 0 7-3.13 7-7s-3.13-7-7-7z"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0; font-size: 20px; font-weight: 600;">${groupName || 'WhatsApp Group'}</h3>
      <p style="margin: 4px 0 0 0; opacity: 0.8; font-size: 14px;">Join our community</p>
    </div>
  </div>
  
  ${groupDescription ? `<p style="margin: 0 0 20px 0; opacity: 0.9; line-height: 1.5;">${groupDescription}</p>` : ''}
  
  <a href="${groupLink}" target="_blank" style="
    display: inline-block;
    background: rgba(255,255,255,0.2);
    color: white;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  " onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
    Join Group →
  </a>
</div>`;
  };

  const copyHTML = () => {
    navigator.clipboard.writeText(generateCardHTML());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHTML = () => {
    const blob = new Blob([generateCardHTML()], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'whatsapp-group-card.html';
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
          <h1 className="text-4xl font-bold mb-4">Group Link Beautifier</h1>
          <p className="text-xl opacity-90">Transform your WhatsApp group links into beautiful, shareable cards</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-6">Group Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Group Link</label>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="url"
                      value={groupLink}
                      onChange={(e) => setGroupLink(e.target.value)}
                      placeholder="https://chat.whatsapp.com/..."
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                    />
                  </div>
                  {groupLink && !groupInfo.isValid && (
                    <p className="text-red-500 text-sm mt-2">Please enter a valid WhatsApp group link</p>
                  )}
                  {groupInfo.isValid && (
                    <p className="text-green-500 text-sm mt-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Valid group link detected
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
                  <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="My Awesome Group"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Group Description (Optional)</label>
                  <textarea
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                    placeholder="Join our community to discuss..."
                    rows={3}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Style</label>
                    <select
                      value={cardStyle}
                      onChange={(e) => setCardStyle(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#25D366] focus:outline-none"
                    >
                      <option value="modern">Modern</option>
                      <option value="classic">Classic</option>
                      <option value="minimal">Minimal</option>
                    </select>
                  </div>

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
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Graphics */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center animate-float">
                <Users className="h-8 w-8 text-[#25D366]" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-[#F6C90E]/20 rounded-xl flex items-center justify-center animate-float-delay-1">
                <Share2 className="h-6 w-6 text-[#F6C90E]" />
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#333333]">Card Preview</h3>
                <Eye className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex justify-center">
                {groupLink && groupInfo.isValid ? (
                  <div
                    style={{
                      maxWidth: '400px',
                      background: `linear-gradient(135deg, ${currentScheme.primary}, ${currentScheme.secondary})`,
                      borderRadius: '20px',
                      padding: '24px',
                      color: 'white',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      position: 'relative',
                      overflow: 'hidden'
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
                    
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px'
                      }}>
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>
                          {groupName || 'WhatsApp Group'}
                        </h3>
                        <p style={{ margin: '4px 0 0 0', opacity: 0.8, fontSize: '14px' }}>
                          Join our community
                        </p>
                      </div>
                    </div>
                    
                    {groupDescription && (
                      <p style={{ margin: '0 0 20px 0', opacity: 0.9, lineHeight: 1.5 }}>
                        {groupDescription}
                      </p>
                    )}
                    
                    <button
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      Join Group →
                    </button>
                  </div>
                ) : (
                  <div className="w-full max-w-sm bg-gray-100 rounded-2xl p-12 text-center">
                    <UserPlus className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Enter a valid group link to see preview</p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Export Options</h3>
              
              <div className="space-y-4">
                <button
                  onClick={copyHTML}
                  disabled={!groupInfo.isValid}
                  className="w-full py-4 bg-[#1877F2] text-white rounded-xl font-semibold hover:bg-[#1565C0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                  disabled={!groupInfo.isValid}
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1da851] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download HTML File
                </button>
              </div>
              
              {!groupInfo.isValid && groupLink && (
                <p className="text-red-500 text-sm mt-4 text-center">
                  Please enter a valid WhatsApp group link to export
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupLink;