import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { Brand, BackgroundVideo, MobileMenuPointer } from './shared';

const STATS = [
  { value: '250+', label: 'Brands Transformed' },
  { value: '95%', label: 'Client Retention' },
  { value: '10+', label: 'Years in the Game' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <BackgroundVideo />

      <div className="relative z-10 flex h-full flex-col">
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <Brand textClassName="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl" />

          <Link
            to="/contact"
            className="hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10 md:flex"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-end space-y-1.5 md:hidden"
          >
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-4 bg-white" />
          </button>
        </nav>

        <MobileMenuPointer />

        <div className="flex flex-1 items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="animate-fade-up mb-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mb-8">
              We build fierce brand identities
              <br />
              that don't just turn heads — <span className="font-bold text-white">they lead.</span>
            </p>

            <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Design.</span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Conquer.</span>
            </h1>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
              <Link
                to="/work"
                className="group flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
              >
                See Our Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <Brand textClassName="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl" />
          <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <X className="h-8 w-8 text-white" />
          </button>
        </div>

        <div className="flex h-[calc(100%-96px)] flex-col items-center justify-center gap-8">
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-all duration-500 hover:border-white/60 hover:bg-white/10"
            style={{
              transitionDelay: '100ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
