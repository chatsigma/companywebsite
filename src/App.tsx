import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Integrations from './components/Integrations';
import QRGenerator from './tools/QRGenerator';
import MessageLink from './tools/MessageLink';
import ChatButton from './tools/ChatButton';
import GroupLink from './tools/GroupLink';
import BioGenerator from './tools/BioGenerator';
import NumberValidator from './tools/NumberValidator';
import CTAGenerator from './tools/CTAGenerator';
import AutoReply from './tools/AutoReply';
import WhatsAppBluetick from './pages/WhatsAppBluetick';

// Feature Pages
import WhatsAppBusinessAPI from './pages/features/WhatsAppBusinessAPI';
import AIChatbot from './pages/features/AIChatbot';
import BulkMessaging from './pages/features/BulkMessaging';
import Analytics from './pages/features/Analytics';
import TeamCollaboration from './pages/features/TeamCollaboration';
import BusinessAutomation from './pages/features/BusinessAutomation';
import FastIntegration from './pages/features/FastIntegration';

// Industry Pages
import EcommercePage from './pages/industries/EcommercePage';
import HealthcarePage from './pages/industries/HealthcarePage';
import FinancePage from './pages/industries/FinancePage';
import EducationPage from './pages/industries/EducationPage';
import RealEstatePage from './pages/industries/RealEstatePage';
import HospitalityPage from './pages/industries/HospitalityPage';

// Other Pages
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

// Resource Pages
import HelpCenter from './pages/resources/HelpCenter';
import GettingStarted from './pages/resources/GettingStarted';
import VideoTutorials from './pages/resources/VideoTutorials';
import CaseStudies from './pages/resources/CaseStudies';
import Webinars from './pages/resources/Webinars';
import BestPractices from './pages/resources/BestPractices';
import Community from './pages/resources/Community';
import APIDocumentation from './pages/APIDocumentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SEOHead />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <SEOHead 
                title="Chat Sigma - Official WhatsApp Business API & Automation Platform"
                description="Transform your business with WhatsApp automation. Official WhatsApp Business API partner with 0% markup. Automate conversations, manage leads, boost sales by 45%. 14-day free trial."
                keywords="WhatsApp Business API, WhatsApp Automation, WhatsApp Chatbot, Business Messaging, Chat Automation, WhatsApp Marketing, Official WhatsApp Partner"
                url="https://chatsigma.com/"
              />
              <Hero />
              <TrustedBy />
              <Features />
              <WhyChooseUs />
              <Industries />
              <Testimonials />
              <FAQ />
            </>
          } />
          
          {/* Feature Pages */}
          <Route path="/features/whatsapp-business-api" element={
            <>
              <SEOHead 
                title="WhatsApp Business API | Official Integration | ChatSigma"
                description="Official WhatsApp Business API integration with 0% markup. Send messages, automate conversations, and scale your business communication."
                keywords="WhatsApp Business API, official WhatsApp integration, business messaging, WhatsApp automation"
                url="https://chatsigma.com/features/whatsapp-business-api"
              />
              <WhatsAppBusinessAPI />
            </>
          } />
          <Route path="/features/ai-chatbot" element={
            <>
              <SEOHead 
                title="AI-Powered WhatsApp Chatbot | Intelligent Automation | ChatSigma"
                description="Build intelligent WhatsApp chatbots with AI. Automate responses, qualify leads, and provide 24/7 customer support with no coding required."
                keywords="AI chatbot, WhatsApp chatbot, intelligent automation, conversational AI, customer support automation"
                url="https://chatsigma.com/features/ai-chatbot"
              />
              <AIChatbot />
            </>
          } />
          <Route path="/features/bulk-messaging" element={
            <>
              <SEOHead 
                title="WhatsApp Bulk Messaging | Mass Communication | ChatSigma"
                description="Send personalized WhatsApp messages to thousands of customers instantly. Perfect for promotions, announcements, and customer engagement."
                keywords="bulk messaging, mass WhatsApp messages, WhatsApp marketing, broadcast messages, customer engagement"
                url="https://chatsigma.com/features/bulk-messaging"
              />
              <BulkMessaging />
            </>
          } />
          <Route path="/features/analytics" element={
            <>
              <SEOHead 
                title="WhatsApp Analytics & Reports | Data-Driven Insights | ChatSigma"
                description="Comprehensive WhatsApp analytics and reporting. Track performance, understand customers, and optimize your messaging strategy with real-time data."
                keywords="WhatsApp analytics, messaging reports, conversation analytics, performance tracking, data insights"
                url="https://chatsigma.com/features/analytics"
              />
              <Analytics />
            </>
          } />
          <Route path="/features/team-collaboration" element={
            <>
              <SEOHead 
                title="Team Collaboration | Multi-Agent WhatsApp Support | ChatSigma"
                description="Enable seamless teamwork with shared inboxes, smart routing, and real-time collaboration. Scale your customer support efficiently."
                keywords="team collaboration, multi-agent support, shared inbox, team management, collaborative messaging"
                url="https://chatsigma.com/features/team-collaboration"
              />
              <TeamCollaboration />
            </>
          } />
          <Route path="/features/business-automation" element={
            <>
              <SEOHead 
                title="Complete Business Automation | Custom Workflows | ChatSigma"
                description="Automate any business process with WhatsApp. Share your process with us and we'll automate it entirely within WhatsApp."
                keywords="business automation, workflow automation, process automation, custom workflows, business process management"
                url="https://chatsigma.com/features/business-automation"
              />
              <BusinessAutomation />
            </>
          } />
          <Route path="/features/fast-integration" element={
            <>
              <SEOHead 
                title="Fast WhatsApp Integration | Developer APIs | ChatSigma"
                description="Integrate WhatsApp in minutes with our simple APIs, comprehensive documentation, and 60+ pre-built integrations."
                keywords="WhatsApp integration, developer API, fast setup, API documentation, webhook integration"
                url="https://chatsigma.com/features/fast-integration"
              />
              <FastIntegration />
            </>
          } />
          
          {/* Tools */}
          <Route path="/tools/qr-generator" element={
            <>
              <SEOHead 
                title="Free WhatsApp QR Code Generator | ChatSigma Tools"
                description="Generate WhatsApp QR codes and links instantly. Free tool to create scannable QR codes for your WhatsApp Business number. No registration required."
                keywords="WhatsApp QR code generator, WhatsApp QR code, WhatsApp link generator, free QR generator"
                url="https://chatsigma.com/tools/qr-generator"
              />
              <QRGenerator />
            </>
          } />
          <Route path="/tools/message-link" element={
            <>
              <SEOHead 
                title="WhatsApp Message Link Generator | Pre-filled Messages | ChatSigma"
                description="Create WhatsApp links with pre-filled messages. Generate custom WhatsApp links for instant customer communication. Free tool by ChatSigma."
                keywords="WhatsApp message link, pre-filled WhatsApp message, WhatsApp link generator, custom WhatsApp link"
                url="https://chatsigma.com/tools/message-link"
              />
              <MessageLink />
            </>
          } />
          <Route path="/tools/chat-button" element={
            <>
              <SEOHead 
                title="WhatsApp Chat Button Generator | Website Integration | ChatSigma"
                description="Create customizable WhatsApp chat buttons for your website. Easy embed code generator for instant customer communication. Free tool."
                keywords="WhatsApp chat button, website chat button, WhatsApp widget, chat button generator"
                url="https://chatsigma.com/tools/chat-button"
              />
              <ChatButton />
            </>
          } />
          <Route path="/tools/group-link" element={
            <>
              <SEOHead 
                title="WhatsApp Group Link Beautifier | Custom Group Cards | ChatSigma"
                description="Transform WhatsApp group links into beautiful, shareable cards. Create attractive group invitations with custom designs. Free tool."
                keywords="WhatsApp group link, group link beautifier, WhatsApp group card, group invitation"
                url="https://chatsigma.com/tools/group-link"
              />
              <GroupLink />
            </>
          } />
          <Route path="/tools/bio-generator" element={
            <>
              <SEOHead 
                title="WhatsApp Business Bio Generator | AI-Powered | ChatSigma"
                description="Generate perfect WhatsApp Business bios with AI. Create professional, engaging bios for your WhatsApp Business profile. Free AI tool."
                keywords="WhatsApp business bio, bio generator, WhatsApp profile, business bio AI, WhatsApp bio ideas"
                url="https://chatsigma.com/tools/bio-generator"
              />
              <BioGenerator />
            </>
          } />
          <Route path="/tools/number-validator" element={
            <>
              <SEOHead 
                title="WhatsApp Number Validator | Phone Number Checker | ChatSigma"
                description="Validate phone numbers for WhatsApp compatibility. Check if numbers are valid for WhatsApp Business API. Free validation tool."
                keywords="WhatsApp number validator, phone number validator, WhatsApp compatibility checker"
                url="https://chatsigma.com/tools/number-validator"
              />
              <NumberValidator />
            </>
          } />
          <Route path="/tools/cta-generator" element={
            <>
              <SEOHead 
                title="Call-to-Action Generator | WhatsApp CTA Cards | ChatSigma"
                description="Create stunning call-to-action cards for WhatsApp marketing. Generate beautiful CTA designs for better conversions. Free tool."
                keywords="CTA generator, call to action, WhatsApp CTA, marketing cards, CTA design"
                url="https://chatsigma.com/tools/cta-generator"
              />
              <CTAGenerator />
            </>
          } />
          <Route path="/tools/auto-reply" element={
            <>
              <SEOHead 
                title="WhatsApp Auto-Reply Template Generator | ChatSigma"
                description="Generate smart auto-reply templates for WhatsApp Business. Create professional automated responses for better customer service."
                keywords="WhatsApp auto reply, auto reply templates, WhatsApp automation, automated responses"
                url="https://chatsigma.com/tools/auto-reply"
              />
              <AutoReply />
            </>
          } />
          
          {/* WhatsApp Bluetick Verification */}
          <Route path="/whatsapp-bluetick-verification" element={
            <>
              <SEOHead 
                title="WhatsApp Blue Tick Verification | Official Business Verification | ChatSigma"
                description="Get your WhatsApp Business verified with official blue tick. Build instant trust, increase sales by 5X. ₹20,000 one-time cost + 1 year free ChatSigma access."
                keywords="WhatsApp blue tick, WhatsApp verification, WhatsApp business verification, blue tick verification, official WhatsApp partner"
                url="https://chatsigma.com/whatsapp-bluetick-verification"
                type="service"
                schemaData={{
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "WhatsApp Blue Tick Verification",
                  "description": "Official WhatsApp Business verification service",
                  "provider": {
                    "@type": "Organization",
                    "name": "ChatSigma Technologies (OPC) Private Limited"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "20000",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  }
                }}
              />
              <WhatsAppBluetick />
            </>
          } />
          
          {/* Industries */}
          <Route path="/industries/ecommerce" element={
            <>
              <SEOHead 
                title="WhatsApp Automation for E-commerce | Boost Sales by 45% | ChatSigma"
                description="Automate your e-commerce with WhatsApp. Order confirmations, cart abandonment recovery, customer support. Increase conversions by 45%."
                keywords="e-commerce WhatsApp automation, WhatsApp for online stores, cart abandonment WhatsApp, e-commerce chatbot"
                url="https://chatsigma.com/industries/ecommerce"
              />
              <EcommercePage />
            </>
          } />
          <Route path="/industries/healthcare" element={
            <>
              <SEOHead 
                title="WhatsApp Automation for Healthcare | Patient Communication | ChatSigma"
                description="Enhance patient care with WhatsApp automation. Appointment reminders, health alerts, HIPAA compliant messaging for healthcare providers."
                keywords="healthcare WhatsApp automation, patient communication, medical WhatsApp, healthcare chatbot, appointment reminders"
                url="https://chatsigma.com/industries/healthcare"
              />
              <HealthcarePage />
            </>
          } />
          <Route path="/industries/finance" element={
            <>
              <SEOHead 
                title="WhatsApp Automation for Finance | Secure Banking Messages | ChatSigma"
                description="Secure financial communication via WhatsApp. Transaction alerts, payment reminders, investment updates with bank-grade security."
                keywords="finance WhatsApp automation, banking WhatsApp, financial services chatbot, secure messaging"
                url="https://chatsigma.com/industries/finance"
              />
              <FinancePage />
            </>
          } />
          <Route path="/industries/education" element={
            <>
              <SEOHead 
                title="WhatsApp Automation for Education | Student Engagement | ChatSigma"
                description="Improve student engagement with WhatsApp automation. Course updates, assignment reminders, parent communication for educational institutions."
                keywords="education WhatsApp automation, student communication, educational chatbot, school WhatsApp"
                url="https://chatsigma.com/industries/education"
              />
              <EducationPage />
            </>
          } />
          <Route path="/industries/real-estate" element={
            <>
              <SEOHead 
                title="WhatsApp Automation for Real Estate | Lead Generation | ChatSigma"
                description="Generate and nurture real estate leads with WhatsApp automation. Property alerts, viewing schedules, market updates for realtors."
                keywords="real estate WhatsApp automation, property WhatsApp, real estate chatbot, lead generation"
                url="https://chatsigma.com/industries/real-estate"
              />
              <RealEstatePage />
            </>
          } />
          <Route path="/industries/hospitality" element={
            <>
              <SEOHead 
                title="WhatsApp Automation for Hospitality | Guest Experience | ChatSigma"
                description="Enhance guest experience with WhatsApp automation. Booking confirmations, concierge services, feedback collection for hotels and restaurants."
                keywords="hospitality WhatsApp automation, hotel WhatsApp, restaurant chatbot, guest communication"
                url="https://chatsigma.com/industries/hospitality"
              />
              <HospitalityPage />
            </>
          } />
          
          {/* Other Pages */}
          <Route path="/integrations" element={
            <>
              <SEOHead 
                title="60+ WhatsApp Integrations | Connect Your Favorite Tools | ChatSigma"
                description="Connect ChatSigma with 60+ popular tools. Shopify, Salesforce, HubSpot, Stripe integrations. No coding required - plug and play setup."
                keywords="WhatsApp integrations, Shopify WhatsApp, Salesforce integration, HubSpot WhatsApp, API integrations"
                url="https://chatsigma.com/integrations"
              />
              <Integrations />
            </>
          } />
          <Route path="/contact" element={
            <>
              <SEOHead 
                title="Contact ChatSigma | WhatsApp Automation Support | Get Help"
                description="Contact ChatSigma for WhatsApp automation support. 24/7 expert help, free consultation. Phone: +91-9220304949, Email: info@chatsigma.com"
                keywords="ChatSigma contact, WhatsApp automation support, customer service, technical support"
                url="https://chatsigma.com/contact"
              />
              <ContactPage />
            </>
          } />
          <Route path="/about" element={
            <>
              <SEOHead 
                title="About ChatSigma | Official WhatsApp Business API Partner | Our Story"
                description="Learn about ChatSigma Technologies - Official WhatsApp Business API partner. Proudly made in India, serving 2000+ businesses worldwide."
                keywords="about ChatSigma, WhatsApp API partner, ChatSigma company, WhatsApp automation company India"
                url="https://chatsigma.com/about"
              />
              <AboutPage />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <SEOHead 
                title="WhatsApp Automation Pricing | Transparent Plans | ChatSigma"
                description="Simple, transparent pricing for WhatsApp automation. Plans start at $49/month. 14-day free trial, no setup fees, cancel anytime."
                keywords="WhatsApp automation pricing, ChatSigma pricing, WhatsApp API cost, business messaging pricing"
                url="https://chatsigma.com/pricing"
              />
              <PricingPage />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <SEOHead 
                title="Privacy Policy | ChatSigma Data Protection | GDPR Compliant"
                description="ChatSigma privacy policy. Learn how we protect your data with enterprise-grade security, GDPR compliance, and transparent data practices."
                keywords="ChatSigma privacy policy, data protection, GDPR compliance, privacy"
                url="https://chatsigma.com/privacy-policy"
              />
              <PrivacyPolicy />
            </>
          } />
          <Route path="/terms-of-service" element={
            <>
              <SEOHead 
                title="Terms of Service | ChatSigma Legal Terms | User Agreement"
                description="ChatSigma terms of service and user agreement. Legal terms for using our WhatsApp automation platform and services."
                keywords="ChatSigma terms of service, user agreement, legal terms, terms and conditions"
                url="https://chatsigma.com/terms-of-service"
              />
              <TermsOfService />
            </>
          } />
          <Route path="/cookie-policy" element={
            <>
              <SEOHead 
                title="Cookie Policy | ChatSigma Website Cookies | Privacy Settings"
                description="ChatSigma cookie policy. Learn about cookies we use, how to manage preferences, and our commitment to privacy."
                keywords="ChatSigma cookie policy, website cookies, privacy settings, cookie preferences"
                url="https://chatsigma.com/cookie-policy"
              />
              <CookiePolicy />
            </>
          } />
          <Route path="/api-documentation" element={
            <>
              <SEOHead 
                title="WhatsApp API Documentation | Developer Resources | ChatSigma"
                description="Comprehensive WhatsApp API documentation by ChatSigma. Developer guides, code examples, and integration resources coming soon."
                keywords="WhatsApp API documentation, developer resources, API guides, WhatsApp integration"
                url="https://chatsigma.com/api-documentation"
              />
              <APIDocumentation />
            </>
          } />
          
          {/* Resources */}
          <Route path="/resources/help-center" element={
            <>
              <SEOHead 
                title="Help Center | ChatSigma Support | WhatsApp Automation Help"
                description="ChatSigma help center with tutorials, guides, and FAQs for WhatsApp automation. Get help with setup, troubleshooting, and best practices."
                keywords="ChatSigma help center, WhatsApp automation help, support documentation, tutorials"
                url="https://chatsigma.com/resources/help-center"
              />
              <HelpCenter />
            </>
          } />
          <Route path="/resources/getting-started" element={
            <>
              <SEOHead 
                title="Getting Started with WhatsApp Automation | ChatSigma Guide"
                description="Complete guide to getting started with ChatSigma WhatsApp automation. Step-by-step setup instructions and best practices."
                keywords="WhatsApp automation setup, getting started guide, ChatSigma tutorial, WhatsApp API setup"
                url="https://chatsigma.com/resources/getting-started"
              />
              <GettingStarted />
            </>
          } />
          <Route path="/resources/video-tutorials" element={
            <>
              <SEOHead 
                title="WhatsApp Automation Video Tutorials | ChatSigma Learning"
                description="Learn WhatsApp automation with our comprehensive video tutorial library. From basic setup to advanced strategies."
                keywords="WhatsApp automation videos, ChatSigma tutorials, video learning, automation training"
                url="https://chatsigma.com/resources/video-tutorials"
              />
              <VideoTutorials />
            </>
          } />
          <Route path="/resources/case-studies" element={
            <>
              <SEOHead 
                title="WhatsApp Automation Case Studies | Success Stories | ChatSigma"
                description="Real success stories from businesses using ChatSigma. See how companies achieved 45% sales growth with WhatsApp automation."
                keywords="WhatsApp automation case studies, success stories, customer results, business growth"
                url="https://chatsigma.com/resources/case-studies"
              />
              <CaseStudies />
            </>
          } />
          <Route path="/resources/webinars" element={
            <>
              <SEOHead 
                title="WhatsApp Automation Webinars | Expert Training | ChatSigma"
                description="Join our expert-led webinars on WhatsApp automation. Learn proven strategies to grow your business with messaging automation."
                keywords="WhatsApp automation webinars, expert training, business automation, marketing webinars"
                url="https://chatsigma.com/resources/webinars"
              />
              <Webinars />
            </>
          } />
          <Route path="/resources/best-practices" element={
            <>
              <SEOHead 
                title="WhatsApp Automation Best Practices | Expert Tips | ChatSigma"
                description="Expert tips and best practices for WhatsApp automation success. Learn from industry experts and avoid common pitfalls."
                keywords="WhatsApp automation best practices, expert tips, automation strategies, messaging best practices"
                url="https://chatsigma.com/resources/best-practices"
              />
              <BestPractices />
            </>
          } />
          <Route path="/resources/community" element={
            <>
              <SEOHead 
                title="ChatSigma Community | WhatsApp Automation Experts | Join Us"
                description="Join the ChatSigma community of WhatsApp automation experts. Share experiences, get help, and discover new strategies."
                keywords="ChatSigma community, WhatsApp automation community, expert network, user community"
                url="https://chatsigma.com/resources/community"
              />
              <Community />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;