import { MapPin, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2F5233] mb-16">Find Us</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#E85C0D]/10 to-[#E85C0D]/5 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-[#E85C0D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#2F5233] mb-2">Location</h3>
            <p className="text-gray-700">Jadavpur, Kolkata</p>
          </div>

          <div className="bg-gradient-to-br from-[#2F5233]/10 to-[#2F5233]/5 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-[#2F5233] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#2F5233] mb-2">Phone</h3>
            <a href="tel:+917557088713" className="text-gray-700 hover:text-[#E85C0D]">
              +91 755 708 8713
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#E85C0D]/10 to-[#E85C0D]/5 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-[#E85C0D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#2F5233] mb-2">Instagram</h3>
            <a href="https://instagram.com/pahadibites" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#E85C0D]">
              @pahadibites
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/917557088713"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
