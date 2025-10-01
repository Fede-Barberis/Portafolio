import fotoPerfil from "../assets/images/perfil.png";
import { SocialLinks } from "./SocialLinks";


const Inicio = () => {
    return (
        <section id="inicio" className="flex flex-col pt-10 sm:pt-20">
            <header className="space-y-6">
                <div className="flex flex-row gap-5">
                    <img 
                        className="rounded-full shadow w-28 h-28 object-cover object-top"
                        src={fotoPerfil} 
                        alt="Avatar" 
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-heading font-medium">Federico Barberis</h1>
                        <p className="text-blue-500">Desarrollador Full Stack</p>
                    </div>
                </div>
                <div className="grid sm:flex sm:flex-row sm:items-center gap-2">
                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-3 py-1 ">
                        <span className="relative flex size-2">
                            <span className="absolute h-full w-full animate-pulse rounded-full bg-emerald-500"></span>
                        </span>
                        <span className="text-sm text-gray-700 p-1">Buscando mi primer experiencia IT</span></div>
                    <a href="https://www.linkedin.com/in/fede-barberis-49ba1a30a/"></a>
                    <nav className="inline-flex gap-4 justify-center">
                        <SocialLinks />
                    </nav>
                </div>
            </header> 
            <div className="mt-10">
                <p className=" text-md text-black/50">
                    Técnico Universitario en Programación. Me apasiona crear soluciones digitales modernas y funcionales, aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente. Siempre con entusiasmo y ganas de aportar valor en cada proyecto.
                </p>
            </div>
            <div className="mt-8 ">
                <a 
                    href="/Cv-Federico-Barberis.pdf"
                    download
                    className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-blue-100 hover:border-blue-700 transition-all duration-300 cursor-pointer"
                >
                    Descargar CV
                </a>
            </div>
        </section>
    )
}

export default Inicio;