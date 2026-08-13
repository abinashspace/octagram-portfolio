import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { SectionHeading } from './ui/section-heading';
import { Container } from './ui/container';
import { ProjectCard } from './ProjectCard';
import { ButtonLink } from './ui/button';
import { Reveal } from './ui/reveal';

export function FeaturedWork() {
  const fillerSpansFullRow = projects.length % 2 === 0;

  return (
    <section id="work" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Work we're proud of."
          description="Real websites built to help businesses stand out online."
        />

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} delay={index * 100} />
          ))}

          <Reveal delay={projects.length * 100} className={fillerSpansFullRow ? 'sm:col-span-2' : ''}>
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-ink-muted/25 bg-accent-soft/50 p-8 text-center transition-colors duration-500 hover:border-primary/40">
              <span className="font-podium text-xl uppercase tracking-wide text-ink sm:text-2xl">
                Your business, here next.
              </span>
              <p className="max-w-sm font-inter text-sm leading-relaxed text-ink-muted">
                We're building our portfolio one project at a time. Let's make yours the next one.
              </p>
              <ButtonLink to="/#contact" variant="secondary" size="sm" className="mt-2">
                Start a Project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedWork;
