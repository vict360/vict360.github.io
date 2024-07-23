"use client"

import {motion} from 'framer-motion'
import { useState } from 'react'


const Contacts = ()=>{


    const [copied, setCopied] = useState("Click to Copy") 

    const copyToClipboard = (text:any)=>{
        navigator.clipboard.writeText(text)
        setCopied("Copied")
    }

    return (

        <>
            <div id='contactos' className='h-24'></div>
            <div className="flex justify-center pb-32">
                <div className='h-auto bg-slate-100/30 sm:border-2 sm:border-white/50 backdrop-blur-sm border-t-2 border-t-white/30 border-b-2 border-b-white/30 backdrop-filter-none shadow-xl w-full sm:rounded-xl sm:w-full md:w-full xl:w-6/12'>
              
                    <h2 className='text-3xl font-semibold text-center pt-10'>Contact Me</h2>

              <div className="flex flex-row justify-center">
                <div className='w-10/12 sm:w-8/12 md:w-8/12 lg:w-10/12'>
                  <div className='h-auto pb-10'>

                    <p className='text-center text-xl pt-5'>I&apos;m Currently available</p>
                    <p className='text-center text-xl pb-6'>For <b className='italic font-semibold'>Full Work</b> or <b className='italic font-semibold'>Freelance</b></p>

                    <div className='flex flex-row flex-wrap justify-center'>

                        
                    <div className='
                    
                    relative before:content-[attr(data-tip)]
                    before:absolute before:px-3 before:py-2
                    before:left-1/2 before:top-[104px]
                    before:w-max before:max-w-xs
                    before:-translate-x-1/2 before:-translate-y-full
                    before:bg-gray-700/30 before:backdrop-blur-sm before:text-black
                    before:rounded-md before:opacity-0
                    before:transition-all

                    after:absolute
                    after:left-1/2 after:top-12
                    after:h-0 after:w-0
                    after:-translate-x-1/2 after:border-8
                    after:border-b-gray-700/30
                    after:border-l-transparent
                    after:border-t-transparent
                    after:border-r-transparent
                    after:opacity-0
                    after:transition-all

                    hover:before:opacity-100 hover:after:opacity-100
                   
                   ' data-tip={copied}>
                    
                    <p className='text-lg text-center p-3 mb-3 hover:bg-slate-300 hover:rounded-full hover:p-3 transition-all delay-150 duration-200 ease-in-out hover:scale-110 border-2 border-gray-500/30 rounded-full' onClick={()=>{copyToClipboard("vgvs360@gmail.com")}}>
                            vgvs360@gmail.com
                        </p>

                   </div>
                        
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>

          </div>
        </>

    )
}


export default Contacts;