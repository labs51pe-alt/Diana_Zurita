import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
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
               <p className="font-display text-4xl font-extrabold text-brand-primary text-center">8+</p>
               <p className="text-xs font-bold uppercase tracking-wide text-white">Años de Exp.</p>
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
            <h3 className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4">Hola, soy Diana 👋</h3>
            <h2 className="font-display text-4xl md:text-6xl text-brand-dark font-extrabold mb-6">Más que maquillaje,<br/>es <span className="text-brand-accent">actitud.</span></h2>
            
            <div className="prose prose-lg text-gray-600 mb-8 font-medium">
              <p className="mb-4">
                Mi misión es simple: que te mires al espejo y digas <strong>"¡WOW, esa soy yo!"</strong>. 
              </p>
              <p>
                Con más de 8 años de experiencia, he aprendido que el maquillaje no es para esconderte, es para <span className="text-brand-primary font-bold">celebrarte</span>. He certificado mis técnicas internacionalmente para traerte lo último en tendencias y acabados de piel perfecta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-xl text-brand-primary">
                   <Award className="w-6 h-6" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark font-display text-lg">Certificada</h4>
                  <p className="text-sm text-gray-500 font-bold">Formación Internacional</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-xl text-brand-primary">
                   <CheckCircle className="w-6 h-6" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark font-display text-lg">Alta Gama</h4>
                  <p className="text-sm text-gray-500 font-bold">MAC, NARS, Charlotte</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-brand-dark text-white px-6 py-3 rounded-full font-bold shadow-lg transform -rotate-1">
                Tu belleza, mi arte. 💖
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;