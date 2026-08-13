import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { buttonClasses, type ButtonSize, type ButtonVariant } from './button-styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function Button({ variant = 'primary', size = 'md', className, children, ...rest }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

export function ButtonLink({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  target,
  rel,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} target={target} rel={rel} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
