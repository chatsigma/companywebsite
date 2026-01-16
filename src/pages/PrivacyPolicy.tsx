import React from 'react';
import { Shield, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>Effective Date:</strong> January 1, 2024
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                ChatSigma Technologies (OPC) Private Limited ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </div>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p><strong>Personal Information:</strong> Name, email address, phone number, company information</p>
                <p><strong>Usage Data:</strong> How you interact with our platform, features used, and performance metrics</p>
                <p><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</p>
                <p><strong>Communication Data:</strong> Messages sent through our platform for service improvement</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Provide and maintain our WhatsApp automation services</li>
                <li>• Process transactions and send service-related communications</li>
                <li>• Improve our platform and develop new features</li>
                <li>• Provide customer support and respond to inquiries</li>
                <li>• Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              <p className="text-gray-600">
                We implement industry-standard security measures including encryption, secure servers, 
                and regular security audits. We are SOC 2 certified and comply with GDPR requirements.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate information</li>
                <li>• Delete your data (right to be forgotten)</li>
                <li>• Data portability</li>
                <li>• Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@chatsigma.com</p>
                <p><strong>Address:</strong> Noida Sector 61, Uttar Pradesh, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;