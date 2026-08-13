import { benefits } from '../data/whyChooseUs';
import { SectionHeading } from './ui/section-heading';
import { Container } from './ui/container';
import { Reveal } from './ui/reveal';

export function WhyChooseUs() {
  return (
    <section className="relative bg-accent-soft py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Why Us" title="Why businesses choose us." />

        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-8 gap-y-10 sm:mt-16">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80} className="h-full">
              <div className="group flex h-full flex-col gap-4 border-t-2 border-ink-muted/15 pt-6 transition-colors duration-500 hover:border-primary/60">
                <benefit.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                <h3 className="font-podium text-lg uppercase tracking-wide text-ink">{benefit.title}</h3>
                <p className="font-inter text-sm leading-relaxed text-ink-muted">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
