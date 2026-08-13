import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { ButtonLink } from './ui/button';
import { Container } from './ui/container';
import { Reveal } from './ui/reveal';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, MAIL_LINK, TEL_LINK, WHATSAPP_LINK } from '../lib/constants';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance font-podium text-[clamp(2rem,5vw,3.75rem)] font-bold uppercase leading-[1.05] tracking-tight text-ink">
            Ready to take your business online?
          </h2>
          <p className="max-w-xl font-inter text-base leading-relaxed text-ink-muted sm:text-lg">
            Tell us about your business and we'll help you figure out what your website needs.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink to="/#contact">
              Get Your Website
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={WHATSAPP_LINK} target="_blank" rel="noreferrer" variant="secondary">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </ButtonLink>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href={TEL_LINK}
              className="flex items-center gap-2 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
            >
              <Phone className="h-4 w-4" /> {COMPANY_PHONE_DISPLAY}
            </a>
            <a
              href={MAIL_LINK}
              className="flex items-center gap-2 font-inter text-sm text-ink-muted transition-colors duration-200 hover:text-primary"
            >
              <Mail className="h-4 w-4" /> {COMPANY_EMAIL}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default FinalCTA;
