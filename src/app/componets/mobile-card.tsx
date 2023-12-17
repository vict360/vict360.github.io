
// {data.forEach( (el:any) => {
//     <div className="justify-self-center">
//         <div className="bg-slate-100 rounded-lg shadow-xl ">
//             <img className='h-40 w-60 object-fill rounded-t-lg' src="https://miro.medium.com/v2/resize:fit:1200/1*lRkG_R6jCK9aMzYL0Fc7lw.png" alt="Ionic + Angular Logo's" />
//             <div className="w-60 p-6">
//                 <p className='text-justify'>
//                     {data.text}
//                 </p>
//             </div>
//         </div>
//     </div>  
// })}

import Image from "next/image";

interface CardProps {
  card: Array<{text: string, link: string, tech: Array<string>, state: string}>
}

const CardMobile: React.FC<CardProps> = ({card}) => {

  return (
    <div className='flex gap-6 justify-center'>
        <div className="w-8/12">
        {card.map((el, index3)=>(
            <div key={index3} className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pb-10 justify-items-center">
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
                                        el.tech.map((t, index4)=>(
                                            <li key={index4}>
                                            <div className='p-2 pr-4 pl-4 text-sm rounded-2xl bg-slate-800 text-cyan-300'><p>{t}</p></div>
                                        </li>
                                        ))
                                    }
                                    {/* <li>
                                        <div className='p-2 pr-4 pl-4 text-sm rounded-2xl bg-slate-800 text-cyan-300'><p>Ionic</p></div>
                                    </li>
                                    <li>
                                        <div className='p-2 pr-4 pl-4 text-sm rounded-2xl bg-slate-800 text-cyan-300'><p>Angular</p></div>
                                    </li>
                                    <li>
                                        <div className='p-2 pr-4 pl-4 text-sm rounded-2xl bg-slate-800 text-cyan-300'><p>CSS</p></div>
                                    </li>
                                    <li>
                                        <div className='p-2 pr-4 pl-4 text-sm rounded-2xl bg-slate-800 text-cyan-300'><p>PWA</p></div>
                                    </li> */}
                                </ul>
                            </div>

                        </div>
                    </div>
                ))}
        </div>
    </div>
  );
};

export default CardMobile;


{/* <div className="flex justify-center">
<div className="w-auto">
<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 '>
    <div className="justify-self-center">
        <div className="bg-slate-100 rounded-lg shadow-xl ">
        <img className='h-40 w-60 object-fill rounded-t-lg' src="https://miro.medium.com/v2/resize:fit:1200/1*lRkG_R6jCK9aMzYL0Fc7lw.png" alt="Ionic + Angular Logo's" />
        <div className="w-60 p-6">
            <p className='text-justify'>
                {card.text}
            </p>
        </div>
        </div>
    </div>
</div>

</div>
</div> */}

// export default function Card({ card }){
//     console.log(card);
    
//     return(
//         <div className="flex justify-center">
//             <div className="w-auto">
//             <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 '>
//                 <div className="justify-self-center">
//                     <div className="bg-slate-100 rounded-lg shadow-xl ">
//                     <img className='h-40 w-60 object-fill rounded-t-lg' src="https://miro.medium.com/v2/resize:fit:1200/1*lRkG_R6jCK9aMzYL0Fc7lw.png" alt="Ionic + Angular Logo's" />
//                     <div className="w-60 p-6">
//                         <p className='text-justify'>
//                             {card.text}
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//             </div>

//             </div>
//         </div>
//     )
// }