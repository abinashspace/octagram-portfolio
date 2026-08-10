import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface PerspectiveGridProps {
  className?: string;
  gridSize?: number;
  showOverlay?: boolean;
  fadeRadius?: number;
}

export function PerspectiveGrid({
  className,
  gridSize = 40,
  showOverlay = true,
  fadeRadius = 80,
}: PerspectiveGridProps) {
  const [mounted, setMounted] = useState(false);
  const tiles = useMemo(() => Array.from({ length: gridSize * gridSize }), [gridSize]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn('relative h-full w-full overflow-hidden bg-black', className)}
      style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
    >
      <div
        className="absolute left-1/2 top-1/2 grid aspect-square w-[80rem] origin-center"
        style={{
          transform: 'translate(-50%, -50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(2)',
          transformStyle: 'preserve-3d',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {mounted &&
          tiles.map((_, index) => (
            <div
              key={index}
              className="min-h-[1px] min-w-[1px] border border-white/10 bg-transparent transition-colors duration-[1500ms] hover:border-white/40 hover:duration-0"
            />
          ))}
      </div>

      {showOverlay && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle, transparent 25%, #000 ${fadeRadius}%)`,
          }}
        />
      )}
    </div>
  );
}

export default PerspectiveGrid;