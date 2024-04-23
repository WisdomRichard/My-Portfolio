'use client'
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import {motion} from "framer-motion";
import Services from "@/components/Services";
import MiniProjects from "@/components/MiniProjects";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";


export default function Home() {

    return (
        <motion.main
            className={`flex flex-col content-between justify-between h-full`}
            initial={{x: '+200vh'}}
            animate={{x: '0%'}}
            transition={{delay: 1, duration: 0.5, ease: 'easeIn'}}
        >
            <div className={`flex flex-col bg-black`}>
                <div>
                    <HeroSection/>
                </div>
                <Services/>
                <MiniProjects/>
                <Testimonials/>
                <CallToAction/>
            </div>
            <div className={`flex`}>
                <Footer/>
            </div>
        </motion.main>
    );
}
