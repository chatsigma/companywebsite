import React from 'react';
import { Bot, Brain, Zap, MessageSquare, Settings, CheckCircle, ArrowRight, Users, Clock, Target } from 'lucide-react';

const AIChatbot = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced NLP understands customer intent and provides accurate responses'
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'Respond to customer queries in milliseconds, 24/7 without human intervention'
    },
    {
      icon: Settings,
      title: 'Easy Setup',
      description: 'Drag-and-drop chatbot builder with pre-built templates for quick deployment'
    },
    {
      icon: Users,
      title: 'Human Handoff',
      description: 'Seamlessly transfer complex queries to human agents when needed'
    }
  ];

  const features = [
    'Natural language processing',
    'Multi-language support',
    'Intent recognition',
    'Context awareness',
    'Custom workflows',
    'Lead qualification',
    'Appointment booking',
    'FAQ automation'
  ];

  const automationExamples = [
    {
      title: 'Lead Qualification',
      description: 'Automatically qualify leads by asking the right questions and scoring responses',
      flow: ['Greet visitor', 'Ask qualifying questions', 'Score responses', 'Route to sales team']
    },
    {
      title: 'Customer Support',
      description: 'Handle common support queries and escalate complex issues to human agents',
      flow: ['Identify issue type', 'Provide instant solutions', 'Collect feedback', 'Escalate if needed']
    },
    {
      title: 'Order Processing',
      description: 'Guide customers through the ordering process and collect payment information',
      flow: ['Show product catalog', 'Add to cart', 'Collect details', 'Process payment']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Bot className="h-4 w-4 mr-2" />
                AI-Powered Chatbot
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Build Intelligent WhatsApp Chatbots
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Create AI-powered chatbots that understand customer intent, automate responses, 
                and qualify leads 24/7. No coding required.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://app.chatsigma.com/vb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Building
                </a>
                <a
                  href="https://app.chatsigma.com/vb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
                >
                  See Demo
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Bot className="h-5 w-5 mr-2" />
                      <span className="font-semibold">AI Assistant</span>
                    </div>
                    <p className="text-sm opacity-90">Hi! How can I help you today?</p>
                  </div>
                  
                  <div className="bg-white/15 rounded-lg p-4 ml-8">
                    <p className="text-sm">I need help with my order</p>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Bot className="h-5 w-5 mr-2" />
                      <span className="font-semibold">AI Assistant</span>
                    </div>
                    <p className="text-sm opacity-90">I'd be happy to help! Can you provide your order number?</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI-Powered Chatbots?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate customer interactions with intelligent chatbots that understand context and provide personalized responses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#006AFF] rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Chatbot Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to create intelligent conversational experiences
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

      {/* Automation Examples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Automation Examples
            </h2>
            <p className="text-xl text-gray-600">
              See how AI chatbots can automate your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {automationExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{example.title}</h3>
                <p className="text-gray-600 mb-6">{example.description}</p>
                
                <div className="space-y-3">
                  {example.flow.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center">
                      <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                      </div>
                      <span className="text-sm text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#25D366] to-[#006AFF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start automating customer conversations with intelligent AI chatbots today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://app.chatsigma.com/vb/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://app.chatsigma.com/vb/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatbot;