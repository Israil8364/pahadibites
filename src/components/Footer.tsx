export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2F5233] text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center">
          <img
            src="/pahadi-resturant-logo.jpg"
            alt="Pahadi Bites Logo"
            className="w-24 h-24 rounded-full mb-4"
          />
          <p className="text-xl font-semibold mb-6 italic">Taste the height in every healthy bite.</p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#E85C0D] transition">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-[#E85C0D] transition">
              Menu
            </button>
            <button onClick={() => scrollToSection('reservation')} className="hover:text-[#E85C0D] transition">
              Reservation
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#E85C0D] transition">
              Contact
            </button>
          </div>

          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-gray-300">© 2025 Pahadi Bites — All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
