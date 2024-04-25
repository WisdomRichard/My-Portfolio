'use client';
import React, {useState} from 'react'
import NavLink from "@/components/NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from '/public/Dante-Logo4.png'
import {SocialIcon} from "react-social-icons/component";
import 'react-social-icons'
import {motion} from "framer-motion";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className={`flex flex-col bg-black/50 w-full h-full`}>
            <div className={`flex w-full gap-[2rem] justify-end sm:justify-between items-center px-8 pt-5 relative`}>
                <div className={`menu hidden md:block md:w-auto`} id={`navbar`}>
                    <ul>
                            <li className={`flex p-4 md:p-0 md:flex-row md:space-x-9 mt-0`}>
                                <NavLink href={`/`} title={'Home'}/>
                                <NavLink href={`/about`} title={'About'}/>
                                <NavLink href={`/projects`} title={'Projects'}/>
                                <NavLink href={`/contactUs`} title={'Contact Us'} classname={`hidden lg:block`}/>
                            </li>
                    </ul>
                </div>
                <div className={`flex absolute left-[41%] md:left-[47.2%]`}>
                    <Image src={Logo} alt={`logo`} className={`h-[30px] w-[80px]`}/>
                </div>

                <div className={`hidden sm:flex items-center justify-center flex-wrap`}>
                    <motion.div whileHover={{y: -3}} whileTap={{scale: 0.9}}><SocialIcon network={`linkedin`}
                                                                                         href={`https://www.linkedin.com/in/wisdom-richard-3b6407171/`}
                                                                                         style={{height: 35, width: 35}}
                                                                                         bgColor={`#222222`}/>
                    </motion.div>
                    <motion.div whileHover={{y: -3}} whileTap={{scale: 0.9}}><SocialIcon network={`github`}
                                                                                         style={{height: 35, width: 35}}
                                                                                         href={`https://github.com/WisdomRichard`}
                                                                                         bgColor={`#222222`}/>
                    </motion.div>
                    <motion.div whileHover={{y: -3}} whileTap={{scale: 0.9}}><SocialIcon network={`whatsapp`}
                                                                                         style={{height: 35, width: 35}}
                                                                                         href={`https://wa.me/2348147515300`}
                                                                                         bgColor={`#222222`}/>
                    </motion.div>
                </div>
                <div className={`mobile-menu flex md:hidden`}>
                    {
                        navbarOpen ?
                            null
                            : (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className={`flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white`}>
                                <Bars3Icon className={`h-5 w-5`}/></button>
                        )
                    }
                </div>


            </div>
            {navbarOpen ?
                <ul className={`md:hidden fixed top-0 left-0 w-full h-screen items-center justify-center bg-black/90 z-10`}>
                    <li className={`flex flex-col gap-[3rem] justify-center items-center w-screen h-screen rounded-[15px]`}>
                        <NavLink href={`/`} title={'Home'}/>
                        <NavLink href={`/about`} title={'About'}/>
                        <NavLink href={`/projects`} title={'Projects'}/>
                        <NavLink href={`/contactUs`} title={'Contact Us'}/>
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className={`absolute top-[20px] right-[45px] items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white`}>
                            <XMarkIcon className={`h-5 w-5`}/></button>
                    </li>
                </ul>
                : null}
        </nav>
    )
}
export default Navbar
