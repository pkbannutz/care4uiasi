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
      
      {/* Top Logo */}
      <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ease-in-out ${
        showLogo ? 'opacity-100 transform -translate-x-1/2 translate-y-0' : 'opacity-0 transform -translate-x-1/2 -translate-y-4'
      }`}>
        <Image
          src="/images/icons/logo white.svg"
          alt="Care4U Logo"
          width={160}
          height={160}
          className="w-40 h-40"
          priority
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-full max-w-lg lg:max-w-xl">
              <Image
                src="/images/services/Care4u iasi  Schimbare Pansamente header.png"
                alt="Care4U Medical Services"
                width={600}
                height={450}
                className="w-full h-auto rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white flex flex-col justify-start lg:justify-center min-h-[450px]">
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading mb-6 leading-tight">
                {HERO_CONTENT.title}
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-100">
                {HERO_CONTENT.subtitle}
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openModal('contact')}
                  className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {HERO_CONTENT.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
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
