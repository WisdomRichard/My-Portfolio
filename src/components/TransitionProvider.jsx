'use client'
import React from 'react'
import {AnimatePresence, motion} from "framer-motion";
import Navbar from "@/components/Navbar";
import {usePathname} from "next/navigation";

const TransitionProvider = ({children}) => {
    const pathname = usePathname()
    return (
        <AnimatePresence mode={"wait"} initial={false}>
            <div key={pathname} className={`flex flex-col w-screen h-screen`}>
                <motion.div className={`fixed top-0 bottom-0 right-full w-screen h-screen bg-gradient-to-br from-[#C33764] to-[#1D2671] z-30`}
                            initial={{x: '100%', width: '100%'}}
                            animate={{x: '0%', width: '0%'}}
                            exit={{x: ['0%', '100%'], width: ['0%', '100%']}}
                            transition={{duration: 0.8, ease: 'easeInOut'}}
                >
                </motion.div>

                <motion.div className={`fixed top-0 bottom-0 right-full w-screen h-screen bg-white z-20`}
                            initial={{x: '100%', width: '100%'}}
                            animate={{x: '0%', width: '0%'}}
                            transition={{delay: 0.2, duration: 0.8, ease: 'easeInOut'}}
                >
                </motion.div>
                <motion.div className={`fixed top-0 bottom-0 right-full w-screen h-screen bg-black z-10`}
                            initial={{x: '100%', width: '100%'}}
                            animate={{x: '0%', width: '0%'}}
                            transition={{delay: 0.4, duration: 0.8, ease: 'easeInOut'}}
                >
                </motion.div>
                <div className="flex h-24 flex-col bg-black w-full">
                    <Navbar/>
                </div>
                <div className={`w-full h-full`}>
                    {children}
                </div>

            </div>
        </AnimatePresence>
    )
}
export default TransitionProvider
