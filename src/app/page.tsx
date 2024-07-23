
import Navbar from "./componets/navbar"
import MobileNavbar from "./componets/mobile-navbar"
import Tech from "./componets/tech"
import WebProjects from "./componets/web-projects"
import MobileProjects from "./componets/mobile-projects"
import Contacts from "./componets/contacts"
import Experience from "./componets/experience"
import AboutMe from "./componets/about-me"
import MotionDiv from "./componets/MotionDiv"
import DownloadButton from "./componets/DownloadButton"
import Image from "next/image"

export default function Home() {

  return (
      <main id='name' className="flex min-h-screen flex-col items-center justify-between w-full text-slate-800 bg-slate-200 lg:p-24 select-none">

        <div className='relative'>

          <Navbar></Navbar>
          <MobileNavbar></MobileNavbar>

          {/* <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.35}}> */}

          <MotionDiv>
          <div className='h-36 sm:h-10'></div>
          <div className='mt-56 h-96 mb-20'>
              <h1 className='text-2xl sm:text-3xl text-center font-semibold underline'>IT Engineer</h1>
              <h2 className='text-5xl text-center font-bold font-mono pb-14 sm:text-8xl'>Víctor Vargas</h2>



              <div className='flex justify-center'>
              <div className='flex flex-row justify-center w-6/12 gap-10 flex-wrap'>
                <div className="">
                  <DownloadButton/>
                </div>
                <div className='self-center transition duration-200 delay-150 ease-in-out hover:scale-125'>
                  <a href="https://github.com/vict360?tab=repositories">
                  <Image className='h-10 w-10 rounded-sm object-contain' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github_logo" />
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
          </MotionDiv>


          <div id="web-projects" className="pt-20">
            <MotionDiv>
              <h3 className="text-center p-10 text-3xl font-semibold">Projects</h3>
              <h4 className="text-center pb-10 text-2xl font-bold">Web</h4>
              <WebProjects/>
            </MotionDiv>
          </div>

          <div id="mobile-projects">
            <MotionDiv>
              <h4 className="text-center pb-10 text-2xl font-bold">Mobile</h4>
              <MobileProjects/>
            </MotionDiv>
          </div>
          
          
          <MotionDiv>
            <Experience/>
          </MotionDiv>

          <MotionDiv>
            <Tech/>
          </MotionDiv>

          <MotionDiv>
            <AboutMe/>
          </MotionDiv>

          <MotionDiv>
            <Contacts/>
          </MotionDiv>

          {/* </motion.div> */}
        </div>
        
      </main>
      

  )
}

