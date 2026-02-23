import { motion, AnimatePresence } from "framer-motion";
import { IconCertificate, IconCheck, IconX, IconDownload, IconZoomIn } from '@tabler/icons-react';
import { useState, useEffect } from "react";
import FadeInSection from "./FadeInSection";

const certificates = [
    {
        title: "TypeScript: Tu completa guía y manual de mano.",
        institution: "Udemy",
        date: "Febrero 2026",
        description: "Aprende TypeScript para mejorar tu programación web, con una base sólida y la confianza para aplicarlo en tus proyectos. Ideal para quienes deseen optimizar su código JavaScript y entrar al mundo de frameworks como Angular.",
        imagePath: "/certificates/Certificado-Udemy-Ts.webp",
        downloadPath: "/certificates/Certificado-Udemy-Ts.pdf"
    },
    // Agrega más certificados aquí
];

const Certificados = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // Prevenir scroll cuando el modal está abierto
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCert]);

    return (
        <>
            <section id="certificados" className="scroll-m-20 flex flex-col mt-32">
                <FadeInSection className="space-y-8">
                    <header className="flex flex-row items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg">
                            <IconCertificate stroke={2} className='text-indigo-600' size={24} />
                        </div>
                        <h2 className="text-3xl font-heading font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Certificados
                        </h2>
                    </header>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Línea vertical */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500"></div>

                        <div className="space-y-8">
                            {certificates.map((cert, index) => (
                                <motion.article
                                    key={index}
                                    className="relative pl-20"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Punto en la línea */}
                                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 border-4 border-white shadow-lg flex items-center justify-center">
                                        <IconCheck size={12} className="text-white" stroke={3} />
                                    </div>

                                    {/* Card */}
                                    <div className="group bg-white rounded-xl border-2 border-gray-200 hover:border-indigo-300 overflow-hidden transition-all duration-300 hover:shadow-xl">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                                        {cert.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        {cert.institution} • {cert.date}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                {cert.description}
                                            </p>

                                            {/* Botones de acción */}
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => setSelectedCert(cert)}
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
                                                >
                                                    <IconZoomIn size={18} />
                                                    Ver Certificado
                                                </button>
                                                {cert.downloadPath && (
                                                    <a
                                                        href={cert.downloadPath}
                                                        download
                                                        className="p-2 rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
                                                        title="Descargar"
                                                    >
                                                        <IconDownload size={20} className="text-gray-600" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Modal Lightbox - Sin texto debajo */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                        style={{ margin: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                    >
                        {/* Fondo oscuro */}
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

                        {/* Contenido del modal */}
                        <motion.div
                            className="relative max-w-5xl w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Botones de acción */}
                            <div className="absolute top-4 right-4 flex gap-2 z-10">
                                {selectedCert.downloadPath && (
                                    <a
                                        href={selectedCert.downloadPath}
                                        download
                                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
                                        title="Descargar certificado"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <IconDownload size={22} className="text-gray-800" />
                                    </a>
                                )}
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
                                    title="Cerrar"
                                >
                                    <IconX size={22} className="text-gray-800" />
                                </button>
                            </div>

                            {/* Solo la imagen, sin texto */}
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh]">
                                <img
                                    src={selectedCert.imagePath}
                                    alt={selectedCert.title}
                                    className="w-full h-auto max-h-[90vh] object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Certificados;