import Image from "next/image";
import { Home } from "lucide-react";
import Link from "next/link"; // Importa el componente Link de Next.js
import ShinyButton from "@/components/ui/magic/ShinyButton";
import Fede from "../../../public/img/fede-removebg-preview.png";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row lg:items-center bg-background_color p-8 lg:p-16 gap-4">
      <div className="w-full space-y-6">
        <SubtitleSections title={"Inicio"} Icon={Home} />
        <div className="text-center lg:text-left">
          <TitleSections title={"¿Estás listo para cambiar tu vida?"} />
          <p className="text-lg lg:text-2xl text-white">
            Entrenamientos personalizados para alcanzar{" "}
            <span className="text-rojo font-extrabold">tu mejor versión</span>.
          </p>

          {/* Updated UL section */}
          <ul className="space-y-2 lg:space-y-4 mt-4 flex flex-col items-center lg:items-start">
            {[
              "Programas personalizados",
              "Entrenamiento en línea",
              "Seguimiento nutricional",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center text-white font-bold text-base lg:text-lg"
              >
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-red-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* Botón que redirige a WhatsApp */}
          <div className="mt-6 text-center lg:text-left">
            <Link
              href={`https://wa.me/5491150611441?text=Hola%20Fede,%20como%20estas?%20Queria%20consultarte%20a%20cerca%20de`}
              passHref
              target="_blank"
            >
              <ShinyButton className="bg-rojo hover:bg-bordo px-6 py-3 text-lg">
                Estoy listo
              </ShinyButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Image section for larger screens */}
      <div className="w-full flex justify-center lg:justify-center mt-8 lg:mt-0">
        <Image
          src={Fede}
          width={400}
          height={400}
          alt="Personal Trainer"
          className="rounded-full shadow-lg border-4 border-red-600"
          priority={true}
        />
      </div>
    </section>
  );
}
