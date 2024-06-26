'use client'
import React from 'react'
import Projects from "@/app/projects/Projects";
import {motion} from "framer-motion";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const Page = () => {
    return (
        <motion.div
            className={``}
            initial={{x: '+200vh'}}
            animate={{x: '0%'}}
            transition={{delay: 1, duration: 0.5, ease: 'easeIn'}}
        >
            <Projects/>
            <CallToAction/>
            <Footer/>
        </motion.div>
    )
}
export default Page
