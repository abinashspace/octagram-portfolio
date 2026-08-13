export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'md' | 'sm';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-primary to-primary-hover text-white shadow-glow hover:shadow-[0_0_0_1px_rgba(59,130,246,0.35),0_25px_60px_-18px_rgba(59,130,246,0.55)]',
  secondary: 'border border-border bg-white text-ink hover:border-accent-border hover:bg-accent-soft hover:text-primary',
  ghost: 'text-ink-muted hover:text-ink',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: 'px-7 py-3.5 text-xs',
  sm: 'px-5 py-2.5 text-[0.65rem]',
};

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className = '') {
  return [
    'group relative inline-flex items-center justify-center gap-2 rounded-full font-inter font-medium uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]',
    SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');
}
