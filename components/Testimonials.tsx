import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    role: 'Novia 2024',
    content: '¡Increíble! Me sentí como una princesa moderna. El maquillaje duró perfecto todo el día y todas mis invitadas me preguntaban quién me había maquillado.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sofia Ramirez',
    role: 'Social',
    content: 'Diana entendió mi vibe a la primera. No quería algo pesado y logró un look glowy y natural que se veía brutal en las fotos. ¡Ame!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Lucía Benavides',
    role: 'Photoshoot',
    content: 'La mejor decisión para mi book. La piel se veía radiante y perfecta en 4K. La energía de Diana es lo máximo, me hizo sentir súper cómoda.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 text-brand-primary text-9xl font-display font-black">"</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-brand-dark mb-4">Girl Power! 👯‍♀️</h2>
          <div className="flex justify-center items-center gap-2 text-brand-primary font-bold bg-white inline-flex px-4 py-2 rounded-full shadow-sm">
             <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-brand-primary text-brand-primary" />)}
             </div>
             <span>5.0 en Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
            >
              <Quote className="absolute top-6 right-6 text-brand-light fill-brand-light w-12 h-12 group-hover:text-brand-primary/10 group-hover:fill-brand-primary/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-1 bg-brand-primary/20 rounded-full">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark font-display text-lg">{t.name}</h4>
                  <p className="text-xs text-brand-primary uppercase tracking-wide font-bold bg-brand-light px-2 py-0.5 rounded-md inline-block mt-1">{t.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 font-medium leading-relaxed">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;