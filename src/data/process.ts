import type { LucideIcon } from 'lucide-react';
import { Compass, PenTool, Code, Rocket } from 'lucide-react';

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: Compass,
    title: 'Discover',
    description: 'We understand your business, customers and goals.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description: 'We create the visual direction and website experience.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Build',
    description: 'We develop, optimize and test the website.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Your website goes live and is ready for customers.',
  },
];
