import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Scale className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Please read these terms carefully before using our WhatsApp automation platform.
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
                These Terms of Service ("Terms") govern your use of ChatSigma's WhatsApp automation platform 
                operated by ChatSigma Technologies (OPC) Private Limited.
              </p>
            </div>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-600">
                By accessing and using our services, you accept and agree to be bound by these Terms. 
                If you do not agree to these Terms, you may not use our services.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Service Description</h2>
              </div>
              <p className="text-gray-600 mb-4">
                ChatSigma provides WhatsApp Business API automation services including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated messaging and chatbot services</li>
                <li>• Bulk messaging capabilities</li>
                <li>• Analytics and reporting tools</li>
                <li>• Integration with third-party platforms</li>
                <li>• Customer support and training</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Comply with WhatsApp's Terms of Service and Business Policy</li>
                <li>• Obtain proper consent before sending messages to recipients</li>
                <li>• Use the service only for lawful business purposes</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Respect recipient privacy and opt-out requests</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Sending spam or unsolicited messages</li>
                <li>• Violating any applicable laws or regulations</li>
                <li>• Impersonating others or providing false information</li>
                <li>• Attempting to hack or disrupt our services</li>
                <li>• Using the service for illegal or harmful activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <div className="space-y-4 text-gray-600">
                <p>• Subscription fees are billed monthly or annually in advance</p>
                <p>• All fees are non-refundable except as required by law</p>
                <p>• We reserve the right to change pricing with 30 days notice</p>
                <p>• Accounts may be suspended for non-payment</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                Our liability is limited to the amount paid for our services in the 12 months 
                preceding the claim. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms, contact us at:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@chatsigma.com</p>
                <p><strong>Address:</strong> Noida Sector 61, Uttar Pradesh, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;