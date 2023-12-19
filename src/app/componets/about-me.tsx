"use client"
import {motion, Variants} from "framer-motion"


const AboutMe = () => {


    const vars: Variants = {
        offscreen: {
          y: 15,
          opacity: 0
        },
        onscreen: {
            opacity:1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
                delay: 0.25
          }
        }
      };


  return (

    <>


    <div id='about' className='h-24'></div>
    <motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} variants={vars}>

    <motion.div
        >

        <div className="flex justify-center">
                <div className='h-auto bg-slate-100/30 sm:border-2 sm:border-white/50 backdrop-blur-sm border-t-2 border-t-white/30 border-b-2 border-b-white/30  backdrop-filter-none shadow-xl sm:rounded-xl sm:w-full md:w-full xl:w-6/12'>
            
                <h2 className='text-3xl font-semibold text-center pt-10'>About me</h2>

                <div className="flex flex-row justify-center">
                    <div className='w-10/12 sm:w-8/12 md:w-8/12 lg:w-10/12'>
                <p className='text-lg text-justify p-10 pt-6 break-words'>
                    Graduated from <b className="font-semibold italic">IT engineering</b> in <b className="font-semibold italic">2023</b> from <b  className="font-semibold italic">Duoc UC</b> in <b  className="font-semibold italic">Chile</b> with mention in <b className="font-semibold italic">Data Science</b>, Apassionated for tech since child, always interested in keep learning and <b className="font-semibold italic">Be Better</b>, I see my self as a person with <b className="font-semibold italic"> high analisys, organized, proactive, productive, responsable.</b> My specialties are: <b className="font-semibold italic">Fullstack developer, Data scientist & App developer.</b>
                </p>
            </div>
            </div>

        </div>
        </div>

        </motion.div>

    </motion.div>


    </>

  );
};

export default AboutMe;


