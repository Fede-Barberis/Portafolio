
export default function NavBar() {
    return (
        <header className="w-full pt-16">
            <nav className="max-w-4xl mx-auto py-4 flex justify-between items-center">
                <ul className="flex gap-6 text-black/60">
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
