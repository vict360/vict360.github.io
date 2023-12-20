const Experience = () =>{
    return (
        <>
          <div id='experiencia' className='h-24'></div>
          <div className="flex justify-center">
            <div className='h-auto bg-slate-100/30 sm:border-2 sm:border-white/50 border-t-2 border-t-white/30 border-b-2 border-b-white/30  backdrop-blur-sm backdrop-filter-none shadow-xl sm:rounded-xl sm:w-full md:w-full xl:w-6/12'>
              
              <h2 className='text-3xl font-semibold text-center pt-10'>Experiencia</h2>

              <div className="flex flex-row justify-center">
                <div className='w-10/12 sm:w-8/12 md:w-8/12 lg:w-10/12'>
                  <p className='text-lg text-justify p-10 pt-6 break-words'>
                  Currently, <b className="font-semibold">I don&apos;t have work experience</b>. However, with the technical knowledge I&apos;ve gained throughout my studies, I possess the ability to tackle various challenges that may arise. Through my thesis project, I strengthened my skills in mobile application development using <b className="font-semibold">Ionic and Angular</b>. During my professional internship, I developed a <b className="font-semibold">PWA</b> for Red Convenios Chile using the same technology. Additionally, in my free time, I&apos;ve dedicated myself to working on practice projects with different technologies to enhance my learning even further.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </>
    )
}

export default Experience;