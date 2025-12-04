import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', date: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo a la brevedad para confirmar disponibilidad.');
    setFormState({ name: '', email: '', service: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-accent/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* CTA Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-4">¿Lista para brillar? ✨</h2>
            <p className="text-xl text-gray-300 mb-8 font-medium">La agenda se llena rápido (especialmente findes). ¡No te quedes sin fecha!</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a href="https://wa.me/51921532764" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all shadow-lg hover:shadow-[#25D366]/40 transform hover:-translate-y-1">
                    <MessageCircle size={24} />
                    WhatsApp Directo
                </a>
                <a href="tel:+51921532764" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-brand-dark transition-all">
                    <Phone size={24} />
                    Llamar Ahora
                </a>
            </div>
        </div>

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="w-full lg:w-2/5 p-10 md:p-14 bg-gradient-to-br from-brand-accent to-brand-primary text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold mb-2">Hablemos</h3>
              <p className="mb-10 opacity-90 font-medium">
                Atención personalizada y buena onda garantizada.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-white/70 uppercase tracking-wide font-bold">Teléfono / WhatsApp</p>
                      <p className="font-bold text-lg">(51) 921 532 764</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-white/70 uppercase tracking-wide font-bold">Email</p>
                      <p className="font-bold text-lg break-all md:break-normal">dazstudiobeauty@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-white/70 uppercase tracking-wide font-bold">Ubicación</p>
                      <p className="font-bold text-lg">A domicilio (Movilidad S/18 base)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md">
                  <p className="text-yellow-300 font-bold mb-1 text-lg">🎁 Promo del Mes</p>
                  <p className="text-sm font-medium">15% OFF en paquete "Novia + Madrina" si reservas hoy.</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5 p-10 md:p-14 bg-white text-brand-dark">
            <h3 className="text-3xl font-display font-bold mb-6">Envíame un DM</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nombre *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:ring-0 focus:border-brand-primary outline-none transition-all bg-gray-50 font-medium"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp *</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:ring-0 focus:border-brand-primary outline-none transition-all bg-gray-50 font-medium"
                    placeholder="(51)..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Servicio *</label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:ring-0 focus:border-brand-primary outline-none transition-all bg-gray-50 font-medium"
                  >
                    <option value="">Selecciona...</option>
                    <option value="novia">Maquillaje de Novia</option>
                    <option value="social">Evento Social</option>
                    <option value="editorial">Sesión de Fotos</option>
                    <option value="clases">Clases de Automaquillaje</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Fecha</label>
                  <input
                    type="date"
                    name="date"
                    value={formState.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:ring-0 focus:border-brand-primary outline-none transition-all bg-gray-50 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Detalles</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:ring-0 focus:border-brand-primary outline-none transition-all bg-gray-50 font-medium"
                  placeholder="Cuéntame hora, lugar y qué estilo te gusta..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-lg mt-4 text-lg"
              >
                <span>Cotizar Ahora</span>
                <Send size={20} />
              </motion.button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;