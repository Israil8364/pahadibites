import { BookOpen, Calendar, UtensilsCrossed } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Explore Our Menu',
    description: 'Browse through our authentic Tibetan & Chinese dishes'
  },
  {
    icon: Calendar,
    title: 'Reserve Your Table',
    description: 'Book online or enquire about availability'
  },
  {
    icon: UtensilsCrossed,
    title: 'Enjoy Pahadi Taste',
    description: 'Experience the height in every healthy bite'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#2F5233] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How to Get Started</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-[#E85C0D] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:bg-[#d14d00] transition-all">
                <step.icon size={48} />
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
