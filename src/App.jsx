import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import ChatbotSection from './sections/ChatbotSection';
import Pricing from './sections/Pricing';
import HowItWorks from './sections/HowItWorks';
import Trust from './sections/Trust';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#101A3D', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <ChatbotSection />
        <HowItWorks />
        <Pricing />
        <Trust />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
