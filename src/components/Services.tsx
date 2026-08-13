import { services } from '../data/services';
import { SectionHeading } from './ui/section-heading';
import { Container } from './ui/container';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section id="services" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything your business needs to look great online."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 sm:mt-16 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 80} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;
