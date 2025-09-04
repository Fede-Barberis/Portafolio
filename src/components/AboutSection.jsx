import { IconSparkles } from '@tabler/icons-react';

const sobreMi = () => {
    return (
        <section id="sobreMi" className="scroll-m-20 flex flex-col mt-24 ">
            <div className="space-y-6">
                <header className="flex flex-row gap-2">
                    <IconSparkles stroke={2} className='text-gray-600' />
                    <h2 className='text-xl font-heading font-medium text-gray-800'>Sobre Mi</h2>
                </header>
                <div className='text-black/50 text-pretty space-y-4'>
                    <p>
                        Soy Fede! ☕ Un desarrollador apasionado que disfruta de la programación, la tecnología y un buen café. Afronto cada desafío con entusiasmo y curiosidad, siempre buscando aprender algo nuevo. </p>
                    <p>
                        Me encanta trabajar en equipo y encontrar soluciones creativas a problemas complejos. Además, en mis ratos libres suelo explorar nuevas ideas, escuchar música y reírme de los bugs que me hicieron perder horas 😄.
                    </p>
                </div>
            </div>
        </section>
    )
}


export default sobreMi