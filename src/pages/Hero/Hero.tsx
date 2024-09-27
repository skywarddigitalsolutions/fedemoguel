import Image from "next/image";
import { ChevronDown, Home } from "lucide-react";
import ShinyButton from "@/components/ui/magic/ShinyButton";
import Fede from "../../../public/img/fede-removebg-preview.png";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";


export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-background_color p-8">
      <SubtitleSections title={"Inicio"} Icon={Home} />
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          <TitleSections title={"¿Estas listo para cambiar tu vida?"} />
          <p className="text-xl text-white">
            Entrenamientos personalizados para alcanzar <span className="text-rojo font-bold">tu mejor versión</span>.
          </p>
        </div>

        <Image
          src={Fede}
          width={300}
          height={300}
          alt="Personal Trainer"
          className="mx-auto rounded-full shadow-lg border-4 border-red-600"
        />

        <div className="space-y-4 flex flex-col justify-center items-center">
          <ul className="space-y-2">
            {[
              "Programas personalizados",
              "Entrenamiento en línea",
              "Seguimiento nutricional",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-white font-bold text-lg">
                <svg
                  className="w-5 h-5 mr-2 text-red-600"
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
          <ShinyButton className="bg-rojo hover:bg-bordo items-center justify-center">
            Estoy listo
          </ShinyButton>
        </div>
      </div>

    </section>
  );
}
