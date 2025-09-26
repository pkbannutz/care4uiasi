'use client';

import React from 'react';
import Image from 'next/image';
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
    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-4xl mb-4 mx-auto shadow-lg">
      {iconMap[iconName] || '🏥'}
    </div>
  );
};

const ServiceImage: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const imageMap: { [key: string]: string } = {
    'medical-treatments': '/images/services/Care4u iasi  Perfuzii.png',
    'health-monitoring': '/images/services/Care4u iasi  Monitorizare parametri vitali.png',
    'diagnostics': '/images/services/Care4u iasi  Recoltare Analize.png',
    'wound-care': '/images/services/Care4u iasi  Îngrijirea Plăgilor.png',
    'post-op-care': '/images/services/care4u iasi Schimbare Pansamente.png',
    'rehabilitation': '/images/services/Care4u iasi Suport în Recuperare.png',
  };

  // Images that need zooming in (focus on nurse)
  const needsZoom = ['medical-treatments', 'health-monitoring', 'diagnostics', 'rehabilitation'];

  return (
    <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
      <Image
        src={imageMap[serviceId] || '/images/services/Care4u iasi  Perfuzii.png'}
        alt={`Service image for ${serviceId}`}
        width={400}
        height={300}
        className={`w-full h-full object-cover ${needsZoom.includes(serviceId) ? 'scale-150 object-center' : ''}`}
      />
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6 font-heading">
            Serviciile Mele
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ofer servicii medicale complete la domiciliu, adaptate nevoilor fiecărui pacient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openModal('service', service.id)}
            >
              <ServiceImage serviceId={service.id} />
              <ServiceIcon iconName={service.icon} />
              
              <h3 className="text-xl font-semibold text-text mb-4 text-center font-heading">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center mb-6 line-clamp-3">
                {service.description}
              </p>
              
              <div className="text-center">
                <span className="text-accent font-medium hover:text-accent/80 transition-colors">
                  Află mai multe →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4 font-heading">
              Ai nevoie de îngrijiri medicale la domiciliu?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactează-mă pentru a discuta despre nevoile tale și pentru a programa o vizită
            </p>
            <button
              onClick={() => openModal('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Contactează-mă Acum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
