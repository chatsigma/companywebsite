import React from 'react';
import { Users, MessageSquare, Shield, Settings, Clock, CheckCircle, ArrowRight, UserPlus, Bell, Activity } from 'lucide-react';

const TeamCollaboration = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Multi-Agent Support',
      description: 'Multiple team members can handle conversations simultaneously with smart routing'
    },
    {
      icon: MessageSquare,
      title: 'Unified Inbox',
      description: 'All WhatsApp conversations in one place with real-time collaboration features'
    },
    {
      icon: Shield,
      title: 'Role-Based Access',
      description: 'Control what each team member can see and do with granular permissions'
    },
    {
      icon: Activity,
      title: 'Performance Tracking',
      description: 'Monitor team performance with detailed analytics and reporting'
    }
  ];

  const features = [
    'Shared team inbox',
    'Agent assignment rules',
    'Internal team notes',
    'Conversation handoffs',
    'Team performance metrics',
    'Role-based permissions',
    'Real-time notifications',
    'Workload distribution'
  ];

  const collaborationFeatures = [
    {
      title: 'Smart Routing',
      description: 'Automatically assign conversations to the right team members based on skills and availability',
      icon: Settings,
      capabilities: ['Skill-based routing', 'Round-robin assignment', 'Workload balancing', 'Priority queuing']
    },
    {
      title: 'Team Inbox',
      description: 'Centralized inbox where all team members can collaborate on customer conversations',
      icon: MessageSquare,
      capabilities: ['Shared conversations', 'Internal notes', 'Conversation tags', 'Status tracking']
    },
    {
      title: 'Performance Management',
      description: 'Track and improve team performance with detailed analytics and insights',
      icon: Activity,
      capabilities: ['Response time tracking', 'Resolution metrics', 'Customer satisfaction', 'Agent scorecards']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#25D366] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                <Users className="h-4 w-4 mr-2" />
                Team Collaboration
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Empower Your Team with Collaborative WhatsApp Management
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Enable seamless teamwork with shared inboxes, smart routing, and real-time collaboration. 
                Scale your customer support without losing the personal touch.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://app.chatsigma.com/vb/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Add Team Members
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
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-4">Team Dashboard</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-300">8</div>
                      <div className="text-sm opacity-80">Active Agents</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-300">45</div>
                      <div className="text-sm opacity-80">Open Chats</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-300">2.3s</div>
                      <div className="text-sm opacity-80">Avg Response</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-300">95%</div>
                      <div className="text-sm opacity-80">Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-semibold">Sarah (Online)</span>
                      </div>
                      <span className="text-sm">5 chats</span>
                    </div>
                    
                    <div className="bg-white/20 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-semibold">Mike (Online)</span>
                      </div>
                      <span className="text-sm">3 chats</span>
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
              Why Team Collaboration Matters?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Scale your customer support efficiently while maintaining quality and consistency across all interactions.
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

      {/* Features List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Team Collaboration Features
            </h2>
            <p className="text-xl text-gray-700">
              Everything your team needs to work together effectively
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

      {/* Collaboration Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Advanced Collaboration Tools
            </h2>
            <p className="text-xl text-gray-700">
              Powerful features designed to enhance team productivity and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collaborationFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                </div>

                <p className="text-gray-700 mb-6">{feature.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-black mb-3">Key Capabilities:</h4>
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[#25D366] rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#25D366] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Scale Your Team?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Start collaborating more effectively with your team on WhatsApp conversations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-white text-[#25D366] rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
            >
              Add Team Members
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://app.chatsigma.com/vb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#25D366] transition-all"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamCollaboration;