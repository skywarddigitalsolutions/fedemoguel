import Image from 'next/image';
import profilePic from '../../../public/img/fondorojo.png'; // Ajusta la ruta de la imagen
import SubtitleSections from '@/components/text/SubtitleSections';
import { PersonStanding, Dumbbell, BoxIcon, BookOpen } from 'lucide-react';
import { GiBoxingGlove } from 'react-icons/gi';

const SobreMi = () => {
  return (
    <section className="p-8 bg-background_color rounded-lg shadow-lg mb-24">
      <SubtitleSections title={"Sobre Mi"} Icon={PersonStanding} />

      <div className="flex flex-row items-center my-6">
        <Image
          src={profilePic}
          alt="Perfil de [Nombre del Cliente]"
          className="rounded-full w-32 h-32 mr-6" // Espacio a la derecha de la imagen
          layout="fixed"
        />
        <h2 className="text-3xl font-bold text-white">Sobre mí</h2>
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
