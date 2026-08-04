export const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4';

export function Brand({ textClassName }: { textClassName: string }) {
  return <span className={textClassName}>OCTAGRAM</span>;
}

export function MobileMenuPointer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-6 right-6 top-14 z-20 sm:left-10 sm:right-10 sm:top-16 md:hidden"
    >
      <div className="relative ml-auto">
        <span className="font-caveat absolute -bottom-1 left-0 -rotate-6 text-2xl text-white/90 sm:text-3xl">
          get in touch
        </span>
        <svg
          viewBox="0 0 260 110"
          className="ml-auto h-auto w-full max-w-[300px] text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8,95 C55,45 100,90 140,50 C175,18 215,8 250,6" />
          <path d="M226,1 L252,5 L234,22" />
        </svg>
      </div>
    </div>
  );
}

export function BackgroundVideo() {
  return (
    <>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
    </>
  );
}
