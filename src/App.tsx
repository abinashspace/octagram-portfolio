import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useScrollToHash } from './hooks/useScrollToHash';
import { WHATSAPP_LINK } from './lib/constants';
import { ClickSparkEffect } from './shared';

function App() {
  useScrollToHash();

  return (
    <div className="relative min-h-screen w-full bg-paper text-ink">
      <ClickSparkEffect>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-white shadow-glow transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
        >
          <span
            className="absolute inset-0 -z-10 animate-glow-pulse rounded-full bg-primary/40 blur-xl"
            aria-hidden="true"
          />
          <MessageCircle className="h-6 w-6" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 font-inter text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        </a>
      </ClickSparkEffect>
    </div>
  );
}

export default App;
