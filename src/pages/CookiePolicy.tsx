import React from 'react';
import { Cookie, Settings, Eye, Shield } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-300">
              <Cookie className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F6C90E] rounded-full animate-bounce"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Learn how we use cookies and similar technologies to improve your experience.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>Last Updated:</strong> January 1, 2024
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                This Cookie Policy explains how ChatSigma Technologies (OPC) Private Limited uses cookies 
                and similar technologies when you visit our website or use our services.
              </p>
            </div>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Cookie className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <p className="text-gray-600">
                Cookies are small text files that are stored on your device when you visit a website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our services.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are necessary for our website to function properly. They enable basic 
                    features like page navigation and access to secure areas.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600">
                    We use these cookies to understand how visitors interact with our website, 
                    helping us improve our services and user experience.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-600">
                    These cookies remember your preferences and settings to provide a more 
                    personalized experience on future visits.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600">
                    These cookies track your browsing habits to show you relevant advertisements 
                    and measure the effectiveness of our marketing campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Third-Party Cookies</h2>
              </div>
              <p className="text-gray-600 mb-4">
                We may use third-party services that set cookies on our behalf:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Google Analytics for website analytics</li>
                <li>• Google Ads for advertising</li>
                <li>• Facebook Pixel for social media marketing</li>
                <li>• Intercom for customer support chat</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-[#25D366] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  You can control and manage cookies in several ways:
                </p>
                <ul className="space-y-2">
                  <li>• Use our cookie consent banner to adjust your preferences</li>
                  <li>• Configure your browser settings to block or delete cookies</li>
                  <li>• Opt out of third-party advertising cookies</li>
                  <li>• Use private/incognito browsing mode</li>
                </ul>
                <p className="mt-4">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time. We will notify you of any 
                significant changes by posting the new policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about our use of cookies, please contact us at:
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

export default CookiePolicy;