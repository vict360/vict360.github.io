"use client"

const Tech = ()=>{

    return (
        <>
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
                  <img className="h-16" src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="" />
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
        </>
    )

}

export default Tech;