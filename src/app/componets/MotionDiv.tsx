"use client"

import {motion, Variants} from 'framer-motion'

export default function MotionDiv({children,
}: {
  children: React.ReactNode
}){

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
        <motion.div 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }} variants={vars}>
            {children}
        </motion.div>
    )
}