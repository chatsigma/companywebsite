import React, { useState, useEffect } from 'react';
import { Check, Shield, TrendingUp, Users, Clock, Star, ChevronRight, Phone, Mail, Building, Globe, MapPin, Zap, Sparkles, Rocket, Target, Award, Crown, CheckCircle, X } from 'lucide-react';
import { TestimonialCard } from '../components/TestimonialCard';
import { FAQItem } from '../components/FAQItem';
import { StickyButton } from '../components/StickyButton';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { FloatingIcons } from '../components/FloatingIcons';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { PulsingBadge } from '../components/PulsingBadge';
import { GlowingButton } from '../components/GlowingButton';
import { MetaLogo } from '../components/MetaLogo';
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    phoneNumber: '',
    sameAsWhatsApp: false,
    email: '',
    businessName: '',
    businessWebsite: '',
    businessNature: '',
    companyType: '',
    businessState: '',
    consent: false,
    whatsappCountryCode: '+91',
    phoneCountryCode: '+91'
  });

  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const countryCodes = [
    { code: '+1', country: 'US/Canada' },
    { code: '+7', country: 'Russia' },
    { code: '+20', country: 'Egypt' },
    { code: '+27', country: 'South Africa' },
    { code: '+30', country: 'Greece' },
    { code: '+31', country: 'Netherlands' },
    { code: '+32', country: 'Belgium' },
    { code: '+33', country: 'France' },
    { code: '+34', country: 'Spain' },
    { code: '+36', country: 'Hungary' },
    { code: '+39', country: 'Italy' },
    { code: '+40', country: 'Romania' },
    { code: '+41', country: 'Switzerland' },
    { code: '+43', country: 'Austria' },
    { code: '+44', country: 'UK' },
    { code: '+45', country: 'Denmark' },
    { code: '+46', country: 'Sweden' },
    { code: '+47', country: 'Norway' },
    { code: '+48', country: 'Poland' },
    { code: '+49', country: 'Germany' },
    { code: '+51', country: 'Peru' },
    { code: '+52', country: 'Mexico' },
    { code: '+53', country: 'Cuba' },
    { code: '+54', country: 'Argentina' },
    { code: '+55', country: 'Brazil' },
    { code: '+56', country: 'Chile' },
    { code: '+57', country: 'Colombia' },
    { code: '+58', country: 'Venezuela' },
    { code: '+60', country: 'Malaysia' },
    { code: '+61', country: 'Australia' },
    { code: '+62', country: 'Indonesia' },
    { code: '+63', country: 'Philippines' },
    { code: '+64', country: 'New Zealand' },
    { code: '+65', country: 'Singapore' },
    { code: '+66', country: 'Thailand' },
    { code: '+81', country: 'Japan' },
    { code: '+82', country: 'South Korea' },
    { code: '+84', country: 'Vietnam' },
    { code: '+86', country: 'China' },
    { code: '+90', country: 'Turkey' },
    { code: '+91', country: 'India' },
    { code: '+92', country: 'Pakistan' },
    { code: '+93', country: 'Afghanistan' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+95', country: 'Myanmar' },
    { code: '+98', country: 'Iran' },
    { code: '+212', country: 'Morocco' },
    { code: '+213', country: 'Algeria' },
    { code: '+216', country: 'Tunisia' },
    { code: '+218', country: 'Libya' },
    { code: '+220', country: 'Gambia' },
    { code: '+221', country: 'Senegal' },
    { code: '+222', country: 'Mauritania' },
    { code: '+223', country: 'Mali' },
    { code: '+224', country: 'Guinea' },
    { code: '+225', country: 'Ivory Coast' },
    { code: '+226', country: 'Burkina Faso' },
    { code: '+227', country: 'Niger' },
    { code: '+228', country: 'Togo' },
    { code: '+229', country: 'Benin' },
    { code: '+230', country: 'Mauritius' },
    { code: '+231', country: 'Liberia' },
    { code: '+232', country: 'Sierra Leone' },
    { code: '+233', country: 'Ghana' },
    { code: '+234', country: 'Nigeria' },
    { code: '+235', country: 'Chad' },
    { code: '+236', country: 'Central African Republic' },
    { code: '+237', country: 'Cameroon' },
    { code: '+238', country: 'Cape Verde' },
    { code: '+239', country: 'Sao Tome and Principe' },
    { code: '+240', country: 'Equatorial Guinea' },
    { code: '+241', country: 'Gabon' },
    { code: '+242', country: 'Republic of the Congo' },
    { code: '+243', country: 'Democratic Republic of the Congo' },
    { code: '+244', country: 'Angola' },
    { code: '+245', country: 'Guinea-Bissau' },
    { code: '+246', country: 'British Indian Ocean Territory' },
    { code: '+248', country: 'Seychelles' },
    { code: '+249', country: 'Sudan' },
    { code: '+250', country: 'Rwanda' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+252', country: 'Somalia' },
    { code: '+253', country: 'Djibouti' },
    { code: '+254', country: 'Kenya' },
    { code: '+255', country: 'Tanzania' },
    { code: '+256', country: 'Uganda' },
    { code: '+257', country: 'Burundi' },
    { code: '+258', country: 'Mozambique' },
    { code: '+260', country: 'Zambia' },
    { code: '+261', country: 'Madagascar' },
    { code: '+262', country: 'Reunion' },
    { code: '+263', country: 'Zimbabwe' },
    { code: '+264', country: 'Namibia' },
    { code: '+265', country: 'Malawi' },
    { code: '+266', country: 'Lesotho' },
    { code: '+267', country: 'Botswana' },
    { code: '+268', country: 'Swaziland' },
    { code: '+269', country: 'Comoros' },
    { code: '+290', country: 'Saint Helena' },
    { code: '+291', country: 'Eritrea' },
    { code: '+297', country: 'Aruba' },
    { code: '+298', country: 'Faroe Islands' },
    { code: '+299', country: 'Greenland' },
    { code: '+350', country: 'Gibraltar' },
    { code: '+351', country: 'Portugal' },
    { code: '+352', country: 'Luxembourg' },
    { code: '+353', country: 'Ireland' },
    { code: '+354', country: 'Iceland' },
    { code: '+355', country: 'Albania' },
    { code: '+356', country: 'Malta' },
    { code: '+357', country: 'Cyprus' },
    { code: '+358', country: 'Finland' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+370', country: 'Lithuania' },
    { code: '+371', country: 'Latvia' },
    { code: '+372', country: 'Estonia' },
    { code: '+373', country: 'Moldova' },
    { code: '+374', country: 'Armenia' },
    { code: '+375', country: 'Belarus' },
    { code: '+376', country: 'Andorra' },
    { code: '+377', country: 'Monaco' },
    { code: '+378', country: 'San Marino' },
    { code: '+380', country: 'Ukraine' },
    { code: '+381', country: 'Serbia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+383', country: 'Kosovo' },
    { code: '+385', country: 'Croatia' },
    { code: '+386', country: 'Slovenia' },
    { code: '+387', country: 'Bosnia and Herzegovina' },
    { code: '+389', country: 'North Macedonia' },
    { code: '+420', country: 'Czech Republic' },
    { code: '+421', country: 'Slovakia' },
    { code: '+423', country: 'Liechtenstein' },
    { code: '+500', country: 'Falkland Islands' },
    { code: '+501', country: 'Belize' },
    { code: '+502', country: 'Guatemala' },
    { code: '+503', country: 'El Salvador' },
    { code: '+504', country: 'Honduras' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+507', country: 'Panama' },
    { code: '+508', country: 'Saint Pierre and Miquelon' },
    { code: '+509', country: 'Haiti' },
    { code: '+590', country: 'Guadeloupe' },
    { code: '+591', country: 'Bolivia' },
    { code: '+592', country: 'Guyana' },
    { code: '+593', country: 'Ecuador' },
    { code: '+594', country: 'French Guiana' },
    { code: '+595', country: 'Paraguay' },
    { code: '+596', country: 'Martinique' },
    { code: '+597', country: 'Suriname' },
    { code: '+598', country: 'Uruguay' },
    { code: '+599', country: 'Netherlands Antilles' },
    { code: '+670', country: 'East Timor' },
    { code: '+672', country: 'Antarctica' },
    { code: '+673', country: 'Brunei' },
    { code: '+674', country: 'Nauru' },
    { code: '+675', country: 'Papua New Guinea' },
    { code: '+676', country: 'Tonga' },
    { code: '+677', country: 'Solomon Islands' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+679', country: 'Fiji' },
    { code: '+680', country: 'Palau' },
    { code: '+681', country: 'Wallis and Futuna' },
    { code: '+682', country: 'Cook Islands' },
    { code: '+683', country: 'Niue' },
    { code: '+684', country: 'American Samoa' },
    { code: '+685', country: 'Samoa' },
    { code: '+686', country: 'Kiribati' },
    { code: '+687', country: 'New Caledonia' },
    { code: '+688', country: 'Tuvalu' },
    { code: '+689', country: 'French Polynesia' },
    { code: '+690', country: 'Tokelau' },
    { code: '+691', country: 'Micronesia' },
    { code: '+692', country: 'Marshall Islands' },
    { code: '+850', country: 'North Korea' },
    { code: '+852', country: 'Hong Kong' },
    { code: '+853', country: 'Macau' },
    { code: '+855', country: 'Cambodia' },
    { code: '+856', country: 'Laos' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+886', country: 'Taiwan' },
    { code: '+960', country: 'Maldives' },
    { code: '+961', country: 'Lebanon' },
    { code: '+962', country: 'Jordan' },
    { code: '+963', country: 'Syria' },
    { code: '+964', country: 'Iraq' },
    { code: '+965', country: 'Kuwait' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+967', country: 'Yemen' },
    { code: '+968', country: 'Oman' },
    { code: '+970', country: 'Palestine' },
    { code: '+971', country: 'United Arab Emirates' },
    { code: '+972', country: 'Israel' },
    { code: '+973', country: 'Bahrain' },
    { code: '+974', country: 'Qatar' },
    { code: '+975', country: 'Bhutan' },
    { code: '+976', country: 'Mongolia' },
    { code: '+977', country: 'Nepal' },
    { code: '+992', country: 'Tajikistan' },
    { code: '+993', country: 'Turkmenistan' },
    { code: '+994', country: 'Azerbaijan' },
    { code: '+995', country: 'Georgia' },
    { code: '+996', country: 'Kyrgyzstan' },
    { code: '+998', country: 'Uzbekistan' }
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWebsite = (website) => {
    if (!website) return true; // Optional field
    const websiteRegex = /^(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    return websiteRegex.test(website);
  };
  
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newErrors = { ...errors };
    
    if (type === 'checkbox') {
      const checked = e.target.checked;
      if (name === 'sameAsWhatsApp') {
        setFormData(prev => ({
          ...prev,
          [name]: checked,
          phoneNumber: checked ? prev.whatsappNumber : '',
          phoneCountryCode: checked ? prev.whatsappCountryCode : '+91'
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      // Validation
      if (name === 'email' && value) {
        if (!validateEmail(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
      }
      
      if (name === 'businessWebsite' && value) {
        if (!validateWebsite(value)) {
          newErrors.businessWebsite = 'Please enter a valid website format (e.g., www.example.com)';
        } else {
          delete newErrors.businessWebsite;
        }
      }
    }
    
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final validation
    const newErrors = {};
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.businessWebsite && !validateWebsite(formData.businessWebsite)) {
      newErrors.businessWebsite = 'Please enter a valid website format (e.g., www.example.com)';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    try {
      const whatsappUrl = `https://wa.me/919220304943?text=Hey%20Team%20Chatsigma%20I%20want%20to%20automate%20my%20business%20via%20ChatSigma`;
      // Send data to Google Sheets
      const payload = {
        "Full Name": formData.fullName,
        "WhatsApp Number": `${formData.whatsappCountryCode} ${formData.whatsappNumber}`,
        "Phone Number": `${formData.phoneCountryCode} ${formData.phoneNumber}`,
        "Email Address": formData.email,
        "Business Name": formData.businessName,
        "Business Website": formData.businessWebsite,
        "Nature of Business": formData.businessNature,
        "Company Type": formData.companyType,
        "Business State": formData.businessState
        
      };

       try {
    const form = new FormData();
    Object.entries(payload).forEach(([key, value]) => form.append(key, value));

   

    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbwl9PQWx4Fzj2av0Ac3Jo8D8KKghpDNMyT_1O2sUj9dAaoOotZohDRYP-bomn5meoUOSA/exec',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );


    const result = await response.json();
    console.log("Success:", result);
       setShowPopup(true);
        // Reset form
        setFormData({
          fullName: '',
          whatsappNumber: '',
          phoneNumber: '',
          sameAsWhatsApp: false,
          email: '',
          businessName: '',
          businessWebsite: '',
          businessNature: '',
          companyType: '',
          businessState: '',
          consent: false,
          whatsappCountryCode: '+91',
          phoneCountryCode: '+91'
        });
  } catch (error) {
    console.error("Error posting to Google Sheets:", error);
  }

      // const response = await fetch('https://script.google.com/macros/s/AKfycbw7iUkm_c9U13mwDsDHe1hXRhWHGlBvDM2sAcw2EfWbUh6sMYvMrAhkFmUr0XPDxirG/exec', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });
      
      // if (response.ok) {
      //   setShowPopup(true);
      //   // Reset form
      //   setFormData({
      //     fullName: '',
      //     whatsappNumber: '',
      //     phoneNumber: '',
      //     sameAsWhatsApp: false,
      //     email: '',
      //     businessName: '',
      //     businessWebsite: '',
      //     businessNature: '',
      //     companyType: '',
      //     businessState: '',
      //     consent: false,
      //     whatsappCountryCode: '+91',
      //     phoneCountryCode: '+91'
      //   });
      // } else {
      //   alert('There was an error submitting the form. Please try again.');
      // }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      designation: "CEO",
      company: "TechSolve Solutions",
      testimonial: "ChatSigma helped us get verified in just 2 days! Our customers now trust us more and our sales increased by 300%.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Priya Sharma",
      designation: "Marketing Director",
      company: "Fashion Hub",
      testimonial: "The blue tick made such a difference! Customers respond faster and we look more professional than competitors.",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Amit Patel",
      designation: "Founder",
      company: "QuickDelivery",
      testimonial: "Best investment for our business! The verification process was smooth and their automation tools are amazing.",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Sneha Reddy",
      designation: "Operations Head",
      company: "HealthCare Plus",
      testimonial: "Our patients now trust our WhatsApp messages completely. The blue tick gives us instant credibility.",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Vikram Singh",
      designation: "Managing Director",
      company: "AutoParts Pro",
      testimonial: "ChatSigma's service is exceptional. Got verified quickly and their support team is available 24/7.",
      avatar: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Meera Joshi",
      designation: "Brand Manager",
      company: "Organic Foods Co",
      testimonial: "The verification process was smooth and quick. Our customers now trust us more and engagement has increased significantly!",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Arjun Gupta",
      designation: "Sales Head",
      company: "RealEstate Dynamics",
      testimonial: "Our conversion rate doubled after getting the blue tick. Clients immediately know we're legitimate.",
      avatar: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    },
    {
      name: "Kavya Nair",
      designation: "CEO",
      company: "EduTech Solutions",
      testimonial: "Professional service from start to finish. The blue tick verification transformed our business communication.",
      avatar: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
    }
  ];

  const faqs = [
    {
      question: "How long does the verification process take?",
      answer: "Once we submit your application to Meta, the verification typically takes 24-48 hours. Our team will keep you updated throughout the process."
    },
    {
      question: "What documents are needed for verification?",
      answer: "You'll need business registration documents, GST certificate (if applicable), and identity proof of the business owner. Our team will guide you through the exact requirements."
    },
    {
      question: "Is it really a one-time fee with no hidden charges?",
      answer: "Yes! ₹15,999 is the complete one-time fee for WhatsApp Business verification. No hidden charges, no recurring fees."
    },
    {
      question: "Do I need Facebook Business Manager?",
      answer: "Yes, you'll need a Facebook Business Manager account. Don't worry - our team will help you set it up if you don't have one already."
    },
    {
      question: "What if my application gets rejected?",
      answer: "We have a 95% success rate, but if your application gets rejected, we'll work with you to fix the issues and resubmit at no extra cost."
    },
    {
      question: "What happens after I get verified?",
      answer: "After verification, your WhatsApp Business account will display the blue tick badge, confirming your business is authentic and verified by Meta."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#25D366] text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-3 md:top-20 md:left-10 w-8 h-8 md:w-32 md:h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-10 right-5 md:top-40 md:right-20 w-6 h-6 md:w-24 md:h-24 bg-green-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-8 left-1/4 md:bottom-32 w-10 h-10 md:w-40 md:h-40 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-5 right-1/3 md:bottom-20 w-7 h-7 md:w-28 md:h-28 bg-green-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <FloatingIcons />
        
        <div className="relative container mx-auto px-4 py-6 md:px-6 md:py-12 lg:py-16">
          {/* Animated Badge */}
          <div className="text-center mb-4 md:mb-6">
            <PulsingBadge className="inline-block">
              <div className="flex items-center gap-2">
                <MetaLogo />
                <span>OFFICIAL META TECH PARTNER</span>
              </div>
            </PulsingBadge>
          </div>
          
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight animate-fade-in-up max-w-5xl mx-auto">
              <span className="block text-white mb-2 md:mb-3 font-bold">Get Your Business Officially</span>
              <span className="block text-white mb-2 md:mb-3 font-bold">Verified on WhatsApp</span>
              <span className="block text-yellow-300 font-semibold text-xl md:text-3xl lg:text-5xl animate-typing overflow-hidden whitespace-nowrap border-r-2 border-yellow-300">Build Instant Trust & 5X Your Sales!</span>
            </h1>
            <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 animate-fade-in-up px-2" style={{ animationDelay: '0.3s' }}>
              Only <span className="text-white font-bold animate-bounce">₹15,999</span> one-time payment
            </p>
            
            {/* Stats Counter */}
            <div className="flex justify-center gap-3 md:gap-6 mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-white font-bold text-lg md:text-2xl animate-pulse">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-xs text-white font-medium">Businesses Verified</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-lg md:text-2xl animate-pulse">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <div className="text-xs text-white font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-lg md:text-2xl animate-pulse">
                  <AnimatedCounter end={24} suffix=" hrs" />
                </div>
                <div className="text-xs text-white font-medium">Average Approval Time</div>
              </div>
            </div>
            
            <GlowingButton
              onClick={scrollToForm}
              className="animate-fade-in-up"
              style={{ animationDelay: '0.9s' }}
            >
              <Zap className="w-4 h-4 md:w-5 md:h-5" />
              Get Verified Now
            </GlowingButton>
          </div>
          
          {/* WhatsApp Chat Comparison */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '1.2s' }}>
            <div className="bg-white rounded-lg p-3 md:p-4 shadow-xl w-full max-w-xs transform hover:scale-105 transition-all duration-300">
              <h3 className="text-gray-800 font-semibold mb-2 md:mb-3 text-center text-xs md:text-sm">Without Blue Tick</h3>
              <div className="bg-gray-100 rounded-lg p-2 md:p-3 relative">
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full animate-pulse">
                  ❌ Suspicious
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-400 rounded-full mr-2"></div>
                  <div>
                    <div className="text-gray-800 font-medium text-xs md:text-sm">+91 98765 43210</div>
                    <div className="text-xs text-gray-500">Last seen today</div>
                  </div>
                </div>
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-bl-none mb-1 text-xs">
                  Hi! We have a special offer...
                </div>
                <div className="text-xs text-red-500 text-center font-medium">No trust</div>
              </div>
            </div>
            
            <div className="text-lg md:text-2xl text-blue-200 animate-bounce font-bold">VS</div>
            
            <div className="bg-white rounded-lg p-3 md:p-4 shadow-xl w-full max-w-xs transform hover:scale-105 transition-all duration-300">
              <h3 className="text-gray-800 font-semibold mb-2 md:mb-3 text-center text-xs md:text-sm">With Blue Tick ✅</h3>
              <div className="bg-gray-100 rounded-lg p-2 md:p-3 relative">
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full animate-pulse">
                  ✅ Verified
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-[#25D366] rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div>
                    <div className="text-gray-800 font-medium flex items-center text-xs md:text-sm">
                      Your Business Name
                      <div className="w-3 h-3 bg-blue-500 rounded-full ml-1 flex items-center justify-center">
                        <Check className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">Business</div>
                  </div>
                </div>
                <div className="bg-green-500 text-white p-2 rounded-lg rounded-bl-none mb-1 text-xs">
                  Hi! We have a special offer...
                </div>
                <div className="text-xs text-green-600 text-center font-medium">Instant trust</div>
              </div>
            </div>
          </div>
          
          {/* Urgency Quote */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 md:px-8 py-4 md:py-6 border-2 border-white/20 shadow-2xl">
              <p className="text-base md:text-xl lg:text-2xl font-bold text-white">
                "Don't let your competitors get verified first — beat them to it & win your customers' trust."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is WhatsApp Bluetick */}
      <section className="py-4 md:py-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-3 left-3 md:top-10 md:left-10 w-6 h-6 md:w-20 md:h-20 bg-green-200/30 rounded-full animate-float"></div>
          <div className="absolute bottom-3 right-3 md:bottom-10 md:right-10 w-8 h-8 md:w-32 md:h-32 bg-blue-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-block mb-2 md:mb-3">
              <CheckCircle className="w-6 h-6 md:w-10 md:h-10 text-blue-500 animate-bounce" />
            </div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 animate-fade-in-up">
              What Is WhatsApp Blue Tick Verification?
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
              The WhatsApp Blue Tick is a blue verified badge that appears next to your business name, 
              confirming to customers that your account is the authentic presence of your business on WhatsApp. 
              <span className="text-green-600 font-bold">It builds instant trust and credibility</span> with your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-4 md:py-8 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-3 -left-3 md:-top-10 md:-left-10 w-10 h-10 md:w-40 md:h-40 bg-[#25D366]/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-3 -right-3 md:-bottom-10 md:-right-10 w-15 h-15 md:w-60 md:h-60 bg-[#1877F2]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-3">
            <Crown className="w-6 h-6 md:w-12 md:h-12 text-blue-500 mx-auto animate-bounce" />
          </div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8 animate-fade-in-up">
            Why Your Business Needs WhatsApp Verification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { icon: Shield, title: "Build Instant Trust & Credibility", desc: "Customers immediately recognize your business as legitimate and trustworthy", color: "bg-[#25D366]" },
              { icon: Building, title: "Show Brand Name Instead of Number", desc: "Your business name appears instead of just a phone number", color: "bg-[#1877F2]" },
              { icon: Star, title: "Stand Out from Competitors", desc: "Be the verified business while competitors remain unverified", color: "bg-[#25D366]" },
              { icon: TrendingUp, title: "Higher Open & Reply Rates", desc: "Verified businesses see 40% higher engagement rates", color: "bg-[#1877F2]" },
              { icon: Award, title: "Protect Your Brand Identity", desc: "Prevent impersonators from using your business name", color: "bg-[#25D366]" },
              { icon: Target, title: "Boost Conversions and Sales", desc: "Trusted businesses convert 5X better than unverified ones", color: "bg-[#1877F2]" }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-3 md:p-4 rounded-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm border border-white/20 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 ${benefit.color} text-white rounded-full mb-2 md:mb-3 group-hover:animate-bounce shadow-lg`}>
                  <benefit.icon className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-green-600 transition-colors">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-700 group-hover:text-gray-800">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ChatSigma */}
      <section className="py-8 md:py-12 bg-[#25D366] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>
          <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-4">
            <Rocket className="w-8 h-8 md:w-12 md:h-12 mx-auto animate-bounce text-blue-200" />
          </div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 animate-fade-in-up">
            Why Choose ChatSigma?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Star, title: "Official Meta Tech Partner", desc: "Officially recognized by Meta as their official tech partner", color: "bg-blue-400" },
              { icon: Clock, title: "Fast Approval Process", desc: "Get verified within 24-48 hours with our streamlined process", color: "bg-green-400" },
              { icon: Check, title: "₹15,999 One-time Fee", desc: "No hidden charges, no recurring fees. Just one payment for lifetime verification", color: "bg-blue-400" },
              { icon: Users, title: "Expert Support Team", desc: "Dedicated support team to guide you through the entire verification process", color: "bg-green-400" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/30 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ${feature.color} text-white rounded-full mb-2 md:mb-3 group-hover:animate-spin shadow-lg`}>
                  <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-700 text-xs md:text-sm group-hover:text-gray-800">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Offer */}
      <section className="py-8 md:py-12 bg-[#25D366] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>
          <div className="absolute top-5 left-5 w-10 h-10 bg-white/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-5 right-5 w-16 h-16 bg-white/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center max-w-4xl mx-auto border border-white/20 shadow-2xl">
            <div className="mb-3 md:mb-4">
              <PulsingBadge className="text-sm md:text-base">
                🔥 LIMITED TIME LAUNCH OFFER 🔥
              </PulsingBadge>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              Get Your WhatsApp Blue Tick Verification for Only ₹15,999
            </h2>
            <p className="text-sm md:text-lg mb-4 md:mb-6 text-white font-medium opacity-90">
              One-time payment - No hidden charges, no recurring fees
            </p>
            <div className="text-sm md:text-base text-white font-medium mb-4 md:mb-6">
              ⏰ Only <span className="text-white font-bold text-lg md:text-xl">50 slots</span> available this month
            </div>
            <GlowingButton
              onClick={scrollToForm}
              variant="secondary"
              className="animate-pulse"
            >
              <Zap className="w-4 h-4 md:w-5 md:h-5" />
              Claim Your Spot Now
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-8 md:py-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-12 h-12 bg-green-200/30 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-4">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 mx-auto text-green-500 animate-spin" />
          </div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8 animate-fade-in-up">
            Simple 3-step Verification Process
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { step: "1", icon: Phone, title: "Fill Form & Connect", desc: "Fill out our form and our team will get in touch with you within 24 hours", color: "bg-[#25D366]" },
              { step: "2", icon: Building, title: "ChatSigma Submits to Meta", desc: "We handle all the paperwork and submit your verification request to Meta", color: "bg-[#1877F2]" },
              { step: "3", icon: Check, title: "Get Verified", desc: "Get verified within 24-48 hours and start building trust with your customers", color: "bg-[#25D366]" }
            ].map((step, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 ${step.color} text-white rounded-full text-xl md:text-2xl font-bold shadow-xl group-hover:animate-bounce`}>
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white border-2 md:border-3 border-green-500 rounded-full shadow-lg group-hover:animate-spin">
                    <step.icon className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{step.title}</h3>
                <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-800">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-6 md:py-12 bg-gray-50 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-3 left-3 md:top-10 md:left-10 w-8 h-8 md:w-32 md:h-32 bg-green-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-3 right-3 md:bottom-10 md:right-10 w-10 h-10 md:w-40 md:h-40 bg-blue-200/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mb-4 md:mb-6">
          <div className="text-center mb-3">
            <Star className="w-6 h-6 md:w-10 md:h-10 mx-auto text-blue-500 animate-spin" />
          </div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-2 md:mb-3 animate-fade-in-up">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Join <span className="text-green-600 font-bold">500+</span> businesses that trust ChatSigma
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-fast space-x-4 hover:pause">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-8 md:py-12 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-12 h-12 bg-green-200/30 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-300/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-blue-300/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#25D366] p-4 md:p-6 rounded-t-2xl text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/5"></div>
              <div className="relative">
                <div className="mb-2 md:mb-3">
                  <Zap className="w-8 h-8 md:w-12 md:h-12 mx-auto animate-bounce text-blue-200" />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-white animate-typing">Get Your Business Verified Now</h2>
                <p className="text-sm md:text-base opacity-90">Fill out the form below and our team will contact you within <span className="text-blue-200 font-bold">24 hours</span></p>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-b-2xl shadow-xl border-l-2 border-r-2 border-b-2 md:border-l-4 md:border-r-4 md:border-b-4 border-green-500 relative z-10">
              <form onSubmit={handleSubmit} className="relative z-20">
              <div className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white relative z-30 pointer-events-auto"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white relative z-30 pointer-events-auto`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                      WhatsApp Number *
                    </label>
                  <div className="flex gap-2">
                    <select
                      name="whatsappCountryCode"
                      value={formData.whatsappCountryCode}
                      onChange={handleInputChange}
                      className="p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white cursor-pointer relative z-30 pointer-events-auto"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code} ({country.country})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      required
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white relative z-30 pointer-events-auto"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="phoneCountryCode"
                      value={formData.phoneCountryCode}
                      onChange={handleInputChange}
                      disabled={formData.sameAsWhatsApp}
                      className={`p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white cursor-pointer relative z-30 pointer-events-auto ${formData.sameAsWhatsApp ? 'opacity-50' : ''}`}
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code} ({country.country})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      disabled={formData.sameAsWhatsApp}
                      className={`flex-1 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white relative z-30 pointer-events-auto ${formData.sameAsWhatsApp ? 'opacity-50' : ''}`}
                      placeholder="98765 43210"
                    />
                  </div>
                  <label className="flex items-center mt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="sameAsWhatsApp"
                      checked={formData.sameAsWhatsApp}
                      onChange={handleInputChange}
                      className="mr-2 w-4 h-4 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 cursor-pointer relative z-30 pointer-events-auto"
                    />
                    <span className="text-gray-700 text-sm">Same as WhatsApp number</span>
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessName" className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white relative z-30 pointer-events-auto"
                      placeholder="Your business name"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessWebsite" className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                      Business Website
                    </label>
                    <input
                      type="text"
                      id="businessWebsite"
                      name="businessWebsite"
                      value={formData.businessWebsite}
                      onChange={handleInputChange}
                      className={`w-full p-3 border-2 ${errors.businessWebsite ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white relative z-30 pointer-events-auto`}
                      placeholder="www.yourbusiness.com"
                    />
                    {errors.businessWebsite && <p className="text-red-500 text-xs mt-1">{errors.businessWebsite}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessNature" className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                      Nature of Business *
                    </label>
                    <select
                      id="businessNature"
                      name="businessNature"
                      required
                      value={formData.businessNature}
                      onChange={handleInputChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white cursor-pointer relative z-30 pointer-events-auto"
                    >
                      <option value="">Select business nature</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Food & Beverage">Food & Beverage</option>
                      <option value="Technology">Technology</option>
                      <option value="Finance">Finance</option>
                      <option value="Retail">Retail</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Services">Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="companyType" className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                      Company Type *
                    </label>
                    <select
                      id="companyType"
                      name="companyType"
                      required
                      value={formData.companyType}
                      onChange={handleInputChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white cursor-pointer relative z-30 pointer-events-auto"
                    >
                      <option value="">Select company type</option>
                      <option value="Private Limited">Private Limited</option>
                      <option value="Public Limited">Public Limited</option>
                      <option value="Partnership">Partnership</option>
                      <option value="LLP">LLP</option>
                      <option value="Sole Proprietorship">Sole Proprietorship</option>
                      <option value="OPC">OPC</option>
                      <option value="NGO">NGO</option>
                      <option value="Trust">Trust</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="businessState" className="block text-gray-800 font-bold mb-2 text-sm md:text-base">
                    Business State *
                  </label>
                  <input
                    type="text"
                    id="businessState"
                    name="businessState"
                    required
                    value={formData.businessState}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm md:text-base bg-white relative z-30 pointer-events-auto"
                    placeholder="e.g., Maharashtra, Delhi, Karnataka"
                  />
                </div>

                <div>
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                        className="mt-1 mr-2 w-4 h-4 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 cursor-pointer relative z-30 pointer-events-auto"
                    />
                    <span className="text-gray-800 text-xs md:text-sm font-medium">
                      I authorize ChatSigma Technologies OPC Private Limited to submit verification to Meta on my behalf *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                    className="w-full bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl relative z-30 pointer-events-auto cursor-pointer"
                >
                  <Zap className="w-5 h-5" />
                  Get My Blue Tick Now
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 relative animate-fade-in-up shadow-2xl">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Thank You!
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for filling up the form. Our Support Team will get in touch with you within <span className="font-bold text-green-600">24 hours</span>.
              </p>
              
              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQs */}
      <section className="py-8 md:py-12 bg-gray-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-full mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Get answers to the most common questions about WhatsApp Business verification
            </p>
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={`faq-${index}`} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-12 bg-[#25D366] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>
          <div className="absolute top-5 left-5 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-5 right-5 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-3 md:mb-4">
            <Rocket className="w-10 h-10 md:w-16 md:h-16 mx-auto animate-bounce text-blue-200" />
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 animate-pulse">
            Ready to Get Verified & Grow 5X Faster on WhatsApp?
          </h2>
          <p className="text-sm md:text-lg mb-4 md:mb-6 opacity-90">
            Join <span className="text-blue-200 font-bold">500+</span> businesses that chose ChatSigma for their WhatsApp verification
          </p>
          <GlowingButton
            onClick={scrollToForm}
            variant="secondary"
          >
            <Zap className="w-4 h-4 md:w-5 md:h-5" />
            Get Your Blue Tick Now
          </GlowingButton>
        </div>
      </section>

      {/* Sticky Button for Mobile */}
      <StickyButton text="Get Verified Now" onClick={scrollToForm} />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll-fast {
          animation: scroll-fast 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-typing {
          animation: typing 4s steps(40, end) 1s both, blink-caret 0.75s step-end infinite;
        }
        
        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #fde047;
          }
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default App;