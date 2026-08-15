const CLOUD_WIDTHS = [360, 480, 420, 560, 400];
const CLOUD_IMAGE = 'https://images.shadcnspace.com/assets/backgrounds/cloud.webp';

type CloudMarqueeProps = {
  className?: string;
  top?: string;
  reverse?: boolean;
};

export function CloudMarquee({ className, top = 'top-10 sm:top-16', reverse = false }: CloudMarqueeProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 ${top} flex w-max gap-32 ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      } ${className ?? ''}`.trim()}
      aria-hidden="true"
    >
      {[...CLOUD_WIDTHS, ...CLOUD_WIDTHS].map((width, index) => (
        <img key={index} src={CLOUD_IMAGE} alt="" style={{ width }} className="opacity-60" />
      ))}
    </div>
  );
}

export default CloudMarquee;
