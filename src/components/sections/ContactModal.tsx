'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '@/components/ui/Modal';
import { useModal } from '@/context/ModalContext';
import { CONTACT_INFO } from '@/lib/constants';
import { validateEmail, validatePhone } from '@/lib/utils';
import { ContactFormData } from '@/types';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactModal: React.FC = () => {
  const { isOpen, modalType, closeModal, openModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleOpenContactModal = () => {
      openModal('contact');
    };

    window.addEventListener('openContactModal', handleOpenContactModal);
    return () => window.removeEventListener('openContactModal', handleOpenContactModal);
  }, [openModal]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      
      setSubmitStatus('success');
      reset();
      
      // Close modal after success
      setTimeout(() => {
        closeModal();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (modalType !== 'contact') return null;

  return (
    <Modal
      isOpen={isOpen && modalType === 'contact'}
      onClose={closeModal}
      title="Programează o vizită"
      className="max-w-2xl"
    >
      <div className="space-y-6">
        {/* Direct Contact Info */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-text mb-4 font-heading">
            Contact Direct
          </h3>
          <div className="space-y-3">
            <a
              href={CONTACT_INFO.phoneLink}
              className="flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              <Phone size={20} className="mr-3" />
              <span className="font-medium">{CONTACT_INFO.phone}</span>
            </a>
            <a
              href={CONTACT_INFO.emailLink}
              className="flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              <Mail size={20} className="mr-3" />
              <span className="font-medium">{CONTACT_INFO.email}</span>
            </a>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-3" />
              <span>Iași, România</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-text mb-4 font-heading">
            Trimite un mesaj
          </h3>
          
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 text-center">
                Mesajul a fost trimis cu succes! Te voi contacta în curând.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-800 text-center">
                A apărut o eroare. Te rog să încerci din nou sau să mă contactezi direct.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nume complet *
              </label>
              <input
                {...register('name', { required: 'Numele este obligatoriu' })}
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                placeholder="Introdu numele tău complet"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                {...register('email', {
                  required: 'Email-ul este obligatoriu',
                  validate: (value) => validateEmail(value) || 'Email-ul nu este valid'
                })}
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                placeholder="introdu@email.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon *
              </label>
              <input
                {...register('phone', {
                  required: 'Telefonul este obligatoriu',
                  validate: (value) => validatePhone(value) || 'Numărul de telefon nu este valid'
                })}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                placeholder="+40 721 000 000"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesaj
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                placeholder="Descrie nevoile tale medicale sau întrebările pe care le ai..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
