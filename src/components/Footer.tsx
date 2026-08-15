import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Brand } from '../shared';
import { Container } from './ui/container';
import { AmbientGlow } from './ui/ambient-glow';
import { CloudMarquee } from './ui/cloud-marquee';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, MAIL_LINK, NAV_LINKS, TEL_LINK, WHATSAPP_LINK } from '../lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-paper pb-10 pt-16 sm:pt-20">
      <AmbientGlow variant="paper" className="opacity-60" />
      <CloudMarquee className="opacity-50" />
      <Container className="relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] lg:gap-10">
          <div>
            <Brand textClassName="font-podium text-xl font-bold uppercase tracking-wider text-ink" />
            <p className="mt-4 max-w-xs font-inter text-sm leading-relaxed text-ink-muted">
              A small web design studio building modern, conversion-focused websites for local and
              service-based businesses.
            </p>
          </div>

          <div>
            <div className="font-inter text-xs uppercase tracking-[0.25em] text-ink-muted">Navigation</div>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-1.5 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-inter text-xs uppercase tracking-[0.25em] text-ink-muted">Contact</div>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={MAIL_LINK}
                  className="group flex items-center gap-2 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
                >
                  <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative">
                    {COMPANY_EMAIL}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={TEL_LINK}
                  className="group flex items-center gap-2 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
                >
                  <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative">
                    {COMPANY_PHONE_DISPLAY}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative">
                    WhatsApp
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-center font-inter text-xs text-ink-muted sm:text-left">
            © {year} OCTAGRAM. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
