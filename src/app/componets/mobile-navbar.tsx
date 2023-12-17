"use client"
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className="fixed md:hidden p-4 top-8 left-5 bg-withe/30 rounded-full backdrop-blur-sm border-white border-2">
        <div onClick={toggleMenu}>
          <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-white/30 backdrop-blur-md text-slate-800 p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                
                <div onClick={toggleMenu}>
                <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                <ul className="text-3xl text-center font-medium">
                  <li className="pb-3">
                    <a href="#name" onClick={toggleMenu}>Me</a>
                  </li>
                  <li className="pb-3">
                    <a href="#about" onClick={toggleMenu}>About Me</a>
                  </li>
                  <li className="pb-3">
                    <a href="#experiencia" onClick={toggleMenu}>Experience</a>
                  </li>
                  <li className="pb-3">
                    <a href="#tecnologias" onClick={toggleMenu}>Technologies</a>
                  </li>
                  <li className="pb-3">
                    <a href="#proyectos" onClick={toggleMenu}>Projects</a>
                  </li>
                  <li>
                    <a href="#contactos" onClick={toggleMenu}>Contact</a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

