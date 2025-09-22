'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface LoadingScreenWrapperProps {
  children: React.ReactNode;
}

export default function LoadingScreenWrapper({ children }: LoadingScreenWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Check if we've already shown the loading screen in this session
    const hasShownLoading = sessionStorage.getItem('care4u-loading-shown');
    if (hasShownLoading) {
      setIsLoading(false);
      setHasLoaded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasLoaded(true);
    // Mark that we've shown the loading screen in this session
    sessionStorage.setItem('care4u-loading-shown', 'true');
  };

  return (
    <>
      {children}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
    </>
  );
}
