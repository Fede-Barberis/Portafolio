import { IconBriefcase } from '@tabler/icons-react';

export default function NavBar() {
    return (
        <header className="flex flex-col sm:flex-row w-full pt-6 sm:pt-16 mx-auto max-w-full py-4 justify-center items-center md:justify-between md:items-start">
            <nav>
                <ul className="flex flex-col items-center gap-5 text-black/60 sm:flex-row">
                    <li><a href="#inicio" className="hover:text-blue-500">Inicio</a></li>
                    <li><a href="#experiencia" className="hover:text-blue-500">Experiencia</a></li>
                    <li><a href="#proyectos" className="hover:text-blue-500">Proyectos</a></li>
                    <li><a href="#sobreMi" className="hover:text-blue-500">Sobre mi</a></li>
                    <li><a href="#contacto" className="hover:text-blue-500">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}
