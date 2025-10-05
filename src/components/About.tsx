import { Mountain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center mb-8">
          <Mountain className="text-[#2F5233] mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233]">Our Story</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nestled in the heart of Jadavpur, <span className="font-bold text-[#E85C0D]">Pahadi Bites</span> brings
              the warmth of the hills and the aroma of authentic Tibetan and Chinese cuisine to the city.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From soft, juicy momos to aromatic noodles, every bite celebrates freshness, health, and flavour.
              We bring the mountain spirit to every dish we serve.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-1 bg-[#E85C0D]"></div>
              <span className="text-[#2F5233] font-semibold italic">Authentic. Fresh. Flavorful.</span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cooking Process"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#2F5233] text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Authentic Recipe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
