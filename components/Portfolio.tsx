import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '../types';

const portfolioData: PortfolioItem[] = [
  { id: 1, category: 'novias', image: 'https://images.unsplash.com/photo-1629237434676-47b293521b3e?q=80&w=800&auto=format&fit=crop', title: 'Novia Romántica' },
  { id: 2, category: 'social', image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop', title: 'Gala de Noche' },
  { id: 3, category: 'editorial', image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800&auto=format&fit=crop', title: 'Editorial Chic' },
  { id: 4, category: 'novias', image: 'https://images.unsplash.com/photo-1583001931096-959e9ad7b535?q=80&w=800&auto=format&fit=crop', title: 'Boda de Día' },
  { id: 5, category: 'quinceañeras', image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop', title: 'Quinceañera Glam' },
  { id: 6, category: 'social', image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop', title: 'Graduación' },
  { id: 7, category: 'novias', image: 'https://images.unsplash.com/photo-1605282409837-9755b404d02c?q=80&w=800&auto=format&fit=crop', title: 'Novia Clásica' },
  { id: 8, category: 'editorial', image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=800&auto=format&fit=crop', title: 'Fashion Shot' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'novias' | 'social' | 'editorial' | 'quinceañeras'>('all');

  const filteredItems = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h3 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2">Galería Visual</h3>
            <h2 className="font-display text-4xl md:text-6xl text-white font-extrabold">Lookbook</h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
            {['all', 'novias', 'social', 'editorial', 'quinceañeras'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${
                  filter === cat 
                    ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/40' 
                    : 'bg-transparent border-gray-700 text-gray-300 hover:border-brand-primary hover:text-white'
                }`}
              >
                {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-yellow-300 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                  <h4 className="text-white text-2xl font-display font-bold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <a href="https://instagram.com/dazstudiobeauty" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-dark rounded-full font-bold transition-colors uppercase text-sm tracking-wide gap-2">
             Más en Instagram 📸
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;