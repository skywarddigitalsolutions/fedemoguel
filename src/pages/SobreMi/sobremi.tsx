import Image from "next/image";
import profilePic from "../../../public/img/SobreMi.webp";
import SubtitleSections from "@/components/text/SubtitleSections";
import { PersonStanding, Dumbbell, BookOpen } from "lucide-react";
import { GiBoxingGlove } from "react-icons/gi";

const SobreMi = () => {
  return (
    <section className="bg-background_color rounded-lg mb-8 p-8 lg:p-16" id="Sobremi">
      <SubtitleSections title={"Sobre Mi"} Icon={PersonStanding} />

      {/* Layout para desktop: Imagen y texto en columnas */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 my-6">
        {/* Imagen ajustada */}
        <div className="lg:w-1/2">
          <Image
            src={profilePic}
            alt="Fede Moguel"
            className="rounded-lg w-full h-auto mb-6 lg:mb-0"
            layout="responsive"
          />
        </div>

        {/* Texto a la derecha de la imagen en pantallas grandes */}
        <div className="lg:w-1/2">
          <div className="flex flex-col">
            <p className="text-lg lg:text-xl text-neutral-200 leading-relaxed mb-4">
              Desde muy chico, enfrenté{" "}
              <span className="text-rojo font-bold">
                retos físicos que me impulsaron a hacer un cambio
              </span>{" "}
              a los 12 años, comenzando con la práctica de deportes. A los 15,
              descubrí el kickboxing y, aunque no tenía acceso a un gimnasio, me
              entrenaba con lo que tenía a mano, superando cada obstáculo con
              determinación.
            </p>
            <p className="text-lg lg:text-xl text-neutral-200 leading-relaxed mb-4">
              Hoy, soy personal trainer, peleador semi-pro de kickboxing y
              profesor de educación física. Mi misión es ayudar a otros a{" "}
              <span className="text-rojo font-bold">transformar</span> no solo{" "}
              <span className="text-rojo font-bold"> su cuerpo </span>, sino
              también{" "}
              <span className="text-rojo font-bold"> su confianza </span>y{" "}
              <span className="text-rojo font-bold"> autoestima</span>, tal como
              lo hice yo.
            </p>
          </div>

          {/* Sección de Credenciales con íconos */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <li className="flex flex-col text-center items-center text-neutral-200">
              <Dumbbell className="text-rojo gap-2 w-auto h-10" />
              <h5 className="mt-5"> Personal Trainer</h5>
            </li>
            <li className="flex flex-col text-center items-center text-neutral-200">
              <BookOpen className="text-rojo gap-2 w-auto h-10" />
              <h5 className="mt-5"> Autor de un Ebook</h5>
            </li>
            <li className="flex flex-col text-center items-center text-neutral-200">
              <PersonStanding className="text-rojo gap-2 w-auto h-10" />
              <h5 className="mt-5"> Profesor de Educación Física</h5>
            </li>
            <li className="flex flex-col text-center items-center text-neutral-200">
              <GiBoxingGlove className="text-rojo gap-2 w-auto h-10" />
              <h5 className="mt-5"> Peleador Semi-Pro de KickBoxing</h5>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
