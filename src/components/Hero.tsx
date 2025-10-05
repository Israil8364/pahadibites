import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <img
          src="/pahadi-resturant-logo.jpg"
          alt="Pahadi Bites Logo"
          className="w-48 h-48 mx-auto mb-6 rounded-full shadow-2xl"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Taste the Height in Every Healthy Bite
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Authentic Tibetan & Chinese flavours from the mountains — now at Jadavpur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-[#E85C0D] hover:bg-[#d14d00] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('reservation')}
            className="bg-[#2F5233] hover:bg-[#1f3621] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Reserve a Table
          </button>
        </div>
      </div>

     
    </section>
  );
}
