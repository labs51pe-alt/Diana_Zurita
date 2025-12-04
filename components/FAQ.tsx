import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "¿Qué marcas usas? (Soy picky con mi piel)",
    answer: "¡Te entiendo! Solo uso alta gama: MAC, Huda Beauty, Fenty Beauty, NARS, Charlotte Tilbury. Todo hipoalergénico y HD. Tu piel estará segura y divina."
  },
  {
    question: "¿Vas a mi casa?",
    answer: "¡Exacto! Todo es 100% a domicilio en Lima. Yo llevo el estudio a tu casa: luces, silla, maletín profesional. Tú solo relájate."
  },
  {
    question: "¿Cuánto dura el makeup?",
    answer: "Mis técnicas son blindadas. Te garantizo de 12 a 16 horas intacta. Puedes llorar, sudar y bailar, el maquillaje se queda contigo."
  },
  {
    question: "¿Necesito prueba de novia?",
    answer: "¡SÍ! Es nuestro momento para experimentar. Así el día de la boda vamos a lo seguro y tú estás 100% relajada. Agenda 2-3 semanas antes."
  },
  {
    question: "¿Anticipación para reservar?",
    answer: "Novias: 2-3 meses (las fechas vuelan). Social: Mínimo 2 semanas. Si es urgente escríbeme, a veces ocurren milagros de agenda."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Dudas Frecuentes</h2>
          <p className="text-gray-600 font-medium">Todo claro, sin letras chiquitas.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 border-2 ${openIndex === index ? 'border-brand-primary shadow-lg bg-brand-light/30' : 'border-gray-100 bg-white hover:border-brand-primary/30'}`}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg font-display ${openIndex === index ? 'text-brand-primary' : 'text-brand-dark'}`}>
                    {item.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-primary text-white' : 'bg-gray-100 text-brand-dark'}`}>
                    {openIndex === index ? (
                    <Minus size={20} />
                    ) : (
                    <Plus size={20} />
                    )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 font-medium leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;