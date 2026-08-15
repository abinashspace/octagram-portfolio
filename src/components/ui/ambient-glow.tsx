type AmbientGlowProps = {
  /** Match to the section's background: 'paper' for bg-paper, 'soft' for bg-accent-soft. */
  variant?: 'paper' | 'soft';
  className?: string;
};

const VARIANT_BLOBS: Record<'paper' | 'soft', { a: string; b: string }> = {
  paper: { a: 'bg-accent-soft', b: 'bg-primary/10' },
  soft: { a: 'bg-white/60', b: 'bg-accent/30' },
};

export function AmbientGlow({ variant = 'paper', className }: AmbientGlowProps) {
  const { a, b } = VARIANT_BLOBS[variant];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`.trim()} aria-hidden="true">
      <div className={`animate-drift-a animate-glow-pulse absolute -right-[10%] -top-[20%] h-[30rem] w-[30rem] rounded-full ${a} blur-[110px]`} />
      <div className={`animate-drift-b absolute -left-[10%] bottom-[-15%] h-[26rem] w-[26rem] rounded-full ${b} blur-[100px]`} />
    </div>
  );
}

export default AmbientGlow;
