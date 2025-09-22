'use client';

import React from 'react';
import { ABOUT_TEXT } from '@/lib/constants';

export const AboutSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-8 font-heading">
            Despre Mine
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-sm">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-body">
              {ABOUT_TEXT}
            </p>
          </div>
          
          {/* Professional Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2 font-heading">
                Profesionalism
              </h3>
              <p className="text-gray-600">
                Servicii medicale de calitate superioară
              </p>
            </div>
            
            <div className="text-center p-6 bg-accent/5 rounded-xl">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2 font-heading">
                Empatie
              </h3>
              <p className="text-gray-600">
                Înțelegere și compasiune pentru pacienți
              </p>
            </div>
            
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-text mb-2 font-heading">
                Confidențialitate
              </h3>
              <p className="text-gray-600">
                Respectarea strictă a intimității
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
