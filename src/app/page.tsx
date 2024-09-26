import { NavBar } from "@/components/NavBar";
import Hero from "./components/hero";
import Clientes from "@/pages/Clientes/Clientes";
import Comunidad from "@/pages/Comunidad/Comunidad";
import Kickboxing from "@/pages/Kickboxing/Kickboxing";
import Planes from "@/pages/Planes/Planes";
import Footer from "@/components/Footer";
import SobreMi from "@/pages/SobreMi/sobremi";
import CTA from "@/pages/CTA/cta";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Comunidad />
      <SobreMi />
      <Planes />
      <Kickboxing />
      <CTA />
      <Clientes />
      <Footer />
    </>
  );
}
