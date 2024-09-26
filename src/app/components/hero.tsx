"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Fede from "../../../public/img/fede-removebg-preview.png";
import { Check} from 'lucide-react';


export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen mb-12 w-full overflow-hidden bg-gradient-to-b from-background_color via-bordo to-background_color">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
        
        <div className="md:w-1/2 md:mb-0">
          <Image
            src={Fede}
            alt="Entrenador personal mostrando su físico en forma"
            width={340}
            height={400}  
            className=""
            priority
          />
        </div>
        
        <div className="md:w-1/2 md:pl-8">
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white shadow-xl">
            <h1 className="text-2xl md:text-4xl text-center font-bold mb-4 text-white">
              TRANSFORMA TU CUERPO, MEJORA TU VIDA
            </h1>
            <p className="text-lg text-center mb-6">
              Entrenamientos personalizados para alcanzar tu mejor versión. Ya sea que busques ganar fuerza, perder peso o mejorar tu rendimiento, estoy aquí para ayudarte a cumplir tus objetivos.
            </p>
            <ul className="mb-6 space-y-2">
              {['Programas personalizados', 'Entrenamiento en línea', 'Asesoría nutricional'].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className='w-5 h-5 text-rojo' />
                  {item}
                </li>
              ))}
            </ul>

            <button className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity py-4 w-full text-lg bg-black rounded-[16px] bg-gradient-to-t from-bordo to-rojo active:scale-95 duration-300">
              Contáctame Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
