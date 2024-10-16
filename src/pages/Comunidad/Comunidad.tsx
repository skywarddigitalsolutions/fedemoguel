import { BicepsFlexed } from "lucide-react";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";
import { Stat } from "@/components/Stat";

export default function Comunidad() {
  return (
    <div className="bg-background_color text-white p-8 lg:p-16 rounded-lg mb-8" id="Comunidad">
      <SubtitleSections title={"Comunidad"} Icon={BicepsFlexed} />
      
      <div className="flex items-center gap-2 mb-4">
        <TitleSections title={"Comunidad Fede Moguel"} />
      </div>
      
      <p className="mb-6 text-lg lg:text-xl text-white w-full">
        Luego de más de 5 años de crear contenido de manera constante, logramos
        construir una gran comunidad de <span className="text-rojo font-extrabold">gente que ama el entrenamiento</span>.
      </p>

      {/* Stats grid, adjusted for larger screens */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        <Stat number="7.2" label="Seguidores en Instagram" unit="k" />
        <Stat number="100" label="Cambio físico asegurado" unit="%" />
        <Stat number="200" label="Moguel people inscriptos" unit="" />
        <Stat number="2.35" label="Seguidores en YouTube" unit="k" />
      </div>
    </div>
  );
}
