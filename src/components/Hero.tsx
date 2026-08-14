import { ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { ButtonLink } from './ui/button';
import { Container } from './ui/container';
import { projects } from '../data/projects';

const showcase = projects[0];

const cloudWidths = [360, 480, 420, 560, 400];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden pb-20 pt-32 sm:pt-36 lg:pt-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-contain bg-center bg-repeat"
          style={{ backgroundImage: "url('https://images.shadcnspace.com/assets/backgrounds/real-estate-bg.webp')" }}
        />

        <div className="absolute inset-x-0 top-10 flex w-max animate-marquee gap-32 sm:top-16">
          {[...cloudWidths, ...cloudWidths].map((width, index) => (
            <img
              key={index}
              src="https://images.shadcnspace.com/assets/backgrounds/cloud.webp"
              alt=""
              style={{ width }}
              className="opacity-60"
            />
          ))}
        </div>

        <div className="absolute -right-[10%] -top-[15%] h-[42rem] w-[42rem] rounded-full bg-accent-soft blur-[120px]" />
        <div className="absolute right-[8%] top-[15%] h-[26rem] w-[26rem] rounded-full bg-accent/30 blur-[100px]" />
        <div className="absolute left-[-8%] bottom-[0%] h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[110px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/50 to-paper" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div>
            <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-soft px-4 py-1.5 font-inter text-xs uppercase tracking-[0.25em] text-primary">
              Web Design Agency
            </p>

            <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[1.02] tracking-tight text-ink">
              <span className="block text-[clamp(2.4rem,6.2vw,5.25rem)]">We build websites</span>
              <span className="block text-[clamp(2.4rem,6.2vw,5.25rem)]">that make local businesses</span>
              <span className="block text-[clamp(2.4rem,6.2vw,5.25rem)] text-primary">look premium.</span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-7 max-w-xl font-inter text-base leading-relaxed text-ink-muted sm:text-lg">
              Modern, fast and conversion-focused websites for businesses that want a stronger online
              presence and more customers.
            </p>

            <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink to="/#contact">
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink to="/#work" variant="secondary">
                View Our Work
              </ButtonLink>
            </div>
          </div>

          <div className="animate-fade-up-delay-3 relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="animate-float-slow relative rounded-2xl border border-border bg-white p-2 shadow-[0_40px_100px_-35px_rgba(23,32,51,0.35)] sm:p-3">
              <div className="mb-2 flex items-center gap-1.5 px-1.5 sm:mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={showcase.image}
                  alt={`${showcase.name}, a project by OCTAGRAM`}
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            <a
              href={showcase.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 shadow-glow backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 sm:-left-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-inter text-xs text-ink-muted">
                Live: <span className="font-medium text-ink">{showcase.name}</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-ink-muted" />
            </a>

            <div className="absolute -right-3 -top-4 hidden rotate-3 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-glow sm:flex sm:items-center sm:gap-1.5">
              <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
              <span className="font-inter text-[0.65rem] uppercase tracking-widest text-ink-muted">
                {showcase.category}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
