import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { Reveal } from './ui/reveal';

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="group h-full">
      <Link
        to={`/work/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-border hover:shadow-card"
      >
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-accent-soft">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
          <div>
            <span className="font-inter text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {project.category}
            </span>
            <h3 className="mt-2 font-podium text-xl uppercase tracking-wide text-ink sm:text-2xl">
              {project.name}
            </h3>
          </div>

          <p className="flex-1 font-inter text-sm leading-relaxed text-ink-muted">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border bg-accent-soft px-3 py-1 font-inter text-[0.65rem] uppercase tracking-wider text-ink-muted"
              >
                {service}
              </span>
            ))}
          </div>

          <span className="mt-1 inline-flex items-center gap-1.5 font-inter text-xs font-medium uppercase tracking-widest text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
            View Website
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default ProjectCard;
