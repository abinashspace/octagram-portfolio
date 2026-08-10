// @ts-expect-error The registry component is JavaScript rather than TypeScript.
import GradientWaves from '../@/components/GradientWaves.jsx';

export function Brand({ textClassName }: { textClassName: string }) {
  return <span className={textClassName}>OCTAGRAM</span>;
}

export function MobileMenuPointer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-6 top-14 z-20 sm:right-10 sm:top-16 md:hidden"
    >
      <div className="relative w-[150px] sm:w-[170px]">
        <span className="font-caveat absolute -bottom-1 left-0 -rotate-6 text-lg text-white/90 sm:text-xl">
          get in touch
        </span>
        <svg
          viewBox="0 0 150 70"
          className="h-auto w-full text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6,55 L55,32 L80,36 L128,8" />
          <path d="M110,4 L130,8 L122,24" />
        </svg>
      </div>
    </div>
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
