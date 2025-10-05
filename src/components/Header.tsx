import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2 md:space-x-3">
            <img
              src="/pahadi-resturant-logo.jpg"
              alt="Pahadi Bites"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <span className={`font-bold text-base md:text-xl ${isScrolled ? 'text-[#2F5233]' : 'text-white'}`}>
              Pahadi Bites
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Menu', 'Reservation', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => item === 'Home' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollToSection(item.toLowerCase())}
                className={`font-semibold transition-colors ${
                  isScrolled
                    ? 'text-[#2F5233] hover:text-[#E85C0D]'
                    : 'text-white hover:text-[#E85C0D]'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className={`md:hidden ${isScrolled ? 'text-[#2F5233]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg rounded-lg mb-4 p-4">
            {['Home', 'About', 'Menu', 'Reservation', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => item === 'Home' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 text-[#2F5233] hover:bg-[#E85C0D]/10 rounded transition"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
