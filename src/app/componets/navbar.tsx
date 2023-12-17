"use client";

import { useState } from "react"

import {motion, useCycle} from "framer-motion"

export default function Navbar(){
    
    const [isClick, setIsClick] = useState(false);

    const toggleNavBar = () =>{
        setIsClick(!isClick)
    };
    
    return (
        <>
        
        <div className='hidden md:flex flex-row justify-center'>
            <div id='nav' className='bg-slate-400/30 backdrop-blur-2xl border-2 border-white/50 rounded-full sm:w-6/12 md:w-auto p-4 sm:p-4 sm:pl-6 sm:pr-6 fixed top-4 opacity-80 text-black shadow-sm'>
            <ul className='flex flex-row justify-center gap-10'>
                <li className="self-start">
                    <a href="#name">Me</a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#tecnologias">Technologies</a>
                </li>
                <li>
                    <a href="#experiencia">Experience</a>
                </li>
                <li>
                    <a href="#proyectos">Projects</a>
                </li>
                <li>
                    <a href="#contactos">Contact</a>
                </li>
            </ul>
            </div>
        </div>

        </>
    )
}


