import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Brand } from '../shared';
import { Container } from './ui/container';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, MAIL_LINK, NAV_LINKS, TEL_LINK, WHATSAPP_LINK } from '../lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-paper pb-10 pt-16 sm:pt-20">
      <Container>
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
                    className="font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
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
                  className="flex items-center gap-2 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={TEL_LINK}
                  className="flex items-center gap-2 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
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
