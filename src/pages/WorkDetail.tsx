import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { Container } from '../components/ui/container';
import { ButtonLink } from '../components/ui/button';
import { Reveal } from '../components/ui/reveal';
import { Seo } from '../components/Seo';

export function WorkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 pt-24 text-center">
        <Seo title="Project not found — OCTAGRAM" description="This case study could not be found." />
        <h1 className="font-podium text-3xl uppercase text-ink">Project not found</h1>
        <p className="max-w-sm font-inter text-sm text-ink-muted">
          We couldn't find the case study you're looking for.
        </p>
        <ButtonLink to="/#work" size="sm">
          Back to Work
        </ButtonLink>
      </section>
    );
  }

  return (
    <article className="relative bg-paper pb-24 pt-28 sm:pt-32">
      <Seo
        title={`${project.name} — Case Study — OCTAGRAM`}
        description={project.description}
      />

      <Container>
        <Reveal>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </Reveal>

        <Reveal delay={80} className="mt-8 max-w-3xl">
          <span className="font-inter text-xs font-medium uppercase tracking-[0.25em] text-primary">
            {project.category}
          </span>
          <h1 className="mt-3 text-balance font-podium text-[clamp(2rem,5.5vw,4.25rem)] font-bold uppercase leading-[1.02] tracking-tight text-ink">
            {project.name}
          </h1>
          <p className="mt-5 font-inter text-base leading-relaxed text-ink-muted sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={project.liveUrl} target="_blank" rel="noreferrer">
              Visit Live Website
              <ExternalLink className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink to="/#contact" variant="secondary">
              Start Your Project
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-14 sm:mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_40px_100px_-35px_rgba(23,32,51,0.3)]">
            <img
              src={project.image}
              alt={`${project.name} venue signage`}
              className="w-full object-cover object-top"
              loading="eager"
            />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-4">
            <span className="font-inter text-xs uppercase tracking-[0.25em] text-ink-muted">The Challenge</span>
            <p className="font-inter text-base leading-relaxed text-ink">{project.challenge}</p>
          </Reveal>
          <Reveal delay={80} className="flex flex-col gap-4">
            <span className="font-inter text-xs uppercase tracking-[0.25em] text-ink-muted">The Solution</span>
            <p className="font-inter text-base leading-relaxed text-ink">{project.solution}</p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-16 border-t border-border pt-10 sm:mt-20">
          <span className="font-inter text-xs uppercase tracking-[0.25em] text-ink-muted">Services Provided</span>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border bg-accent-soft px-4 py-2 font-inter text-xs uppercase tracking-wider text-ink-muted"
              >
                {service}
              </span>
            ))}
          </div>
          {project.stack.length > 0 && (
            <p className="mt-6 font-inter text-xs text-ink-muted/70">Built with {project.stack.join(', ')}.</p>
          )}
        </Reveal>

        <Reveal
          delay={160}
          className="mt-16 flex flex-col items-center gap-5 rounded-2xl border border-border bg-surface p-10 text-center shadow-card sm:mt-20"
        >
          <h2 className="font-podium text-2xl uppercase tracking-wide text-ink sm:text-3xl">
            Want a website like this for your business?
          </h2>
          <ButtonLink to="/#contact">
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </Reveal>
      </Container>
    </article>
  );
}

export default WorkDetail;
