import React from 'react'
import Heading from "@/components/Heading";
import style from "@/app/style";
import one from '/public/Services1.jpg'
import two from '/public/Services2.jpg'
import three from '/public/Services3.jpg'
import Image from "next/image";

const MyServices = () => {
    return (
        <div className={`${style.paddingX} py-[2rem] lg:py-[3rem] flex flex-col gap-[1rem] lg:gap-[3rem]`}>
            <div className={`flex justify-end lg:justify-center`}>
                <Heading heading={`MY SERVICES`}/>
            </div>
            <div className={`flex flex-col lg:flex-row gap-[3rem] items-end lg:items-center`}>
                <div className={`flex flex-col gap-[1.5rem] flex-1`}>
                    <h1 className={`font-poppins font-medium text-[20px] md:text-[30px] text-end`}>JavaScript Animations &
                        Interactions: <br/> Engaging Experiences</h1>
                    <div className={`flex w-full justify-end`}>
                        <div className={`w-[150px] h-[3px] bg-white`}/>
                    </div>
                    <p className={`${style.paragraph} text-end`}>I leverage JavaScript to create dynamic animations and
                        interactions. From subtle hover effects to
                        complex user-driven experiences, I craft interfaces that engage and delight. Accessibility is
                        always a priority, ensuring everyone enjoys the journey.</p>
                </div>
                <div className={`flex flex-1 lg:p-[1rem]`}>
                    <Image src={three} alt={three} className={`h-[250px] md:h-[350px] w-full rounded-[16px] object-cover`}/>
                </div>
            </div>
            <div className={`flex flex-col-reverse lg:flex-row gap-[3rem] items-start lg:items-center`}>
                <div className={`flex flex-1 lg:p-[1rem]`}>
                    <Image src={two} alt={two} className={`h-[250px] md:h-[350px] w-full rounded-[16px] object-cover`}/>
                </div>
                <div className={`flex flex-col gap-[1.5rem] flex-1`}>
                    <h1 className={`font-poppins font-medium  text-[20px] md:text-[30px] text-start`}>Responsive Design
                        Master: <br/> All Screens, Flawless Experience</h1>
                    <div className={`flex w-full justify-start`}>
                        <div className={`w-[150px] h-[3px] bg-white`}/>
                    </div>
                    <p className={`${style.paragraph} text-start`}>Responsive design is key to creating websites that
                        adapt flawlessly to any screen size, from desktops to tablets and mobiles. I utilize responsive
                        design frameworks like Bootstrap or Materialize to ensure your website delivers a consistent and
                        optimal user experience across all platforms.</p>
                </div>
            </div>
            <div className={`flex flex-col lg:flex-row gap-[3rem] items-end lg:items-center `}>
                <div className={`flex flex-col gap-[1.5rem] flex-1`}>
                    <h1 className={`font-poppins font-medium text-[20px] md:text-[30px] text-end`}>Modern SPAs: <br/> Seamless Navigation, Fast Performance</h1>
                    <div className={`flex w-full justify-end`}>
                        <div className={`w-[150px] h-[3px] bg-white`}/>
                    </div>
                    <p className={`${style.paragraph} text-end`}>I build Single-Page Applications (SPAs) with client-side routing for a smooth and dynamic user experience. This translates to faster loading, seamless navigation and an improved user experience. By leveraging client-side routing in SPAs, I craft modern web applications that prioritize user experience and performance.</p>
                </div>
                <div className={`flex flex-1 lg:p-[1rem]`}>
                    <Image src={one} alt={one} className={`h-[250px] md:h-[350px] w-full rounded-[16px] object-cover`}/>
                </div>
            </div>
        </div>
    )
}
export default MyServices
