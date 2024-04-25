'use client'
import React from 'react'
import {motion} from "framer-motion";
import ContactUs from "@/app/contactUs/ContactUs";
import Footer from "@/components/Footer";

const Page = () => {
    return (
        <motion.div
            className={``}
            initial={{x: '+200vh'}}
            animate={{x: '0%'}}
            transition={{delay: 1, duration: 0.5, ease: 'easeIn'}}
        >
            <ContactUs/>
            <Footer/>
        </motion.div>
    )
}
export default Page
