import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle, Phone } from 'lucide-react';
import { Container } from './ui/container';
import { SectionHeading } from './ui/section-heading';
import { Reveal } from './ui/reveal';
import { Button } from './ui/button';
import { AmbientGlow } from './ui/ambient-glow';
import { CloudMarquee } from './ui/cloud-marquee';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, MAIL_LINK, TEL_LINK, WHATSAPP_LINK } from '../lib/constants';

const PROJECT_TYPES = ['Business Website', 'Landing Page', 'Website Redesign', 'Not sure yet'];
const MESSAGE_LIMIT = 400;

const inputClasses =
  'w-full rounded-lg border border-border bg-white px-4 py-3 pr-10 font-inter text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/15';

type FieldName = 'name' | 'business' | 'phone' | 'email';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');
  const [validFields, setValidFields] = useState<Partial<Record<FieldName, boolean>>>({});
  const [messageLength, setMessageLength] = useState(0);

  const checkValidity = (event: FocusEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) => {
    const { name, validity } = event.currentTarget;
    setValidFields((prev) => ({ ...prev, [name]: validity.valid }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
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

    setStatus('submitting');
    window.setTimeout(() => {
      window.location.href = `${MAIL_LINK}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
    }, 450);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <AmbientGlow variant="paper" />
      <CloudMarquee reverse />
      <Container className="relative z-10">
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
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Your name"
                      onBlur={checkValidity}
                      onChange={checkValidity}
                    />
                    {validFields.name && (
                      <CheckCircle2
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                    Business Name
                  </label>
                  <div className="relative">
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      className={inputClasses}
                      placeholder="Your business"
                      onBlur={checkValidity}
                      onChange={checkValidity}
                    />
                    {validFields.business && (
                      <CheckCircle2
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className={inputClasses}
                      placeholder="+91 00000 00000"
                      onBlur={checkValidity}
                      onChange={checkValidity}
                    />
                    {validFields.phone && (
                      <CheckCircle2
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClasses}
                      placeholder="you@business.com"
                      onBlur={checkValidity}
                      onChange={checkValidity}
                    />
                    {validFields.email && (
                      <CheckCircle2
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="type" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                  What type of website do you need?
                </label>
                <select
                  id="type"
                  name="type"
                  defaultValue={PROJECT_TYPES[0]}
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 font-inter text-sm text-ink outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/15"
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-white text-ink">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="message" className="font-inter text-xs uppercase tracking-widest text-ink-muted">
                    Message
                  </label>
                  <span className="font-inter text-[0.65rem] text-ink-muted/70">
                    {messageLength}/{MESSAGE_LIMIT}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={MESSAGE_LIMIT}
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 font-inter text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/15"
                  placeholder="Tell us a little about your business and what you need."
                  onChange={(event) => setMessageLength(event.target.value.length)}
                />
              </div>

              <Button
                type="submit"
                disabled={status !== 'idle'}
                className="mt-2 self-start disabled:cursor-not-allowed disabled:opacity-80"
              >
                {status === 'idle' && (
                  <>
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
                {status === 'submitting' && (
                  <>
                    Preparing your email
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                )}
                {status === 'sent' && (
                  <>
                    Email app opened
                    <CheckCircle2 className="h-4 w-4" />
                  </>
                )}
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
