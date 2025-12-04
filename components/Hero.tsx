import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Heart, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
          alt="Maquillaje profesional estilo moderno"
          className="w-full h-full object-cover object-center animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/60 via-brand-primary/40 to-black/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 mb-6 hover:bg-white/20 transition-colors cursor-default"
          >
            <Sparkles className="text-yellow-300 w-4 h-4" />
            <span className="text-white font-bold text-sm tracking-wide uppercase">Professional Makeup Artist</span>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-8xl font-black leading-tight mb-6 text-white drop-shadow-2xl tracking-tight">
            Realza tu Belleza <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-white">Natural</span>
          </h1>
          
          <h2 className="text-lg md:text-2xl text-gray-100 mb-10 font-medium max-w-xl leading-relaxed">
            Especialista en novias y pieles blindadas. 
            <span className="block mt-2 font-bold text-yellow-300">Técnicas modernas y acabados perfectos en Lima.</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0px 0px 0px rgba(255, 45, 136, 0)",
                  "0px 0px 30px rgba(255, 45, 136, 0.6)",
                  "0px 0px 0px rgba(255, 45, 136, 0)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity }
              }}
              href="#contacto"
              className="bg-gradient-to-r from-brand-primary via-purple-500 to-brand-primary bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white px-10 py-5 rounded-full font-bold text-lg text-center border-2 border-transparent"
            >
              Reservar mi Cita ✨
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all hover:border-brand-primary"
            >
              Ver Portfolio
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="bg-brand-primary p-2 rounded-full">
                <Heart className="text-white fill-white" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-xl">VIP</span>
                <span className="text-xs text-gray-200 font-bold uppercase">Atención Exclusiva</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="bg-brand-accent p-2 rounded-full">
                <MapPin className="text-white" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-xl">Lima</span>
                <span className="text-xs text-gray-200 font-bold uppercase">A Domicilio</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="bg-yellow-400 p-2 rounded-full">
                <Star className="text-black fill-black" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-xl">Pro</span>
                <span className="text-xs text-gray-200 font-bold uppercase">Técnica Certificada</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;