import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { BackgroundVideo, Brand } from './shared';
import { LiquidMetalButton } from './components/ui/liquid-metal';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <BackgroundVideo />

      <div className="relative z-10 flex h-full flex-col">
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <Brand textClassName="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl" />

          <LiquidMetalButton
            type="button"
            onClick={() => navigate('/contact')}
            className="hidden md:block"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </LiquidMetalButton>

          <LiquidMetalButton
            type="button"
            onClick={() => navigate('/contact')}
            className="md:hidden"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </LiquidMetalButton>
        </nav>

        <div className="flex flex-1 items-center px-6 sm:px-10 lg:px-16">
          <div className="grid w-full max-w-6xl items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,30rem)] lg:gap-20">
            <div>
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
            </div>

            <div className="animate-fade-up-delay-2 lg:-translate-y-72 lg:pb-2">
              <div className="flex flex-wrap items-center gap-4">
                <p className="font-inter text-[1.2rem] leading-snug text-white/85 sm:text-[1.35rem]">
                  Our last work.
                </p>
                <a
                  href="https://theotokos-convention-centre.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Theotokos Convention Centre project"
                  className="inline-flex items-center border border-white px-5 py-3 font-inter text-xs uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
                >
                  View work
                </a>
              </div>
              <p className="mt-3 font-inter text-[1.2rem] leading-snug text-white/85 sm:text-[1.35rem]">
                Your brand could be next.
              </p>
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
            className="animate-color-blink flex items-center gap-2 border px-6 py-3 font-inter text-xs uppercase tracking-widest transition-all duration-500 hover:bg-white/10"
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
