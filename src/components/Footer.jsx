import { motion } from "framer-motion";
import { IconHeart, IconBrandGithub, IconBrandLinkedin, IconMail, IconArrowUp } from '@tabler/icons-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        navegacion: [
            { name: 'Inicio', href: '#inicio' },
            { name: 'Habilidades', href: '#habilidades' },
            { name: 'Proyectos', href: '#proyectos' },
            { name: 'Sobre mí', href: '#sobreMi' },
            { name: 'Contacto', href: '#contacto' }
        ],
        social: [
            { name: 'GitHub', href: 'https://github.com/tuusuario', icon: IconBrandGithub },
            { name: 'LinkedIn', href: 'https://linkedin.com/in/tuusuario', icon: IconBrandLinkedin },
            { name: 'Email', href: 'mailto:fedeandresbarberis@gmail.com', icon: IconMail }
        ]
    };

    return (
        <footer className="relative w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white mt-32">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    
                    {/* Column 1: Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                            Federico Barberis
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Desarrollador web apasionado por crear experiencias digitales excepcionales.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>Hecho con</span>
                            <IconHeart className="text-red-400 fill-red-400 animate-pulse" size={16} />
                            <span>y React</span>
                        </div>
                    </motion.div>

                    {/* Column 2: Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {footerLinks.navegacion.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Social & Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Conectemos</h4>
                        <div className="space-y-3">
                            {footerLinks.social.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target={social.name !== 'Email' ? '_blank' : undefined}
                                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors duration-300 group"
                                >
                                    <social.icon 
                                        size={20} 
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <span className="text-sm">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.p 
                        className="text-gray-400 text-sm text-center md:text-left"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        © {currentYear} Federico Barberis. Todos los derechos reservados.
                    </motion.p>

                    <motion.button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-indigo-500/50"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Volver arriba</span>
                        <IconArrowUp 
                            size={18} 
                            className="group-hover:-translate-y-1 transition-transform duration-300"
                        />
                    </motion.button>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        </footer>
    );
};

export default Footer;