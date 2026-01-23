import React, { useState } from 'react';
import { CheckCircle, XCircle, Phone, Globe, AlertCircle, Info } from 'lucide-react';

const NumberValidator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationResult, setValidationResult] = useState<any>(null);
  const [isValidating, setIsValidating] = useState(false);

  const countryData = {
    '+1': { country: 'United States/Canada', flag: '🇺🇸', format: '+1 (XXX) XXX-XXXX', length: 11 },
    '+44': { country: 'United Kingdom', flag: '🇬🇧', format: '+44 XXXX XXXXXX', length: 13 },
    '+91': { country: 'India', flag: '🇮🇳', format: '+91 XXXXX XXXXX', length: 13 },
    '+86': { country: 'China', flag: '🇨🇳', format: '+86 XXX XXXX XXXX', length: 14 },
    '+49': { country: 'Germany', flag: '🇩🇪', format: '+49 XXX XXXXXXX', length: 13 },
    '+33': { country: 'France', flag: '🇫🇷', format: '+33 X XX XX XX XX', length: 13 },
    '+81': { country: 'Japan', flag: '🇯🇵', format: '+81 XX XXXX XXXX', length: 13 },
    '+55': { country: 'Brazil', flag: '🇧🇷', format: '+55 XX XXXXX XXXX', length: 14 },
    '+61': { country: 'Australia', flag: '🇦🇺', format: '+61 XXX XXX XXX', length: 12 },
    '+7': { country: 'Russia', flag: '🇷🇺', format: '+7 XXX XXX XX XX', length: 12 },
  };

  const validateNumber = () => {
    setIsValidating(true);
    
    setTimeout(() => {
      const cleanNumber = phoneNumber.replace(/\s+/g, '');
      
      // Basic validation
      const hasCountryCode = cleanNumber.startsWith('+');
      const isNumeric = /^[\+\d\s\-\(\)]+$/.test(phoneNumber);
      const minLength = cleanNumber.length >= 10;
      const maxLength = cleanNumber.length <= 15;
      
      // Find country info
      let countryInfo = null;
      let detectedCode = '';
      
      if (hasCountryCode) {
        for (const [code, info] of Object.entries(countryData)) {
          if (cleanNumber.startsWith(code)) {
            countryInfo = info;
            detectedCode = code;
            break;
          }
        }
      }
      
      // WhatsApp specific validation
      const isWhatsAppCompatible = hasCountryCode && isNumeric && minLength && maxLength;
      const lengthMatch = countryInfo ? cleanNumber.length === countryInfo.length : true;
      
      const result = {
        isValid: isWhatsAppCompatible && lengthMatch,
        hasCountryCode,
        isNumeric,
        minLength,
        maxLength,
        lengthMatch,
        countryInfo,
        detectedCode,
        cleanNumber,
        whatsappLink: isWhatsAppCompatible ? `https://wa.me/${cleanNumber.substring(1)}` : 'https://wa.me/919220304943?text=Hey%20Team%20Chatsigma%20I%20want%20to%20automate%20my%20business%20via%20ChatSigma',
        issues: []
      };
      
      // Collect issues
      if (!hasCountryCode) result.issues.push('Missing country code (should start with +)');
      if (!isNumeric) result.issues.push('Contains invalid characters');
      if (!minLength) result.issues.push('Too short (minimum 10 digits)');
      if (!maxLength) result.issues.push('Too long (maximum 15 digits)');
      if (countryInfo && !lengthMatch) result.issues.push(`Incorrect length for ${countryInfo.country}`);
      if (!countryInfo && hasCountryCode) result.issues.push('Unknown country code');
      
      setValidationResult(result);
      setIsValidating(false);
    }, 1000);
  };

  const formatExample = (format: string, number: string) => {
    let formatted = format;
    const digits = number.replace(/\D/g, '');
    let digitIndex = 0;
    
    for (let i = 0; i < formatted.length; i++) {
      if (formatted[i] === 'X' && digitIndex < digits.length) {
        formatted = formatted.substring(0, i) + digits[digitIndex] + formatted.substring(i + 1);
        digitIndex++;
      }
    }
    
    return formatted;
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
          <h1 className="text-4xl font-bold mb-4">WhatsApp Number Validator</h1>
          <p className="text-xl opacity-90">Validate phone numbers for WhatsApp compatibility</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#333333] mb-4">Enter Phone Number</h2>
              <p className="text-gray-600">Include country code for accurate validation</p>
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
                onClick={validateNumber}
                disabled={!phoneNumber || isValidating}
                className="w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1da851] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isValidating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Validating...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Validate Number
                  </>
                )}
              </button>
            </div>

            {/* Country Code Examples */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#333333] mb-4">Common Country Codes</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(countryData).slice(0, 6).map(([code, info]) => (
                  <div
                    key={code}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => setPhoneNumber(code + ' ')}
                  >
                    <span className="text-2xl mr-3">{info.flag}</span>
                    <div>
                      <div className="font-medium text-sm">{code}</div>
                      <div className="text-xs text-gray-500">{info.country}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Input Icons */}
            <div className="relative mt-8">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center animate-float">
                <Phone className="h-8 w-8 text-[#25D366]" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#F6C90E]/20 rounded-xl flex items-center justify-center animate-float-delay-1">
                <Globe className="h-6 w-6 text-[#F6C90E]" />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {validationResult ? (
              <>
                {/* Validation Status */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    {validationResult.isValid ? (
                      <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                    ) : (
                      <XCircle className="h-8 w-8 text-red-500 mr-3" />
                    )}
                    <h3 className="text-xl font-bold text-[#333333]">
                      {validationResult.isValid ? 'Valid Number' : 'Invalid Number'}
                    </h3>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${validationResult.isValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <p className={`font-medium ${validationResult.isValid ? 'text-green-800' : 'text-red-800'}`}>
                      {validationResult.isValid 
                        ? 'This number is compatible with WhatsApp!' 
                        : 'This number has validation issues'}
                    </p>
                  </div>
                </div>

                {/* Country Information */}
                {validationResult.countryInfo && (
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-[#333333] mb-6">Country Information</h3>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{validationResult.countryInfo.flag}</span>
                      <div>
                        <div className="font-semibold text-lg">{validationResult.countryInfo.country}</div>
                        <div className="text-gray-600">Code: {validationResult.detectedCode}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected Format:</span>
                        <span className="font-mono">{validationResult.countryInfo.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expected Length:</span>
                        <span>{validationResult.countryInfo.length} digits</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Your Number:</span>
                        <span className="font-mono">{validationResult.cleanNumber}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Validation Details */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-[#333333] mb-6">Validation Details</h3>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Has Country Code', status: validationResult.hasCountryCode },
                      { label: 'Numeric Format', status: validationResult.isNumeric },
                      { label: 'Minimum Length', status: validationResult.minLength },
                      { label: 'Maximum Length', status: validationResult.maxLength },
                      { label: 'Correct Length', status: validationResult.lengthMatch }
                    ].map((check, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">{check.label}</span>
                        {check.status ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Issues */}
                {validationResult.issues.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <AlertCircle className="h-6 w-6 text-orange-500 mr-3" />
                      <h3 className="text-xl font-bold text-[#333333]">Issues Found</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {validationResult.issues.map((issue: string, index: number) => (
                        <div key={index} className="flex items-start p-3 bg-orange-50 rounded-lg border border-orange-200">
                          <AlertCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-orange-800">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WhatsApp Link */}
                {validationResult.whatsappLink && (
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-[#333333] mb-6">WhatsApp Link</h3>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 mb-4">
                      <p className="text-sm text-gray-600 break-all font-mono">{validationResult.whatsappLink}</p>
                    </div>
                    
                    <button
                      onClick={() => window.open(validationResult.whatsappLink, '_blank')}
                      className="w-full py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Test WhatsApp Link
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500">Enter a phone number to see validation results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberValidator;