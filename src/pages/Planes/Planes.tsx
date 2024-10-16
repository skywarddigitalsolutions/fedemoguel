import React from "react";
import ShinyButton from "../../components/ui/magic/ShinyButton";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";
import { NotepadText } from "lucide-react";
import Link from "next/link";

export default function Planes() {
  const planes = [
    {
      title: "Plan Fighter Elite",
      description:
        "Para deportistas de combate (Muay Thai, Boxeo, Bjj, MMA)\n Preparación física + Nutrición deportiva + Asesoramiento en corte de peso + seguimiento (100% online)",
    },
    {
      title: "Plan Platinum",
      description:
        "Para pérdida de grasa y/o ganancia de masa muscular\n Entrenamiento + Alimentación + Seguimiento",
    },
    {
      title: "Plan Gold",
      description: "Entrenamiento presencial 1 a 1\n Plan de entrenamiento",
    },
  ];

  return (
    <div
      className="relative lg:h-[90vh] flex items-center justify-center overflow-hidden"
      id="Kickboxing"
    >
      <video
        className="absolute w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for video */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center p-8 lg:p-16 mt-10 lg:h-[80vh]">
        <SubtitleSections title={"Planes"} Icon={NotepadText} />
        <TitleSections
          title={"¿Estas listo para realizar un entrenamiento de kickboxing?"}
        />
        <p className="text-xl sm:text-2xl mb-8">
          Descubre cómo nuestro entrenamiento puede llevarte al siguiente nivel
        </p>
        <Link
          href={`https://wa.me/5491150611441?text=Hola%20Fede,%20como%20estas?%20Queria%20consultarte%20a%20cerca%20de`}
          passHref
          target="_blank"
        >
          <ShinyButton className="bg-rojo hover:bg-bordo text-black font-bold py-3 px-6 rounded-full text-lg">
            Conoce nuestros programas de entrenamiento
          </ShinyButton>
        </Link>

        {/* Product offerings */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {planes.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-10 p-6 rounded-lg flex flex-col justify-between h-full group overflow-hidden"
            >
              {/* Card content */}
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold mb-2">{plan.title}</h3>
                {plan.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>

              <Link
                href={`https://wa.me/5491150611441?text=Hola%20Fede,%20como%20estas?%20Queria%20consultarte%20a%20cerca%20de`}
                passHref
                target="_blank"
                className="mt-3"
              >
                <ShinyButton className="bg-rojo hover:bg-bordo mt-auto relative z-10">
                  Más información
                </ShinyButton>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
