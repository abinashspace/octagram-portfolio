import type { LucideIcon } from 'lucide-react';
import { Smartphone, PenTool, Search, MessageCircle } from 'lucide-react';

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Your website looks great on phones, tablets and desktops.',
  },
  {
    icon: PenTool,
    title: 'Custom Design',
    description: 'No generic templates. Every website is designed around the business.',
  },
  {
    icon: Search,
    title: 'SEO Ready',
    description: 'Built with search engines and discoverability in mind.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'Clients communicate directly with the people designing and building their website.',
  },
];
