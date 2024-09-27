import { NavBar } from "@/components/NavBar";
import Hero from "../pages/Hero/Hero";
import Clientes from "@/pages/Clientes/Clientes";
import Comunidad from "@/pages/Comunidad/Comunidad";
import Kickboxing from "@/pages/Kickboxing/Kickboxing";
import Planes from "@/pages/Planes/Planes";
import Footer from "@/components/Footer";
import SobreMi from "@/pages/SobreMi/SobreMi";
import CTA from "@/pages/CTA/Cta";

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
