import React from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  const scheduleUrl =
    "https://api.whatsapp.com/message/3NUS6AKPOGW4K1?autoload=1&app_absent=0";

  return (
    <section className="bg-background_color pt-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-negro bg-opacity-50 backdrop-filter backdrop-blur-2xl rounded-lg p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            ¿Listo para transformar tu cuerpo y tu vida?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-center">
            Agenda una consulta gratuita y comencemos tu viaje hacia una mejor
            versión de ti mismo.
          </p>
          <div className="flex justify-center">
            <Link
              href={`https://wa.me/5491150611441?text=Hola%20Fede,%20como%20estas?%20Queria%20consultarte%20a%20cerca%20de`}
              passHref
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Agendar mi consulta ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
