import Container from "./components/Container"
import NavBar from "./components/NavBar"
import Inicio from "./components/HomeSection"
import Experiencia from "./components/ExperienceSection"


function App() {
  return (
    <Container>
      <NavBar />
      <Inicio />
      <Experiencia />
    </Container>
  ) 
}

export default App
