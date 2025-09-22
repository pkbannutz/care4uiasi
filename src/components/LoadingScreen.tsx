'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [logoTransition, setLogoTransition] = useState(false);
  const [logoFadeOut, setLogoFadeOut] = useState(false);

  useEffect(() => {
    // Show logo after component mounts
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 100);

    // Start logo transition to final position after 1.5 seconds
    const logoTransitionTimer = setTimeout(() => {
      setLogoTransition(true);
    }, 1500);

    // Start slide up animation after 2 seconds
    const slideTimer = setTimeout(() => {
      setSlideUp(true);
    }, 2000);

    // Start logo fade out when slide is almost complete
    const logoFadeTimer = setTimeout(() => {
      setLogoFadeOut(true);
    }, 2500);

    // Complete loading after slide animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(logoTransitionTimer);
      clearTimeout(slideTimer);
      clearTimeout(logoFadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-transform duration-1000 ease-out ${
        slideUp ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ backgroundColor: '#f5f4ee' }}
    >
      {/* Logo positioned exactly where it will be on the homepage */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
          showLogo ? 'opacity-100' : 'opacity-0'
        } ${
          logoFadeOut ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          // Position the logo exactly where it will appear on the homepage
          top: 'calc(50% - 180px)', // Match the exact position from reference
        }}
      >
        <Image
          src="/images/icons/logo.svg"
          alt="Care4U Logo"
          width={100}
          height={100}
          className="w-24 h-24"
          priority
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
