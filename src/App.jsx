import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GoatStock from './components/GoatStock';

import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import CustomerEnquiry from './components/CustomerEnquiry';
import Contact from './components/Contact';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <GoatStock />

        <WhyChooseUs />
        <Gallery />
        <CustomerEnquiry />
        <Contact />
        <InstagramSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
