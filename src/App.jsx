import Container from "./components/Container"
import NavBar from "./components/NavBar"
import Inicio from "./components/HomeSection"
import Experiencia from "./components/ExperienceSection"
import Proyectos from "./components/ProjectsSection"
import SobreMi from "./components/AboutSection"
import Contacto from "./components/ContactSection"
import Habilidades from "./components/SkillsSection"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <NavBar />  
        <Inicio />
        <Habilidades />
        <Experiencia />
        <Proyectos />
        <SobreMi />
        <Contacto />
      </div>

      <Footer />
    </>
  );
}


export default App
