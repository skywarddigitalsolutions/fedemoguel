import Image from "next/image";
import { Home } from "lucide-react";
import Link from "next/link";
import ShinyButton from "@/components/ui/magic/ShinyButton";
import Fede from "../../../public/img/fede_fondo.webp";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";

export default function Hero() {
  const features = [
    "Planes online, Entrenamiento + Alimentación + MindSet",
    "Preparación física y nutrición para deportes de combate",
    "Clases presenciales 1 a 1",
  ];

  return (
    <section className="lg:h-full flex flex-col lg:flex-row lg:items-start bg-background_color p-8 lg:p-16 gap-4">
      <div className="w-full space-y-6">
        <SubtitleSections title="Inicio" Icon={Home} />

        <div className="text-center lg:text-left">
          <TitleSections title="¿Listo para desbloquear tu máximo potencial?" />
          <p className="text-lg lg:text-2xl text-white lg:mt-7">
            Entrenamientos personalizados para alcanzar{" "}
            <span className="text-rojo font-extrabold">tu mejor versión</span>.
          </p>

          <ul className="space-y-2 lg:space-y-4 mt-4 lg:mt-7 flex flex-col items-center lg:items-start w-full">
            {features.map((item, index) => (
              <li key={index} className="text-white font-bold text-base lg:text-lg w-full leading-relaxed">
                <span className="text-rojo font-extrabold mr-2">•</span> {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 lg:mt-7 text-center lg:text-left">
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
