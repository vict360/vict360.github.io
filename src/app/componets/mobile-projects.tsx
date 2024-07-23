"use client"

import Image from "next/image";



const MobileProjects = () => {

    let data = [
        {
          title: 'Mobile App Vet Check',
          text: 'Mobile App developed for the Degree Project, featuring access control, QR code scanner, user registration, pets, procedures, and digital record visualization.',
    
          link: './appvet.gif',
          tech: ['Ionic', 'Angular', 'CSS', 'Plugins'],
          state: 'private'
      
        },
        {
          title: 'Mobile App "Mascotas Felices"',
          text: "Mobile App for graduation project, enabling clients to view their pets' records and generate QR codes for them to be scanned by Vet Check",
    
          link: './appcliente.gif',
          tech: ['Ionic', 'Angular', 'CSS', 'Plugins'],
          state: 'private'
      
        }
    
      ]

  return (
    <div className='flex gap-6 justify-center'>
        <div className="w-8/12">
        {data.map((el, index)=>(
            <div key={index} className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pb-10 justify-items-center">
                <div className="self-center">
                <Image
                        className="shadow-xl rounded-2xl object-fill"
                        src={el.link}
                        alt="Next.js Logo"
                        width={200}
                        height={200}
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
                                            <li key={index2}>
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

export default MobileProjects;

