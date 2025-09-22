'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Show logo after component mounts
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 100);

    // Start slide up animation after 2 seconds
    const slideTimer = setTimeout(() => {
      setSlideUp(true);
    }, 2000);

    // Complete loading after slide animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(slideTimer);
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
      <div 
        className={`transition-opacity duration-1000 ease-out ${
          showLogo ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src="/images/icons/logo.svg"
          alt="Care4U Logo"
          width={180}
          height={180}
          className="w-45 h-45"
          priority
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
