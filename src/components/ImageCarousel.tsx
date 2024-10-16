"use client";
import { useState } from 'react';

const images = [
  "/img/Testimonio1.webp",
  "/img/Testimonio2.webp",
  "/img/Testimonio3.webp",
  "/img/Testimonio4.webp",
  "/img/Testimonio5.webp",
  "/img/Testimonio6.webp",
  "/img/Testimonio7.webp",
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative max-w-xl mx-auto ">
      <img
        src={images[activeIndex]}
        alt={`Imagen testimonio ${activeIndex + 1}`}
        className="rounded-2xl shadow-xl w-full h-auto transition-opacity duration-500"
        style={{ opacity: 1 }}
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
        <button
          onClick={prevImage}
          className="bg-rojo rounded-full p-2 shadow-md hover:bg-celeste hover:text-white transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
        <button
          onClick={nextImage}
          className="bg-rojo rounded-full p-2 shadow-md hover:bg-celeste hover:text-white transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
