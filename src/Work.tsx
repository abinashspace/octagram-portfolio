import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Brand, BackgroundVideo } from './shared';

const PROJECTS = [
  {
    title: 'Aethera',
    category: 'Productivity Web Design',
    description:
      'Built Aethera, a distraction-free productivity workspace designed for deep work — combining focus sessions, ambient flow states, and intentional task design into a single calm interface. React-based, locally-persisted, zero account friction — built for brilliant minds who want fewer tabs and more depth.',
    link: 'https://aethera-kappa.vercel.app/',
  },
  {
    title: 'Arivom',
    category: 'Government Scheme Eligibility Checker',
    description:
      'Helps citizens quickly find out which government welfare schemes they actually qualify for — answer a few questions and get a transparent, rule-based breakdown of eligible schemes, no paperwork or guesswork required.',
    link: 'https://arivom-livid.vercel.app/',
  },
  {
    title: 'Odyssey',
    category: 'Travel Planning App',
    description:
      'Where will you go next? Plan your next adventure with ease. Discover destinations, map out your route, and turn wanderlust into a ready-to-go itinerary — all in one place. Save your favorite spots, get personalized suggestions, and travel smarter every time.',
    link: 'https://odyssey-design.vercel.app/',
  },
];

function Work() {
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

        <div className="flex-1 px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="animate-fade-up mb-6 font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm lg:mb-8">
              Where Ideas Take Shape
            </p>

            <h1 className="animate-fade-up-delay-1 font-inter text-[clamp(2.2rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-white">
              Our Designs
            </h1>

            <div className="animate-fade-up-delay-2 mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
              {PROJECTS.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between border border-white/20 p-6 transition hover:border-white/50 hover:bg-white/5 sm:p-8"
                >
                  <div>
                    <div className="font-inter text-xs uppercase tracking-widest text-white/50">
                      {project.category}
                    </div>
                    <div className="mt-3 font-podium text-2xl uppercase tracking-wide text-white sm:text-3xl">
                      {project.title}
                    </div>
                    <p className="mt-4 font-inter text-sm leading-relaxed text-white/70">
                      {project.description}
                    </p>
                  </div>

                  <div className="animate-color-blink mt-6 flex items-center gap-2 font-inter text-xs uppercase tracking-widest">
                    Click Here
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
