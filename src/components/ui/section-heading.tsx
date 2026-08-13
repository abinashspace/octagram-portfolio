import type { ReactNode } from 'react';
import { Reveal } from './reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className ?? ''}`.trim()}>
      {eyebrow && (
        <span className="flex items-center gap-2 font-inter text-xs font-medium uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-podium text-[clamp(2rem,4.5vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-balance font-inter text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
