import Image from 'next/image';
import profilePic from '../../../public/img/Fede.webp'; 
import SubtitleSections from '@/components/text/SubtitleSections';
import { PersonStanding, Dumbbell, BoxIcon, BookOpen } from 'lucide-react';
import { GiBoxingGlove } from 'react-icons/gi';

const SobreMi = () => {
  return (
    <section className="p-8 bg-background_color rounded-lg shadow-lg mb-24">
      <SubtitleSections title={"Sobre Mi"} Icon={PersonStanding} />

      <div className="flex flex-colmy-6">
        <Image
          src={profilePic}
          alt="Fede Moguel"
          className="rounded-lg w-[auto] h-96 mb-12" 
          layout="fixed"
        />
      </div>
      
      <p className="text-lg text-neutral-200 leading-relaxed mb-4">
        Desde pequeño, enfrenté desafíos con mi cuerpo. A los 12 años, decidí hacer un cambio y comencé a practicar deportes. Ese momento se convirtió en un punto de inflexión en mi vida.
      </p>
      <p className="text-lg text-neutral-200 leading-relaxed mb-4">
        A los 15 años, descubrí el kickboxing. Sin recursos para un gimnasio, me entrenaba en el parque, haciendo dominadas y desafiándome a mí mismo cada día.
      </p>
      <p className="text-lg text-neutral-200 leading-relaxed mb-4">
        Finalmente, me gradué como profesor de educación física. Hoy, soy un peleador amateur de kickboxing y un apasionado entrenador personal, ayudando a otros a transformar sus cuerpos y autoestima.
      </p>

      {/* Sección de Credenciales con íconos */}
      <div className="mt-12 grid grid-cols-2 gap-8">
          <li className="flex flex-col text-center items-center text-neutral-200">
            <Dumbbell className=" text-rojo gap-2 w-auto h-10" /> 
            <h5 className='mt-5'> Personal Trainer</h5>
          </li>
          <li className="flex flex-col text-center items-center text-neutral-200">
            <BookOpen className=" text-rojo gap-2 w-auto h-10" />  
            <h5 className='mt-5'> Autor de un Ebook</h5>
          </li>
          <li className="flex flex-col text-center items-center text-neutral-200">
            <PersonStanding className=" text-rojo gap-2 w-auto h-10" />  
            <h5 className='mt-5'> Profesor de Educación Física</h5>
          </li>
          <li className="flex flex-col text-center items-center text-neutral-200">
            <GiBoxingGlove className=" text-rojo gap-2 w-auto h-10" />
            <h5 className='mt-5'> Peleador Amateur de KickBoxing</h5>
          </li>
      </div>
    </section>
  );
};

export default SobreMi;
