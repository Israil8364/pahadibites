import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import HowItWorks from './components/HowItWorks';
import Reservation from './components/Reservation';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Menu />
      <HowItWorks />
      <Reservation />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
