import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'E-commerce Plus',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'ChatSigma transformed our customer service. We reduced response time by 80% and increased sales by 45% within the first month.',
      rating: 5,
      metrics: '+45% Sales Growth'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'TechFlow Solutions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The automation features are incredible. We handle 10x more customer inquiries with the same team size. ROI was immediate.',
      rating: 5,
      metrics: '10x More Inquiries'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Operations Manager',
      company: 'HealthCare Connect',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Patient engagement improved dramatically. Appointment no-shows dropped by 60% thanks to automated reminders and follow-ups.',
      rating: 5,
      metrics: '-60% No-shows'
    },
    {
      name: 'David Park',
      role: 'Founder',
      company: 'StartupBoost',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'As a startup, we needed cost-effective customer support. ChatSigma helped us scale without increasing headcount.',
      rating: 5,
      metrics: 'Zero Headcount Growth'
    },
    {
      name: 'Lisa Wang',
      role: 'Sales Manager',
      company: 'GrowthTech',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Lead qualification became effortless. Our conversion rate improved by 35% with automated lead scoring and follow-ups.',
      rating: 5,
      metrics: '+35% Conversion'
    },
    {
      name: 'James Miller',
      role: 'CTO',
      company: 'InnovateNow',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Integration was seamless. The API documentation is excellent and our development team had everything running in hours.',
      rating: 5,
      metrics: '2 Hours Setup'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], displayIndex: i });
    }
    return visible;
  };

  return (
    <section className="section-mobile sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3 sm:px-4 md:px-0">
            Join thousands of businesses that have transformed their customer communication with ChatSigma.
          </p>
        </div>

        {/* Mobile: Single testimonial with navigation */}
        <div className="block sm:hidden mx-2">
          <div className="bg-white card-mobile shadow-md mb-4">
            <div className="flex items-center mb-3">
              <Quote className="h-4 w-4 text-[#25D366] mr-2" />
              <div className="flex items-center">
                {[...Array(Math.min(testimonials[currentIndex].rating, 3))].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-gray-800 leading-relaxed mb-4 text-sm">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-8 h-8 rounded-full object-cover mr-2"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-bold text-[#25D366] mb-0.5">
                  {testimonials[currentIndex].metrics}
                </div>
                <div className="text-xs text-gray-500">
                  Key Result
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet: 2 testimonials */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-[#25D366] mr-2 sm:mr-3" />
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-800 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xs sm:text-sm font-bold text-[#25D366] mb-0.5 sm:mb-1">
                    {testimonial.metrics}
                  </div>
                  <div className="text-xs text-gray-500">
                    Key Result
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: 3D animated testimonials */}
        <div className="hidden lg:block relative overflow-hidden overflow-mobile">
          <div className="flex animate-testimonial-3d space-x-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-500"
                style={{ perspective: '1000px' }}
              >
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-[#25D366] mr-4" />
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-800 leading-relaxed mb-6 text-sm">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonial.role}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#25D366] mb-1">
                      {testimonial.metrics}
                    </div>
                    <div className="text-xs text-gray-500">
                      Key Result
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
      </div>
    </section>
  );
};

export default Testimonials;