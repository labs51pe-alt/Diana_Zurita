import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, User, Calendar, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '', date: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    setTimeout(() => {
        setIsSubmitted(true);
    }, 500);
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
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-6xl font-extrabold mb-4"
            >
                ¿Lista para brillar? ✨
            </motion.h2>
            <p className="text-xl text-gray-300 mb-8 font-medium">La agenda se llena rápido (especialmente findes). ¡Asegura tu fecha hoy!</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/51921532764" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#25D366] text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all shadow-lg hover:shadow-[#25D366]/40 transform"
                >
                    <MessageCircle size={24} />
                    WhatsApp Directo
                </motion.a>
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+51921532764" 
                    className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-brand-dark transition-all"
                >
                    <Phone size={24} />
                    Llamar Ahora
                </motion.a>
            </div>
        </div>

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Info Side (Left) */}
          <div className="w-full lg:w-2/5 p-10 md:p-14 bg-gradient-to-br from-brand-accent to-brand-primary text-white relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold mb-2">Contacto VIP</h3>
              <p className="mb-10 opacity-90 font-medium">
                Estoy aquí para resolver tus dudas y crear el look perfecto para ti.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-primary transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-white/70 uppercase tracking-wide font-bold">Teléfono / WhatsApp</p>
                      <p className="font-bold text-lg">(51) 921 532 764</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-primary transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-white/70 uppercase tracking-wide font-bold">Email</p>
                      <p className="font-bold text-lg break-all md:break-normal">dazstudiobeauty@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-primary transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                      <p className="text-xs text-white/70 uppercase tracking-wide font-bold">Ubicación</p>
                      <p className="font-bold text-lg">A domicilio (Movilidad según distrito)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md relative z-10">
                <p className="text-yellow-300 font-bold mb-1 text-lg flex items-center gap-2"><Sparkles size={18} /> Tip DAZ Studio:</p>
                <p className="text-sm font-medium">Reserva con 2 semanas de anticipación para asegurar tu horario ideal.</p>
            </div>

            {/* Decor Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

          {/* Form Side (Right) - Interactive */}
          <div className="w-full lg:w-3/5 p-8 md:p-14 bg-white text-brand-dark relative">
            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="mb-8">
                            <h3 className="text-3xl font-display font-extrabold mb-2 text-brand-dark">¡Hola, guapa! 👋</h3>
                            <p className="text-gray-500 font-medium">Cuéntame un poco sobre tu evento para cotizarte rápido.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-brand-primary uppercase tracking-wide mb-2 ml-1">Tu Nombre</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-gray-50 font-medium placeholder-gray-400"
                                            placeholder="Ej. María Pérez"
                                        />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-brand-primary uppercase tracking-wide mb-2 ml-1">WhatsApp</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-gray-50 font-medium placeholder-gray-400"
                                            placeholder="(51) 999..."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Service Select */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-brand-primary uppercase tracking-wide mb-2 ml-1">¿Qué necesitas?</label>
                                    <div className="relative">
                                        <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                                        <select
                                            name="service"
                                            value={formState.service}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-gray-50 font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="">Selecciona tu Glow...</option>
                                            <option value="novia">👰 Maquillaje de Novia</option>
                                            <option value="social">💃 Evento Social / Fiesta</option>
                                            <option value="quince">👑 Quinceañera</option>
                                            <option value="editorial">📸 Sesión de Fotos</option>
                                            <option value="clases">💄 Clases de Automaquillaje</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Date Input */}
                                <div className="group">
                                    <label className="block text-xs font-bold text-brand-primary uppercase tracking-wide mb-2 ml-1">Fecha Tentativa</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formState.date}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-gray-50 font-medium text-gray-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="group">
                                <label className="block text-xs font-bold text-brand-primary uppercase tracking-wide mb-2 ml-1">Detalles Extra</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all bg-gray-50 font-medium placeholder-gray-400 resize-none"
                                    placeholder="Cuéntame hora, distrito y qué estilo te gustaría..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(255, 45, 136, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-brand-dark to-black text-white font-bold py-5 rounded-2xl hover:bg-gray-900 transition-all flex items-center justify-center gap-3 shadow-xl text-lg group"
                            >
                                <span className="group-hover:text-yellow-300 transition-colors">¡Cotizar Mi Cita!</span>
                                <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center h-full text-center p-6"
                    >
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                            <CheckCircle size={48} className="text-green-500" />
                        </div>
                        <h3 className="text-3xl font-display font-extrabold text-brand-dark mb-4">¡Mensaje Recibido! 🎉</h3>
                        <p className="text-gray-600 font-medium text-lg mb-8 max-w-md">
                            Gracias <strong>{formState.name}</strong>, me pondré en contacto contigo vía WhatsApp lo antes posible para confirmar disponibilidad.
                        </p>
                        <motion.button
                             whileHover={{ scale: 1.05 }}
                             onClick={() => setIsSubmitted(false)}
                             className="text-brand-primary font-bold hover:underline"
                        >
                            Enviar otro mensaje
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;