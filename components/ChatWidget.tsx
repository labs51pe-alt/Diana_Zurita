import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Sparkles } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  text: string;
}

const quickOptions = [
  { label: '📍 ¿Vas a domicilio?', answer: '¡Sí! Todo es 100% a domicilio en Lima. Llevo el estudio completo a tu casa para que te relajes.' },
  { label: '💄 ¿Qué marcas usas?', answer: 'Solo alta gama: MAC, Huda Beauty, Fenty, NARS. Hipoalergénico y full HD para fotos increíbles.' },
  { label: '💰 Precios', answer: 'Mis paquetes inician desde S/150 para social y S/350 para novias. ¿Qué evento tienes?' },
  { label: '📅 Reservar cita', answer: '¡Genial! Las fechas vuelan. Por favor déjame tus datos en el formulario de contacto o escríbeme al WhatsApp.' },
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: '¡Hola! Soy el asistente virtual de Diana. ✨ ¿En qué puedo ayudarte hoy para que brilles?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleOptionClick = (option: { label: string; answer: string }) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: option.label }]);
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text: option.answer }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-[340px] md:w-[380px] mb-4 overflow-hidden flex flex-col max-h-[500px]"
            >
              {/* Header */}
              <div className="bg-brand-primary p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary relative">
                    <Sparkles size={20} />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-bold font-display">Diana AI</h3>
                    <p className="text-xs text-brand-light opacity-90">Responde al instante</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4 h-[350px]">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium ${
                      msg.type === 'user' 
                        ? 'bg-brand-primary text-white rounded-br-none' 
                        : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Options */}
              <div className="p-3 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex gap-2">
                  {quickOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(opt)}
                      disabled={isTyping}
                      className="px-3 py-1.5 bg-brand-light text-brand-primary text-xs font-bold rounded-full border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-colors"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-brand-dark text-white p-4 rounded-full shadow-lg shadow-brand-primary/40 flex items-center justify-center relative group"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-primary rounded-full animate-ping"></span>
          )}
        </motion.button>
      </div>
    </>
  );
};

export default ChatWidget;