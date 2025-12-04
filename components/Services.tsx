import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: 'express',
    title: 'Maquillaje Express',
    description: 'Piel fresca, correcciones puntuales y realce natural.',
    price: 'Desde S/35',
    duration: '40 min',
    includes: ['Piel ligera', 'Cejas naturales', 'Labios hidratados'],
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dia',
    title: 'Maquillaje de Día',
    description: 'Acabado luminoso y sofisticado para eventos diurnos.',
    price: 'S/60 - S/80',
    duration: '60 min',
    includes: ['Prep de piel básica', 'Tonos neutros', 'Pestañas (opcional)'],
    image: 'https://images.unsplash.com/photo-1588513077610-6c929df57202?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'full-color',
    title: 'Maquillaje Full Color',
    description: 'Creatividad pura. Cortes y colores vibrantes.',
    price: 'S/100 - S/130',
    duration: '90 min',
    includes: ['Técnica Cut Crease', 'Piel Blindada', 'Pestañas 3D'],
    image: 'https://images.unsplash.com/photo-1502451559902-1dc30c6fb0e8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'glam',
    title: 'Maquillaje Glam',
    description: 'Look de noche impactante. Full cobertura.',
    price: 'S/120 - S/150',
    duration: '90 min',
    includes: ['Piel alta cobertura', 'Contouring Pro', 'Pestañas Premium'],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'quince',
    title: 'Maquillaje Quinceañera',
    description: 'Resalta tu juventud en tu gran día.',
    price: 'S/150 - S/200',
    duration: '120 min',
    includes: ['Prueba de color', 'Piel HD', 'Kit de retoque'],
    image: 'https://images.unsplash.com/photo-1534008770285-b1a729e92621?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'editorial',
    title: 'Maquillaje Editorial',
    description: 'Perfección técnica para fotografía o books.',
    price: 'S/180 - S/260',
    duration: '120+ min',
    includes: ['Acabado 4K/8K', 'Estilismo facial', 'Asistencia en set'],
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nupcial',
    title: 'Maquillaje Nupcial',
    description: 'El servicio premium por excelencia. Atención VIP.',
    price: 'S/250 - S/350',
    duration: '180 min',
    includes: ['Skin Prep de lujo', 'Pestañas Mink', 'Kit Retoque', 'Velo de novia'],
    image: 'https://images.unsplash.com/photo-1595167664654-20b17169623d?q=80&w=800&auto=format&fit=crop',
    popular: true
  }
];

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = 320; // Aproximadamente el ancho de una tarjeta + gap
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
  };

  return (
    <section id="servicios" className="py-20 bg-brand-light relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50 z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h3 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2"
          >
            Tarifario 2024
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="font-display text-4xl md:text-5xl text-brand-dark font-extrabold"
          >
            Elige tu Experiencia
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
            {/* Arrows */}
            <button 
                onClick={() => scroll('left')} 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white p-3 rounded-full shadow-lg text-brand-dark hover:text-brand-primary hover:scale-110 transition-all hidden md:flex items-center justify-center border border-gray-100"
                aria-label="Anterior"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={() => scroll('right')} 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white p-3 rounded-full shadow-lg text-brand-dark hover:text-brand-primary hover:scale-110 transition-all hidden md:flex items-center justify-center border border-gray-100"
                aria-label="Siguiente"
            >
                <ChevronRight size={24} />
            </button>

            {/* Scrollable Area */}
            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-5 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide px-2"
                style={{ scrollBehavior: 'smooth' }}
            >
                {servicesData.map((service, index) => (
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        key={service.id} 
                        className={`min-w-[280px] md:min-w-[300px] bg-white rounded-2xl overflow-hidden shadow-md snap-center flex flex-col h-auto border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.popular ? 'border-brand-primary ring-1 ring-brand-primary relative' : 'border-gray-100'}`}
                    >
                        {service.popular && (
                            <div className="bg-brand-primary text-white text-[10px] font-bold text-center py-1 uppercase tracking-wider absolute top-3 right-3 rounded-full px-3 z-20 shadow-sm">
                            Top Choice
                            </div>
                        )}
                        
                        <div className="h-32 overflow-hidden relative group shrink-0">
                            <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                            <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="font-display text-lg font-bold text-brand-dark leading-tight mb-2">{service.title}</h3>
                            
                            <div className="mb-3">
                                <span className="text-xl font-extrabold text-brand-primary tracking-tight">{service.price}</span>
                                {service.id === 'nupcial' && <span className="text-[10px] text-gray-500 block leading-tight font-bold mt-1">*Con prueba sube a S/400</span>}
                            </div>
                            
                            <p className="text-gray-600 text-xs font-medium mb-4 flex-grow leading-relaxed line-clamp-2">{service.description}</p>
                            
                            <div className="space-y-1.5 mb-5">
                            {service.includes.slice(0, 3).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                <div className="bg-brand-light rounded-full p-0.5 shrink-0 mt-0.5 text-brand-accent">
                                    <Check size={10} strokeWidth={3} />
                                </div>
                                <span className="text-gray-500 text-xs font-bold">{item}</span>
                                </div>
                            ))}
                            </div>

                            <a 
                            href="#contacto"
                            className={`w-full py-2.5 rounded-lg font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 ${
                                service.popular 
                                ? 'bg-brand-primary text-white hover:bg-brand-accent' 
                                : 'bg-gray-100 text-brand-dark hover:bg-brand-dark hover:text-white'
                            }`}
                            >
                            Reservar <ArrowRight size={14} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Transport Note */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 flex justify-center"
        >
            <div className="bg-white/80 backdrop-blur-sm border border-brand-primary/20 rounded-xl p-4 max-w-2xl flex items-start md:items-center gap-3 shadow-sm">
                <div className="bg-brand-light p-2 rounded-full shrink-0">
                    <Info size={20} className="text-brand-primary" />
                </div>
                <p className="text-sm text-gray-600 font-medium">
                    <span className="font-bold text-brand-dark">Nota Importante:</span> El servicio es a domicilio. 
                    El costo de movilidad es adicional y <span className="font-bold text-brand-primary">está sujeto al distrito y distancia</span>.
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;