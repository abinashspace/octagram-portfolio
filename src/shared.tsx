import type { ReactNode } from 'react';
// @ts-expect-error The registry component is JavaScript rather than TypeScript.
import GradientWaves from '@/components/GradientWaves.jsx';
// @ts-expect-error The registry component is JavaScript rather than TypeScript.
import ClickSpark from '@/components/ClickSpark.jsx';
// @ts-expect-error The registry component is JavaScript rather than TypeScript.
import OptionWheel from '@/components/OptionWheel.jsx';

export function Brand({ textClassName }: { textClassName: string }) {
  return <span className={textClassName}>OCTAGRAM</span>;
}

export function ClickSparkEffect({ children }: { children: ReactNode }) {
  return (
    <ClickSpark sparkColor="#3B82F6" sparkSize={10} sparkRadius={18} sparkCount={8} duration={450} extraScale={1.1}>
      {children}
    </ClickSpark>
  );
}

type CategoryWheelProps = {
  items: string[];
};

export function CategoryWheel({ items }: CategoryWheelProps) {
  return (
    <OptionWheel
      items={items}
      defaultSelected={Math.floor(items.length / 2)}
      textColor="#94A3B8"
      activeColor="#3B82F6"
      fontSize={1.5}
      spacing={1.35}
      inset={16}
      tilt={7}
      blur={0}
      fade={0.12}
      minOpacity={0.6}
      smoothing={180}
      loop
      className="font-inter font-bold uppercase tracking-wide"
    />
  );
}

export function BackgroundVideo() {
  return (
    <div className="absolute inset-0">
      <GradientWaves
        className="h-full w-full"
        horizonColor="#32105F"
        waveColor="#9A3FC0"
        crestColor="#E7D8FF"
        speed={0.4}
        amplitude={2.5}
        waveScale={0.6}
        waveRatio={0.9}
        swell={35}
        turbulence={20}
        tilt={1.11}
        zoom={1}
        height={5.5}
        fogDepth={15}
        detail="medium"
        brightness={1}
        opacity={1}
        mouseInteraction
        parallaxStrength={0.5}
        grain
        grainIntensity={0.05}
      />
    </div>
  );
}
