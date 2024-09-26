import React from "react";
import ShinyButton from "../../components/ui/magic/ShinyButton";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";
import { Grab } from "lucide-react";


export default function Kickboxing() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      \
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        controls
        playsInline
      >
        <source src="/videos/a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8 mt-10">
      <SubtitleSections title={"KickBoxing"} Icon={ Grab }/>
        <TitleSections title={"¿Estas listo para realizar un entrenamiento de kickboxing?"} />
        <p className="text-xl sm:text-2xl mb-8">
          Descubre cómo nuestro entrenamiento puede llevarte al siguiente nivel
        </p>
        <ShinyButton className="bg-rojo hover:bg-bordo text-black font-bold py-3 px-6 rounded-full text-lg">
          Ver programas de entrenamiento
        </ShinyButton>

        {/* Product offerings */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Entrenamiento Básico",
            "Técnicas Avanzadas",
            "Preparación para Competencia",
          ].map((program) => (
            <div
              key={program}
              className="bg-white bg-opacity-10 p-6 rounded-lg last:mb-10"
            >
              <h3 className="text-xl font-semibold mb-2">{program}</h3>
              <p className="text-sm mb-4">
                Descripción breve del programa y sus beneficios para el
                kickboxer.
              </p>
              <ShinyButton className=" bg-rojo hover:bg-bordo">
                Más información
              </ShinyButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
