import { NavBar } from "@/components/NavBar";
import Hero from "../pages/Hero/Hero";
import Clientes from "@/pages/Clientes/Clientes";
import Comunidad from "@/pages/Comunidad/Comunidad";
import Planes from "@/pages/Planes/Planes";
import Footer from "@/components/Footer";
import Cta from "@/pages/Cta/Cta";
import SobreMi from "@/pages/SobreMi/sobremi";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Comunidad />
      <SobreMi />
      <Planes />
      {/* <Cta /> */}
      <Clientes />
      <Footer />
    </>
  );
}
