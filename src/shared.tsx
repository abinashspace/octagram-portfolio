export const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4';

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
