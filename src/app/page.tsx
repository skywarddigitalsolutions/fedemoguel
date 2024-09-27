import { NavBar } from "@/components/NavBar";
import Hero from "../pages/Hero/Hero";
import Clientes from "@/pages/Clientes/Clientes";
import Comunidad from "@/pages/Comunidad/Comunidad";
import Kickboxing from "@/pages/Kickboxing/Kickboxing";
import Planes from "@/pages/Planes/Planes";
import Footer from "@/components/Footer";
import Cta from "@/pages/CallToAction/CallToAction";
import SobreMi from "@/pages/SobreMi/AcercaDeMi";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Comunidad />
      <SobreMi />
      <Planes />
      <Kickboxing />
      <Cta />
      <Clientes />
      <Footer />
    </>
  );
}
