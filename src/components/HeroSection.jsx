'use client'
import React from 'react'
import Image from "next/image";
import customLogo from '../../public/custom-logo.png'
import styles from "@/app/style";
import {TypeAnimation} from "react-type-animation";
import Link from "next/link";
import {ArrowDownOnSquareIcon} from "@heroicons/react/24/outline";
import {motion} from "framer-motion";
import html from '/public/html-5-svgrepo-com.svg'
import css from '/public/css-3-svgrepo-com.svg'
import javascript from '/public/javascript-svgrepo-com.svg'
import react from '/public/react-svgrepo-com.svg'
import tailwind from '/public/tailwind-svgrepo-com.svg'
import HireMe from "@/components/HireMe";

const quote = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            duration: 1,
            staggerChildren: 0.08,
        }
    },
}

const HeroSection = () => {
    return (
        <section className={`flex flex-col justify-between content-between`}>
            <div className={`${styles.paddingX} py-[1rem] grid grid-cols-1 sm:grid-cols-12 gap-[3rem] content-center`}>
                <div className={`col-span-1 sm:col-span-7 place-self-center text-center sm:text-left`}>
                    <motion.h1
                        className={`font-poppins font-extrabold text-white mb-[1rem] text-[30px] sm:text-[40px] md:text-[45px] lg:text-[55px] overflow-hidden`}
                        variants={quote}
                        initial={`initial`}
                        animate={`animate`}
                    >
                        <span
                            className={`text-transparent bg-clip-text bg-gradient-to-br from-[#1D2671] to-[#C33764] leading-[75px]`}>
                            Hello,{` `}
                        </span>
                        <br/>
                        <span>
                           <TypeAnimation
                               sequence={[
                                   // Same substring at the start will only be typed out once, initially
                                   'Wisdom',
                                   1500, // wait 1s before replacing "Mice" with "Hamsters"
                                   'Web Developer',
                                   1500,
                                   'Mobile Developer',
                                   1500,
                                   'React Developer',
                                   1500
                               ]}
                               wrapper="span"
                               speed={40}
                               repeat={Infinity}
                           />
                        </span>
                    </motion.h1>
                    <motion.p className={`${styles.paragraph} mb-6`}
                    >
                        Hi, I&apos;m Wisdom Richard. I&apos;m a passionate Front-End React Developer based in Abuja, Nigeria, with
                        a knack for crafting user-friendly and visually stunning web interfaces. I bring websites and
                        applications to life through the power of React.js.
                    </motion.p>

                    <div>
                        <button type={`button`}
                                className={`px-6 py-3 rounded-[10px] mr-4 bg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-200 text-white font-medium`}>
                            <Link href={`mailto:whizzy.ww@gmail.com`}
                                  target={`_blank`}
                            >
                                Contact
                            </Link>
                        </button>
                        <button type={`button`}
                                className={`px-1 py-1 rounded-[10px] bg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-800 text-white mt-3 font-medium`}>
                            <Link
                                href='/files/WisdomRichard.pdf'
                                download={true}
                                target={`_blank`}
                                className={`flex w-full sm:fit bg-[#121212] justify-center hover:bg-white hover:text-black hover:border hover:border-black rounded-[10px] px-5 py-2`}
                            >
                                Resume <ArrowDownOnSquareIcon className={`w-6 ml-1.5`}/>
                            </Link>
                        </button>
                    </div>
                </div>

                <div className={`col-span-1 sm:col-span-5 flex mt-4 lg:mt-0 w-full justify-center`}>
                    <div
                        className={`flex z-[3] justify-center items-center rounded-full bg-zinc-950 w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] relative overflow-hidden`}>
                        <Image
                            src={customLogo}
                            alt={`custom logo`}
                            width={300}
                            height={300}
                            className={`absolute transform -translate-x-1 -translate-y-1`}/>
                    </div>
                    <div className={`absolute z-[1] w-[250px] h-[250px] bottom-45 white__gradient`}/>
                    <div className={`absolute z-[2] w-[200px] h-[200px] right-30 blue__gradient`}/>
                </div>
            </div>
            <div className={`${styles.paddingX}`}>
                <div className={`flex flex-col md:flex-row px-[10px] items-center gap-[1rem] md:gap-[3rem]`}>
                    <p className={`flex font-extrabold font-manrope text-center items-center text-[16px]`}>Tech
                        Stack</p>
                    <div className={`md:h-[30px] md:w-[1.5px] w-[100px] h-[2px] bg-white`}/>
                    <div className={`flex items-center gap-[1rem]`}>
                        <Image src={html} height={45} width={45} alt={`html`} className={`w-[40px]`}/>
                        <Image src={css} height={45} width={45} alt={`html`}/>
                        <Image src={javascript} height={40} width={40} alt={`html`}/>
                        <Image src={react} height={50} width={50} alt={`html`}/>
                        <Image src={tailwind} height={50} width={50} alt={`html`}/>
                    </div>
                </div>
            </div>
            <HireMe/>
        </section>
    )
}
export default HeroSection
