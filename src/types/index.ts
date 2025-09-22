export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  customService?: string;
}

export interface ModalContextType {
  isOpen: boolean;
  modalType: 'contact' | 'service' | null;
  selectedService: string | null;
  openModal: (type: 'contact' | 'service', serviceId?: string) => void;
  closeModal: () => void;
}
