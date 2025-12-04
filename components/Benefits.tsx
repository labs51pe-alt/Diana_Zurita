import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Heart, Clock } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    id: 1,
    title: 'Experiencia Top',
    description: 'Maquilladora certificada con 8+ años creando looks de impacto.',
    icon: Award
  },
  {
    id: 2,
    title: 'Marcas Premium',
    description: 'Solo uso lo mejor: MAC, Huda Beauty, Fenty. ¡Tu piel lo merece!',
    icon: Star
  },
  {
    id: 3,
    title: '100% Tú',
    description: 'Asesoría personalizada. No te disfrazo, realzo quien eres.',
    icon: Heart
  },
  {
    id: 4,
    title: 'Long Lasting',
    description: 'Técnicas blindadas. Baila toda la noche, tu makeup seguirá ahí.',
    icon: Clock
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-6xl text-brand-dark font-extrabold mb-4"
          >
            ¿Por Qué Elegirme?
          </motion.h2>
          <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-brand-light p-8 rounded-3xl text-center border-2 border-transparent hover:border-brand-primary hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 group"
            >
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors rotate-3 group-hover:rotate-6">
                <benefit.icon size={36} strokeWidth={2} />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-dark mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-base font-medium leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;