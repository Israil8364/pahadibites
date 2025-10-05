import { Camera } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/8923137/pexels-photo-8923137.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Fresh Momos'
  },
  {
    url: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Hakka Noodles'
  },
  {
    url: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Spicy Delights'
  },
  {
    url: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Hot Soup'
  },
  {
    url: 'https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Street Style'
  },
  {
    url: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=400&h=711',
    title: 'Happy Dining'
  }
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-center mb-12">
          <Camera className="text-[#E85C0D] mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233]">A Glimpse of Our Flavours</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              style={{ aspectRatio: '9/16' }}
              onClick={() => setLightboxImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold text-lg">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
