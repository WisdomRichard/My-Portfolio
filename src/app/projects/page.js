'use client'
import React from 'react'
import Projects from "@/app/projects/Projects";
import {motion} from "framer-motion";

const Page = () => {
    return (
        <motion.div
            className={`w-full h-full`}
            initial={{x: '+200vh'}}
            animate={{x: '0%'}}
            transition={{delay: 1, duration: 0.5, ease: 'easeIn'}}
        >
            <Projects/>
        </motion.div>
    )
}
export default Page
