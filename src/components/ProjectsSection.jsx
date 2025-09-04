import { ProjectCardVertical, ProjectCardHorizontal } from "./ProjectCard";
import { projects, moreProjects } from "../data/projects";
import { IconCode, IconBrandGithub } from '@tabler/icons-react';

const Proyectos = () => {
    return (
        <section id="proyectos" className="scroll-m-20 flex flex-col gap-2 mt-24">
            <div className='space-y-6 '>
                <header className='flex flex-row gap-2'>
                    <IconCode stroke={2} className='text-gray-600' />
                    <h2 className="text-xl font-heading font-medium text-gray-800">Proyectos Destacados</h2>
                </header>
                <main>
                    <section className="grid grid-cols-1 gap-14 sm:grid-cols-2 mb-24">
                        {projects.map((project, index) => (
                        <ProjectCardVertical key={index} {...project} />
                        ))}
                    </section>
                    
                    <section className="flex flex-col gap-14 sm:grid-cols-2">
                        <div className="gap-4 overflow-x-auto space-y-12">
                        {moreProjects.map((p, i) => (
                            <ProjectCardHorizontal key={i} {...p} />
                        ))}
                        </div>
                    </section>
                    <div className="flex mt-16 ">
                        <a href="https://github.com/Fede-Barberis" target="_blank" className="flex mx-auto gap-2 text-black/60 hover:text-black"><IconBrandGithub />Todos mis proyectos</a>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Proyectos
