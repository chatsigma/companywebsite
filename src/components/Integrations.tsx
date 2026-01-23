import React, { useState } from 'react';
import { Search, ArrowRight, ExternalLink, Star, Zap, Shield, Clock } from 'lucide-react';

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'E-commerce', 'CRM', 'Marketing', 'Analytics', 'Payment', 'Productivity', 'Communication', 'Development', 'Cloud & Storage', 'Social Media', 'HR & Recruiting', 'Accounting', 'Collaboration'];

  const integrations = [
    {
      name: 'Shopify',
      category: 'E-commerce',
      description: 'Sync orders, customers, and products. Send order confirmations and shipping updates.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png',
      color: 'from-[#96BF48] to-[#7AB800]',
      brandColor: '#96BF48',
      features: ['Order sync', 'Customer data', 'Abandoned cart recovery'],
      rating: 4.9,
      users: '10K+',
      setup: '5 min'
    },
    {
      name: 'Salesforce',
      category: 'CRM',
      description: 'Connect leads, contacts, and opportunities. Automate follow-ups and nurture campaigns.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Salesforce-Logo.png',
      color: 'from-[#00A1E0] to-[#0073E6]',
      brandColor: '#00A1E0',
      features: ['Lead management', 'Contact sync', 'Opportunity tracking'],
      rating: 4.8,
      users: '25K+',
      setup: '10 min'
    },
    {
      name: 'HubSpot',
      category: 'CRM',
      description: 'Integrate with HubSpot CRM for seamless lead management and customer communication.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/HubSpot-Logo.png',
      color: 'from-[#FF7A59] to-[#FF5C35]',
      brandColor: '#FF7A59',
      features: ['Contact management', 'Deal tracking', 'Email integration'],
      rating: 4.7,
      users: '15K+',
      setup: '8 min'
    },
    {
      name: 'WooCommerce',
      category: 'E-commerce',
      description: 'WordPress e-commerce integration for order management and customer support.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/WooCommerce-Logo.png',
      color: 'from-[#96588A] to-[#7A4A7A]',
      brandColor: '#96588A',
      features: ['Order notifications', 'Product catalog', 'Customer support'],
      rating: 4.6,
      users: '8K+',
      setup: '7 min'
    },
    {
      name: 'Stripe',
      category: 'Payment',
      description: 'Payment processing integration for transaction notifications and billing updates.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Stripe-Logo.png',
      color: 'from-[#635BFF] to-[#4F46E5]',
      brandColor: '#635BFF',
      features: ['Payment alerts', 'Invoice notifications', 'Subscription updates'],
      rating: 4.9,
      users: '20K+',
      setup: '5 min'
    },
    {
      name: 'Google',
      category: 'Analytics',
      description: 'Track WhatsApp campaign performance and customer engagement metrics.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png',
      color: 'from-[#4285F4] to-[#1A73E8]',
      brandColor: '#4285F4',
      features: ['Campaign tracking', 'Conversion metrics', 'User behavior'],
      rating: 4.5,
      users: '30K+',
      setup: '12 min'
    },
    {
      name: 'Mailchimp',
      category: 'Marketing',
      description: 'Sync email lists and create cross-channel marketing campaigns.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Mailchimp-Logo.png',
      color: 'from-[#FFE01B] to-[#F7D917]',
      brandColor: '#FFE01B',
      features: ['List sync', 'Campaign automation', 'Audience segmentation'],
      rating: 4.4,
      users: '12K+',
      setup: '6 min'
    },
    {
      name: 'Zapier',
      category: 'Productivity',
      description: 'Connect with 5000+ apps through Zapier automation workflows.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Zapier-Logo.png',
      color: 'from-[#FF4A00] to-[#E63900]',
      brandColor: '#FF4A00',
      features: ['Workflow automation', '5000+ app connections', 'Custom triggers'],
      rating: 4.8,
      users: '50K+',
      setup: '3 min'
    },
    {
      name: 'Slack',
      category: 'Productivity',
      description: 'Get WhatsApp notifications and manage conversations from Slack.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Slack-Logo.png',
      color: 'from-[#4A154B] to-[#350D36]',
      brandColor: '#4A154B',
      features: ['Message notifications', 'Team collaboration', 'Channel integration'],
      rating: 4.6,
      users: '18K+',
      setup: '4 min'
    },
    {
      name: 'Microsoft',
      category: 'Productivity',
      description: 'Integrate with Microsoft Office 365 and Teams for seamless workflow.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png',
      color: 'from-[#00BCF2] to-[#0078D4]',
      brandColor: '#00BCF2',
      features: ['Office 365 sync', 'Teams integration', 'Calendar sync'],
      rating: 4.7,
      users: '9K+',
      setup: '6 min'
    },
    {
      name: 'PayPal',
      category: 'Payment',
      description: 'Send payment confirmations and transaction updates via WhatsApp.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/PayPal-Logo.png',
      color: 'from-[#003087] to-[#002C5F]',
      brandColor: '#003087',
      features: ['Payment notifications', 'Transaction alerts', 'Refund updates'],
      rating: 4.6,
      users: '14K+',
      setup: '5 min'
    },
    {
      name: 'Amazon',
      category: 'E-commerce',
      description: 'Connect with Amazon marketplace for order management and notifications.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
      color: 'from-[#FF9900] to-[#E68900]',
      brandColor: '#FF9900',
      features: ['Order sync', 'Inventory updates', 'Customer notifications'],
      rating: 4.8,
      users: '22K+',
      setup: '7 min'
    },
    // Productivity & Collaboration
    {
      name: 'Calendly',
      category: 'Productivity',
      description: 'Schedule meetings automatically and send WhatsApp reminders to attendees.',
      logo: 'https://images.ctfassets.net/k0lk9kiuza3o/7zS68VdTJqYKrKr6KZfz8N/58f9c7e6f7a9a8f7d8a98f7d8a98f7d8/calendly-logo.png',
      color: 'from-[#006BFF] to-[#0051CC]',
      brandColor: '#006BFF',
      features: ['Meeting scheduling', 'Automated reminders', 'Calendar sync'],
      rating: 4.7,
      users: '7K+',
      setup: '5 min'
    },
    {
      name: 'Google Meet',
      category: 'Collaboration',
      description: 'Send meeting links and notifications through WhatsApp.',
      logo: 'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png',
      color: 'from-[#00897B] to-[#00695C]',
      brandColor: '#00897B',
      features: ['Meeting invites', 'Join links', 'Participant notifications'],
      rating: 4.5,
      users: '11K+',
      setup: '4 min'
    },
    {
      name: 'Zoom',
      category: 'Collaboration',
      description: 'Integrate Zoom meetings with WhatsApp for seamless video conferencing.',
      logo: 'https://st1.zoom.us/static/5.4.54790.0508/image/new/ZoomLogo.png',
      color: 'from-[#2D8CFF] to-[#0B5CFF]',
      brandColor: '#2D8CFF',
      features: ['Meeting creation', 'Auto-notifications', 'Recording sharing'],
      rating: 4.8,
      users: '16K+',
      setup: '6 min'
    },
    {
      name: 'Microsoft Teams',
      category: 'Collaboration',
      description: 'Bridge Microsoft Teams with WhatsApp for unified communication.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      color: 'from-[#6264A7] to-[#464775]',
      brandColor: '#6264A7',
      features: ['Team chat sync', 'Meeting notifications', 'File sharing'],
      rating: 4.6,
      users: '13K+',
      setup: '8 min'
    },
    {
      name: 'Google Calendar',
      category: 'Productivity',
      description: 'Sync calendar events and send WhatsApp reminders for appointments.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
      color: 'from-[#4285F4] to-[#1A73E8]',
      brandColor: '#4285F4',
      features: ['Event sync', 'Smart reminders', 'Attendee notifications'],
      rating: 4.7,
      users: '19K+',
      setup: '5 min'
    },
    {
      name: 'Outlook',
      category: 'Productivity',
      description: 'Connect Outlook email and calendar with WhatsApp messaging.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg',
      color: 'from-[#0078D4] to-[#005A9E]',
      brandColor: '#0078D4',
      features: ['Email integration', 'Calendar sync', 'Contact management'],
      rating: 4.5,
      users: '10K+',
      setup: '7 min'
    },
    {
      name: 'Asana',
      category: 'Productivity',
      description: 'Get task updates and project notifications via WhatsApp.',
      logo: 'https://luna1.co/eb0187.png',
      color: 'from-[#F06A6A] to-[#E83E3E]',
      brandColor: '#F06A6A',
      features: ['Task notifications', 'Project updates', 'Team collaboration'],
      rating: 4.6,
      users: '8K+',
      setup: '6 min'
    },
    {
      name: 'Trello',
      category: 'Productivity',
      description: 'Receive Trello board updates and card notifications on WhatsApp.',
      logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
      color: 'from-[#0079BF] to-[#026AA7]',
      brandColor: '#0079BF',
      features: ['Board notifications', 'Card updates', 'Due date reminders'],
      rating: 4.7,
      users: '9K+',
      setup: '5 min'
    },
    {
      name: 'Monday.com',
      category: 'Productivity',
      description: 'Sync Monday.com boards with WhatsApp for real-time updates.',
      logo: 'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png',
      color: 'from-[#FF3D57] to-[#E6162B]',
      brandColor: '#FF3D57',
      features: ['Board sync', 'Status updates', 'Team notifications'],
      rating: 4.8,
      users: '11K+',
      setup: '7 min'
    },
    {
      name: 'Notion',
      category: 'Productivity',
      description: 'Get Notion page updates and database changes via WhatsApp.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      color: 'from-[#000000] to-[#2E2E2E]',
      brandColor: '#000000',
      features: ['Page notifications', 'Database updates', 'Workspace sync'],
      rating: 4.6,
      users: '6K+',
      setup: '8 min'
    },
    {
      name: 'ClickUp',
      category: 'Productivity',
      description: 'Receive ClickUp task updates and reminders on WhatsApp.',
      logo: 'https://clickup.com/landing/images/logo-gradient.svg',
      color: 'from-[#7B68EE] to-[#6C5CE7]',
      brandColor: '#7B68EE',
      features: ['Task management', 'Priority alerts', 'Team updates'],
      rating: 4.7,
      users: '7K+',
      setup: '6 min'
    },
    // E-commerce
    {
      name: 'Magento',
      category: 'E-commerce',
      description: 'Integrate Magento store for order management and customer engagement.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Magento_Logo.svg',
      color: 'from-[#EE672F] to-[#D85421]',
      brandColor: '#EE672F',
      features: ['Order tracking', 'Inventory sync', 'Customer support'],
      rating: 4.5,
      users: '5K+',
      setup: '10 min'
    },
    {
      name: 'BigCommerce',
      category: 'E-commerce',
      description: 'Connect BigCommerce store for automated order and shipping updates.',
      logo: 'https://www.bigcommerce.com/assets/bigcommerce-logo-dark.svg',
      color: 'from-[#121118] to-[#2C2C2C]',
      brandColor: '#121118',
      features: ['Order notifications', 'Product sync', 'Abandoned cart'],
      rating: 4.6,
      users: '4K+',
      setup: '8 min'
    },
    {
      name: 'PrestaShop',
      category: 'E-commerce',
      description: 'Sync PrestaShop store with WhatsApp for customer communication.',
      logo: 'https://www.prestashop.com/sites/all/themes/prestashop/images/logo.png',
      color: 'from-[#DF0067] to-[#B40052]',
      brandColor: '#DF0067',
      features: ['Store sync', 'Order updates', 'Customer alerts'],
      rating: 4.4,
      users: '3K+',
      setup: '9 min'
    },
    {
      name: 'OpenCart',
      category: 'E-commerce',
      description: 'Integrate OpenCart for e-commerce automation via WhatsApp.',
      logo: 'https://www.opencart.com/application/view/image/icon/opencart-logo.png',
      color: 'from-[#2AC2EF] to-[#1AA5D0]',
      brandColor: '#2AC2EF',
      features: ['Order management', 'Product catalog', 'Payment alerts'],
      rating: 4.3,
      users: '2K+',
      setup: '10 min'
    },
    {
      name: 'Wix',
      category: 'E-commerce',
      description: 'Connect Wix website and store with WhatsApp messaging.',
      logo: 'https://static.wixstatic.com/media/9ab0d1_f2b1b96b3f6f4d8cb4f5e5f5e5e5e5e5~mv2.png',
      color: 'from-[#0C6EFC] to-[#0050C2]',
      brandColor: '#0C6EFC',
      features: ['Website chat', 'E-commerce orders', 'Form submissions'],
      rating: 4.5,
      users: '6K+',
      setup: '5 min'
    },
    {
      name: 'Squarespace',
      category: 'E-commerce',
      description: 'Integrate Squarespace for order notifications and customer support.',
      logo: 'https://cdn.worldvectorlogo.com/logos/squarespace-1.svg',
      color: 'from-[#000000] to-[#2E2E2E]',
      brandColor: '#000000',
      features: ['Commerce sync', 'Booking alerts', 'Contact forms'],
      rating: 4.4,
      users: '5K+',
      setup: '7 min'
    },
    // CRM & Sales
    {
      name: 'Pipedrive',
      category: 'CRM',
      description: 'Sync Pipedrive CRM for lead management and sales automation.',
      logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg',
      color: 'from-[#1A1A1A] to-[#000000]',
      brandColor: '#1A1A1A',
      features: ['Deal tracking', 'Lead notifications', 'Sales pipeline'],
      rating: 4.7,
      users: '6K+',
      setup: '6 min'
    },
    {
      name: 'Zoho CRM',
      category: 'CRM',
      description: 'Connect Zoho CRM for customer relationship management via WhatsApp.',
      logo: 'https://www.zohowebstatic.com/sites/default/files/zoho-logo.svg',
      color: 'from-[#D42027] to-[#B01A20]',
      brandColor: '#D42027',
      features: ['Contact sync', 'Lead management', 'Sales automation'],
      rating: 4.5,
      users: '7K+',
      setup: '8 min'
    },
    {
      name: 'Freshsales',
      category: 'CRM',
      description: 'Integrate Freshsales CRM for sales and marketing automation.',
      logo: 'https://www.freshworks.com/static-assets/images/common/company/logos/logo-freshsales.svg',
      color: 'from-[#00C1A2] to-[#00A68A]',
      brandColor: '#00C1A2',
      features: ['Lead scoring', 'Email tracking', 'Deal management'],
      rating: 4.6,
      users: '5K+',
      setup: '7 min'
    },
    {
      name: 'Close',
      category: 'CRM',
      description: 'Connect Close CRM for inside sales and lead communication.',
      logo: 'https://close.com/assets/logo-close.svg',
      color: 'from-[#4353FF] to-[#3343CC]',
      brandColor: '#4353FF',
      features: ['Call tracking', 'Email automation', 'Lead management'],
      rating: 4.7,
      users: '4K+',
      setup: '6 min'
    },
    {
      name: 'Copper',
      category: 'CRM',
      description: 'Sync Copper CRM with WhatsApp for Google Workspace integration.',
      logo: 'https://copper.com/wp-content/themes/copper/dist/images/logo.svg',
      color: 'from-[#FA6E4F] to-[#E8573A]',
      brandColor: '#FA6E4F',
      features: ['Gmail integration', 'Contact sync', 'Pipeline tracking'],
      rating: 4.5,
      users: '3K+',
      setup: '7 min'
    },
    {
      name: 'Agile CRM',
      category: 'CRM',
      description: 'Integrate Agile CRM for all-in-one sales and marketing automation.',
      logo: 'https://www.agilecrm.com/img/agile-crm-logo.png',
      color: 'from-[#4183D7] to-[#2E5FA3]',
      brandColor: '#4183D7',
      features: ['Contact management', 'Marketing automation', 'Helpdesk'],
      rating: 4.4,
      users: '3K+',
      setup: '8 min'
    },
    // Marketing
    {
      name: 'SendGrid',
      category: 'Marketing',
      description: 'Connect SendGrid for email marketing and transactional messages.',
      logo: 'https://sendgrid.com/wp-content/themes/sgdotcom/pages/resource/brand/2016/SendGrid-Logomark.png',
      color: 'from-[#1A82E2] to-[#1266B5]',
      brandColor: '#1A82E2',
      features: ['Email campaigns', 'Transactional emails', 'Analytics'],
      rating: 4.6,
      users: '8K+',
      setup: '5 min'
    },
    {
      name: 'ActiveCampaign',
      category: 'Marketing',
      description: 'Integrate ActiveCampaign for advanced email marketing automation.',
      logo: 'https://www.activecampaign.com/site/assets/images/site/logo.svg',
      color: 'from-[#356AE6] to-[#2851B8]',
      brandColor: '#356AE6',
      features: ['Marketing automation', 'CRM', 'Email segmentation'],
      rating: 4.7,
      users: '7K+',
      setup: '7 min'
    },
    {
      name: 'ConvertKit',
      category: 'Marketing',
      description: 'Connect ConvertKit for creator-focused email marketing.',
      logo: 'https://cdn.convertkit.com/assets/images/ck-logo.svg',
      color: 'from-[#FB6970] to-[#E8474E]',
      brandColor: '#FB6970',
      features: ['Email sequences', 'Landing pages', 'Subscriber tagging'],
      rating: 4.6,
      users: '5K+',
      setup: '6 min'
    },
    {
      name: 'GetResponse',
      category: 'Marketing',
      description: 'Sync GetResponse for email marketing and automation.',
      logo: 'https://www.getresponse.com/images/getresponse-logo.svg',
      color: 'from-[#00BAFF] to-[#0098CC]',
      brandColor: '#00BAFF',
      features: ['Email marketing', 'Autoresponders', 'Landing pages'],
      rating: 4.5,
      users: '6K+',
      setup: '6 min'
    },
    {
      name: 'AWeber',
      category: 'Marketing',
      description: 'Integrate AWeber for email marketing and list management.',
      logo: 'https://www.aweber.com/resources/images/logo-aweber.svg',
      color: 'from-[#4A90E2] to-[#357ABD]',
      brandColor: '#4A90E2',
      features: ['Email automation', 'List segmentation', 'Analytics'],
      rating: 4.4,
      users: '5K+',
      setup: '6 min'
    },
    {
      name: 'Campaign Monitor',
      category: 'Marketing',
      description: 'Connect Campaign Monitor for beautiful email campaigns.',
      logo: 'https://www.campaignmonitor.com/assets/brand/logo-campaign-monitor.svg',
      color: 'from-[#108CFF] to-[#0D6FCC]',
      brandColor: '#108CFF',
      features: ['Email templates', 'Campaign analytics', 'A/B testing'],
      rating: 4.5,
      users: '4K+',
      setup: '7 min'
    },
    // Payment
    {
      name: 'Razorpay',
      category: 'Payment',
      description: 'Integrate Razorpay for payment processing and transaction alerts.',
      logo: 'https://razorpay.com/assets/razorpay-logo.svg',
      color: 'from-[#3395FF] to-[#1A73E8]',
      brandColor: '#3395FF',
      features: ['Payment gateway', 'Transaction alerts', 'Refund notifications'],
      rating: 4.7,
      users: '12K+',
      setup: '5 min'
    },
    {
      name: 'Paytm',
      category: 'Payment',
      description: 'Connect Paytm for digital payments and wallet transactions.',
      logo: 'https://paytm.com/assets/images/paytm-logo.svg',
      color: 'from-[#00BAF2] to-[#0098CC]',
      brandColor: '#00BAF2',
      features: ['Digital wallet', 'QR payments', 'Transaction updates'],
      rating: 4.5,
      users: '15K+',
      setup: '6 min'
    },
    {
      name: 'PhonePe',
      category: 'Payment',
      description: 'Integrate PhonePe for UPI payments and transaction notifications.',
      logo: 'https://www.phonepe.com/webstatic/web/logo.svg',
      color: 'from-[#5F259F] to-[#4A1C7E]',
      brandColor: '#5F259F',
      features: ['UPI payments', 'Payment links', 'Transaction alerts'],
      rating: 4.6,
      users: '18K+',
      setup: '5 min'
    },
    {
      name: 'Google Pay',
      category: 'Payment',
      description: 'Connect Google Pay for seamless payment integration.',
      logo: 'https://www.gstatic.com/instantbuy/svg/dark_gpay.svg',
      color: 'from-[#4285F4] to-[#1A73E8]',
      brandColor: '#4285F4',
      features: ['Quick payments', 'Transaction history', 'Payment reminders'],
      rating: 4.7,
      users: '20K+',
      setup: '4 min'
    },
    {
      name: 'PayU',
      category: 'Payment',
      description: 'Integrate PayU for online payment processing and alerts.',
      logo: 'https://payu.in/assets/img/payu-logo.svg',
      color: 'from-[#00C853] to-[#00A843]',
      brandColor: '#00C853',
      features: ['Payment gateway', 'EMI options', 'Instant refunds'],
      rating: 4.5,
      users: '9K+',
      setup: '7 min'
    },
    // Analytics
    {
      name: 'Google Analytics',
      category: 'Analytics',
      description: 'Track website analytics and send reports via WhatsApp.',
      logo: 'https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg',
      color: 'from-[#F9AB00] to-[#E09600]',
      brandColor: '#F9AB00',
      features: ['Website tracking', 'Conversion analytics', 'User behavior'],
      rating: 4.8,
      users: '25K+',
      setup: '8 min'
    },
    {
      name: 'Mixpanel',
      category: 'Analytics',
      description: 'Integrate Mixpanel for product analytics and user insights.',
      logo: 'https://mixpanel.com/wp-content/uploads/2021/07/mixpanel-logo.svg',
      color: 'from-[#6963FF] to-[#5451CC]',
      brandColor: '#6963FF',
      features: ['Event tracking', 'Funnel analysis', 'User cohorts'],
      rating: 4.6,
      users: '6K+',
      setup: '9 min'
    },
    {
      name: 'Amplitude',
      category: 'Analytics',
      description: 'Connect Amplitude for behavioral analytics and insights.',
      logo: 'https://amplitude.com/assets/img/amplitude-logo.svg',
      color: 'from-[#0071D9] to-[#0055A3]',
      brandColor: '#0071D9',
      features: ['Product analytics', 'User journeys', 'Retention analysis'],
      rating: 4.7,
      users: '5K+',
      setup: '10 min'
    },
    {
      name: 'Hotjar',
      category: 'Analytics',
      description: 'Integrate Hotjar for heatmaps and user behavior insights.',
      logo: 'https://www.hotjar.com/images/hotjar-logo.svg',
      color: 'from-[#FF3C00] to-[#CC3000]',
      brandColor: '#FF3C00',
      features: ['Heatmaps', 'Session recordings', 'Feedback polls'],
      rating: 4.5,
      users: '7K+',
      setup: '6 min'
    },
    {
      name: 'Segment',
      category: 'Analytics',
      description: 'Connect Segment for customer data platform integration.',
      logo: 'https://segment.com/docs/images/segment-logo.svg',
      color: 'from-[#52BD95] to-[#3E9A75]',
      brandColor: '#52BD95',
      features: ['Data collection', 'Integration hub', 'User tracking'],
      rating: 4.6,
      users: '4K+',
      setup: '11 min'
    },
    // Communication
    {
      name: 'Twilio',
      category: 'Communication',
      description: 'Integrate Twilio for SMS and voice communication.',
      logo: 'https://www.twilio.com/assets/images/logos/red/twilio-logo-red.svg',
      color: 'from-[#F22F46] to-[#D61F34]',
      brandColor: '#F22F46',
      features: ['SMS gateway', 'Voice calls', 'Programmable messaging'],
      rating: 4.7,
      users: '10K+',
      setup: '8 min'
    },
    {
      name: 'SendinBlue',
      category: 'Communication',
      description: 'Connect SendinBlue for email and SMS marketing.',
      logo: 'https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo.svg',
      color: 'from-[#0092FF] to-[#0073CC]',
      brandColor: '#0092FF',
      features: ['Email campaigns', 'SMS marketing', 'Marketing automation'],
      rating: 4.5,
      users: '6K+',
      setup: '7 min'
    },
    {
      name: 'Intercom',
      category: 'Communication',
      description: 'Integrate Intercom for customer messaging and support.',
      logo: 'https://www.intercom.com/assets/logos/intercom-logo.svg',
      color: 'from-[#1F8DED] to-[#1671C1]',
      brandColor: '#1F8DED',
      features: ['Live chat', 'Customer support', 'Product tours'],
      rating: 4.6,
      users: '8K+',
      setup: '9 min'
    },
    {
      name: 'Drift',
      category: 'Communication',
      description: 'Connect Drift for conversational marketing and sales.',
      logo: 'https://www.drift.com/wp-content/themes/drift/images/drift-logo.svg',
      color: 'from-[#2D3748] to-[#1A202C]',
      brandColor: '#2D3748',
      features: ['Chatbots', 'Conversational marketing', 'Meeting scheduler'],
      rating: 4.5,
      users: '5K+',
      setup: '8 min'
    },
    {
      name: 'Zendesk',
      category: 'Communication',
      description: 'Integrate Zendesk for customer support and ticketing.',
      logo: 'https://d1eipm3vz40hy0.cloudfront.net/images/zendesk-logo.svg',
      color: 'from-[#03363D] to-[#012429]',
      brandColor: '#03363D',
      features: ['Ticket management', 'Help desk', 'Knowledge base'],
      rating: 4.7,
      users: '12K+',
      setup: '10 min'
    },
    // Development
    {
      name: 'GitHub',
      category: 'Development',
      description: 'Connect GitHub for repository updates and notifications.',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      color: 'from-[#24292E] to-[#1B1F23]',
      brandColor: '#24292E',
      features: ['Repo notifications', 'PR updates', 'Issue tracking'],
      rating: 4.8,
      users: '14K+',
      setup: '6 min'
    },
    {
      name: 'GitLab',
      category: 'Development',
      description: 'Integrate GitLab for DevOps and CI/CD notifications.',
      logo: 'https://about.gitlab.com/images/press/logo/svg/gitlab-logo-gray-rgb.svg',
      color: 'from-[#FCA121] to-[#E88600]',
      brandColor: '#FCA121',
      features: ['Pipeline alerts', 'Merge requests', 'Issue updates'],
      rating: 4.6,
      users: '7K+',
      setup: '7 min'
    },
    {
      name: 'Bitbucket',
      category: 'Development',
      description: 'Connect Bitbucket for code repository management.',
      logo: 'https://www.atlassian.com/dam/jcr:e2a6f06f-b3d5-4002-aed3-73539c56a2eb/bitbucket-icon-gradient-blue.svg',
      color: 'from-[#0052CC] to-[#003D99]',
      brandColor: '#0052CC',
      features: ['Code reviews', 'Build status', 'Deployment alerts'],
      rating: 4.5,
      users: '6K+',
      setup: '8 min'
    },
    {
      name: 'Jira',
      category: 'Development',
      description: 'Integrate Jira for project management and issue tracking.',
      logo: 'https://www.atlassian.com/dam/jcr:e33efd9e-e0b8-4d61-a24d-68a48ef99ed5/jira-software-icon-gradient-blue.svg',
      color: 'from-[#0052CC] to-[#003D99]',
      brandColor: '#0052CC',
      features: ['Issue tracking', 'Sprint planning', 'Board updates'],
      rating: 4.7,
      users: '13K+',
      setup: '9 min'
    },
    {
      name: 'Linear',
      category: 'Development',
      description: 'Connect Linear for modern issue tracking and project management.',
      logo: 'https://linear.app/linear-logo.svg',
      color: 'from-[#5E6AD2] to-[#4A54A8]',
      brandColor: '#5E6AD2',
      features: ['Issue management', 'Project tracking', 'Roadmaps'],
      rating: 4.8,
      users: '4K+',
      setup: '5 min'
    },
    // Cloud & Storage
    {
      name: 'Google Drive',
      category: 'Cloud & Storage',
      description: 'Sync Google Drive for file sharing and notifications.',
      logo: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png',
      color: 'from-[#4285F4] to-[#1A73E8]',
      brandColor: '#4285F4',
      features: ['File sharing', 'Access notifications', 'Backup alerts'],
      rating: 4.7,
      users: '16K+',
      setup: '5 min'
    },
    {
      name: 'Dropbox',
      category: 'Cloud & Storage',
      description: 'Integrate Dropbox for cloud storage and file sharing.',
      logo: 'https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_webclip_152.png',
      color: 'from-[#0061FF] to-[#004ACC]',
      brandColor: '#0061FF',
      features: ['File sync', 'Share links', 'Storage alerts'],
      rating: 4.6,
      users: '11K+',
      setup: '6 min'
    },
    {
      name: 'OneDrive',
      category: 'Cloud & Storage',
      description: 'Connect OneDrive for Microsoft cloud storage integration.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg',
      color: 'from-[#0078D4] to-[#005A9E]',
      brandColor: '#0078D4',
      features: ['File backup', 'Sharing notifications', 'Collaboration'],
      rating: 4.5,
      users: '10K+',
      setup: '6 min'
    },
    {
      name: 'Box',
      category: 'Cloud & Storage',
      description: 'Integrate Box for enterprise content management.',
      logo: 'https://www.box.com/sites/default/files/2021-11/box-logo.svg',
      color: 'from-[#0061D5] to-[#0048A0]',
      brandColor: '#0061D5',
      features: ['Document management', 'Secure sharing', 'Workflow automation'],
      rating: 4.6,
      users: '5K+',
      setup: '8 min'
    },
    {
      name: 'AWS S3',
      category: 'Cloud & Storage',
      description: 'Connect AWS S3 for cloud object storage and backups.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg',
      color: 'from-[#FF9900] to-[#E68900]',
      brandColor: '#FF9900',
      features: ['Object storage', 'Bucket notifications', 'Access logs'],
      rating: 4.7,
      users: '8K+',
      setup: '10 min'
    },
    // Social Media
    {
      name: 'Instagram',
      category: 'Social Media',
      description: 'Integrate Instagram for social media marketing and engagement.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
      color: 'from-[#E4405F] to-[#C13584]',
      brandColor: '#E4405F',
      features: ['Post notifications', 'DM integration', 'Story updates'],
      rating: 4.6,
      users: '12K+',
      setup: '7 min'
    },
    {
      name: 'LinkedIn',
      category: 'Social Media',
      description: 'Connect LinkedIn for professional networking and lead generation.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      color: 'from-[#0077B5] to-[#00609C]',
      brandColor: '#0077B5',
      features: ['Lead generation', 'Connection alerts', 'Post engagement'],
      rating: 4.5,
      users: '9K+',
      setup: '8 min'
    },
    {
      name: 'Twitter',
      category: 'Social Media',
      description: 'Integrate Twitter for social media monitoring and engagement.',
      logo: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
      color: 'from-[#1DA1F2] to-[#1A91DA]',
      brandColor: '#1DA1F2',
      features: ['Tweet notifications', 'Mention alerts', 'DM integration'],
      rating: 4.4,
      users: '8K+',
      setup: '6 min'
    },
    {
      name: 'Facebook Ads',
      category: 'Social Media',
      description: 'Connect Facebook Ads for campaign management and lead capture.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      color: 'from-[#1877F2] to-[#145DBF]',
      brandColor: '#1877F2',
      features: ['Ad performance', 'Lead forms', 'Campaign alerts'],
      rating: 4.6,
      users: '11K+',
      setup: '9 min'
    },
    // HR & Recruiting
    {
      name: 'BambooHR',
      category: 'HR & Recruiting',
      description: 'Integrate BambooHR for HR management and employee communication.',
      logo: 'https://www.bamboohr.com/wp-content/themes/bamboo/assets/images/logo.svg',
      color: 'from-[#73C41D] to-[#5FA316]',
      brandColor: '#73C41D',
      features: ['Employee onboarding', 'Time-off notifications', 'HR alerts'],
      rating: 4.6,
      users: '4K+',
      setup: '8 min'
    },
    {
      name: 'Workday',
      category: 'HR & Recruiting',
      description: 'Connect Workday for enterprise HR and financial management.',
      logo: 'https://www.workday.com/content/dam/web/images/logos/workday-logo-color.svg',
      color: 'from-[#F58025] to-[#D66A1A]',
      brandColor: '#F58025',
      features: ['Payroll updates', 'Time tracking', 'Employee records'],
      rating: 4.5,
      users: '6K+',
      setup: '12 min'
    },
    {
      name: 'Greenhouse',
      category: 'HR & Recruiting',
      description: 'Integrate Greenhouse for applicant tracking and recruiting.',
      logo: 'https://www.greenhouse.io/uk/hs-fs/hubfs/greenhouse-logo-green.svg',
      color: 'from-[#00C288] to-[#00A371]',
      brandColor: '#00C288',
      features: ['Candidate tracking', 'Interview scheduling', 'Hiring updates'],
      rating: 4.7,
      users: '5K+',
      setup: '9 min'
    },
    {
      name: 'Lever',
      category: 'HR & Recruiting',
      description: 'Connect Lever for recruiting and talent management.',
      logo: 'https://www.lever.co/assets/logos/lever-logo-full-color.svg',
      color: 'from-[#00C7AC] to-[#00A68F]',
      brandColor: '#00C7AC',
      features: ['ATS', 'Candidate engagement', 'Pipeline management'],
      rating: 4.6,
      users: '4K+',
      setup: '8 min'
    },
    // Accounting
    {
      name: 'QuickBooks',
      category: 'Accounting',
      description: 'Integrate QuickBooks for accounting and financial management.',
      logo: 'https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/quickbooks/online/logos/quickbooks-logo.svg',
      color: 'from-[#2CA01C] to-[#228516]',
      brandColor: '#2CA01C',
      features: ['Invoice notifications', 'Payment alerts', 'Expense tracking'],
      rating: 4.6,
      users: '9K+',
      setup: '10 min'
    },
    {
      name: 'Xero',
      category: 'Accounting',
      description: 'Connect Xero for cloud accounting and bookkeeping.',
      logo: 'https://www.xero.com/content/dam/xero/images/logos/xero-logo-blue.svg',
      color: 'from-[#13B5EA] to-[#0E95C1]',
      brandColor: '#13B5EA',
      features: ['Bank reconciliation', 'Invoicing', 'Financial reports'],
      rating: 4.7,
      users: '7K+',
      setup: '9 min'
    },
    {
      name: 'FreshBooks',
      category: 'Accounting',
      description: 'Integrate FreshBooks for invoicing and expense management.',
      logo: 'https://www.freshbooks.com/assets/img/freshbooks-logo.svg',
      color: 'from-[#0075DD] to-[#0057A3]',
      brandColor: '#0075DD',
      features: ['Invoice creation', 'Expense tracking', 'Time tracking'],
      rating: 4.5,
      users: '6K+',
      setup: '7 min'
    },
    {
      name: 'Wave',
      category: 'Accounting',
      description: 'Connect Wave for free accounting and invoicing software.',
      logo: 'https://www.waveapps.com/img/wave-logo.svg',
      color: 'from-[#6DD3CE] to-[#4FB8B3]',
      brandColor: '#6DD3CE',
      features: ['Free accounting', 'Invoicing', 'Receipt scanning'],
      rating: 4.4,
      users: '5K+',
      setup: '6 min'
    },
    // Additional Marketing Tools
    {
      name: 'Constant Contact',
      category: 'Marketing',
      description: 'Email marketing and automation for small businesses.',
      logo: 'https://www.constantcontact.com/images/constant-contact-logo.svg',
      color: 'from-[#1262B3] to-[#0E4A87]',
      brandColor: '#1262B3',
      features: ['Email campaigns', 'Contact management', 'Event marketing'],
      rating: 4.4,
      users: '4K+',
      setup: '6 min'
    },
    {
      name: 'HubSpot Marketing',
      category: 'Marketing',
      description: 'Comprehensive marketing automation and lead generation.',
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/HubSpot-Logo.png',
      color: 'from-[#FF7A59] to-[#FF5C35]',
      brandColor: '#FF7A59',
      features: ['Marketing automation', 'Landing pages', 'Lead generation'],
      rating: 4.8,
      users: '14K+',
      setup: '10 min'
    },
    {
      name: 'Marketo',
      category: 'Marketing',
      description: 'Enterprise marketing automation and lead management.',
      logo: 'https://www.marketo.com/content/dam/marketo/images/logos/marketo-logo.svg',
      color: 'from-[#5C4C9F] to-[#443770]',
      brandColor: '#5C4C9F',
      features: ['Lead nurturing', 'Campaign management', 'Analytics'],
      rating: 4.5,
      users: '5K+',
      setup: '12 min'
    },
    {
      name: 'Pardot',
      category: 'Marketing',
      description: 'B2B marketing automation by Salesforce.',
      logo: 'https://www.salesforce.com/content/dam/web/en_us/www/images/campaigns/pardot-logo.svg',
      color: 'from-[#00A1E0] to-[#0073E6]',
      brandColor: '#00A1E0',
      features: ['Lead scoring', 'Email marketing', 'ROI reporting'],
      rating: 4.6,
      users: '6K+',
      setup: '11 min'
    },
    // Additional E-commerce
    {
      name: 'Etsy',
      category: 'E-commerce',
      description: 'Connect your Etsy shop for order updates and customer messaging.',
      logo: 'https://www.etsy.com/images/assets/etsy_logo.png',
      color: 'from-[#F56400] to-[#D44E00]',
      brandColor: '#F56400',
      features: ['Order notifications', 'Shop updates', 'Customer communication'],
      rating: 4.5,
      users: '5K+',
      setup: '7 min'
    },
    {
      name: 'eBay',
      category: 'E-commerce',
      description: 'Integrate eBay marketplace for sales and inventory management.',
      logo: 'https://www.ebay.com/sch/i.html?_nkw=ebay+logo',
      color: 'from-[#E53238] to-[#C62828]',
      brandColor: '#E53238',
      features: ['Listing updates', 'Order tracking', 'Buyer messaging'],
      rating: 4.4,
      users: '6K+',
      setup: '8 min'
    },
    {
      name: 'Walmart Marketplace',
      category: 'E-commerce',
      description: 'Connect Walmart marketplace for order management.',
      logo: 'https://www.walmart.com/assets/walmart-logo.svg',
      color: 'from-[#0071CE] to-[#00529C]',
      brandColor: '#0071CE',
      features: ['Order sync', 'Inventory tracking', 'Customer updates'],
      rating: 4.5,
      users: '4K+',
      setup: '9 min'
    },
    // Additional CRM
    {
      name: 'Microsoft Dynamics',
      category: 'CRM',
      description: 'Enterprise CRM and business applications integration.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Dynamics_365_logo.svg',
      color: 'from-[#00A4EF] to-[#0078D4]',
      brandColor: '#00A4EF',
      features: ['Sales automation', 'Customer insights', 'Service management'],
      rating: 4.6,
      users: '7K+',
      setup: '12 min'
    },
    {
      name: 'SugarCRM',
      category: 'CRM',
      description: 'Open-source CRM for sales and marketing automation.',
      logo: 'https://www.sugarcrm.com/assets/sugar-logo.svg',
      color: 'from-[#E61E27] to-[#C41820]',
      brandColor: '#E61E27',
      features: ['Sales pipeline', 'Customer tracking', 'Reporting'],
      rating: 4.4,
      users: '3K+',
      setup: '10 min'
    },
    {
      name: 'Insightly',
      category: 'CRM',
      description: 'CRM and project management for small businesses.',
      logo: 'https://www.insightly.com/wp-content/themes/insightly/assets/images/logo.svg',
      color: 'from-[#00AEEF] to-[#0087BD]',
      brandColor: '#00AEEF',
      features: ['Contact management', 'Project tracking', 'Lead routing'],
      rating: 4.5,
      users: '4K+',
      setup: '8 min'
    },
    // Additional Productivity
    {
      name: 'Airtable',
      category: 'Productivity',
      description: 'Flexible database and collaboration platform integration.',
      logo: 'https://airtable.com/images/airtable-logo.svg',
      color: 'from-[#FCB400] to-[#D99000]',
      brandColor: '#FCB400',
      features: ['Database sync', 'Record updates', 'Collaboration alerts'],
      rating: 4.7,
      users: '6K+',
      setup: '7 min'
    },
    {
      name: 'Basecamp',
      category: 'Productivity',
      description: 'Project management and team communication tool.',
      logo: 'https://basecamp.com/assets/logo-bc3.svg',
      color: 'from-[#1D2D35] to-[#0F1B21]',
      brandColor: '#1D2D35',
      features: ['Project updates', 'Task notifications', 'Team chat'],
      rating: 4.5,
      users: '5K+',
      setup: '6 min'
    },
    {
      name: 'Todoist',
      category: 'Productivity',
      description: 'Task management and productivity tracking integration.',
      logo: 'https://todoist.com/assets/images/todoist-logo.svg',
      color: 'from-[#E44332] to-[#C23525]',
      brandColor: '#E44332',
      features: ['Task reminders', 'Project tracking', 'Priority alerts'],
      rating: 4.6,
      users: '4K+',
      setup: '5 min'
    },
    {
      name: 'Evernote',
      category: 'Productivity',
      description: 'Note-taking and organization app integration.',
      logo: 'https://evernote.com/img/logo/evernote-logo.svg',
      color: 'from-[#00A82D] to-[#008723]',
      brandColor: '#00A82D',
      features: ['Note sync', 'Reminder alerts', 'Notebook sharing'],
      rating: 4.4,
      users: '5K+',
      setup: '6 min'
    },
    // Additional Communication
    {
      name: 'Discord',
      category: 'Communication',
      description: 'Community chat and voice communication integration.',
      logo: 'https://discord.com/assets/logo.svg',
      color: 'from-[#5865F2] to-[#4752C4]',
      brandColor: '#5865F2',
      features: ['Server notifications', 'Message alerts', 'Community engagement'],
      rating: 4.6,
      users: '8K+',
      setup: '6 min'
    },
    {
      name: 'Telegram',
      category: 'Communication',
      description: 'Cross-platform messaging integration with Telegram.',
      logo: 'https://telegram.org/img/t_logo.svg',
      color: 'from-[#0088CC] to-[#006699]',
      brandColor: '#0088CC',
      features: ['Message sync', 'Channel updates', 'Bot integration'],
      rating: 4.5,
      users: '7K+',
      setup: '5 min'
    },
    {
      name: 'WhatsApp Business',
      category: 'Communication',
      description: 'Official WhatsApp Business Platform integration.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      color: 'from-[#25D366] to-[#1da851]',
      brandColor: '#25D366',
      features: ['Business messaging', 'Catalog sharing', 'Quick replies'],
      rating: 4.9,
      users: '50K+',
      setup: '3 min'
    },
    {
      name: 'LiveChat',
      category: 'Communication',
      description: 'Live chat software for customer support.',
      logo: 'https://www.livechat.com/assets/img/logo-livechat.svg',
      color: 'from-[#FFD000] to-[#E6B800]',
      brandColor: '#FFD000',
      features: ['Live chat', 'Ticketing', 'Chat routing'],
      rating: 4.6,
      users: '6K+',
      setup: '7 min'
    },
    // Additional Development
    {
      name: 'Jenkins',
      category: 'Development',
      description: 'CI/CD automation server for build notifications.',
      logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.svg',
      color: 'from-[#D24939] to-[#B23629]',
      brandColor: '#D24939',
      features: ['Build alerts', 'Deployment notifications', 'Pipeline status'],
      rating: 4.5,
      users: '6K+',
      setup: '9 min'
    },
    {
      name: 'CircleCI',
      category: 'Development',
      description: 'Continuous integration and delivery platform.',
      logo: 'https://circleci.com/assets/img/circleci-logo.svg',
      color: 'from-[#343434] to-[#1A1A1A]',
      brandColor: '#343434',
      features: ['Build notifications', 'Test results', 'Deployment alerts'],
      rating: 4.6,
      users: '5K+',
      setup: '8 min'
    },
    {
      name: 'Travis CI',
      category: 'Development',
      description: 'Hosted continuous integration service.',
      logo: 'https://travis-ci.com/images/logos/TravisCI-Full-Color.svg',
      color: 'from-[#BB2031] to-[#9A1A28]',
      brandColor: '#BB2031',
      features: ['Build status', 'Test notifications', 'Deploy alerts'],
      rating: 4.4,
      users: '4K+',
      setup: '8 min'
    },
    {
      name: 'Heroku',
      category: 'Development',
      description: 'Cloud platform for app deployment and hosting.',
      logo: 'https://www.heroku.com/assets/logo-purple.svg',
      color: 'from-[#430098] to-[#2E0068]',
      brandColor: '#430098',
      features: ['Deploy notifications', 'App monitoring', 'Dyno alerts'],
      rating: 4.5,
      users: '7K+',
      setup: '7 min'
    },
    {
      name: 'Vercel',
      category: 'Development',
      description: 'Frontend deployment and hosting platform.',
      logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',
      color: 'from-[#000000] to-[#2E2E2E]',
      brandColor: '#000000',
      features: ['Deploy alerts', 'Build status', 'Domain notifications'],
      rating: 4.7,
      users: '6K+',
      setup: '6 min'
    },
    {
      name: 'Netlify',
      category: 'Development',
      description: 'Web hosting and serverless backend services.',
      logo: 'https://www.netlify.com/img/global/netlify-logo.svg',
      color: 'from-[#00C7B7] to-[#00A39A]',
      brandColor: '#00C7B7',
      features: ['Deploy notifications', 'Build logs', 'Form submissions'],
      rating: 4.6,
      users: '7K+',
      setup: '6 min'
    },
    // Additional Cloud & Storage
    {
      name: 'Azure',
      category: 'Cloud & Storage',
      description: 'Microsoft Azure cloud services integration.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
      color: 'from-[#0078D4] to-[#005A9E]',
      brandColor: '#0078D4',
      features: ['Resource monitoring', 'Service alerts', 'Backup notifications'],
      rating: 4.6,
      users: '9K+',
      setup: '11 min'
    },
    {
      name: 'Google Cloud',
      category: 'Cloud & Storage',
      description: 'Google Cloud Platform integration and monitoring.',
      logo: 'https://www.gstatic.com/images/branding/product/2x/google_cloud_48dp.png',
      color: 'from-[#4285F4] to-[#1A73E8]',
      brandColor: '#4285F4',
      features: ['Infrastructure alerts', 'Service monitoring', 'Billing updates'],
      rating: 4.7,
      users: '8K+',
      setup: '10 min'
    },
    {
      name: 'DigitalOcean',
      category: 'Cloud & Storage',
      description: 'Cloud infrastructure and hosting integration.',
      logo: 'https://www.digitalocean.com/assets/logos/DO_Logo_icon_blue.svg',
      color: 'from-[#0080FF] to-[#0066CC]',
      brandColor: '#0080FF',
      features: ['Droplet monitoring', 'Resource alerts', 'Billing notifications'],
      rating: 4.5,
      users: '6K+',
      setup: '8 min'
    },
    // Additional Social Media
    {
      name: 'Pinterest',
      category: 'Social Media',
      description: 'Visual discovery and social media platform integration.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
      color: 'from-[#E60023] to-[#BD001C]',
      brandColor: '#E60023',
      features: ['Pin notifications', 'Board updates', 'Analytics alerts'],
      rating: 4.4,
      users: '5K+',
      setup: '7 min'
    },
    {
      name: 'YouTube',
      category: 'Social Media',
      description: 'Video platform integration for content creators.',
      logo: 'https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg',
      color: 'from-[#FF0000] to-[#CC0000]',
      brandColor: '#FF0000',
      features: ['Upload notifications', 'Comment alerts', 'Subscriber updates'],
      rating: 4.6,
      users: '10K+',
      setup: '6 min'
    },
    {
      name: 'TikTok',
      category: 'Social Media',
      description: 'Short-form video platform for business marketing.',
      logo: 'https://sf16-sg.tiktokcdn.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon.png',
      color: 'from-[#000000] to-[#2E2E2E]',
      brandColor: '#000000',
      features: ['Video analytics', 'Engagement alerts', 'Trend notifications'],
      rating: 4.5,
      users: '7K+',
      setup: '7 min'
    },
    {
      name: 'Snapchat',
      category: 'Social Media',
      description: 'Multimedia messaging and social media integration.',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg',
      color: 'from-[#FFFC00] to-[#E6E300]',
      brandColor: '#FFFC00',
      features: ['Story updates', 'Ad performance', 'Engagement metrics'],
      rating: 4.3,
      users: '4K+',
      setup: '8 min'
    },
    // Additional Payment
    {
      name: 'Square',
      category: 'Payment',
      description: 'Payment processing and point-of-sale integration.',
      logo: 'https://squareup.com/us/en/press/brand',
      color: 'from-[#3E4348] to-[#2A2D31]',
      brandColor: '#3E4348',
      features: ['Payment alerts', 'Transaction reports', 'Invoice notifications'],
      rating: 4.6,
      users: '11K+',
      setup: '6 min'
    },
    {
      name: 'Braintree',
      category: 'Payment',
      description: 'PayPal-owned payment gateway integration.',
      logo: 'https://www.braintreepayments.com/assets/braintree-logo.svg',
      color: 'from-[#00C4B3] to-[#00A39A]',
      brandColor: '#00C4B3',
      features: ['Transaction processing', 'Recurring billing', 'Payment alerts'],
      rating: 4.5,
      users: '6K+',
      setup: '8 min'
    },
    {
      name: 'Authorize.Net',
      category: 'Payment',
      description: 'Payment gateway for online merchants.',
      logo: 'https://www.authorize.net/content/dam/anet-redesign/logo.svg',
      color: 'from-[#006CB7] to-[#004F8A]',
      brandColor: '#006CB7',
      features: ['Payment processing', 'Fraud detection', 'Transaction alerts'],
      rating: 4.4,
      users: '5K+',
      setup: '9 min'
    },
    // Additional Analytics
    {
      name: 'Tableau',
      category: 'Analytics',
      description: 'Business intelligence and data visualization platform.',
      logo: 'https://www.tableau.com/sites/default/files/tableau_logo.svg',
      color: 'from-[#E97627] to-[#C75F1C]',
      brandColor: '#E97627',
      features: ['Data visualization', 'Report alerts', 'Dashboard sharing'],
      rating: 4.6,
      users: '5K+',
      setup: '10 min'
    },
    {
      name: 'Power BI',
      category: 'Analytics',
      description: 'Microsoft business analytics and reporting service.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
      color: 'from-[#F2C811] to-[#D9B30F]',
      brandColor: '#F2C811',
      features: ['Business intelligence', 'Data reports', 'Dashboard alerts'],
      rating: 4.7,
      users: '7K+',
      setup: '11 min'
    },
    {
      name: 'Looker',
      category: 'Analytics',
      description: 'Business intelligence and data analytics platform.',
      logo: 'https://looker.com/assets/img/images/logos/looker_logo.svg',
      color: 'from-[#6C47FF] to-[#5538CC]',
      brandColor: '#6C47FF',
      features: ['Data exploration', 'Custom reports', 'Alert notifications'],
      rating: 4.5,
      users: '4K+',
      setup: '12 min'
    }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">100+ Native Integrations</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Connect Chat Sigma with your favorite tools and platforms. No coding required – just plug and play.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Zap className="h-5 w-5" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield className="h-5 w-5" />
              <span>Enterprise security</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Clock className="h-5 w-5" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#25D366] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIntegrations.map((integration, index) => (
            <div
              key={integration.name}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className={`h-2 ${integration.color}`}></div>
              
              <div className="p-8">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div 
                    className="w-16 h-16 bg-white rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-md border-2 border-transparent group-hover:shadow-lg"
                    style={{
                      borderColor: integration.brandColor + '30',
                      boxShadow: `0 4px 15px ${integration.brandColor}20`
                    }}
                  >
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="h-10 w-auto max-w-[48px] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.style.display = 'block';
                      }}
                    />
                    <div 
                      className="hidden text-xs font-bold text-center"
                      style={{ color: integration.brandColor }}
                    >
                      {integration.name}
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold text-gray-900 transition-colors"
                      style={{ 
                        '--hover-color': integration.brandColor 
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = integration.brandColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#111827';
                      }}
                    >
                      {integration.name}
                    </h3>
                    <span 
                      className="text-sm text-white px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: integration.brandColor }}
                    >
                      {integration.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {integration.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#25D366] rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{integration.rating}</span>
                  </div>
                  <div>{integration.users} users</div>
                  <div>{integration.setup} setup</div>
                </div>

                {/* CTA Button */}
                <button 
                  className="w-full py-3 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${integration.brandColor}, ${integration.brandColor}CC)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${integration.brandColor}DD, ${integration.brandColor})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${integration.brandColor}, ${integration.brandColor}CC)`;
                  }}
                >
                  Connect Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Integration CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Integration?</h3>
            <p className="text-xl mb-8 opacity-90">
              Can't find your integration? Our team will build it for you at no extra cost.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1da851] transition-colors transform hover:scale-105">
              Request Integration
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;