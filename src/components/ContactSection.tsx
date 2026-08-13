import { useState, type FormEvent } from 'react';
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { Reveal } from './ui/reveal';
import { Button } from './ui/button';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, MAIL_LINK, TEL_LINK, WHATSAPP_LINK } from '../lib/constants';

const PROJECT_TYPES = ['Business Website', 'Landing Page', 'Website Redesign', 'Not sure yet'];

const inputClasses =
  'w-full rounded-lg border border-border bg-white px-4 py-3 font-inter text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/15';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const business = data.get('business');
    const phone = data.get('phone');
    const email = data.get('email');
    const type = data.get('type');
    const message = data.get('message');

    const subject = `New project enquiry — ${business || name}`;
    const body = [
      `Name: ${name}`,
      `Business: ${business}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Website type: ${type}`,
      '',
      `${message}`,
    ].join('\n');

    window.location.href = `${MAIL_LINK}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  };

  return (
    <section id="contact" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's start your project."
          description="Tell us a bit about your business. We'll get back to you personally."
        />

        <div className="mt-14 grid gap-8 sm:mt-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] lg:gap-10">
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required className={inputClasses} placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                    Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    required
                    className={inputClasses}
                    placeholder="Your business"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={inputClasses}
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="you@business.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                  What type of website do you need?
                </label>
                <select id="type" name="type" defaultValue={PROJECT_TYPES[0]} className={`${inputClasses} appearance-none`}>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-white text-ink">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={inputClasses}
                  placeholder="Tell us a little about your business and what you need."
                />
              </div>

              <Button type="submit" className="mt-2 self-start">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>

              {status === 'sent' && (
                <p role="status" className="font-inter text-xs text-ink-muted">
                  Opening your email app with these details — send it across and we'll reply personally.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={200} className="flex flex-col gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border hover:shadow-card"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="font-podium text-sm uppercase tracking-wide text-ink">WhatsApp</div>
                <div className="font-inter text-xs text-ink-muted">Fastest way to reach us</div>
              </div>
            </a>

            <a
              href={TEL_LINK}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border hover:shadow-card"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-border bg-accent-soft text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-podium text-sm uppercase tracking-wide text-ink">Call</div>
                <div className="font-inter text-xs text-ink-muted">{COMPANY_PHONE_DISPLAY}</div>
              </div>
            </a>

            <a
              href={MAIL_LINK}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-border hover:shadow-card"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-border bg-accent-soft text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="font-podium text-sm uppercase tracking-wide text-ink">Email</div>
                <div className="font-inter text-xs text-ink-muted">{COMPANY_EMAIL}</div>
              </div>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
