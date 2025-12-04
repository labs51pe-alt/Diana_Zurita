import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="font-display text-3xl font-extrabold tracking-tighter block mb-6">
              DIANA<span className="text-brand-primary">ZURITA</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Realzando tu belleza natural con la mejor energía. Servicio profesional 100% a domicilio en Lima, Perú.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/dazstudiobeauty" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-white font-display text-lg">Explorar</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><a href="#inicio" className="hover:text-brand-primary transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-primary transition-colors">Servicios</a></li>
              <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfolio</a></li>
              <li><a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-white font-display text-lg">Servicios</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Novias</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Social & Fiesta</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Editorial</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Clases</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-white font-display text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li>Todo a domicilio en Lima</li>
              <li>dazstudiobeauty@gmail.com</li>
              <li>(51) 921 532 764</li>
              <li className="pt-4">
                 <a href="#contacto" className="text-brand-primary font-bold hover:underline">Solicitar cotización</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <div className="flex flex-col md:flex-row items-center gap-1 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} DAZ Studio Beauty.</p>
            <span className="hidden md:inline mx-2 text-gray-700">|</span>
            <p>
              Desarrollado por <span className="text-brand-primary font-bold hover:text-white transition-colors cursor-pointer">MAGO26</span>
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;