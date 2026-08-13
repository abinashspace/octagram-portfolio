export const COMPANY_NAME = 'OCTAGRAM';

export const COMPANY_PHONE_RAW = '8015523681';
export const COMPANY_PHONE_DISPLAY = `+91 ${COMPANY_PHONE_RAW}`;
export const COMPANY_EMAIL = 'tempest88899@gmail.com';

export const WHATSAPP_MESSAGE = "Hi! I'd like to talk about getting a website for my business.";
export const WHATSAPP_LINK = `https://wa.me/91${COMPANY_PHONE_RAW}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const TEL_LINK = `tel:+91${COMPANY_PHONE_RAW}`;
export const MAIL_LINK = `mailto:${COMPANY_EMAIL}`;

export const FOUNDERS = [
  { name: 'Shanmugam A', role: 'Co-Founder', email: 'Tempest88899@gmail.com' },
  { name: 'Abinash S', role: 'Co-Founder', email: 'abinashspace@gmail.com' },
];

export type NavItem = { label: string; href: string };

export const NAV_LINKS: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];
