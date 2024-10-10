import React from "react";
import { Compare } from "../../components/ui/aceternity/compare";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";
import { User } from "lucide-react";

const Clientes = () => {
  return (
    <div className="min-h-screen bg-background_color text-white p-8 lg:p-16">
      {/* Section Header */}
      <div className="mb-8 mt-10 w-full text-left">
        <SubtitleSections title={"Testimonios"} Icon={User} />
        <TitleSections title={"Experiencia de mis clientes"} />
        <p className="text-base lg:text-lg text-zinc-300 font-semibold">
          Nuestro programa no solo{" "}
          <span className="text-rojo font-extrabold">transforma tu cuerpo</span>
          , también{" "}
          <span className="text-rojo font-extrabold">
            fortalece tu mente y autoestima
          </span>
          . Lee las experiencias de quienes ya han logrado un cambio completo en
          su vida.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="p-4 border rounded-3xl bg-background_color border-background_color flex flex-col gap-10 items-center justify-center">
      <div className="md:flex md:justify-center md:items-center md:gap-4 w-full">
          <Compare
            firstImage="/img/cambio1.png"
            secondImage="/img/cambio2.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
            slideMode="hover"
          />
          <p className="text-white font-medium md:text-left md:w-1/2">
            "Gracias al programa, mejoré mi físico y recuperé mi confianza. Me
            siento más fuerte, tanto mental como emocionalmente." – María G.
          </p>
        </div>

        {/* Second Testimonial */}
        <div className="md:flex md:justify-center md:items-center md:gap-4 w-full">
          <Compare
            firstImage="/img/cambio3.png"
            secondImage="/img/cambio4.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
            slideMode="hover"
          />
          <p className="text-white font-medium md:text-left md:w-1/2">
            "Nunca me había sentido tan bien. Mi energía y autoestima están por
            las nubes desde que comencé con este entrenamiento." – Juan P.
          </p>
        </div>

        {/* Third Testimonial */}
        <div className="md:flex md:justify-center md:items-center md:gap-4 w-full">
          <Compare
            firstImage="/img/cambio5.png"
            secondImage="/img/cambio6.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
            slideMode="hover"
          />
          <p className="text-white font-medium md:text-left md:w-1/2">
            "Este programa cambió mi vida. No solo me veo mejor, también me siento
            increíblemente fuerte y positivo." – Lucía M.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
