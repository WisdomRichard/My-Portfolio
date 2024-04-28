import React from 'react'
import style from "@/app/style";
import Image from "next/image";
import Github from '/public/github-142-svgrepo-com (2).svg'
import Export from '/public/export-svgrepo-com.svg'
import Link from "next/link";

const ProjectCardLeft = (prop) => {
    return (
        <div className={`w-full h-full lg:grid lg:grid-cols-5 flex flex-col py-[3rem] items-center`}>

            <div className={`col-span-3 w-full`}>
                <Image src={prop.coverImage} alt={prop.coverImage}
                       className={`rounded-xl`} priority/>
            </div>
            <div className={`flex flex-col col-span-2 gap-[1rem] lg:ml-[2rem]`}>
                <h1 className={`font-manrope font-extrabold lg:text-[20px] text-[18px] mt-[1rem] lg:mt-0`}>
                    {prop.heading}<br/>{prop.heading2}
                </h1>
                <p className={`font-manrope font-normal text-dimWhite lg:text-[16px] text-[14px] space-x-0.5 leading-[30.8px]`}>
                    {prop.paragraph}
                </p>
                <div className={`font-manrope font-extrabold  lg:text-[18px] text-[16px] flex flex-col`}>
                    <div className={`flex gap-[1rem]`}>
                        <p className={`content-center`}>Technology Stack:
                        </p>
                        <div className={`flex gap-[0.5rem] mt-[0.5rem]`}>
                            <Image src={prop.image1} height={40} width={40} alt={`html`} className={`h-[30px] md:h-[40px] w-[30px] md:w-[40px]`}/>
                            <Image src={prop.image2} height={40} width={40} alt={`tailwind`} className={`h-[30px] md:h-[40px] w-[30px] md:w-[40px]`}/>
                        </div>
                    </div>
                    <div>
                        <div className={`flex gap-[1.5rem] mt-[1rem] font-bold`}>
                            <div className={`flex gap-[0.5rem] items-center`}>
                                <Link href={prop.github} className={`font-manrope font-bold cursor-pointer hover:text-dimWhite hover:underline hover:underline-offset-2`}>
                                    Code</Link>
                                <Link href={prop.github}>
                                    <Image src={Github} height={37} width={37} alt={`Github`} className={`h-[28px] md:h-[38px] w-[30px] md:w-[40px]`}/>
                                </Link>
                            </div>
                            <div className={`flex gap-[1rem] items-center`}>
                                <Link href={prop.demo} className={`font-manrope font-bold cursor-pointer hover:text-dimWhite hover:underline hover:underline-offset-2`}>
                                    Live Demo</Link>
                                <Link href={prop.demo}>
                                    <Image src={Export} height={37} width={37} alt={`export`} className={`h-[30px] md:h-[40px] w-[30px] md:w-[40px]`}/>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default ProjectCardLeft
