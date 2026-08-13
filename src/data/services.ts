import type { LucideIcon } from 'lucide-react';
import { Palette, Building2, Rocket, Wrench } from 'lucide-react';

export type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: '01',
    icon: Palette,
    title: 'Website Design & Development',
    description: 'Modern websites designed specifically around your business, customers and goals.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Business Websites',
    description:
      'Professional websites for clinics, gyms, restaurants, halls, shops and service-based businesses.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to turn visitors into leads and customers.',
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Maintenance & Updates',
    description: 'Keep your website updated, secure and running smoothly after launch.',
  },
];
