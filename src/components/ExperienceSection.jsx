import { IconBriefcase } from '@tabler/icons-react';

const Experiencia = () => {
    return (
        <section id="experiencia" className="scroll-m-20 flex flex-col mt-24">
            <div className='space-y-6 '>
                <header className='flex fle-row gap-2'>
                    <IconBriefcase stroke={2} className='text-gray-600' />
                    <h2 className="text-xl font-heading font-medium text-gray-800">Experiencia Laboral</h2>
                </header>
                <main>
                    <ul>
                        <li className='space-y-6'>
                            <div>
                                <div className='space-y-1'>
                                    <p className='text-md text-black/85'>Fábrica - 500Millas</p>
                                    <h2 className='text-xl font-heading font-semibold '>Operario polivalente</h2>
                                </div>
                                <p className='text-sm pt-2 text-blue-300'>Enero 2022 - Actualidad</p>
                            </div>
                            <ul className="space-y-1 list-disc list-inside text-black/50 text-md">
                                <li>Planificación y producción de alimentos artesanales, manteniendo consistencia en calidad.</li>
                                <li>Implementación de procesos de empaquetado y control de calidad.</li>
                                <li>Optimización de la gestión de stock e inventario, mejorando el seguimiento.</li>
                                <li>Coordinación de la logística y distribución local para asegurar entregas en tiempo y forma.</li>
                                <li>Trabajo en equipo en un entorno dinámico, fomentando la colaboración y la mejora continua.</li>
                            </ul>
                        </li>
                    </ul>
                </main>
            </div>
        </section>
    )
}

export default Experiencia