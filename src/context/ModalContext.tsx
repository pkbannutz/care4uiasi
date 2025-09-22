'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ModalContextType } from '@/types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<'contact' | 'service' | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openModal = (type: 'contact' | 'service', serviceId?: string) => {
    setModalType(type);
    setSelectedService(serviceId || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
    setSelectedService(null);
  };

  return (
    <ModalContext.Provider value={{
      isOpen,
      modalType,
      selectedService,
      openModal,
      closeModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
