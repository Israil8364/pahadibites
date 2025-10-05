import { Utensils } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Chicken Momos',
    description: 'Steamed perfection straight from the mountains.',
    image: 'https://images.pexels.com/photos/6759337/pexels-photo-6759337.jpeg?auto=compress&cs=tinysrgb&w=400&h=711'
  },
  {
    name: 'Veg Thukpa',
    description: 'A soulful noodle soup packed with fresh veggies and herbs.',
    image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=400&h=711'
  },
  {
    name: 'Chilli Chicken',
    description: 'Crispy bites tossed in a spicy tangy sauce.',
    image: 'https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg?auto=compress&cs=tinysrgb&w=400&h=711'
  },
  {
    name: 'Hakka Noodles',
    description: 'Authentic wok-tossed flavour you will love.',
    image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&w=400&h=711'
  },
  {
    name: 'Tibetan Tea',
    description: 'A warm sip from the hills.',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400&h=711'
  }
];

export default function Menu() {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-center mb-12">
          <Utensils className="text-[#E85C0D] mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233]">Our Specialities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ aspectRatio: '9/16' }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToReservation}
            className="bg-[#E85C0D] hover:bg-[#d14d00] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </section>
  );
}
