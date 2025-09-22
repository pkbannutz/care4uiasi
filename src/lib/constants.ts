import { ServiceType } from '@/types';

export const CONTACT_INFO = {
  phone: '+40 721 056 514',
  email: 'lacry_petro@yahoo.com',
  phoneLink: 'tel:+40721056514',
  emailLink: 'mailto:lacry_petro@yahoo.com',
};

export const SERVICES: ServiceType[] = [
  {
    id: 'medical-treatments',
    title: 'Perfuzie',
    description: 'Administrare sigură și profesională a perfuziilor la domiciliu, cu respectarea tuturor protocoalelor medicale și asigurarea confortului pacientului.',
    icon: 'medical-treatments',
  },
  {
    id: 'health-monitoring',
    title: 'Monitorizare parametri vitali',
    description: 'Monitorizarea regulată a semnelor vitale (tensiune arterială, puls, temperatură) pentru a urmări evoluția stării de sănătate.',
    icon: 'health-monitoring',
  },
  {
    id: 'diagnostics',
    title: 'Recoltare Analize',
    description: 'Recoltarea profesională a probelor pentru analize medicale, cu respectarea tuturor normelor de igienă și siguranță.',
    icon: 'diagnostics',
  },
  {
    id: 'wound-care',
    title: 'Îngrijirea Plăgilor',
    description: 'Îngrijirea specializată a plăgilor și leziunilor, cu aplicarea tehnicilor moderne de pansament și urmărirea procesului de vindecare.',
    icon: 'wound-care',
  },
  {
    id: 'post-op-care',
    title: 'Schimbare Pansamente',
    description: 'Schimbarea regulată și profesională a pansamentelor post-operatorii, cu respectarea tuturor instrucțiunilor medicale.',
    icon: 'post-op-care',
  },
  {
    id: 'rehabilitation',
    title: 'Suport în Recuperare',
    description: 'Asistență și suport în procesul de recuperare, cu aplicarea exercițiilor recomandate și monitorizarea progresului.',
    icon: 'rehabilitation',
  },
];

export const ABOUT_TEXT = `Asistent medical autorizat, cu experiență, ofer servicii de îngrijiri la domiciliu. Ofer confidențialitate, empatie, profesionalism și respect, pentru ca pacienții să se simtă în siguranță și confort acasă.`;

export const HERO_CONTENT = {
  title: 'Îngrijiri Medicale Profesionale la Domiciliu în Iași',
  subtitle: 'Servicii medicale profesionale, la tine acasă.',
  ctaText: 'Contactează-mă',
};
