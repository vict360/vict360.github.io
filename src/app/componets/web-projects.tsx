
import Image from "next/image";


const WebProjects = () => {

    let data = [

        {
          title: "Red Convenios Chile's PWA",
          text: 'Static Progressive Web Application (PWA) for Red Convenios Chile. It includes login, user registration, QR code scanner and generator, attendance and savings history, SME management system, and more.',
    
        link: './rcc.gif',
        tech: ['Ionic', 'Angular', 'CSS', 'Plugins'],
        state: 'public'
      
        },
        {
          title: "Red Convenios Chile's RESTful API",
          text: "RESTful API server providing information for Red Convenios Chile, connected to a MySQL database with various entities for the management of Pymes (SMEs) and the discounts offered by them, as well as ensuring long-term histories.",
        link: './backend_rcc.png',
        tech: ['Django', 'Python', 'DRF'],
        state: 'private'
        },
        {
          title: 'Practice project',
          text: "Personal practice project of a self-administrable gastronomic website, featuring login with access token, user registration, categories, dishes, business presentation, among other functionalities.",
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

