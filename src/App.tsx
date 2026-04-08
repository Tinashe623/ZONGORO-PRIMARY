import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ChurchSection from './components/sections/ChurchSection';
import CommunitySection from './components/sections/CommunitySection';
import Academics from './components/sections/Academics';
import ResultsSection from './components/sections/ResultsSection';
import Testimonials from './components/sections/Testimonials';
import Transport from './components/sections/Transport';
import Gallery from './components/sections/Gallery';
import Announcements from './components/sections/Announcements';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <ChurchSection />
      <CommunitySection />
      <Academics />
      <ResultsSection />
      <Testimonials />
      <Transport />
      <Gallery />
      <Announcements />
      <Contact />
      <BackToTop />
    </Layout>
  );
}

export default App;