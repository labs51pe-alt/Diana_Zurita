import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Heart, Zap } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    id: 1,
    title: 'Formación Vanguardista',
    description: 'Certificada con las últimas técnicas del mercado. Adiós a lo anticuado.',
    icon: Award
  },
  {
    id: 2,
    title: 'Marcas Premium',
    description: 'Mi kit es mi orgullo: MAC, Huda Beauty, Fenty. Solo lo mejor para ti.',
    icon: Star
  },
  {
    id: 3,
    title: '100% Dedicación',
    description: 'Al ser exclusiva, me tomo el tiempo necesario. Sin prisas, solo perfección.',
    icon: Heart
  },
  {
    id: 4,
    title: 'Fresh Trends',
    description: 'Conozco lo que está de moda en redes y pasarelas. Tu look será actual.',
    icon: Zap
  }
];

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1579619145942-1e941dfcd6ba?q=80&w=2000&auto=format&fit=crop" 
                alt="Diana Zurita Maquilladora Profesional" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-brand-light rounded-3xl -z-10 rotate-3"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-primary rounded-full opacity-20 blur-2xl z-0"></div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute top-10 -right-6 bg-brand-dark p-6 rounded-2xl shadow-xl z-20 hidden md:block rotate-6"
            >
               <p className="font-display text-4xl font-extrabold text-brand-primary text-center">DAZ</p>
               <p className="text-xs font-bold uppercase tracking-wide text-white text-center">Studio</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4">La Historia 👋</h3>
            <h2 className="font-display text-4xl md:text-6xl text-brand-dark font-extrabold mb-6">Pasión por el <span className="text-brand-accent">Detalle.</span></h2>
            
            <div className="prose prose-lg text-gray-600 mb-8 font-medium leading-relaxed">
              <p className="mb-6">
                <strong>DAZ Studio Beauty</strong> es un estudio de maquillaje que nace de un proceso de dedicación, estudio constante y un deseo real de ofrecer un servicio profesional y moderno. A lo largo del tiempo he perfeccionado mi técnica y mi enfoque, priorizando una preparación de piel impecable y un acabado que se adapte al estilo de cada cliente, desde looks suaves hasta propuestas Full Color y Glam.
              </p>
              <p>
                Mi objetivo es que cada persona viva una experiencia cuidada, segura y cómoda, donde cada detalle esté pensado con estándares altos de higiene, precisión y calidad. En <strong>DAZ Studio Beauty</strong> cada servicio es personalizado, respetando la visión de cada cliente y transformándola en un resultado pulido y elegante.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-brand-dark text-white px-6 py-3 rounded-full font-bold shadow-lg transform -rotate-1">
                Experiencia Segura y Cómoda ✨
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fusioned Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-brand-light/50 p-6 rounded-2xl border border-transparent hover:border-brand-primary hover:bg-white transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                  <benefit.icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark leading-tight">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 text-sm font-medium leading-relaxed pl-1">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;