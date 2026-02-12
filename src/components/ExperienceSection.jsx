import { motion } from "framer-motion";
import { IconBriefcase, IconCalendar, IconBuilding } from '@tabler/icons-react';
import FadeInSection from "./FadeInSection";

const Experiencia = () => {
    return (
        <section id="experiencia" className="scroll-m-20 flex flex-col mt-32">
            <FadeInSection className='space-y-8'>
                <header className='flex flex-row items-center gap-3'>
                    <div className="p-2 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg">
                        <IconBriefcase stroke={2} className='text-indigo-600' size={24} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Experiencia Laboral</h2>
                </header>
                <main>
                    <ul>
                        <li className='space-y-6'>
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-l-4 border-indigo-500 shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className='space-y-3'>
                                    <div className="flex items-center gap-2 text-indigo-600">
                                        <IconBuilding size={20} />
                                        <p className='text-sm font-semibold'>Fábrica - 500Millas</p>
                                    </div>
                                    <h2 className='text-2xl font-heading font-bold text-gray-900'>Operario polivalente</h2>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <IconCalendar size={18} />
                                        <p className='text-sm font-medium'>Enero 2022 - Actualidad</p>
                                    </div>
                                </div>
                                <ul className="mt-6 space-y-3 text-gray-700 text-sm leading-relaxed">
                                    <li className="flex items-start gap-3">
                                        <span className="inline-block w-2 h-2 mt-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                                        <span>Planificación y producción de alimentos artesanales, manteniendo consistencia en calidad.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="inline-block w-2 h-2 mt-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                                        <span>Implementación de procesos de empaquetado y control de calidad.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="inline-block w-2 h-2 mt-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                                        <span>Optimización de la gestión de stock e inventario, mejorando el seguimiento.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="inline-block w-2 h-2 mt-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                                        <span>Coordinación de la logística y distribución local para asegurar entregas en tiempo y forma.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="inline-block w-2 h-2 mt-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                                        <span>Trabajo en equipo en un entorno dinámico, fomentando la colaboración y la mejora continua.</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </main>
            </FadeInSection>
        </section>
    )
}

export default Experiencia
