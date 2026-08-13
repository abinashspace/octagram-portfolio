import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Brand } from '../shared';
import { NAV_LINKS } from '../lib/constants';
import { ButtonLink } from './ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-6">
      <div
        className={`relative z-50 flex w-full max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? 'border-border bg-white/85 shadow-[0_10px_40px_-18px_rgba(23,32,51,0.25)] backdrop-blur-xl'
            : 'border-border/60 bg-white/60 backdrop-blur-md'
        }`}
      >
        <Link to="/" onClick={closeMenu} aria-label={`${'OCTAGRAM'} — home`}>
          <Brand textClassName="font-podium text-lg font-bold uppercase tracking-wider text-ink sm:text-xl" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="font-inter text-xs font-medium uppercase tracking-[0.18em] text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink to="/#contact" size="sm">
            Get a Website
            <ArrowUpRight className="h-3.5 w-3.5" />
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex items-center justify-center rounded-full p-1 text-ink lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col items-center justify-center gap-7">
          {NAV_LINKS.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              className="font-podium text-3xl uppercase tracking-wide text-ink transition-all duration-500"
              style={{
                transitionDelay: `${index * 60}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink to="/#contact" onClick={closeMenu} className="mt-4">
            Get a Website
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
