import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`font-display text-2xl md:text-3xl font-extrabold tracking-tight z-50 relative group ${isScrolled || isOpen ? 'text-brand-dark' : 'text-brand-dark md:text-white'}`}>
          DIANA<span className="text-brand-primary group-hover:text-yellow-300 transition-colors">ZURITA</span>
          <span className="block text-[0.6rem] font-body font-bold tracking-[0.2em] text-brand-primary uppercase opacity-90 group-hover:text-white transition-colors">Makeup Artist</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold tracking-wide transition-colors hover:text-brand-primary ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contacto"
            className="bg-brand-primary hover:bg-brand-accent text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-brand-primary/40 border border-transparent hover:border-white/20"
          >
            Reservar Cita
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark z-50 relative p-2 rounded-full hover:bg-white/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} color={isScrolled ? '#111827' : '#FF2D88'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-dark font-display text-3xl font-bold hover:text-brand-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-6">
              <a href="https://instagram.com/dazstudiobeauty" target="_blank" rel="noopener noreferrer" className="bg-brand-light p-3 rounded-full text-brand-dark hover:bg-brand-primary hover:text-white transition-all"><Instagram size={28} /></a>
              <a href="#" className="bg-brand-light p-3 rounded-full text-brand-dark hover:bg-brand-primary hover:text-white transition-all"><Facebook size={28} /></a>
            </div>
            <a
              href="#contacto"
              className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl shadow-brand-primary/30"
              onClick={() => setIsOpen(false)}
            >
              Reservar Ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;