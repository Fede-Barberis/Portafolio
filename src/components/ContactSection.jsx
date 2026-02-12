import { motion } from "framer-motion";
import { SocialContacts } from './SocialLinks';
import { IconWorld, IconMail, IconHeart, IconSend, IconUser, IconMessageCircle } from '@tabler/icons-react';
import FadeInSection from "./FadeInSection";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Configuración de EmailJS
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Parámetros del template
            const templateParams = {
                from_name: formData.nombre,
                from_email: formData.email,
                message: formData.mensaje,
                to_name: 'Federico', // Tu nombre
            };

            // Enviar email
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );
            
            setSubmitStatus('success');
            setFormData({ nombre: '', email: '', mensaje: '' });
            
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Error al enviar el email:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contacto' className="scroll-m-20 mt-32">
            <FadeInSection className="space-y-8">
                <header className="flex flex-row items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg">
                        <IconWorld stroke={2} className='text-indigo-600' size={24} />
                    </div>
                    <h2 className='text-2xl sm:text-3xl font-heading font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
                        Pongámonos en contacto
                    </h2>
                </header>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
                    {/* Formulario */}
                    <motion.div 
                        className="w-full bg-white rounded-2xl p-6 sm:p-8 border border-indigo-200 shadow-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6">
                            Envíame un mensaje
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="nombre" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                    <IconUser size={18} className="text-indigo-600" />
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 text-sm sm:text-base"
                                    placeholder="Tu nombre"
                                />
                            </div>
    
                            <div>
                                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                    <IconMail size={18} className="text-indigo-600" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 text-sm sm:text-base"
                                    placeholder="tu@email.com"
                                />
                            </div>
    
                            <div>
                                <label htmlFor="mensaje" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                                    <IconMessageCircle size={18} className="text-indigo-600" />
                                    Mensaje
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                                    placeholder="Cuéntame sobre tu proyecto o idea..."
                                />
                            </div>
    
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-indigo-500 to-blue-700 text-white font-semibold py-2.5 sm:py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg text-sm sm:text-base"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <IconSend size={20} />
                                        Enviar mensaje
                                    </>
                                )}
                            </button>
    
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm"
                                >
                                    ✓ ¡Mensaje enviado con éxito! Te responderé pronto.
                                </motion.div>
                            )}
    
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                                >
                                    ✗ Hubo un error. Por favor intenta nuevamente.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
    
                    {/* Información de contacto */}
                    <motion.div 
                        className="space-y-6 w-full"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6  border border-indigo-200 shadow-lg">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                                <IconMail className="text-indigo-600 flex-shrink-0" size={24} />
                                <p className='text-gray-700 text-sm sm:text-base break-words'>
                                    No dudes en escribirme a
                                    <br></br>
                                    <a 
                                        href="mailto:fedeandresbarberis@gmail.com" 
                                        className='font-semibold text-indigo-600 hover:text-indigo-800 underline decoration-2 underline-offset-2 transition-colors duration-300 break-all'
                                    >
                                        fedeandresbarberis@gmail.com
                                    </a>
                                </p>
                            </div>
                            <nav>
                                <SocialContacts />
                            </nav>
                        </div>
    
                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                                ¿Por qué contactarme?
                            </h3>
    
                            <ul className="space-y-3 sm:space-y-4">
                                {[
                                    "Desarrollo web moderno",
                                    "Optimización y rendimiento",
                                    "Integración de APIs",
                                    "Automatización de procesos",
                                    "Colaboraciones",
                                    "Consultas técnicas",
                                    "Nuevas oportunidades 🚀",
                                ]
                                .map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group">
                                        <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs sm:text-sm font-bold flex-shrink-0">
                                            ✓
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </FadeInSection>
        </section>
    )
}

export default Contacto;
