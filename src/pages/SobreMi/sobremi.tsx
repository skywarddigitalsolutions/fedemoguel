
import React from "react";
import Image from "next/image";
import profilePic from "../../../public/img/SobreMi.jpeg";
import SubtitleSections from "@/components/text/SubtitleSections";
import { PersonStanding, Dumbbell, BookOpen } from "lucide-react";
import { GiBoxingGlove } from "react-icons/gi";

export default function SobreMi() {
  return (
    <section className="p-8 bg-background_color rounded-lg mb-8" id="Sobremi">
      <SubtitleSections title={"Sobre Mi"} Icon={PersonStanding} />

      <div className="flex flex-colmy-6">
        <Image
          src={profilePic}
          alt="Fede Moguel"
          className="rounded-lg w-[auto] h-96 mb-12"
          layout="fixed"
        />
      </div>

      <p className="text-lg text-neutral-200 leading-relaxed mb-4">
        Desde muy chico, enfrenté <span className="text-rojo font-bold">retos físicos que me impulsaron a hacer un
        cambio</span> a los 12 años, comenzando con la práctica de deportes. A los 15,
        descubrí el kickboxing y, aunque no tenía acceso a un gimnasio, me
        entrenaba con lo que tenía a mano, superando cada obstáculo con
        determinación.
      </p>
      <p className="text-lg text-neutral-200 leading-relaxed mb-4">
        Hoy, soy personal trainer, peleador amateur de kickboxing y
        profesor de educación física. Mi misión es ayudar a otros a <span className="text-rojo font-bold">
        transformar no solo su cuerpo, sino también su confianza y autoestima</span>,
        tal como lo hice yo.
      </p>

      {/* Sección de Credenciales con íconos */}
      <div className="mt-12 grid grid-cols-2 gap-8">
        <li className="flex flex-col text-center items-center text-neutral-200">
          <Dumbbell className=" text-rojo gap-2 w-auto h-10" />
          <h5 className="mt-5"> Personal Trainer</h5>
        </li>
        <li className="flex flex-col text-center items-center text-neutral-200">
          <BookOpen className=" text-rojo gap-2 w-auto h-10" />
          <h5 className="mt-5"> Autor de un Ebook</h5>
        </li>
        <li className="flex flex-col text-center items-center text-neutral-200">
          <PersonStanding className=" text-rojo gap-2 w-auto h-10" />
          <h5 className="mt-5"> Profesor de Educación Física</h5>
        </li>
        <li className="flex flex-col text-center items-center text-neutral-200">
          <GiBoxingGlove className=" text-rojo gap-2 w-auto h-10" />
          <h5 className="mt-5"> Peleador Amateur de KickBoxing</h5>
        </li>
      </div>
    </section>
  );
};
