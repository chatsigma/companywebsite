import React from 'react';
import { Shield, Lock, Eye, FileText, Database, Share2, UserCheck, Baby, RefreshCw, Mail, Gavel, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300 shadow-2xl backdrop-blur-sm">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#F6C90E] rounded-full animate-bounce shadow-lg"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Your privacy is our priority. Learn how we protect and handle your information.
          </p>
          <p className="text-sm mt-4 opacity-75">Last Updated: January 23, 2026</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-l-4 border-[#25D366]">
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-bold text-[#25D366]">ChatSigma Technologies (OPC) Private Limited</span> ("ChatSigma," "we," "our," or "us")
            is committed to protecting your privacy and ensuring the security of your personal information.
            This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our WhatsApp Business verification services.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            By using our services, you consent to the data practices described in this policy.
          </p>
        </div>

        {/* Section 1: Information We Collect */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Database className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
          </div>

          {/* Personal Information */}
          <div className="mb-6 ml-18">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <UserCheck className="h-6 w-6 text-[#25D366] mr-3" />
              Personal Information
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              We collect personal information that you voluntarily provide to us when using our services, including:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start text-gray-700">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Full name and contact details (email address, phone number, WhatsApp number)</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Business information (business name, website, nature of business, company type)</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Business registration documents and identification proof</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>GST certificate and other tax documentation (when applicable)</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span>Facebook Business Manager and WhatsApp Business account details</span>
              </li>
            </ul>
          </div>

          {/* Usage Information */}
          <div className="mb-6 ml-18">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Eye className="h-6 w-6 text-[#1877F2] mr-3" />
              Usage Information
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              We automatically collect certain information when you access our website or use our services:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start text-gray-700">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>IP address, browser type, operating system, and device information</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>Pages visited, time spent on pages, and navigation patterns</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>Referring URLs and exit pages</span>
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>Date and time stamps of service usage</span>
              </li>
            </ul>
          </div>

          {/* Cookies and Tracking */}
          <div className="ml-18">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 text-[#25D366] mr-3" />
              Cookies and Tracking Technologies
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns,
              and improve our services. You can control cookie preferences through your browser settings.
            </p>
          </div>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Lock className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>We use the information we collect for the following purposes:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span><strong>Service Delivery:</strong> To process and submit your WhatsApp Business verification application to Meta</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span><strong>Communication:</strong> To contact you regarding your verification status, updates, and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span><strong>Payment Processing:</strong> To process payments and maintain billing records</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span><strong>Customer Support:</strong> To provide assistance, respond to inquiries, and resolve issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span><strong>Service Improvement:</strong> To analyze usage patterns and improve our services and user experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span><strong>Legal Compliance:</strong> To comply with legal obligations, regulations, and legitimate business interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span><strong>Marketing:</strong> To send promotional materials and updates (with your consent, where required)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Data Sharing */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Share2 className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>We may share your information with the following parties:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Meta Platforms:</strong> Your business information is shared with Meta for WhatsApp Business verification purposes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Service Providers:</strong> Trusted third-party vendors who assist in payment processing, hosting, and analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Legal Authorities:</strong> When required by law, court order, or governmental regulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of business assets</span>
              </li>
            </ul>
            <p className="mt-4 p-4 bg-green-50 rounded-xl border-l-4 border-[#25D366]">
              <strong>Note:</strong> We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </div>
        </div>

        {/* Section 4: Data Security */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p>Our security measures include:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>Encryption of data in transit and at rest using industry-standard protocols (SSL/TLS)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>Secure servers with firewall protection and intrusion detection systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>Access controls and authentication mechanisms for authorized personnel only</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1877F2] mr-3 text-2xl">•</span>
                <span>Employee training on data protection and confidentiality</span>
              </li>
            </ul>
            <p className="mt-4 p-4 bg-blue-50 rounded-xl border-l-4 border-[#1877F2]">
              <strong>Important:</strong> While we strive to protect your information, no method of transmission or storage is 100% secure.
              We cannot guarantee absolute security but are committed to using reasonable security measures.
            </p>
          </div>
        </div>

        {/* Section 5: Your Rights and Choices */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <UserCheck className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Your Rights and Choices</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>You have the following rights regarding your personal information:</p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Access:</strong> Request access to the personal information we hold about you</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Correction:</strong> Request correction of inaccurate or incomplete information</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Deletion:</strong> Request deletion of your personal information (right to be forgotten)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Withdraw Consent:</strong> Withdraw your consent for data processing at any time</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Object to Processing:</strong> Object to certain types of data processing activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#25D366] mr-3 text-2xl">•</span>
                <span><strong>Opt-out of Marketing:</strong> Unsubscribe from marketing communications at any time</span>
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:privacy@chatsigma.com" className="text-[#25D366] font-bold hover:underline">privacy@chatsigma.com</a>
            </p>
          </div>
        </div>

        {/* Section 6: Children's Privacy */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Baby className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Children's Privacy</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              Our services are intended for business use and are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children under 18 years of age.
            </p>
            <p>
              If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
              If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>
        </div>

        {/* Section 7: Changes to Privacy Policy */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <RefreshCw className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. When we make changes,
              we will update the "Last Updated" date at the top of this policy.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically. Your continued use of our services after any changes
              indicates your acceptance of the updated policy.
            </p>
            <p>
              For significant changes, we will provide notice through email or a prominent notice on our website.
            </p>
          </div>
        </div>

        {/* Section 8: Contact Us */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed ml-18">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-3 bg-blue-50 rounded-2xl p-6 border-l-4 border-[#1877F2]">
              <p><strong className="text-[#1877F2]">Company Name:</strong> ChatSigma Technologies (OPC) Private Limited</p>
              <p><strong className="text-[#1877F2]">Privacy Email:</strong> privacy@chatsigma.com</p>
              <p><strong className="text-[#1877F2]">Support Email:</strong> support@chatsigma.com</p>
              <p><strong className="text-[#1877F2]">Phone:</strong> +91 92203 04943</p>
              <p><strong className="text-[#1877F2]">Address:</strong> Noida Sector 61, Uttar Pradesh, India</p>
            </div>
            <p className="mt-4">
              We will respond to your inquiry within 30 business days.
            </p>
          </div>
        </div>

        {/* Section 9: Governing Law */}
        <div className="bg-[#25D366] rounded-3xl shadow-xl p-8 md:p-12 text-white">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
              <Gavel className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Governing Law</h2>
          </div>
          <div className="space-y-4 text-lg ml-18">
            <p>
              This Privacy Policy is governed by and construed in accordance with the laws of India.
              Any disputes arising from this policy or our data practices shall be subject to the exclusive jurisdiction
              of the courts in Noida, Uttar Pradesh, India.
            </p>
            <p className="mt-6 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              By using ChatSigma's services, you acknowledge that you have read and understood this Privacy Policy
              and consent to the collection, use, and disclosure of your information as described herein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;