import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: 'novias',
    title: 'Novias Glow',
    description: 'El día más importante merece un maquillaje impecable. Brilla desde el altar hasta la fiesta.',
    price: 'S/350',
    duration: '90-120 min',
    includes: ['Prueba de maquillaje', 'Skin Prep de lujo', 'Pestañas premium', 'Kit de retoque', 'Traslado sin costo*'],
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2036&auto=format&fit=crop',
    popular: true
  },
  {
    id: 'social',
    title: 'Social & Party',
    description: '¿Invitada a una boda o evento? Logramos ese look "effortless" pero impactante.',
    price: 'S/150',
    duration: '60 min',
    includes: ['Preparación de piel', 'Técnicas 24h', 'Pestañas incluidas', 'Fotos para tus redes'],
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'editorial',
    title: 'Editorial / Shoot',
    description: 'Para tu book, marca personal o contenido. Maquillaje HD listo para cámara.',
    price: 'S/200',
    duration: '90 min',
    includes: ['Maquillaje HD/4K', 'Contouring Pro', 'Cambios de look', 'Asistencia en set'],
    image: 'https://images.unsplash.com/photo-1487412912498-0447507fdd96?q=80&w=2076&auto=format&fit=crop'
  },
  {
    id: 'clases',
    title: 'Clases Makeup',
    description: 'Saca partido a tu rostro. Aprende a maquillarte como una pro con tus propios productos.',
    price: 'S/180',
    duration: '3 horas',
    includes: ['100% Práctico', 'Revisión de tu neceser', 'Guía PDF de regalo', 'Certificado'],
    image: 'https://images.unsplash.com/photo-1512207846876-bb54ef5056fe?q=80&w=2070&auto=format&fit=crop'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-light relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2"
          >
            Menú de Servicios
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="font-display text-4xl md:text-5xl text-brand-dark font-extrabold mb-4"
          >
            Elige tu Experiencia
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              key={service.id} 
              className={`bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-2 flex flex-col h-full border-2 ${service.popular ? 'border-brand-primary relative' : 'border-transparent'}`}
            >
              {service.popular && (
                <div className="bg-brand-primary text-white text-xs font-bold text-center py-1.5 uppercase tracking-wider absolute top-4 right-4 rounded-full px-4 z-20 shadow-lg">
                  Top Choice
                </div>
              )}
              
              <div className="h-56 overflow-hidden relative group">
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-sm text-gray-400 font-bold uppercase">Desde</span>
                    <span className="text-4xl font-extrabold text-brand-primary tracking-tight">{service.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow font-medium">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-brand-light rounded-full p-1 shrink-0 mt-0.5 text-brand-accent">
                         <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-gray-600 text-sm font-bold">{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#contacto"
                  className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
                      service.popular 
                      ? 'bg-brand-primary text-white hover:bg-brand-accent shadow-lg shadow-brand-primary/30' 
                      : 'bg-gray-100 text-brand-dark hover:bg-brand-dark hover:text-white'
                  }`}
                >
                  Reservar Ahora <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;