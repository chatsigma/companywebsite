import React from 'react';

interface TestimonialCardProps {
  name: string;
  designation: string;
  company: string;
  testimonial: string;
  avatar: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  designation,
  company,
  testimonial,
  avatar
}) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-xl min-w-[280px] max-w-[300px] mx-3 flex-shrink-0 border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
      <div className="flex items-center mb-4">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-green-400 group-hover:animate-pulse"
        />
        <div>
          <h4 className="font-bold text-gray-900 text-sm group-hover:text-green-600 transition-colors">{name}</h4>
          <p className="text-xs text-gray-600 font-medium">{designation}</p>
          <p className="text-xs font-bold text-blue-600 group-hover:text-blue-700">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic text-sm leading-relaxed group-hover:text-gray-800 line-clamp-3">"{testimonial}"</p>
      <div className="flex text-yellow-400 mt-3 group-hover:animate-pulse">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-sm">⭐</span>
        ))}
      </div>
    </div>
  );
};