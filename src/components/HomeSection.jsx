import fotoPerfil from "../assets/foto_perfil.jpg";
import SocialLinks from "./SocialLinks";


const Home = () => {
    return (
        <section id="home" className="flex flex-col min-h-screen pt-16">
            <div className="flex flex-row gap-5">
                <img 
                    className="rounded-full shadow w-16 h-16 object-fill "
                    src={fotoPerfil} 
                    alt="Avatar" 
                />
                <div className="flex flex-col">
                    <h1 className="text-2xl font-heading font-medium">Federico Barberis</h1>
                    <p className="text-blue-500">Desarrollador Full Stack</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2 mt-5">
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-3 py-1 ">
                    <span className="relative flex size-1.5">
                        <span className="absolute h-full w-full animate-ping rounded-full opacity-75 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm text-gray-900">Buscando mi primer experiencia IT</span></div>
                <a href="https://www.linkedin.com/in/fede-barberis-49ba1a30a/"></a>
                <nav className="inline-flex gap-4">
                    <SocialLinks />
                </nav>
            </div>
            <div className="mt-10">
                <p className=" text-md text-gray-600">
                    Técnico Universitario en Programación. Me apasiona crear soluciones digitales modernas y funcionales, aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente. Siempre con entusiasmo y ganas de aportar valor en cada proyecto.
                </p>
            </div>
            <div className="mt-8 ">
                <a 
                    href="/Cv-Federico-Barberis.pdf"
                    download
                    className="rounded-xl border border-gray-300 px-3 py-2 text-gray-800 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer"
                >
                    Descargar CV
                </a>
            </div>
        </section>
    )
}

export default Home;