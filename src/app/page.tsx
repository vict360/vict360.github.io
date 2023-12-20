"use client"

import Image from "next/image"
import Navbar from "./componets/navbar"
import MobileNavbar from "./componets/mobile-navbar"
import {motion, Variants} from 'framer-motion'
import Tech from "./componets/tech"
import WebProjects from "./componets/web-projects"
import MobileProjects from "./componets/mobile-projects"
import Contacts from "./componets/contacts"
import Experience from "./componets/experience"
import AboutMe from "./componets/about-me"

export default function Home() {

  const cv = "http://vict360.github.io/CV_Victor_Vargas.pdf"

  const download_cv = (url:any)=>{
    const filename = url.split("/").pop()
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

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
      <main id='name' className="flex min-h-screen flex-col items-center justify-between w-full text-slate-800 bg-slate-200 lg:p-24 select-none">

        <div className='relative'>

          <Navbar></Navbar>
          <MobileNavbar></MobileNavbar>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.35}}>

          <div className='h-36 sm:h-10'></div>
          <div className='mt-56 h-96 mb-20'>
              <h1 className='text-2xl sm:text-3xl text-center font-semibold underline'>IT Engineer</h1>
              <h2 className='text-5xl text-center font-bold font-mono pb-14 sm:text-8xl'>Víctor Vargas</h2>



              <div className='flex justify-center'>
              <div className='flex flex-row justify-center w-6/12 gap-10 flex-wrap'>
                <div className="">
                  <div className="p-4 sm:p-4 rounded-full pr-4 pl-4 bg-slate-300 text-black hover:bg-slate-100 w-44 transition delay-150 duration-200 ease-in-out hover:scale-110">
                    <div className="flex flex-row gap-2 justify-center flex-wrap">
                      <div onClick={()=>download_cv(cv)}>
                        <p className="text-sm">Download CV</p>
                      </div>
                      <div className="self-center">
                        <Image
                        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="./download.svg"
                        alt="Next.js Logo"
                        width={20}
                        height={20}
                        priority
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div className='self-center transition duration-200 delay-150 ease-in-out hover:scale-125'>
                  <a href="https://github.com/vict360?tab=repositories">
                  <img className='h-10 w-10 rounded-sm object-contain' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
                  </a>
                </div>
                <div className='self-center transition duration-200 delay-150 ease-in-out hover:scale-125'>
                  <a href="https://www.linkedin.com/in/victor-vargas-314a851ba/">
                  <img className=' h-10 w-10 rounded-sm object-contain hover:opacity-75' src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
                  </a>
                </div>
              </div>
              </div>
          </div>

          <AboutMe/>

          <motion.div initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }} variants={vars}>
            <Tech/>
          </motion.div>

          <motion.div initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.6 }} variants={vars}>
            <Experience/>
          </motion.div>

          

          <div id='proyectos' className='h-24'></div>
          <div className="pb-20">
            <motion.div initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }} variants={vars}>
                <h3 className="text-center p-10 text-3xl font-semibold">Projects</h3>
                <h4 className="text-center pb-10 text-2xl font-bold">Web</h4>
              <WebProjects/>
            </motion.div>

            <motion.div initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }} variants={vars}>
                <h4 className="text-center pb-10 text-2xl font-bold">Mobile</h4>
              <MobileProjects/>
            </motion.div>
          </div>

          <motion.div initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }} variants={vars}>
              <Contacts/>
            </motion.div>

          </motion.div>
        </div>
        
      </main>
      

  )
}

