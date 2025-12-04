import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, Sparkles, Star, Heart } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  { id: 1, title: 'Hablemos', description: 'WhatsApp rápido para entender tu vibe y lo que necesitas.', icon: MessageCircle },
  { id: 2, title: 'Save the Date', description: 'Bloqueamos tu fecha con un adelanto. ¡Ya es tuyo!', icon: CalendarCheck },
  { id: 3, title: 'La Prueba', description: 'Jugamos con colores y estilos hasta que digas "WOW".', icon: Sparkles },
  { id: 4, title: 'Show Time', description: 'Llego puntual. Tú relájate y disfruta el proceso.', icon: Star },
  { id: 5, title: 'You Glow!', description: 'Quedas espectacular y lista para brillar.', icon: Heart },
];

const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-brand-accent text-white overflow-hidden relative">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-extrabold mb-4"
          >
            ¿Cómo Funciona?
          </motion.h2>
          <p className="text-purple-100 text-lg">Sin estrés. Así de fácil es trabajar conmigo.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[30%] left-10 right-10 h-1 bg-purple-400/30 z-0 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-xl shadow-purple-900/20 relative z-10 border-4 border-transparent group-hover:border-brand-primary">
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">{step.id}</span>
                  <step.icon size={36} className="text-brand-accent group-hover:text-brand-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-purple-100 font-medium leading-relaxed px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;