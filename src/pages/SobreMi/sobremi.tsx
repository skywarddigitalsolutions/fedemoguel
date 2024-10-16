import Image from "next/image";
import profilePic from "../../../public/img/SobreMi.webp";
import SubtitleSections from "@/components/text/SubtitleSections";
import { PersonStanding, Dumbbell, BookOpen } from "lucide-react";
import { GiBoxingGlove } from "react-icons/gi";

const SobreMi = () => {
  return (
    <section
      className="bg-background_color rounded-lg mb-8 p-8 lg:p-16"
      id="Sobremi"
    >
      <SubtitleSections title={"Sobre Mi"} Icon={PersonStanding} />

      {/* Layout para desktop: Imagen y texto en columnas */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 my-6">
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
            <p className="text-lg lg:text-lg text-neutral-200 leading-relaxed mb-4">
              Cuando era chico era gordito y mi cuerpo no me gustaba, hasta que
              a los 12 años empecé a hacer abdominales y flexiones, y <span className="text-rojo font-extrabold">me enamoré
              perdidamente del ejercicio físico</span>. Con eso elevé mucho mi
              autoestima y mi vida comenzó a potenciarse.
              
            </p>
            <p className="text-lg lg:text-lg text-neutral-200 leading-relaxed mb-4">
              A los 15 años sufría de ansiedad y como una especie de terapia
              física empecé Kickboxing, deporte que hago hasta hoy día y del
              cual soy campeón.
            </p>

            <p className="text-lg lg:text-lg text-neutral-200 leading-relaxed mb-4">
              Empecé a trabajar de adolescente de ayudante de pintor, volantero,
              fumigador, delivery y otros trabajos para poder pagar mis
              entrenamientos. En el 2019 ingresé al prestigioso ISEF 2, en donde
              me recibí de Profesor de Educación física.
            </p>

            <p className="text-lg lg:text-lg text-neutral-200 leading-relaxed mb-4">
              Hoy en día me dedico a entrenar personas y llevarlas a su mejor
              versión física y mental, complementando el fitness y el Kickboxing
              con mindset y desarrollo personal. Mi misión es hackear tu mente y
              tu físico para elevar tu nivel de conciencia, confianza y
              autoestima para que vivas una vida plena
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
              <h5 className="mt-5"> Peleador de KickBoxing</h5>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
