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
                Graduated from <b className="font-semibold italic">IT Engineering</b> in <b className="font-semibold italic">2023</b> from <b className="font-semibold italic">Duoc UC</b> in <b className="font-semibold italic">Chile</b> with a mention in <b className="font-semibold italic">Data Science</b>. Passionate about tech since childhood, always interested in continuous learning and <b className="font-semibold italic">self-improvement</b>. I see myself as a person with <b className="font-semibold italic">Great Analytical Capacity</b>, <b className="font-semibold italic">Organizational Skills</b>, <b className="font-semibold italic">Proactivity</b>, <b className="font-semibold italic">Productivity</b> and <b className="font-semibold italic">Responsibility</b>. My specialties include <b className="font-semibold italic">Full-stack Development</b>, <b className="font-semibold italic">Data Science</b>, and <b className="font-semibold italic">Mobile Development.</b>

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


