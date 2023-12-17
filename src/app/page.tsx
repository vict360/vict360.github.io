import Image from "next/image"

import Navbar from "./componets/navbar"
import Card from "./componets/cards"
import CardMobile from "./componets/mobile-card"
import MobileNavbar from "./componets/mobile-navbar"

import {motion, useScroll} from "framer-motion"

export default function Home() {

  let data = [
    {text: 'Aplicación web progresiva (PWA) estatica para Red Convenios Chile, cuenta con inicio de sesión, registro de usuarios, escaner y generador de códigos QR, historial de asistencias y ahorros, sistema de administración de Pymes y más.',

    link: './recc.png',
    tech: ['Ionic', 'Angular', 'CSS', 'Plugins'],
    state: 'public'
  
    },
    {text: 'Servidor API REST que proporciona información para Red Convenios Chile, con conexión a base de datos MySQL con distintas entidades para la gestión de Pymes y descuentos ofrecidos por las mismas, adémas de asegurar historiales a largo plazo.',
    link: './backend_rcc.png',
    tech: ['Django', 'Python', 'DRF'],
    state: 'private'
    },
    {text: 'Proyecto personal de práctica de una página web gastrónomica autoadministrable, con registro de usuarios, categorias, comidas, etc.',
    link: './reactstore.png',
    tech: ['Mongo', 'Express', 'React', 'Node Js', 'Tailwind css'],
    state: 'private'
    },
    {text: 'Mi portafolio personal para demostrar conocimientos técnicos adquiridos y aplicados :)',
    link: './portafolio.png',
    tech: ['Next JS', 'Tailwind css'],
    state: 'public'
    },

  ]


  let mobile = [
    {text: 'Aplicación móvil desarrollada para el proyecto de Titulación, con control de acceso, escaner de códigos QR, registro de usuarios, mascotas, procedimientos y visualización de ficha digital.',

    link: './appvet.gif',
    tech: ['Ionic', 'Angular', 'CSS', 'Plugins'],
    state: 'private'
  
    },
    {text: 'Aplicación móvil para proyecto de titulación, que permite al cliente ver la ficha de sus mascotas y generar códigos QR de las mismas para que sean escaneados por Vet Check.',

    link: './appcliente.gif',
    tech: ['Ionic', 'Angular', 'CSS', 'Plugins'],
    state: 'private'
  
    }


  ]

  return (
    <html lang="en" className='!scroll-smooth duration-100'>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Portfolio</title>
    </head>
    <body>
      <main id='name' className="flex min-h-screen flex-col items-center justify-between w-full text-slate-800 bg-slate-200 lg:p-24 select-none">

        <div className='relative'>

          <Navbar></Navbar>
          <MobileNavbar></MobileNavbar>

          <div className='h-10'></div>
          <div className='mt-56 h-96 mb-20'>
              <h1 className='text-2xl sm:text-3xl text-center font-semibold underline'>IT Engineer</h1>
              <h2 className='text-5xl text-center font-bold font-mono pb-14 sm:text-8xl'>Víctor Vargas</h2>

              <div className='flex justify-center'>
              <div className='flex flex-row justify-center w-6/12 gap-10 flex-wrap'>
                <div className="">
                  <div className="p-4 sm:p-4 rounded-full pr-4 pl-4 bg-slate-300 text-black hover:bg-slate-400 w-44">
                    <div className="flex flex-row gap-2 justify-center flex-wrap">
                      <div>
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
                <div className='self-center'>
                  <a href="https://github.com/vict360?tab=repositories">
                  <img className='h-10 w-10 rounded-sm object-contain hover:opacity-75' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
                  </a>
                </div>
                <div className='self-center'>
                  <a href="https://www.linkedin.com/in/victor-vargas-314a851ba/">
                  <img className=' h-10 w-10 rounded-sm object-contain hover:opacity-75' src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
                  </a>
                </div>
              </div>
              </div>
          </div>

          <div id='about' className='h-24'></div>
          <div className="flex justify-center">
            <div className='h-auto bg-slate-100/30 border-2 border-white/50 backdrop-blur-sm backdrop-filter-none shadow-xl sm:rounded-xl sm:w-full md:w-full xl:w-6/12'>
              
              <h2 className='text-3xl font-semibold text-center pt-10'>About Me</h2>

              <div className="flex flex-row justify-center">
                <div className='w-10/12 sm:w-8/12 md:w-8/12 lg:w-10/12'>
                  <p className='text-lg text-justify p-10 pt-6 break-words'>
                    Egresado de Ingeniería en Informática en 2023, con mención en Ciencia de datos.
                    Apasionado por la tecnología desde pequeño, siempre con el interés de seguir aprendiendo y mejorar como persona y profesional.
                    Me considero una persona atenta, con buena capacidad analitica, responsable, organizado, proactivo y productivo. 
                  </p>
                </div>
              </div>

            </div>
          </div>


          <div id='tecnologias' className='h-24'></div>
          <div className="flex justify-center">
            <div className='h-auto sm:w-6/12 p-10 sm:p-0'>
              
              <h2 className='text-3xl font-semibold text-center pt-10 pb-6 underline'>Technologies</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center lg:grid-cols-6 gap-6">
                <div className="">
                  <img className="h-16" src="https://static.djangoproject.com/img/logos/django-logo-negative.1d528e2cb5fb.png" alt="" />
                </div>
                <div className="">
                  <img className="h-16 object-contain" src="https://ionicframework.com/img/angular/logo@2x.png" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype.0e3166482a69f6e0f869a048cf5c06bb695e2577.svg" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://ww2.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" />
                </div>
                <div>
                  <img className="h-16 object-fill" src="https://colab.research.google.com/img/colab_favicon_256px.png" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://www.zestbrains.com/blog/wp-content/uploads/2023/01/MERN-Stack.jpg" alt="" />
                </div>
                <div>
                  <img src="https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png" alt="" />
                </div>
                <div>
                  <img className="h-16 rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Oracle_SQL_Developer_logo.svg/640px-Oracle_SQL_Developer_logo.svg.png" alt="" />
                </div>
                <div>
                  <img className="h-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png" alt="" />
                </div>
              </div>

            </div>
          </div>

          <div id='experiencia' className='h-24'></div>
          <div className="flex justify-center">
            <div className='h-auto bg-slate-100/30 border-2 border-white/50 backdrop-blur-sm backdrop-filter-none shadow-xl sm:rounded-xl sm:w-full md:w-full xl:w-6/12'>
              
              <h2 className='text-3xl font-semibold text-center pt-10'>Experiencia</h2>

              <div className="flex flex-row justify-center">
                <div className='w-10/12 sm:w-8/12 md:w-8/12 lg:w-10/12'>
                  <p className='text-lg text-justify p-10 pt-6 break-words'>
                    A lo largo de mi carrera profesional, he desarrollado los conocimientos técnicos que permiten enfrentarme a distintos problemas. Gracias a la educación otorgada por Duoc UC, he logrado adquerir una variedad de hábilidades importantes.
                  </p>
                </div>
              </div>

            </div>
          </div>

          

          <div id='proyectos' className='h-24'></div>
          <div className="pb-20">

            <h3 className="text-center p-10 text-3xl font-semibold">Projects</h3>

            <h4 className="text-center pb-10 text-xl font-bold">Web</h4>

            <Card card={data}/>

            <h4 className="text-center pb-10 text-xl font-bold">Mobile</h4>

            <CardMobile card={mobile}></CardMobile>
             

          </div>

          <div id='contactos' className='h-24'></div>
          <div className="flex justify-center">
            <div className='h-auto bg-slate-100/30 border-2 border-white/50 backdrop-blur-sm backdrop-filter-none shadow-xl w-full sm:rounded-xl sm:w-full md:w-full xl:w-6/12'>
              
              <h2 className='text-3xl font-semibold text-center pt-10'>Contact Me</h2>

              <div className="flex flex-row justify-center">
                <div className='w-10/12 sm:w-8/12 md:w-8/12 lg:w-10/12'>
                  <p className='text-lg text-center p-10 pt-6 break-words'>
                    vgvs360@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>
    </body>
    </html>

  )
}
