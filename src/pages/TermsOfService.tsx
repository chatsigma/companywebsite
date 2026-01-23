import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Shield, Users, CreditCard, Copyright, XCircle, FileWarning, Gavel, Lock } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#1877F2] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300 shadow-2xl backdrop-blur-sm">
              <Scale className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#F6C90E] rounded-full animate-bounce shadow-lg"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Please read these terms carefully before using ChatSigma's services
          </p>
          <p className="text-sm mt-4 opacity-75">Last Updated: January 23, 2026</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-l-4 border-[#25D366]">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <span className="font-bold text-[#25D366]">ChatSigma Technologies (OPC) Private Limited</span> ("ChatSigma," "we," "our," or "us").
            These Terms of Service ("Terms") govern your access to and use of our WhatsApp Business verification services and related platforms.
            By using our services, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Section 1: Acceptance of Terms */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <CheckCircle className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              By accessing or using ChatSigma's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
              If you do not agree to these Terms, you must not use our services.
            </p>
            <p>
              These Terms apply to all users, including businesses, organizations, and individuals who access or use our services for WhatsApp Business verification.
            </p>
          </div>
        </div>

        {/* Section 2: Service Description */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1877F2] to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <FileText className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">2. Service Description</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              ChatSigma provides WhatsApp Business verification services as an Official Meta Tech Partner. Our services include:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>WhatsApp Business Blue Tick verification processing and submission to Meta</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Documentation preparation and compliance assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Facebook Business Manager setup and configuration support</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Consultation and guidance throughout the verification process</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Post-verification support and assistance</span>
              </li>
            </ul>
            <p className="mt-4 p-4 bg-blue-50 rounded-xl border-l-4 border-[#1877F2]">
              <strong>Note:</strong> Final approval for WhatsApp Business verification is at the sole discretion of Meta.
              ChatSigma acts as a facilitator and cannot guarantee approval.
            </p>
          </div>
        </div>

        {/* Section 3: User Accounts */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Users className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">3. User Accounts</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              To use our services, you must provide accurate, complete, and current information. You are responsible for:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Maintaining the confidentiality of your account credentials</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>All activities that occur under your account</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Notifying us immediately of any unauthorized use or security breach</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Ensuring all business information provided is accurate and up-to-date</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Complying with WhatsApp Business Policy and Meta's Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Privacy Policy */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1877F2] to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">4. Privacy Policy</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, store, and protect your personal information.
              By using our services, you consent to our collection and use of information as described in our Privacy Policy.
            </p>
            <p>
              We implement industry-standard security measures to protect your data and comply with applicable data protection laws,
              including GDPR and other relevant regulations.
            </p>
          </div>
        </div>

        {/* Section 5: Fees and Payments */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <CreditCard className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">5. Fees and Payments</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              <strong>Service Fees:</strong> The WhatsApp Business verification service is available for a one-time fee of ₹15,999 (Indian Rupees Fifteen Thousand Nine Hundred Ninety-Nine Only).
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Payment is required in full before we initiate the verification process</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>All fees are non-refundable unless otherwise stated in writing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>We reserve the right to modify our fees with 30 days prior notice</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>All applicable taxes and government charges are the responsibility of the client</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Payment may be made through approved payment methods as specified by ChatSigma</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6: Intellectual Property */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1877F2] to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Copyright className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">6. Intellectual Property</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              All content, features, functionality, and intellectual property associated with ChatSigma's services,
              including but not limited to text, graphics, logos, icons, images, software, and documentation,
              are the exclusive property of ChatSigma Technologies (OPC) Private Limited or its licensors.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any of our intellectual property
              without our prior written consent.
            </p>
          </div>
        </div>

        {/* Section 7: Termination */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <XCircle className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">7. Termination</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice,
              including but not limited to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>Violation of these Terms of Service</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>Providing false or misleading information</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>Fraudulent, illegal, or harmful activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>Non-payment of fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>At our sole discretion if we believe termination is necessary</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 8: Disclaimers */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <AlertTriangle className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">8. Disclaimers</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p className="uppercase font-bold">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p>
              To the fullest extent permitted by law, ChatSigma disclaims all warranties, including but not limited to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">•</span>
                <span>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">•</span>
                <span>Guarantees regarding approval of WhatsApp Business verification by Meta</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">•</span>
                <span>Warranties regarding uninterrupted, timely, secure, or error-free service</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 text-2xl">•</span>
                <span>Accuracy or reliability of any information obtained through our services</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 9: Limitation of Liability */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <FileWarning className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">9. Limitation of Liability</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p className="uppercase font-bold">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CHATSIGMA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>
            <p>
              This includes, but is not limited to, damages for:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>Loss of profits, revenue, data, or business opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>Business interruption or loss of business reputation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>Rejection of verification application by Meta</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-2xl">•</span>
                <span>Errors, mistakes, or inaccuracies in documentation or submissions</span>
              </li>
            </ul>
            <p className="mt-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
              <strong>Maximum Liability:</strong> In no event shall ChatSigma's total liability exceed the amount paid by you for the services
              during the twelve (12) months preceding the claim.
            </p>
          </div>
        </div>

        {/* Section 10: Governing Law */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1877F2] to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Gavel className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">10. Governing Law</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of
              the courts located in Noida, Uttar Pradesh, India.
            </p>
            <p>
              You agree to submit to the personal jurisdiction of such courts and waive any objections based on inconvenient forum.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#25D366] to-[#1877F2] rounded-3xl shadow-xl p-8 md:p-12 text-white">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
              <Lock className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Contact Information</h2>
          </div>
          <div className="space-y-4 text-lg ml-18">
            <p>
              If you have any questions, concerns, or require clarification regarding these Terms of Service, please contact us:
            </p>
            <div className="space-y-3 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p><strong className="text-[#F6C90E]">Company Name:</strong> ChatSigma Technologies (OPC) Private Limited</p>
              <p><strong className="text-[#F6C90E]">Email:</strong> legal@chatsigma.com</p>
              <p><strong className="text-[#F6C90E]">Support Email:</strong> support@chatsigma.com</p>
              <p><strong className="text-[#F6C90E]">Phone:</strong> +91 92203 04943</p>
              <p><strong className="text-[#F6C90E]">Address:</strong> Noida Sector 61, Uttar Pradesh, India</p>
            </div>
            <p className="text-sm opacity-90 mt-6">
              By using ChatSigma's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;