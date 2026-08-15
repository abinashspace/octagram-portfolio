import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
  liftOnHover?: number;
};

const DESKTOP_POINTER_QUERY = '(any-hover: hover) and (any-pointer: fine)';
const springValues = { damping: 24, stiffness: 200, mass: 1 };

export function TiltCard({ children, className, maxTilt = 8, scaleOnHover = 1.015, liftOnHover = 0 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(false);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const y = useSpring(0, springValues);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);
    const update = () => setIsSupported(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isSupported) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -maxTilt);
    rotateY.set((offsetX / (rect.width / 2)) * maxTilt);
  };

  const handleMouseEnter = () => {
    if (!isSupported) return;
    scale.set(scaleOnHover);
    y.set(-liftOnHover);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        scale,
        y,
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
