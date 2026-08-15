import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { processSteps } from '../data/process';
import { SectionHeading } from './ui/section-heading';
import { Container } from './ui/container';
import { Reveal } from './ui/reveal';
import { AmbientGlow } from './ui/ambient-glow';
import { CloudMarquee } from './ui/cloud-marquee';

export function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.6'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="process" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <AmbientGlow variant="paper" />
      <CloudMarquee reverse />
      <Container className="relative z-10">
        <SectionHeading eyebrow="Process" title="From idea to launch." align="center" className="mx-auto" />

        <div ref={timelineRef} className="relative mt-16 sm:mt-20">
          <div
            className="absolute bottom-6 left-6 top-6 w-px bg-border sm:hidden"
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-6 left-6 top-6 w-px origin-top bg-primary sm:hidden"
            style={{ scaleY: progress }}
            aria-hidden="true"
          />
          <div
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-border sm:block"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px origin-left bg-primary sm:block"
            style={{ scaleX: progress }}
            aria-hidden="true"
          />

          <div className="relative grid gap-10 sm:grid-cols-4 sm:gap-6">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100} className="flex gap-5 sm:flex-col sm:items-center sm:gap-5 sm:text-center">
                <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-border bg-paper text-primary shadow-glow">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-inter text-xs uppercase tracking-[0.25em] text-ink-muted">{step.number}</span>
                  <h3 className="mt-1 font-podium text-lg uppercase tracking-wide text-ink sm:text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-[16rem] font-inter text-sm leading-relaxed text-ink-muted sm:mx-auto">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Process;
