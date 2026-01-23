import React, { useState, useRef } from 'react';
import { QrCode, Download, Copy, Phone, CheckCircle, ArrowRight } from 'lucide-react';

const QRGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = async (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple QR code generation (for demo - in production use a proper QR library)
    const size = 200;
    canvas.width = size;
    canvas.height = size;

    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    // Create a simple pattern (placeholder for actual QR code)
    ctx.fillStyle = '#000000';
    const moduleSize = size / 25;
    
    // Generate a simple pattern based on the text
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        const hash = text.charCodeAt((i + j) % text.length) + i * j;
        if (hash % 3 === 0) {
          ctx.fillRect(i * moduleSize, j * moduleSize, moduleSize, moduleSize);
        }
      }
    }

    // Add corner squares (QR code markers)
    const cornerSize = moduleSize * 7;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, cornerSize, cornerSize);
    ctx.fillRect(size - cornerSize, 0, cornerSize, cornerSize);
    ctx.fillRect(0, size - cornerSize, cornerSize, cornerSize);

    ctx.fillStyle = '#ffffff';
    const innerSize = moduleSize * 5;
    const offset = moduleSize;
    ctx.fillRect(offset, offset, innerSize, innerSize);
    ctx.fillRect(size - cornerSize + offset, offset, innerSize, innerSize);
    ctx.fillRect(offset, size - cornerSize + offset, innerSize, innerSize);

    ctx.fillStyle = '#000000';
    const centerSize = moduleSize * 3;
    const centerOffset = moduleSize * 2;
    ctx.fillRect(centerOffset, centerOffset, centerSize, centerSize);
    ctx.fillRect(size - cornerSize + centerOffset, centerOffset, centerSize, centerSize);
    ctx.fillRect(centerOffset, size - cornerSize + centerOffset, centerSize, centerSize);

    return canvas.toDataURL();
  };

  const handleGenerate = async () => {
    if (!phoneNumber) return;

    const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');
    const waLink = cleanNumber ? `https://wa.me/${cleanNumber}` : 'https://wa.me/919220304943?text=Hey%20Team%20Chatsigma%20I%20want%20to%20automate%20my%20business%20via%20ChatSigma';
    setGeneratedLink(waLink);

    const dataUrl = await generateQR(waLink);
    if (dataUrl) {
      setQrDataUrl(dataUrl);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQR = () => {
    if (!qrDataUrl) return;
    
    const link = document.createElement('a');
    link.download = `whatsapp-qr-${phoneNumber}.png`;
    link.href = qrDataUrl;
    link.click();
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
          <h1 className="text-4xl font-bold mb-4">WhatsApp QR & Link Generator</h1>
          <p className="text-xl opacity-90">Generate WhatsApp links and QR codes instantly for easy sharing</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Enter WhatsApp Number</h2>
              <p className="text-gray-600">Include country code (e.g., +1234567890)</p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1234567890"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#25D366] focus:outline-none transition-colors text-lg"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!phoneNumber}
                className="w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1da851] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                Generate QR & Link
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Floating Graphics */}
            <div className="relative mt-8">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center animate-float">
                <QrCode className="h-8 w-8 text-[#25D366]" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#F6C90E]/20 rounded-xl flex items-center justify-center animate-float-delay-1">
                <Phone className="h-6 w-6 text-[#F6C90E]" />
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {/* QR Code Display */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Generated QR Code</h3>
              
              {qrDataUrl ? (
                <div className="space-y-6">
                  <div className="relative inline-block">
                    <img 
                      src={qrDataUrl} 
                      alt="WhatsApp QR Code" 
                      className="w-48 h-48 mx-auto border-4 border-gray-100 rounded-2xl shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <button
                    onClick={downloadQR}
                    className="px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors flex items-center mx-auto"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download QR Code
                  </button>
                </div>
              ) : (
                <div className="w-48 h-48 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">QR code will appear here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Link Display */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-6">Generated Link</h3>
              
              {generatedLink ? (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                    <p className="text-sm text-gray-600 break-all">{generatedLink}</p>
                  </div>
                  
                  <button
                    onClick={copyToClipboard}
                    className="w-full py-3 bg-[#1877F2] text-white rounded-lg font-semibold hover:bg-[#1565C0] transition-colors flex items-center justify-center"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-5 w-5" />
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="p-8 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-500">WhatsApp link will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hidden canvas for QR generation */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
};

export default QRGenerator;