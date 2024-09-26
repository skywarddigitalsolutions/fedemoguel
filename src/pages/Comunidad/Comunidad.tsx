import { BicepsFlexed } from "lucide-react";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";
import { Stat } from "@/components/Stat";

export default function Comunidad() {
  return (
    <div className="bg-background_color text-white p-8 rounded-lg mb-24">
      <SubtitleSections
        title={"Comunidad"}
        Icon={ BicepsFlexed }
      />
      <div className="flex items-center gap-2 mb-4">
        <TitleSections title={"Comunidad MoguelGym"} />
      </div>
      <p className="mb-6 text-lg text-white">
        Luego de más de 5 años de crear contenido de manera constante, logramos
        construir una gran comunidad de gente que ama el entrenamiento.
      </p>
      <div className="grid grid-cols-2 gap-6">
        <Stat number="6.699" label="Seguidores en Instagram" unit="k" />
        <Stat number="100" label="Cambio físico asegurado" unit="%" />
        <Stat number="200" label="Moguel people inscriptos" unit="" />
        <Stat number="1.17" label="Seguidores en youtube" unit="k" />
      </div>
    </div>
  );
}
