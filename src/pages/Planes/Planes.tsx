"use client";
import React from "react";
import { ArrowRight, NotepadText } from "lucide-react";
import Link from "next/link";
import ShinyButton from "../../components/ui/magic/ShinyButton";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";

export default function Planes() {
  return (
    <div
      className="bg-background_color text-white rounded-lg mb-10 mx-auto p-8 lg:p-16"
      id="Planes"
    >
      <div className="mb-4 text-left">
        {" "}
        {/* Alineado a la izquierda */}
        <SubtitleSections title={"Planes"} Icon={NotepadText} />
        <TitleSections title={"Planes MoguelGym"} />
        <p className="text-base lg:text-lg xl:text-xl text-zinc-300">
          Los planes más completos para lograr{" "}
          <span className="text-rojo font-extrabold">todos tus objetivos.</span>
        </p>
      </div>

      {/* Botón de más información */}
      <Link
        href={`https://wa.me/5491150611441?text=Hola%20Fede,%20como%20estas?%20Queria%20consultarte%20a%20cerca%20de`}
        passHref
        target="_blank"
      >
        <ShinyButton
          className="bg-rojo hover:bg-bordo text-white mb-5"
          target="_blank"
        >
          Más información
          <ArrowRight className="w-4 h-4" />
        </ShinyButton>
      </Link>

      {/* Sección de Features */}
      <div className="flex flex-col items-center space-y-4 lg:space-y-6 mt-12">
        <Feature
          title="Plan de entrenamiento personalizado"
          description="Diseñado a tu medida, teniendo en cuenta tus necesidades, gustos y objetivos."
        />
        <Feature
          title="Plan de entrenamiento online 1 a 1"
          description="Seguimiento al detalle, corrección de ejercicios y motivación constante. Llamadas semanales para resolver dudas y ajustar el plan."
        />
        <Feature
          title="Plan de entrenamiento presencial"
          description="Entrenamiento en persona, con un seguimiento personalizado y adaptado a tus necesidades."
        />
      </div>
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-rojo bg-opacity-40 p-4 lg:p-6 rounded-lg w-full">
      <h3 className="font-semibold text-base lg:text-lg xl:text-xl mb-1 lg:mb-2">
        {title}
      </h3>
      <p className="text-sm lg:text-base xl:text-lg text-zinc-300">
        {description}
      </p>
    </div>
  );
}
