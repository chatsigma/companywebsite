import React from 'react';
import { Zap, Settings, Workflow, Bot, Clock, CheckCircle, ArrowRight, Target, Layers, Briefcase } from 'lucide-react';

const BusinessAutomation = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Complete Process Automation',
      description: 'Share your business process with us, and we\'ll automate it entirely within WhatsApp'
    },
    {
      icon: Settings,
      title: 'Custom Workflow Builder',
      description: 'Create complex automation workflows tailored to your specific business needs'
    },
    {
      icon: Clock,
      title: 'Save Time & Resources',
      description: 'Reduce manual work by up to 90% with intelligent automation solutions'
    },
    {
      icon: Target,
      title: 'Increase Efficiency',
      description: 'Streamline operations and improve productivity across all business functions'
    }
  ];

  const automationTypes = [
    {
      title: 'Lead Generation & Qualification',
      description: 'Automatically capture, qualify, and nurture leads through intelligent conversations',
      icon: Target,
      processes: ['Lead capture forms', 'Qualification scoring', 'Follow-up sequences', 'CRM integration']
    },
    {
      title: 'Customer Support Automation',
      description: 'Handle customer inquiries, troubleshooting, and support tickets automatically',
      icon: Bot,
      processes: ['Ticket creation', 'Issue categorization', 'Solution suggestions', 'Escalation rules']
    },
    {
      title: 'Sales Process Automation',
      description: 'Automate your entire sales funnel from prospect to customer',
      icon: Briefcase,
      processes: ['Product demos', 'Quote generation', 'Order processing', 'Payment collection']
    },
    {
      title: 'Workflow Management',
      description: 'Create custom workflows for any business process you can imagine',
      icon: Workflow,
      processes: ['Approval workflows', 'Task assignments', 'Status updates', 'Notifications']
    }
  ];

  const features = [
    'Visual workflow builder',
    'Conditional logic & branching',
    'Multi-step automation',
    'Integration with 60+ tools',
    'Custom API connections',
    'Real-time monitoring',
    'Performance analytics',
    'Error handling & recovery'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Complete Business Automation
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Automate Any Business Process with WhatsApp
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Share your business process with us, and we'll automate it within WhatsApp. 
                From lead generation to customer support - we've got you covered!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://app.chatsigma.com/vb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Automating
                </a>
                <a 
                  href="https://app.chatsigma.com/vb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
                >
                  Share Your Process
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-4">Automation Dashboard</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-300">15</div>
                      <div className="text-sm opacity-80">Active Workflows</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-300">90%</div>
                      <div className="text-sm opacity-80">Time Saved</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-300">500+</div>
                      <div className="text-sm opacity-80">Tasks Automated</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-300">24/7</div>
                      <div className="text-sm opacity-80">Running</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                      <span className="font-semibold">Lead Qualification</span>
                      <span className="text-green-300">✓ Active</span>
                    </div>
                    
                    <div className="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                      <span className="font-semibold">Order Processing</span>
                      <span className="text-green-300">✓ Active</span>
                    </div>
                    
                    <div className="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                      <span className="font-semibold">Support Tickets</span>
                      <span className="text-green-300">✓ Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Why Automate Your Business Processes?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that works 24/7 to grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{benefit.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              What Can We Automate?
            </h2>
            <p className="text-xl text-gray-700">
              From simple tasks to complex business processes - we can automate anything
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((automation, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                    <automation.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{automation.title}</h3>
                </div>

                <p className="text-gray-700 mb-6">{automation.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-black mb-3">Example Processes:</h4>
                  {automation.processes.map((process, processIndex) => (
                    <div key={processIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#25D366] rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{process}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-700">
              Advanced tools to create and manage complex business automations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#25D366] mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-700">
              Simple 3-step process to automate any business workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Share Your Process</h3>
              <p className="text-gray-700">Tell us about your current business process and what you want to automate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">We Build It</h3>
              <p className="text-gray-700">Our experts create a custom automation workflow tailored to your needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">You Save Time</h3>
              <p className="text-gray-700">Watch your business run automatically while you focus on growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Share your business process with us and we'll automate it within WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              Start Automating
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
            >
              Share Your Process
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAutomation;