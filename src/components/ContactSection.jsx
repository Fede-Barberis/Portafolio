import { SocialContacts } from './SocialLinks';
import { IconWorld } from '@tabler/icons-react';

const Contacto = () => {
    return (
        <section id='contacto' className="scroll-m-20 flex flex-col mt-24">
            <div className="space-y-6">
                <header className="flex gap-2">
                    <IconWorld stroke={2} className='text-gray-600'/>
                    <h2 className='text-xl font-heading font-medium text-gray-800'>Pongámonos en contacto</h2>
                </header>
                <p className='text-black/50'>No dudes de escribirme en <a href="mailto:fedeandresbarberis@gmail.com" className='underline'>fedeandresbarberis@gmail.com</a>
                </p>
                <nav>
                    <SocialContacts />
                </nav>
            </div>
            <div className='mt-24 w-full mb-8'>
                <p className='text-center text-blue-400'>Hecho con pasión y código. 💻✨</p>
            </div>
        </section>
    )
}

export default Contacto


