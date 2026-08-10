import React, { forwardRef, memo } from 'react';
import { LiquidMetal as LiquidMetalShader } from '@paper-design/shaders-react';

type LiquidMetalProps = {
  colorBack?: string;
  colorTint?: string;
  speed?: number;
  repetition?: number;
  distortion?: number;
  scale?: number;
  className?: string;
};

const LiquidMetal = memo(function LiquidMetal({
  colorBack = '#32105f',
  colorTint = '#f4eaff',
  speed = 0.5,
  repetition = 4,
  distortion = 0.1,
  scale = 1,
  className,
}: LiquidMetalProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className ?? ''}`.trim()}>
      <LiquidMetalShader
        colorBack={colorBack}
        colorTint={colorTint}
        speed={speed}
        repetition={repetition}
        distortion={distortion}
        softness={0}
        shiftRed={0.3}
        shiftBlue={-0.3}
        angle={45}
        shape="none"
        scale={scale}
        fit="cover"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
});

type LiquidMetalButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  borderWidth?: number;
  metalConfig?: LiquidMetalProps;
};

export const LiquidMetalButton = forwardRef<HTMLButtonElement, LiquidMetalButtonProps>(
  ({ children, borderWidth = 3, metalConfig, className, ...props }, ref) => (
    <button
      ref={ref}
      className={`group relative cursor-pointer border-none bg-transparent p-0 outline-none transition-transform hover:scale-[1.02] active:scale-[0.98] ${className ?? ''}`.trim()}
      {...props}
    >
      <div className="relative overflow-hidden rounded-full shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]" style={{ padding: borderWidth }}>
        <LiquidMetal {...metalConfig} className="rounded-full" />
        <div className="relative z-10 flex items-center gap-2 rounded-full bg-black/80 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-colors duration-200 group-hover:bg-black/60">
          {children}
        </div>
      </div>
    </button>
  ),
);

LiquidMetalButton.displayName = 'LiquidMetalButton';

export default LiquidMetalButton;
