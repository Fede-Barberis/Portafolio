import { motion } from "framer-motion";
import { useState } from "react";
import FadeInSection from "./FadeInSection";
import { IconTool, IconPlus } from '@tabler/icons-react';
import { skills } from "../data/skills";

const Habilidades = () => {
    const [isPaused, setIsPaused] = useState(false);
    
    const rowSize = Math.ceil(skills.length / 3);
    const firstRow = skills.slice(0, rowSize);
    const secondRow = skills.slice(rowSize, rowSize * 2);
    const thirdRow = skills.slice(rowSize * 2);

    const SkillCard = ({ skill }) => (
        <div className={`
            group relative flex-shrink-0
            border-2 rounded-2xl 
            transition-all duration-300 
            hover:shadow-xl hover:scale-105 hover:-translate-y-1
            cursor-pointer overflow-hidden
            ${skill.borderColor}
            w-[200px]
        `}>
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className={`
                relative flex items-center gap-2.5 px-4 py-3
                rounded-2xl transition-all duration-300
                ${skill.groupHoverBg}
            `}>
                <skill.icon 
                    className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} 
                    size={28}
                    stroke={1.5}
                />
                <h2 className='text-sm font-heading font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300'>
                    {skill.name}
                </h2>
            </div>
        </div>
    );

    return (
        <section id="habilidades" className="scroll-m-20 flex flex-col mt-32">
            <FadeInSection className='space-y-8'>
                <header className='flex flex-row items-center gap-3'>
                    <div className="p-2 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg">
                        <IconTool stroke={2} className='text-indigo-600' size={24} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Conocimientos
                    </h2>
                </header>
                
                <main 
                    className="space-y-6 overflow-hidden p-2"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Primera fila - Izquierda a Derecha */}
                    <div className="relative">
                        <motion.div
                            className="flex gap-4"
                            animate={{
                                x: isPaused ? undefined : [0, -1000],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...firstRow, ...firstRow, ...firstRow].map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Segunda fila - Derecha a Izquierda */}
                    <div className="relative">
                        <motion.div
                            className="flex gap-4"
                            animate={{
                                x: isPaused ? undefined : [-1000, 0],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...secondRow, ...secondRow, ...secondRow].map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Tercera fila - Izquierda a Derecha */}
                    <div className="relative">
                        <motion.div
                            className="flex gap-4"
                            animate={{
                                x: isPaused ? undefined : [0, -1000],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 25,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...thirdRow, ...thirdRow, ...thirdRow].map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center mt-6 items-center gap-4">
                        <div className='flex flex-row justify-center'>
                            <a 
                                href="https://www.linkedin.com/in/fede-barberis/details/skills/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex mx-auto gap-2 text-black/60 hover:text-black transition-all duration-300"
                            >
                                <IconPlus />
                                Todas mis habilidades
                            </a>
                        </div>
                    </div>
                </main>
            </FadeInSection>
        </section>
    );
};

export default Habilidades;