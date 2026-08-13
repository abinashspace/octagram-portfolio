import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { FeaturedWork } from '../components/FeaturedWork';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { About } from '../components/About';
import { FinalCTA } from '../components/FinalCTA';
import { ContactSection } from '../components/ContactSection';
import { Seo } from '../components/Seo';

export function Home() {
  return (
    <>
      <Seo
        title="OCTAGRAM — Website Design Agency for Local Businesses"
        description="We build modern, fast and conversion-focused websites for gyms, clinics, restaurants, banquet halls and local businesses that want a stronger online presence."
      />
      <Hero />
      <TrustSection />
      <FeaturedWork />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <About />
      <FinalCTA />
      <ContactSection />
    </>
  );
}

export default Home;
