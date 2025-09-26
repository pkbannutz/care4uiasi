'use client';

import React, { useEffect, useRef, useState } from 'react';
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

  // Custom positioning for each service image
  const getImageClasses = (serviceId: string) => {
    switch (serviceId) {
      case 'medical-treatments': // Perfuzie - move higher and zoom out 10%
        return 'w-full h-full object-cover scale-135 object-top';
      case 'health-monitoring': // Monitorizare - move right and zoom out 10%
        return 'w-full h-full object-cover scale-135 object-right';
      case 'diagnostics': // Recoltare - zoom in 5%
        return 'w-full h-full object-cover scale-155 object-center';
      case 'rehabilitation': // Suport - zoom out 10%
        return 'w-full h-full object-cover scale-135 object-bottom-right';
      default:
        return 'w-full h-full object-cover';
    }
  };

  return (
    <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
      <Image
        src={imageMap[serviceId] || '/images/services/Care4u iasi  Perfuzii.png'}
        alt={`Service image for ${serviceId}`}
        width={400}
        height={300}
        className={getImageClasses(serviceId)}
      />
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const { openModal } = useModal();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards(prev => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              onClick={() => openModal('service', service.id)}
            >
              <h3 className="text-xl font-semibold text-text mb-4 text-center font-heading">
                {service.title}
              </h3>
              
              <ServiceImage serviceId={service.id} />
              
              <p className="text-gray-600 text-center mb-6 line-clamp-3">
                {service.description}
              </p>
              
              <ServiceIcon iconName={service.icon} />
              
              <div className="text-center mt-4">
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
