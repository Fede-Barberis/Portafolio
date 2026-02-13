import { motion } from 'framer-motion';

function NavBar() {
    return (
        <motion.header
            className='flex flex-col w-full py-5 sm:pt-24 mx-auto max-w-full justify-center items-center md:justify-between md:items-start'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <nav>
                <ul className="flex flex-col sm:flex-row items-center gap-10 sm:gap-5 text-black/60 ">
                    <li>
                        <a 
                            href="#habilidades" 
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
                        >
                            Habilidades
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#experiencia" 
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
                        >
                            Experiencia
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#proyectos" 
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
                        >
                            Proyectos
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#sobreMi" 
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
                        >
                            Sobre mí
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#contacto" 
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
                        >
                            Contacto
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
}

export default NavBar;

// export default function NavBar() {
//     return (
//         <header className="flex flex-col w-full pt-6 sm:pt-24 mx-auto max-w-full py-4 justify-center items-center md:justify-between md:items-start">
//             <nav>
//                 <ul className="columns-2 sm:flex items-center gap-10 sm:gap-5 text-black/60 ">
//                     {/* <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li> */}
//                     <li><a href="#experiencia" className="hover:text-blue-500">Experiencia</a></li>
//                     <li><a href="#proyectos" className="hover:text-blue-500">Proyectos</a></li>
//                     <li><a href="#sobreMi" className="hover:text-blue-500">Sobre mi</a></li>
//                     <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }