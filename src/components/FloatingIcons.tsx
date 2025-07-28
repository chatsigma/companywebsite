import React from 'react';
import { Check, MessageCircle, Shield, Star, TrendingUp, Zap, Award, Crown, Sparkles } from 'lucide-react';

export const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: Check, delay: '0s', position: 'top-16 left-8 md:top-20 md:left-10' },
    { Icon: MessageCircle, delay: '1s', position: 'top-24 right-12 md:top-32 md:right-20' },
    { Icon: Shield, delay: '2s', position: 'top-48 left-1/4 md:top-64' },
    { Icon: Star, delay: '0.5s', position: 'top-64 right-1/3 md:top-80' },
    { Icon: TrendingUp, delay: '1.5s', position: 'top-80 left-1/2 md:top-96' },
    { Icon: Zap, delay: '2.5s', position: 'top-32 right-8 md:top-40 md:right-10' },
    { Icon: Award, delay: '3s', position: 'top-56 left-12 md:top-72 md:left-16' },
    { Icon: Crown, delay: '1.8s', position: 'top-40 left-1/3 md:top-52' },
    { Icon: Sparkles, delay: '2.2s', position: 'top-72 right-16 md:top-88 md:right-24' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float opacity-20`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-4 h-4 md:w-6 lg:w-8 text-white opacity-30" />
        </div>
      ))}
    </div>
  );
};