'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { useModal } from '@/context/ModalContext';
import { HERO_CONTENT } from '@/lib/constants';

export const HeroSection: React.FC = () => {
  const { openModal } = useModal();
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show logo when at the top (within 100px), hide when scrolling down
      setShowLogo(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 bg-black/40" />
        {/* Medical pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-20 h-20 border-4 border-white rounded-full"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className={`mb-6 flex justify-center transition-all duration-500 ease-in-out ${
          showLogo ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
        }`}>
          <Image
            src="/images/icons/logo white.svg"
            alt="Care4U Logo"
            width={100}
            height={100}
            className="w-24 h-24"
            priority
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-4 leading-tight">
          {HERO_CONTENT.title}
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-gray-100 max-w-2xl mx-auto">
          {HERO_CONTENT.subtitle}
        </p>
        
        <Button
          variant="primary"
          size="lg"
          onClick={() => openModal('contact')}
          className="text-lg px-10 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          {HERO_CONTENT.ctaText}
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
