"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Fede from "../../../public/img/fede-removebg-preview.png"

export default function   Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen mb-12 w-full overflow-hidden bg-gradient-to-b from-background_color via-red-900 to-background_color">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 md:mb-0"
        >
          <Image
            src={Fede}
            alt="Entrenador personal mostrando su físico en forma"
            width={340}
            height={400}
            className=""
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 md:pl-8"
        >
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white shadow-xl">
            <h1 className="text-2xl md:text-4xl text-center font-bold mb-4 text-white">
            TRANSFORMA TU CUERPO, MEJORA TU VIDA
            </h1>
            <p className="text-lg text-center mb-6">
            Entrenamientos personalizados para alcanzar tu mejor versión. Ya sea que busques ganar fuerza, perder peso o mejorar tu rendimiento, estoy aquí para ayudarte a cumplir tus objetivos.
            </p>
            <ul className="mb-6 space-y-2">
              {['Programas personalizados', 'Entrenamiento en línea', 'Asesoría nutricional'].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>

            <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity py-4 w-full text-lg bg-black rounded-[16px] bg-gradient-to-t from-bordo to-rojo active:scale-95">
              Contáctame Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}