import type { LucideIcon } from 'lucide-react';
import { Reveal } from './ui/reveal';
import { TiltCard } from './ui/tilt-card';

type ServiceCardProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
};

export function ServiceCard({ number, icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard
        maxTilt={6}
        liftOnHover={4}
        className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors duration-500 hover:border-accent-border hover:shadow-card sm:p-8"
      >
        <span className="absolute right-6 top-5 font-podium text-3xl text-ink-muted/15 transition-colors duration-500 group-hover:text-primary/20 sm:text-4xl">
          {number}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-accent-soft text-primary transition-colors duration-500 group-hover:border-primary/40">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-podium text-lg uppercase tracking-wide text-ink sm:text-xl">{title}</h3>
          <p className="mt-3 font-inter text-sm leading-relaxed text-ink-muted">{description}</p>
        </div>
      </TiltCard>
    </Reveal>
  );
}

export default ServiceCard;
