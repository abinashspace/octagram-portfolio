import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Brand, BackgroundVideo } from './shared';

const COMPANY_PHONE = '8015523681';

const TEAM = [
  { name: 'Shanmugam A', email: 'Tempest88899@gmail.com' },
  { name: 'Abinash S', email: 'abinashspace@gmail.com' },
];

function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <BackgroundVideo />

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <Brand textClassName="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl" />

          <Link
            to="/"
            className="flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </nav>

        <div className="flex flex-1 items-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="animate-fade-up mb-6 font-inter text-[clamp(1.56rem,4.55vw,3.58rem)] font-bold uppercase leading-[1.05] tracking-tight text-white lg:mb-8">
              Get in Touch with <span className="animate-color-blink">Founding Team</span>
            </h1>

            <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-8 sm:flex-row sm:gap-16 lg:mt-14">
              {TEAM.map((member) => (
                <div key={member.email}>
                  <div className="font-podium text-xl uppercase tracking-wide text-white sm:text-2xl">
                    {member.name}
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-2 flex items-center gap-2 font-inter text-sm text-white/70 transition hover:text-white sm:text-base"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="animate-fade-up-delay-3 mt-8 lg:mt-12">
              <div className="font-inter text-xs uppercase tracking-widest text-white/50">
                Company Number
              </div>
              <a
                href={`tel:+91${COMPANY_PHONE}`}
                className="mt-2 flex items-center gap-2 font-inter text-xl text-white transition hover:text-white/80 sm:text-2xl"
              >
                <Phone className="h-5 w-5 text-white/70" />
                +91 {COMPANY_PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
