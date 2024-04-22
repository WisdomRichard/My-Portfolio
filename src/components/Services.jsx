import React from 'react'
import style from "@/app/style";
import Heading from "@/components/Heading";
import logo1 from '/public/1.png'
import logo2 from '/public/2.png'
import logo3 from '/public/3.png'
import Image from "next/image";
import LogoCard from "@/components/LogoCard";
import bg from '/public/bg.png'

const Services = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
            }}
            className={`flex flex-col ${style.paddingX} justify-center py-[5rem] gap-[1rem]`}>
            <div className={`flex justify-center`}>
                <Heading heading={`MY SERVICES`}/>
            </div>
            <div>
                <p className={`${style.paragraph} text-white text-center`}>I approach front-end development as a creative problem
                    solver. With a focus on clean code and user experience, I utilize my expertise in JavaScript,
                    responsive design frameworks, and modern practices to bring your web visions to life.</p>
            </div>
            <div className={`flex flex-col xl:flex-row justify-center my-[3rem] gap-[3rem]`}>
                <div className={`flex flex-col md:flex-row justify-center content-center items-center gap-[3rem]`}>
                    <LogoCard image1={logo1} text1={`Responsive Design`} text2={`Framework Integration`}/>
                    <LogoCard image1={logo2} text1={'JavaScript Animations'} text2={`and Interactions`}/>
                </div>
                <div className={`flex justify-center content-center`}>
                    <LogoCard image1={logo3} text1={'Single-Page Application (SPA)'}
                              text2={`with Client-Side Routing`}/>
                </div>
            </div>
        </div>
    )
}
export default Services
