import React from "react";
import { Compare } from "../../components/ui/aceternity/compare";
import SubtitleSections from "@/components/text/SubtitleSections";
import TitleSections from "@/components/text/TitleSections";
import { User } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";

const Clientes = () => {
  return (
    <div
      className="min-h-screen bg-background_color text-white p-8 lg:p-16"
      id="Testimonio"
    >
      {/* Section Header */}
      <div className="mb-8 mt-10 w-full text-left">
        <SubtitleSections title={"Testimonios"} Icon={User} />
        <TitleSections title={"Experiencia de mis clientes"} />
        <p className="text-base lg:text-lg text-zinc-300 font-semibold">
          Nuestro programa no solo{" "}
          <span className="text-rojo font-extrabold">transforma tu cuerpo</span>
          , también{" "}
          <span className="text-rojo font-extrabold">
            fortalece tu mente y autoestima
          </span>
          . Lee las experiencias de quienes ya han logrado un cambio completo en
          su vida.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="p-4 border rounded-3xl bg-background_color border-background_color flex flex-wrap gap-4 justify-center items-center">

        {/* Image Carousel Section - visible only on mobile */}
        <div className="lg:hidden p-4 border rounded-3xl bg-background_color border-background_color w-full">
          <ImageCarousel />
        </div>

        {/* Testimonial Comparisons - visible on all screens */}
        <Compare
          firstImage="/img/cambio13.webp"
          secondImage="/img/cambio14.webp"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
          slideMode="hover"
        />

        <Compare
          firstImage="/img/cambio12.webp"
          secondImage="/img/cambio11.webp"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
          slideMode="hover"
        />

        <Compare
          firstImage="/img/cambio9.webp"
          secondImage="/img/cambio10.webp"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
          slideMode="hover"
        />

        <Compare
          firstImage="/img/cambio5.webp"
          secondImage="/img/cambio6.webp"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
          slideMode="hover"
        />

        <Compare
          firstImage="/img/cambio1.webp"
          secondImage="/img/cambio2.webp"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
          slideMode="hover"
        />

        <Compare
          firstImage="/img/cambio3.webp"
          secondImage="/img/cambio4.webp"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
          slideMode="hover"
        />

        <Compare
          firstImage="/img/cambio7.webp"
          secondImage="/img/cambio8.webp"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[500px] w-[20rem] md:h-[500px] md:w-[20rem] mb-3"
          slideMode="hover"
        />
      </div>
    </div>
  );
};

export default Clientes;
