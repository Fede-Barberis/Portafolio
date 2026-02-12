import portafolio from '../assets/images/portafolio.png'
import gestorNegocio from '../assets/images/gestor-empresa.png'
import webEstatica from '../assets/images/webEstatica.png'
import proximamente from '../assets/images/proximamente.webp'
import pokedex from '../assets/images/pokedex.png'

export const projects = [
  {
    title: 'Gestor Negocio "500Millas"',
    description: "App web para gestionar un emprendimiento, optimizando procesos y reduciendo tareas manuales.",
    image: gestorNegocio,
    link: "https://500-millas-gestor.vercel.app/auth/login",
    repo: "https://github.com/Fede-Barberis/500Millas-Gestor",
    lenguaje: ['React', 'TailwindCSS', 'JavaScript', 'Node.js','MySQL', 'Express', 'Sequelize', 'Etc.']
  },
  {
    title: "Portafolio",
    description: "Mi portafolio personal creado con React y TailwindCSS.",
    image: portafolio,
    link: "https://portafolio-federico-barberis.vercel.app/",
    repo: "https://github.com/Fede-Barberis/Portafolio",
    lenguaje: ['React', 'Tailwind','Vite']
  },
];


export const moreProjects = [
  {
    title: 'Pokedex',
    description: "Aplicación web que permite explorar más de 1300 pokémons con búsqueda instantánea, filtros dinámicos y sistema de favoritos persistente.",
    image: pokedex,
    link: "https://pokedex-react-pink-pi.vercel.app/",
    repo: "https://github.com/Fede-Barberis/Pokedex-React",
    lenguaje: ['React', 'Tailwind','Vite']
  },
  {
    title: "Web Estatica",
    description: "Sitio web multi-página, responsive, con carga de productos vía JSON, validación de formularios y animaciones, Inicio al mundo del desarrollo web.",
    image: webEstatica,
    link: "https://mi-portafolio.com",
    repo: "https://github.com/Fede-Barberis",
    lenguaje: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Proximamente...',
    description: "Proyecto en desarrollo",
    image: proximamente,
    link: "https://mi-app-tareas.com",
    repo: "https://github.com/Fede-Barberis",
    lenguaje: ['...']
  },
];