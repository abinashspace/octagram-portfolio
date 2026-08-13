import { ChevronsUpDown } from 'lucide-react';
import { trustCategories } from '../data/trust';
import { Container } from './ui/container';
import { Reveal } from './ui/reveal';
import { CategoryWheel } from '../shared';

export function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="relative border-y border-border bg-paper py-16 sm:py-20">
      <Container>
        <Reveal className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="text-center lg:text-left">
            <h2
              id="trust-heading"
              className="text-balance font-inter text-xs uppercase tracking-[0.3em] text-ink-muted sm:text-sm"
            >
              Trusted by businesses building their digital presence
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-ink-muted/70 lg:justify-start">
              <ChevronsUpDown className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="font-inter text-xs">Scroll or drag to explore</span>
            </div>
          </div>

          <div className="relative mx-auto h-64 w-full max-w-sm sm:h-72 lg:mx-0 lg:h-80 lg:max-w-md">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-paper to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-paper to-transparent"
              aria-hidden="true"
            />
            <CategoryWheel items={trustCategories} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default TrustSection;
