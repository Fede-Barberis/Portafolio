
import { motion } from "framer-motion";
import fotoPerfil from "../assets/images/fotoPerfil2.png";
import { SocialLinks } from "./SocialLinks";
import { IconDownload, IconSparkles } from "@tabler/icons-react";
import TypeWriterMotion from "../components/TypeWriteMotion";


const Inicio = () => {
    return (
        <section id="inicio" className="flex flex-col pt-4 sm:pt-8 relative">
            <motion.header 
                className="space-y-8 relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8">
                    <div className="flex flex-col justify-center text-center sm:text-left order-2">
                        <TypeWriterMotion text="Federico Barberis" />
                        <motion.p 
                            className="text-xl text-gray-700 font-medium mt-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Desarrollador Full Stack
                        </motion.p>
                    </div>

                    <motion.div
                        className="relative w-72 h-72 order-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 blur-lg opacity-40"
                            style={{
                                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                            }}
                        ></div>

                        <div className="relative w-full h-full overflow-hidden ring-2 ring-white shadow-2xl"
                            style={{
                                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                            }}
                        >
                            <img
                                src={fotoPerfil}
                                alt="Avatar"
                                className="w-full h-full object-cover object-top image-rendering-auto"
                            />
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 px-4 py-2 shadow-md">
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-emerald-700">Buscando mi primer experiencia IT</span>
                    </div>
                    <nav className="inline-flex gap-3">
                        <SocialLinks />
                    </nav>
                </motion.div>
            </motion.header>
            
            <motion.div 
                className="mt-12 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <div className="flex items-start gap-3">
                        <IconSparkles className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                        <p className="text-base text-gray-700 leading-relaxed">
                            Técnico Universitario en Programación. Me apasiona crear soluciones digitales modernas y funcionales, aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente. Siempre con entusiasmo y ganas de aportar valor en cada proyecto.
                        </p>
                    </div>
                </div>
            </motion.div>
            
            <motion.div 
                className="mx-auto sm:mx-0 mt-10 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
                <a 
                    href="/Federico Andrés_Barberis_CV.pdf"
                    download
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                    <IconDownload className="group-hover:animate-bounce" size={20} />
                    Descargar CV
                </a>
            </motion.div>
        </section>
    )
}

export default Inicio;