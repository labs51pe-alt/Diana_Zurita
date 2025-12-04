import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        
        {/* Brand & Description */}
        <div className="flex flex-col items-center mb-10">
          <a href="#" className="font-display text-4xl font-extrabold tracking-tighter block mb-4">
            DIANA<span className="text-brand-primary">ZURITA</span>
          </a>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg font-medium">
            Realzando tu belleza natural con la mejor energía. Servicio profesional 100% a domicilio en Lima, Perú.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://instagram.com/dazstudiobeauty" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary hover:scale-110 transition-all duration-300 group"
            aria-label="Instagram"
          >
            <Instagram size={24} className="group-hover:text-white" />
          </a>
          <a 
            href="https://wa.me/51921532764" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:scale-110 transition-all duration-300 group"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} className="group-hover:text-white" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 group"
            aria-label="Facebook"
          >
            <Facebook size={24} className="group-hover:text-white" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8 max-w-2xl mx-auto"></div>

        {/* Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-xs md:text-sm text-gray-500 font-medium">
          <p>&copy; 2025 DAZ Studio Beauty.</p>
          <span className="hidden md:inline mx-1">|</span>
          <p>
            Desarrollado por <span className="text-brand-primary font-bold">MAGO26</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;