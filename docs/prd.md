# Care4U Ingrijiri la domiciliu Iași Product Requirements Document (PRD)

## Goals and Background Context

### Goals
- Create a professional, trustworthy single-page website for home healthcare services in Iași
- Establish mobile-first responsive design that works seamlessly across all devices
- Provide clear service information through interactive modal popups
- Enable easy contact and appointment scheduling through direct phone/email links and contact form
- Build a scalable foundation using Next.js that can grow with future business needs
- Deploy to production with custom domain (care4u.vercel.app) and GitHub integration

### Background Context
Care4U is a home healthcare service provider in Iași, Romania, offering professional medical care services directly to patients in their homes. The service is provided by a licensed medical assistant with extensive experience, focusing on confidentiality, empathy, professionalism, and respect to ensure patients feel safe and comfortable at home.

The current need is for a professional web presence that builds trust and credibility while making it easy for potential patients and their families to understand available services and initiate contact. The website must convey medical professionalism while remaining approachable and accessible to users of all ages and technical abilities.

### Change Log
| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2024-12-19 | v1.0 | Initial PRD creation | BMad Master |

## Requirements

### Functional
- FR1: Display a professional hero section with main headline "Îngrijiri Medicale Profesionale la Domiciliu în Iași" and prominent "Contactează-mă" CTA button
- FR2: Show an "About Me" section with professional introduction text about the medical assistant's qualifications and approach
- FR3: Present a "Serviciile Mele" (My Services) section with a symmetrical grid of 6 service icons
- FR4: Implement modal popups that display detailed service information when users click/tap service icons
- FR5: Provide a contact modal triggered by "Contactează-mă" buttons with direct phone (+40 721 056 514) and email (lacry_petro@yahoo.com) links
- FR6: Include a contact form within the modal with fields for Name, Phone/Email, and Message
- FR7: Ensure all content is displayed in Romanian language
- FR8: Make all phone numbers clickable (tel: links) and email addresses clickable (mailto: links)
- FR9: Implement smooth scrolling navigation within the single-page layout
- FR10: Display professional medical imagery in the hero section

### Non Functional
- NFR1: Website must be fully responsive with mobile-first design approach
- NFR2: Page load time must be under 3 seconds on 3G networks
- NFR3: Website must achieve 90+ Lighthouse performance score
- NFR4: All interactive elements must be accessible via keyboard navigation
- NFR5: Modal popups must be dismissible via escape key and clicking outside
- NFR6: Website must work on all modern browsers (Chrome, Firefox, Safari, Edge)
- NFR7: Color scheme must use specified palette: Primary Blue (#5A92B8), Accent Green (#609966), Text Charcoal (#333333), Background Off-White (#F8F9FA)
- NFR8: Typography must use Poppins/Lato for headings and Open Sans/Roboto for body text
- NFR9: Website must be deployed to Vercel with custom domain care4u.vercel.app
- NFR10: Code must be version controlled in GitHub repository named "care4u"

## User Interface Design Goals

### Overall UX Vision
The website will embody medical professionalism through clean, spacious design with generous white space and symmetrical layouts. The single-page structure provides a seamless, uninterrupted user experience that builds trust and confidence in the healthcare services offered.

### Key Interaction Paradigms
- Single-page scrolling navigation for seamless content discovery
- Modal-based interactions for detailed service information and contact forms
- Direct action buttons (phone/email) for immediate contact initiation
- Icon-based service discovery with hover states and clear visual feedback

### Core Screens and Views
- Hero Section with professional imagery and primary CTA
- About Me section with professional credentials
- Services grid with 6 core service categories
- Contact modal with multiple contact methods
- Service detail modals (6 different service descriptions)

### Accessibility: WCAG AA
The website will meet WCAG AA standards ensuring accessibility for users with disabilities, including proper color contrast, keyboard navigation, and screen reader compatibility.

### Branding
- Color Palette: Soft Blue (#5A92B8) for trust, Muted Green (#609966) for actions, Charcoal (#333333) for text, Off-White (#F8F9FA) for backgrounds
- Typography: Poppins/Lato for headings, Open Sans/Roboto for body text
- Professional medical imagery and clean, spacious layouts
- Romanian language throughout

### Target Device and Platforms: Web Responsive
The website will be optimized for all devices with a mobile-first approach, ensuring perfect functionality across smartphones, tablets, and desktop computers.

## Technical Assumptions

### Repository Structure: Monorepo
Single repository containing the complete Next.js application with all components, styles, and configuration files.

### Service Architecture
Static Next.js application with client-side interactivity. No backend services required for MVP - all functionality handled through client-side JavaScript and direct contact methods (phone/email).

### Testing Requirements
Unit testing for React components and integration testing for user interactions. Focus on component rendering, modal functionality, and responsive behavior testing.

### Additional Technical Assumptions and Requests
- Next.js 14+ with TypeScript for type safety and modern React features
- Tailwind CSS for utility-first styling and responsive design
- Vercel for deployment with automatic GitHub integration
- Custom domain configuration for professional branding
- Image optimization for medical photography
- SEO optimization for local search visibility

## Epic List

1. **Epic 1: Foundation & Core Infrastructure**: Establish Next.js project setup, Git repository, and deploy to Vercel with custom domain
2. **Epic 2: Core UI Components & Layout**: Build responsive layout structure, hero section, and about section with professional styling
3. **Epic 3: Services & Interactive Features**: Implement services grid, modal system, and contact functionality
4. **Epic 4: Polish & Production Deployment**: Final styling, performance optimization, and production deployment

## Epic 1 Foundation & Core Infrastructure

**Epic Goal**: Establish the technical foundation for the Care4U website by setting up a Next.js project with TypeScript and Tailwind CSS, initializing Git version control, and deploying to Vercel with the custom domain care4u.vercel.app. This epic delivers a working website foundation that can be built upon in subsequent epics.

### Story 1.1: Project Initialization
As a developer,
I want to initialize a Next.js project with TypeScript and Tailwind CSS,
so that I have a modern, scalable foundation for the Care4U website.

**Acceptance Criteria:**
1. Next.js 14+ project created with TypeScript configuration
2. Tailwind CSS installed and configured with custom color palette
3. Project structure follows Next.js best practices
4. Development server runs without errors
5. Basic page renders with Tailwind styles applied

### Story 1.2: Git Repository Setup
As a developer,
I want to initialize Git repository and push to GitHub,
so that the code is version controlled and ready for deployment.

**Acceptance Criteria:**
1. Git repository initialized with proper .gitignore
2. Initial commit includes all project files
3. GitHub repository "care4u" created
4. Local repository connected to GitHub remote
5. Code pushed to main branch

### Story 1.3: Vercel Deployment
As a developer,
I want to deploy the application to Vercel with custom domain,
so that the website is accessible at care4u.vercel.app.

**Acceptance Criteria:**
1. Vercel project created and connected to GitHub repository
2. Application deployed successfully to Vercel
3. Custom domain care4u.vercel.app configured
4. Automatic deployments enabled for main branch
5. SSL certificate properly configured

## Epic 2 Core UI Components & Layout

**Epic Goal**: Build the fundamental UI structure and core content sections of the Care4U website, including the hero section with professional imagery, about section with credentials, and responsive layout that works perfectly across all devices.

### Story 2.1: Responsive Layout Structure
As a user,
I want the website to work perfectly on my mobile device,
so that I can easily access all information regardless of my device.

**Acceptance Criteria:**
1. Mobile-first responsive design implemented
2. Layout adapts smoothly from mobile to desktop
3. Generous white space and symmetrical design principles applied
4. Typography scales appropriately across device sizes
5. All content remains readable and accessible on mobile

### Story 2.2: Hero Section Implementation
As a potential patient,
I want to immediately understand what services are offered,
so that I can quickly determine if this service meets my needs.

**Acceptance Criteria:**
1. Professional hero section with medical imagery
2. Main headline "Îngrijiri Medicale Profesionale la Domiciliu în Iași" prominently displayed
3. "Contactează-mă" CTA button in accent green color
4. Hero section takes full viewport height on desktop
5. Content is properly centered and visually balanced

### Story 2.3: About Me Section
As a potential patient,
I want to learn about the medical assistant's qualifications and approach,
so that I can trust in the quality of care provided.

**Acceptance Criteria:**
1. About section displays professional introduction text
2. Text emphasizes confidentiality, empathy, professionalism, and respect
3. Section uses proper typography hierarchy
4. Content is well-spaced and easy to read
5. Section integrates seamlessly with overall page flow

## Epic 3 Services & Interactive Features

**Epic Goal**: Implement the core interactive functionality of the Care4U website, including the services grid with modal popups, contact modal with multiple contact methods, and all user interaction patterns that enable service discovery and contact initiation.

### Story 3.1: Services Grid Layout
As a potential patient,
I want to see all available services in an organized, visual way,
so that I can quickly understand what care options are available.

**Acceptance Criteria:**
1. "Serviciile Mele" section with symmetrical grid layout
2. Six service icons displayed in balanced grid
3. Icons represent: Medical Treatments, Health Monitoring, Diagnostics, Wound Care, Post-Op Care, Rehabilitation
4. Grid is responsive and works on all device sizes
5. Icons have hover states and visual feedback

### Story 3.2: Service Modal System
As a potential patient,
I want to learn detailed information about each service,
so that I can make informed decisions about my care needs.

**Acceptance Criteria:**
1. Clicking service icons opens modal popups
2. Each modal displays service title and detailed description
3. Modals are dismissible via escape key and clicking outside
4. Modal content is properly formatted and readable
5. All six services have unique, detailed descriptions

### Story 3.3: Contact Modal Implementation
As a potential patient,
I want multiple ways to contact the medical assistant,
so that I can choose the communication method that works best for me.

**Acceptance Criteria:**
1. "Contactează-mă" buttons open contact modal
2. Modal displays "Programează o vizită" headline
3. Direct phone link (+40 721 056 514) is clickable
4. Direct email link (lacry_petro@yahoo.com) is clickable
5. Contact form includes Name, Phone/Email, and Message fields
6. Submit button uses accent green color

## Epic 4 Polish & Production Deployment

**Epic Goal**: Finalize the Care4U website with performance optimization, accessibility compliance, SEO optimization, and ensure production-ready deployment with all features working perfectly across all devices and browsers.

### Story 4.1: Performance Optimization
As a user,
I want the website to load quickly and perform smoothly,
so that I have a positive experience when accessing the information.

**Acceptance Criteria:**
1. Lighthouse performance score of 90+ achieved
2. Images optimized for web delivery
3. Code minified and optimized for production
4. Page load time under 3 seconds on 3G networks
5. Smooth animations and interactions

### Story 4.2: Accessibility & SEO
As a user with disabilities,
I want the website to be accessible and easy to navigate,
so that I can access all information regardless of my abilities.

**Acceptance Criteria:**
1. WCAG AA compliance achieved
2. Keyboard navigation works for all interactive elements
3. Screen reader compatibility verified
4. SEO meta tags and structured data implemented
5. Romanian language properly declared

### Story 4.3: Final Production Deployment
As a business owner,
I want the website to be live and fully functional,
so that potential patients can access and use all features.

**Acceptance Criteria:**
1. All features working perfectly in production
2. Custom domain care4u.vercel.app fully functional
3. SSL certificate properly configured
4. All contact methods working correctly
5. Website tested across multiple browsers and devices

## Checklist Results Report

*This section will be populated after running the PM checklist*

## Next Steps

### UX Expert Prompt
Create a comprehensive UX design system for the Care4U home healthcare website, focusing on medical professionalism, accessibility, and mobile-first responsive design using the specified color palette and typography.

### Architect Prompt
Design and implement a Next.js 14+ application architecture for the Care4U website with TypeScript, Tailwind CSS, and Vercel deployment, ensuring optimal performance, accessibility, and maintainability.
