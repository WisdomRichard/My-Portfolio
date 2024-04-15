'use client'
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import {motion} from "framer-motion";


export default function Home() {

    return (
        <motion.main
            className={`flex flex-col w-full h-full content-between justify-between`}
            initial={{x: '+200vh'}}
            animate={{x: '0%'}}
            transition={{delay: 1, duration: 0.5, ease: 'easeIn'}}
        >
            <div className={`flex flex-col w-full`}>
                <HeroSection/>
            </div>
            <div className={`w-full`}>
               <Footer/>
            </div>
        </motion.main>
    );
}
