import Hero from "./components/hero";
import Clientes from "@/pages/Clientes/Clientes";
import Comunidad from "@/pages/Comunidad/Comunidad";
import Kickboxing from "@/pages/Kickboxing/Kickboxing";
import Planes from "@/pages/Planes/Planes";

export default function Home() {
  return (
    <>
      <Hero />
      <Comunidad />
      <Planes />
      <Kickboxing />
      <Clientes />
    </>
  );
}
