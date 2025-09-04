import Container from "./components/Container"
import NavBar from "./components/NavBar"
import Inicio from "./components/HomeSection"
import Experiencia from "./components/ExperienceSection"
import Proyectos from "./components/ProjectsSection"
import SobreMi from "./components/AboutSection"


function App() {
  return (
    <Container>
      <NavBar />
      <Inicio />
      <Experiencia />
      <Proyectos />
      <SobreMi />
    </Container>
  ) 
}

export default App
