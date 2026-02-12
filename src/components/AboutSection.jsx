import { IconSparkles, IconCoffee, IconCode } from '@tabler/icons-react';
import FadeInSection from "./FadeInSection";

const sobreMi = () => {
    return (
        <section id="sobreMi" className="scroll-m-20 flex flex-col mt-32">
            <FadeInSection className="space-y-8">
                <header className="flex flex-row items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg">
                        <IconSparkles stroke={2} className='text-indigo-600' size={24} />
                    </div>
                    <h2 className='text-3xl font-heading font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>Sobre Mí</h2>
                </header>
                <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 rounded-2xl p-8 border border-indigo-200 shadow-lg">
                    <div className='text-gray-700 text-pretty space-y-6 text-base leading-relaxed'>
                        <div className="flex items-start gap-4">
                            <IconCoffee className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                            <p>
                                Soy Técnico Universitario en Programación, orientado al desarrollo web full stack, con experiencia en proyectos personales utilizando React, Node.js, Express y bases de datos SQL y NoSQL.
                                Cuento con experiencia laboral en entornos productivos reales, donde desarrollé habilidades como organización, resolución de problemas, trabajo en equipo y optimización de procesos, aplicables al ámbito IT.
                                Busco mi primera oportunidad como programador junior o trainee, con ganas de seguir aprendiendo, crecer profesionalmente y aportar valor en el desarrollo de soluciones tecnológicas.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <IconCode className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                            <p>
                                Me encanta trabajar en equipo y encontrar soluciones creativas a problemas complejos. Además, en mis ratos libres suelo explorar nuevas ideas, escuchar música y reírme de los bugs que me hicieron perder horas 😄.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    )
}


export default sobreMi
