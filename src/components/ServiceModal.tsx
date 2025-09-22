'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { useModal } from '@/context/ModalContext';
import { SERVICES } from '@/lib/constants';

const ServiceIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const iconMap: { [key: string]: string } = {
    'medical-treatments': '💉',
    'health-monitoring': '📊',
    'diagnostics': '🔬',
    'wound-care': '🩹',
    'post-op-care': '🏥',
    'rehabilitation': '🏃‍♀️',
  };

  return (
    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto">
      {iconMap[iconName] || '🏥'}
    </div>
  );
};

export const ServiceModal: React.FC = () => {
  const { isOpen, modalType, selectedService, closeModal } = useModal();

  if (modalType !== 'service' || !selectedService) return null;

  const service = SERVICES.find(s => s.id === selectedService);
  if (!service) return null;

  return (
    <Modal
      isOpen={isOpen && modalType === 'service'}
      onClose={closeModal}
      title={service.title}
      className="max-w-2xl"
    >
      <div className="text-center">
        <ServiceIcon iconName={service.icon} />
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-text mb-3 font-heading">
            Ce include acest serviciu:
          </h4>
          <ul className="text-left text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              Evaluare profesională a stării de sănătate
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              Aplicarea tehnicilor medicale moderne
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              Respectarea tuturor protocoalelor de siguranță
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              Monitorizarea continuă a progresului
            </li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Interesat de acest serviciu? Contactează-mă pentru mai multe detalii.
          </p>
          <button
            onClick={() => {
              closeModal();
              // Open contact modal after a short delay
              setTimeout(() => {
                const modalEvent = new CustomEvent('openContactModal');
                window.dispatchEvent(modalEvent);
              }, 300);
            }}
            className="btn-primary"
          >
            Contactează-mă
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
