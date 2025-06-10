import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import ImpressiveStats from './components/home/ImpressiveStats';
import AboutHero from './components/about/AboutHero';
import CompanyValues from './components/about/CompanyValues';
import ServiceHero from './components/services/ServiceHero';
import ServiceCategories from './components/services/ServiceCategories';
import SolutionGrid from './components/services/SolutionGrid';
import ServiceCTA from './components/services/ServiceCTA';
import FeaturedProjects from './components/projects/FeaturedProjects';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/layout/Footer';
import TrackingScript from '/components/contact/TrackingScript.jsx'; // đường dẫn đúng đến file vừa tạo

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ImpressiveStats />
        <AboutHero />
        <CompanyValues />
        <ServiceHero />
        <ServiceCategories />
        <SolutionGrid />
        <FeaturedProjects />
        <ServiceCTA />
        <ContactForm />
        <TrackingScript />
      </main>
      <Footer />
    </div>
  );
}

export default App;