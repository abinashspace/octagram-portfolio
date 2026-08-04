export const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4';

export function Brand({ textClassName }: { textClassName: string }) {
  return <span className={textClassName}>OCTAGRAM</span>;
}

export function MobileMenuPointer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-6 top-14 right-16 z-20 sm:left-10 sm:top-16 md:hidden"
    >
      <div className="relative">
        <span className="font-caveat absolute -bottom-1 left-0 -rotate-6 text-2xl text-white/90 sm:text-3xl">
          get in touch
        </span>
        <svg
          viewBox="0 0 260 110"
          className="h-auto w-full max-w-[200px] text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8,95 C50,45 95,90 135,50 C165,25 195,18 222,14" />
          <path d="M202,6 L226,13 L212,28" />
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
