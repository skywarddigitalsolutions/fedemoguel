import React from "react";
import { ArrowRight, NotepadText } from "lucide-react";
import ShinyButton from "../../components/ui/magic/ShinyButton";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";
import "./Planes.css"
export default function Planes() {
  return (
    <div className="bg-background_color text-white p-8 rounded-lg max-w-md mb-24" id="Planes">
      <div className="mb-4">
        <SubtitleSections title={"Planes"} Icon={NotepadText} />
        <TitleSections title={"Planes MoguelGym"} />
        <p className="text-sm text-zinc-400">
          Los planes más completo para lograr todos <span className="text-rojo font-extrabold">tus objetivos</span>
        </p>
      </div>

      <ShinyButton className="bg-negro text-white mb-5">
        Más información
        <ArrowRight className="w-4 h-4" />
      </ShinyButton>

      <div className="space-y-4 mt-12">
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
    <div className="cuadrado flex flex-col px-5 py-4">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-zinc-300">{description}</p>
    </div>
  );
}
