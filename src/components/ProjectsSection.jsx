import { motion } from "framer-motion";
import { ProjectCardVertical, ProjectCardHorizontal } from "./ProjectCard";
import { projects, moreProjects } from "../data/projects";
import { IconCode, IconBrandGithub } from '@tabler/icons-react';
import FadeInSection from "./FadeInSection";

const Proyectos = () => {
    return (
        <section id="proyectos" className="scroll-m-20 flex flex-col gap-2 mt-32">
            <FadeInSection className='space-y-8'>
                <header className='flex flex-row items-center gap-3'>
                    <div className="p-2 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg">
                        <IconCode stroke={2} className='text-indigo-600' size={24} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Proyectos Destacados</h2>
                </header>
                <main>
                    <section className="grid grid-cols-1 gap-14 sm:grid-cols-2 mb-24">
                        {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <ProjectCardVertical {...project} />
                        </motion.div>
                        ))}
                    </section>
                    
                    <section className="flex flex-col gap-14 sm:grid-cols-2">
                        <div className="gap-4 overflow-x-auto space-y-12">
                        {moreProjects.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            >
                                <ProjectCardHorizontal {...p} />
                            </motion.div>
                        ))}
                        </div>
                    </section>
                    <motion.div 
                        className="flex mt-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a href="https://github.com/Fede-Barberis" target="_blank" className="flex mx-auto gap-2 text-black/60 hover:text-black transition-all duration-300"><IconBrandGithub />Todos mis proyectos</a>
                    </motion.div>
                </main>
            </FadeInSection>
        </section>
    )
}

export default Proyectos
