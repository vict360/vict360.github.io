
import Image from "next/image";


const WebProjects = () => {

    let data = [

        {
          title: 'Aplicación web Red Convenios Chile',
          text: 'Aplicación web progresiva (PWA) estatica para Red Convenios Chile, cuenta con inicio de sesión, registro de usuarios, escaner y generador de códigos QR, historial de asistencias y ahorros, sistema de administración de Pymes y más.',
    
        link: './recc.png',
        tech: ['Ionic', 'Angular', 'CSS', 'Plugins'],
        state: 'public'
      
        },
        {
          title: 'API REST Red Convenios Chile',
          text: 'Servidor API REST que proporciona información para Red Convenios Chile, con conexión a base de datos MySQL con distintas entidades para la gestión de Pymes y descuentos ofrecidos por las mismas, adémas de asegurar historiales a largo plazo.',
        link: './backend_rcc.png',
        tech: ['Django', 'Python', 'DRF'],
        state: 'private'
        },
        {
          title: 'Proyecto React Store',
          text: 'Proyecto personal de práctica de una página web gastrónomica autoadministrable, con registro de usuarios, categorias, comidas, etc.',
        link: './reactstore.png',
        tech: ['Mongo', 'Express', 'React', 'Node Js', 'Tailwind css'],
        state: 'private'
        }
      ]

  return (
    <div className='flex gap-6 justify-center'>
        <div className="w-8/12">
        {data.map((el, index)=>(
            <div  key={index} className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pb-10">
                <div className="self-center">
                <Image
                        className="shadow-xl rounded-2xl object-fill"
                        src={el.link}
                        alt="Next.js Logo"
                        width={800}
                        height={800}
                        priority
                        />
                </div>

                <div className="flex flex-col">
                            
                    <div className="pb-5 sm:pt-5">
                        <h3 className="text-center text-slate-800 font-semibold text-xl pb-5">{el.title}</h3>
                        <p className='text-justify break-words'>{el.text}</p>

                        <div>
                            {
                                el.state === 'public' ?  (
                                    <div className="flex flex-row flex-wrap">
                                        <div className="text-white bg-cyan-500 rounded-2xl p-2 mt-5 pr-4 pl-4 text-sm">
                                            <p>#{el.state}</p>
                                        </div>
                                    </div>
                                ):(
                                    <div className="flex flex-row flex-wrap">
                                        <div className="text-white bg-red-800 rounded-2xl p-2 mt-5 pr-4 pl-4 text-sm">
                                            <p>#{el.state}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                            <div className="sm:absolut bottom-5">
                                <ul className='flex flex-row flex-wrap gap-4'>
                                    {
                                        el.tech.map((t, index2)=>(
                                        <li  key={index2}>
                                            <div className='p-2 pr-4 pl-4 text-sm rounded-2xl bg-slate-800 text-cyan-300'><p>{t}</p></div>
                                        </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}
        </div>
    </div>
  );
};

export default WebProjects;

