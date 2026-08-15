import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { SectionHeading } from './ui/section-heading';
import { Container } from './ui/container';
import { Reveal } from './ui/reveal';
import { TiltCard } from './ui/tilt-card';
import { AmbientGlow } from './ui/ambient-glow';
import { CloudMarquee } from './ui/cloud-marquee';

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-accent-soft py-24 sm:py-32">
      <AmbientGlow variant="soft" />
      <CloudMarquee />
      <Container className="relative z-10">
        <SectionHeading eyebrow="Testimonials" title="What our clients say." align="center" className="mx-auto" />

        <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <TiltCard
                maxTilt={4}
                liftOnHover={4}
                className={`relative rounded-2xl border p-8 text-center transition-shadow duration-500 hover:shadow-card sm:p-10 ${
                  testimonial.placeholder ? 'border-dashed border-ink-muted/25 bg-white/60' : 'border-border bg-surface'
                }`}
              >
                {testimonial.placeholder && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-border bg-white px-3 py-1 font-inter text-[0.65rem] uppercase tracking-widest text-ink-muted">
                    Coming Soon
                  </span>
                )}

                <Quote className="mx-auto h-6 w-6 text-primary/60" aria-hidden="true" />

                <p className="mt-5 font-inter text-base italic leading-relaxed text-ink sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-center gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-ink-muted/25'
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-4 font-podium text-sm uppercase tracking-wide text-ink">{testimonial.name}</div>
                {(testimonial.business || testimonial.role) && (
                  <div className="font-inter text-xs text-ink-muted">
                    {testimonial.business}
                    {testimonial.role ? ` · ${testimonial.role}` : ''}
                  </div>
                )}
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
