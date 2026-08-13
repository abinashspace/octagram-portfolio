import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-container px-6 sm:px-10 lg:px-16 ${className ?? ''}`.trim()}>{children}</div>;
}

export default Container;
