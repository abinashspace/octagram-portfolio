import { ArrowUpRight } from 'lucide-react';
import { FOUNDERS } from '../lib/constants';
import { SectionHeading } from './ui/section-heading';
import { Container } from './ui/container';
import { ButtonLink } from './ui/button';
import { Reveal } from './ui/reveal';
import { TiltCard } from './ui/tilt-card';
import { AmbientGlow } from './ui/ambient-glow';
import { CloudMarquee } from './ui/cloud-marquee';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <AmbientGlow variant="paper" />
      <CloudMarquee reverse />
      <Container className="relative z-10 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
        <SectionHeading
          eyebrow="About Us"
          title="We help traditional businesses build a modern digital presence."
          description="We're a small web development studio focused on creating high-quality websites for businesses that want to look professional online and turn visitors into customers."
        />

        <Reveal delay={150} className="flex flex-col gap-6">
          <span className="font-inter text-xs uppercase tracking-[0.25em] text-ink-muted">The Team</span>
          <div className="grid gap-4 sm:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <TiltCard
                key={founder.email}
                maxTilt={7}
                liftOnHover={3}
                className="rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent-border"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover font-podium text-sm text-white">
                  {founder.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div className="mt-3 font-podium text-sm uppercase tracking-wide text-ink">{founder.name}</div>
                <div className="font-inter text-xs text-ink-muted">{founder.role}</div>
              </TiltCard>
            ))}
          </div>
          <ButtonLink to="/#contact" variant="secondary" size="sm" className="mt-2 self-start">
            Let's talk about your website
            <ArrowUpRight className="h-3.5 w-3.5" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}

export default About;
