# Care4U Ingrijiri la domiciliu Iași Architecture Document

## Change Log
| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2024-12-19 | v1.0 | Initial architecture document creation | BMad Master |

## Frontend Tech Stack

### Technology Stack Table
| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| Framework | Next.js | 14+ | React framework with SSR/SSG | Industry standard for React apps, excellent performance, built-in optimization |
| UI Library | React | 18+ | Component library | Mature, well-supported, excellent TypeScript integration |
| State Management | React Context + useState | N/A | Client-side state | Simple state needs, no complex state management required |
| Routing | Next.js App Router | 14+ | Client-side routing | Built-in routing with Next.js, supports dynamic routes |
| Build Tool | Next.js (Turbopack) | 14+ | Bundling and compilation | Fast builds, optimized for development and production |
| Styling | Tailwind CSS | 3+ | Utility-first CSS | Rapid development, consistent design system, mobile-first |
| Testing | Jest + React Testing Library | Latest | Unit and integration testing | Industry standard for React testing |
| Component Library | Custom Components | N/A | Reusable UI components | Tailored to specific design requirements |
| Form Handling | React Hook Form | Latest | Form state management | Lightweight, performant form handling |
| Animation | Framer Motion | Latest | Smooth animations | Professional animations for modals and interactions |
| Dev Tools | ESLint + Prettier | Latest | Code quality and formatting | Consistent code style and error prevention |

## Project Structure

```
care4u/
├── .next/                          # Next.js build output
├── .vercel/                        # Vercel deployment config
├── public/                         # Static assets
│   ├── images/                     # Image assets
│   │   ├── hero-medical.jpg        # Hero section image
│   │   └── icons/                  # Service icons
│   │       ├── medical-treatments.svg
│   │       ├── health-monitoring.svg
│   │       ├── diagnostics.svg
│   │       ├── wound-care.svg
│   │       ├── post-op-care.svg
│   │       └── rehabilitation.svg
│   └── favicon.ico                 # Site favicon
├── src/                           # Source code
│   ├── app/                       # Next.js App Router
│   │   ├── globals.css            # Global styles and Tailwind imports
│   │   ├── layout.tsx             # Root layout component
│   │   └── page.tsx               # Home page component
│   ├── components/                # Reusable components
│   │   ├── ui/                    # Base UI components
│   │   │   ├── Button.tsx         # Reusable button component
│   │   │   ├── Modal.tsx          # Modal component
│   │   │   └── Icon.tsx           # Icon component
│   │   ├── sections/              # Page sections
│   │   │   ├── HeroSection.tsx    # Hero section component
│   │   │   ├── AboutSection.tsx   # About section component
│   │   │   ├── ServicesSection.tsx # Services grid component
│   │   │   └── ContactModal.tsx   # Contact modal component
│   │   └── ServiceModal.tsx       # Service detail modal
│   ├── lib/                       # Utility functions
│   │   ├── utils.ts               # General utilities
│   │   └── constants.ts           # App constants
│   └── types/                     # TypeScript type definitions
│       └── index.ts               # Type definitions
├── docs/                          # Documentation
│   ├── prd.md                     # Product Requirements Document
│   └── architecture.md            # This file
├── .gitignore                     # Git ignore rules
├── .eslintrc.json                 # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## Component Standards

### Component Template

```typescript
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
  // Add other props as needed
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'base-styles-here',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ComponentName;
```

### Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection`, `ContactModal`)
- **Files**: PascalCase for components (e.g., `HeroSection.tsx`)
- **Functions**: camelCase (e.g., `handleModalOpen`, `formatPhoneNumber`)
- **Variables**: camelCase (e.g., `isModalOpen`, `serviceData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `SERVICE_TYPES`, `CONTACT_INFO`)
- **Types/Interfaces**: PascalCase with descriptive names (e.g., `ServiceType`, `ContactFormData`)
- **CSS Classes**: kebab-case (e.g., `hero-section`, `contact-modal`)

## State Management

### Store Structure

```
src/
├── context/                       # React Context providers
│   ├── ModalContext.tsx           # Modal state management
│   └── index.ts                   # Context exports
└── hooks/                         # Custom React hooks
    ├── useModal.ts                # Modal state hook
    └── useContactForm.ts          # Contact form hook
```

### State Management Template

```typescript
// ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  modalType: 'contact' | 'service' | null;
  selectedService: string | null;
  openModal: (type: 'contact' | 'service', serviceId?: string) => void;
  closeModal: () => void;
}

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
```

## API Integration

### Service Template

```typescript
// lib/api.ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || '';
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return {
        data,
        success: true
      };
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'API request failed');
      }

      return {
        data: result,
        success: true
      };
    } catch (error) {
      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export const apiService = new ApiService();
```

### API Client Configuration

```typescript
// lib/api-client.ts
import { apiService } from './api';

// Contact form submission
export const submitContactForm = async (formData: ContactFormData) => {
  return apiService.post('/contact', formData);
};

// Service data fetching
export const getServices = async () => {
  return apiService.get<ServiceType[]>('/services');
};
```

## Routing

### Route Configuration

```typescript
// app/layout.tsx
import { ModalProvider } from '@/context/ModalContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}

// app/page.tsx - Single page application
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
```

## Styling Guidelines

### Styling Approach

The project uses **Tailwind CSS** with a utility-first approach, combined with custom CSS variables for consistent theming. This approach provides:

- Rapid development with pre-built utility classes
- Consistent design system through custom color palette
- Mobile-first responsive design
- Easy maintenance and customization

### Global Theme Variables

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Color Palette */
  --color-primary: #5A92B8;      /* Soft Blue - Trust */
  --color-accent: #609966;        /* Muted Green - Action */
  --color-text: #333333;          /* Charcoal - Text */
  --color-background: #F8F9FA;    /* Off-White - Background */
  
  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  /* Border Radius */
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
}

/* Custom component styles */
@layer components {
  .btn-primary {
    @apply bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200;
  }
  
  .btn-secondary {
    @apply bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200;
  }
  
  .section-padding {
    @apply px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20;
  }
  
  .container-max-width {
    @apply max-w-7xl mx-auto;
  }
}
```

## Testing Requirements

### Component Test Template

```typescript
// __tests__/components/HeroSection.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ModalProvider } from '@/context/ModalContext';
import HeroSection from '@/components/sections/HeroSection';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <ModalProvider>
      {component}
    </ModalProvider>
  );
};

describe('HeroSection', () => {
  it('renders the main headline', () => {
    renderWithProvider(<HeroSection />);
    expect(screen.getByText('Îngrijiri Medicale Profesionale la Domiciliu în Iași')).toBeInTheDocument();
  });

  it('renders the contact button', () => {
    renderWithProvider(<HeroSection />);
    expect(screen.getByText('Contactează-mă')).toBeInTheDocument();
  });

  it('opens contact modal when contact button is clicked', () => {
    renderWithProvider(<HeroSection />);
    const contactButton = screen.getByText('Contactează-mă');
    fireEvent.click(contactButton);
    
    expect(screen.getByText('Programează o vizită')).toBeInTheDocument();
  });
});
```

### Testing Best Practices

1. **Unit Tests**: Test individual components in isolation
2. **Integration Tests**: Test component interactions and context usage
3. **E2E Tests**: Test critical user flows (using Playwright)
4. **Coverage Goals**: Aim for 80% code coverage
5. **Test Structure**: Arrange-Act-Assert pattern
6. **Mock External Dependencies**: API calls, routing, state management
7. **Accessibility Testing**: Test keyboard navigation and screen reader compatibility
8. **Visual Regression Testing**: Test component appearance across different screen sizes

## Environment Configuration

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://care4u.vercel.app
NEXT_PUBLIC_CONTACT_PHONE=+40721056514
NEXT_PUBLIC_CONTACT_EMAIL=lacry_petro@yahoo.com

# .env.example
NEXT_PUBLIC_SITE_URL=your_site_url
NEXT_PUBLIC_CONTACT_PHONE=your_phone_number
NEXT_PUBLIC_CONTACT_EMAIL=your_email_address
```

## Frontend Developer Standards

### Critical Coding Rules

1. **TypeScript First**: All components must be fully typed with proper interfaces
2. **Component Composition**: Prefer composition over inheritance, use children props
3. **Accessibility**: All interactive elements must be keyboard accessible and screen reader friendly
4. **Mobile First**: Always design and code for mobile devices first, then scale up
5. **Performance**: Use React.memo for expensive components, avoid unnecessary re-renders
6. **Error Boundaries**: Wrap components in error boundaries to prevent crashes
7. **SEO**: Use semantic HTML elements and proper meta tags
8. **Consistent Styling**: Use Tailwind utility classes consistently, avoid custom CSS unless necessary
9. **Clean Code**: Write self-documenting code with clear variable and function names
10. **Testing**: Write tests for all components and user interactions

### Quick Reference

#### Common Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

#### Key Import Patterns
```typescript
// Component imports
import { ComponentName } from '@/components/ComponentName';

// Context imports
import { useModal } from '@/context/ModalContext';

// Utility imports
import { cn } from '@/lib/utils';

// Type imports
import type { ServiceType } from '@/types';
```

#### File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Hooks: `useCamelCase.ts` (e.g., `useModal.ts`)
- Utils: `camelCase.ts` (e.g., `formatPhone.ts`)
- Types: `camelCase.ts` (e.g., `serviceTypes.ts`)

#### Project-Specific Patterns
- All modals use the same base Modal component
- Service data is stored in constants file
- Contact information is centralized in environment variables
- All Romanian text is stored in a constants file for easy translation
