import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-negro h-screen flex flex-col justify-center items-center">
     

      {/* Imagen de Fede */}
      <div className="relative z-10">
        <Image
          src="/federojo.png" // Asegúrate de que la imagen esté en la carpeta public
          alt="Fede Moguel"
          height={400}
          width={450}
          objectFit="contain" // Asegura que la imagen mantenga su proporción
        />
      </div>

      {/* Contenedor de texto con fondo blur */}
      <div className=" mx-2 mt-6 z-20 backdrop-blur-lg bg-black bg-opacity-70 px-8 py-4 rounded-lg text-center border border-blanco">
        <h1 className="text-blanco text-3xl font-bold mb-2">
          CAMBIA TU CUERPO, MEJORA TU SALUD Y TRANSFORMA TU VIDA
        </h1>
        <h2 className="text-blanco text-lg mb-4">
          Ayudo a hombres +30 atrapados en su rutina laboral a transformar su cuerpo.
        </h2>
        <button className="px-6 py-2 bg-rojo text-blanco rounded-lg hover:bg-bordo transition">
          Contáctame
        </button>
      </div>
    </div>
  );
}
