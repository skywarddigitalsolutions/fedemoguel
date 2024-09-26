import React from "react";
import { Compare } from "../../components/ui/aceternity/compare";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";
import { User } from "lucide-react";

const Clientes = () => {
  return (
    <div className="h-screen p-8 rounded-lg">
      <div className="mb-4 mt-10">
          <SubtitleSections title={"Testimonios"} Icon={ User } />
          <TitleSections title={"Experiencia de mis clientes"} />
        <p className="text-sm text-blanco font-semibold">
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

      <div className="p-4 border rounded-3xl bg-background_color  border-background_color px-4 flex flex-col gap-10 items-center justify-center">
        <Compare
          firstImage="/img/Fede.webp"
          secondImage="/img/Fede2.jpeg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[20rem] md:h-[500px] md:w-[20rem]"
          slideMode="hover"
        />

        <p className="text-white font-medium">
          "Gracias al programa, mejoré mi físico y recuperé mi confianza. Me
          siento más fuerte, tanto mental como emocionalmente." – María G.
        </p>

        <Compare
          firstImage="/img/Fede.webp"
          secondImage="/img/Fede2.jpeg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[20rem] md:h-[500px] md:w-[20rem]"
          slideMode="hover"
        />

        <p className="text-white font-medium">
          "Nunca me había sentido tan bien. Mi energía y autoestima están por
          las nubes desde que comencé con este entrenamiento." – Juan P.
        </p>

        <Compare
          firstImage="/img/Fede.webp"
          secondImage="/img/Fede2.jpeg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[20rem] md:h-[500px] md:w-[20rem]"
          slideMode="hover"
        />

        <p className="text-white font-medium">
          "Este programa cambió mi vida. No solo me veo mejor, también me siento
          increíblemente fuerte y positivo." – Lucía M.
        </p>
      </div>
    </div>
  );
};

export default Clientes;
