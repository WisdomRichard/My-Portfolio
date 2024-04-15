'use client'
import React from 'react'
import AboutMe from "@/app/about/AboutMe";
import {motion} from "framer-motion";

const Page = () => {
    return (
        <motion.div
            className={`h-full w-full text-white`}
            initial={{x: '+200vh'}}
            animate={{x: '0%'}}
            transition={{delay: 1, duration: 0.5, ease: 'easeIn'}}
        >
            <AboutMe/>
        </motion.div>
    )
}
export default Page
