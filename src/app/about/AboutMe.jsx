'use client';
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import Picture from '/public/My-Picture.jpg'
import style from "@/app/style";
import TabButton from "@/components/TabButton";
import Heading from "@/components/Heading";

const TAB_DATA = [
    {
        title: 'Languages',
        id: 'languages',
        content: (
            <ul className={`list-disc`}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        )
    },
    {
        title: 'Libraries',
        id: 'libraries',
        content: (
            <ul className={`list-disc`}>
                <li>React</li>
                <li>Tailwind</li>
            </ul>
        )
    },
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className={`list-disc grid grid-cols-1 lg:grid-cols-3`}>
                <li>Responsive Design</li>
                <li>SEO Best Practices</li>
                <li>Git Version Control</li>
                <li>UI/UX Principles</li>
                <li>RESTful API Integration</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className={`list-disc`}>
                <li>Bachelor of Engineering (B.Eng.) in Structural Engineering <br/>
                    University of Benin, Benin City, Edo State | Oct. 2021
                </li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className={`list-disc`}>
                <li>Meta&apos;s Front-End Developer Certification.</li>
                <li>Meta&apos;s React Native Specialization Certification.</li>
            </ul>
        )
    },

]
const AboutMe = () => {
    const [tab, setTab] = useState('languages')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className={`${style.paddingX} flex flex-col py-[2rem] gap-[2rem]`}>
            <div
                className={`flex flex-col xl:flex-row xl:gap-[5rem] md:gap-[2.5rem] gap-[1rem] items-end md:justify-start justify-center`}>
                <div className={`flex justify-center lg:justify-start place-content-center w-full h-full xl:w-fit min-w-[350px] relative`}>
                    <Image src={Picture} alt={`My Photo`} height={450} width={450}
                           className={`rounded-[100%] h-full  w-[250px] md:w-[350px] object-cover`}/>
                    <div className={`absolute z-[-2] w-[250px] h-[250px] right-[78%] top-[40%] blue__gradient`}/>
                </div>

                <div
                    className={`flex flex-col gap-[1rem] justify-center lg:justify-start content-center lg:content-start items-center lg:items-start mt-4 md:mt-0 text-left h-full w-full`}>
                    <h1 className={`text-2xl md:text-4xl lg:text-5xl font-extrabold font-poppins text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-br from-[#C33764] to-[#1D2671] leading-10`}>
                        <b> Front-End React Developer</b> <br/>
                        <span className={`text-[16px] lg:text-[20px] xl:text-[25px] capitalize`}>Building User-Friendly Web Experiences</span>
                    </h1>

                    <div className={`flex flex-col gap-[0.5rem]`}>
                        <div className={`flex justify-start`}>
                             <Heading heading={`ABOUT ME`}/>
                        </div>
                        <p className={`font-manrope ${style.paragraph}`}>Hi, I&apos;m Wisdom, a passionate Front-End
                            React
                            Developer
                            based in Abuja, Nigeria, with a passion for
                            creating beautiful, functional,
                            user-centered and visually stunning interfaces and digital experiences. I bring websites and
                            applications to life
                            through the power of React.js.I leverage React.js and its ecosystem libraries to build
                            interactive
                            and responsive user interfaces (UIs) that prioritize user experience (UX) across all
                            devices.
                        </p>
                        <p className={`${style.paragraph}`}>Whether I&apos;m working on a website, mobile app, or other
                            digital product, I bring my commitment to design excellence and user-centered thinking to
                            every
                            project I work on. I look forward to the opportunity to bring my skills and passion to your
                            next
                            project.</p>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex flex-col lg:flex-row gap-[1.5rem] lg:gap-0  mt-[1rem] mb-[2rem] justify-around`}>
                    <div className={`flex flex-row justify-around w-full flex-[2]`}>
                        <TabButton selectTab={() => handleTabChange('languages')} active={tab === 'languages'}>
                            {` `}
                            <b>LANGUAGES</b> {` `}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('libraries')} active={tab === 'libraries'}>
                            {` `}
                            <b>LIBRARIES</b> {` `}
                        </TabButton>
                    </div>
                    <div className={`flex flex-row justify-around w-full flex-[2]`}>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                            {` `}
                            <b>SKILLS</b> {` `}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                            {` `}
                            <b>EDUCATION</b> {` `}
                        </TabButton>
                    </div>
                    <div className={`flex flex-row justify-around w-full flex-[1]`}>
                        <TabButton selectTab={() => handleTabChange('certifications')}
                                   active={tab === 'certifications'}>
                            {` `}
                            <b>CERTIFICATIONS</b> {` `}
                        </TabButton>
                    </div>
                </div>
                <div className={`w-full pl-[1rem] mt-4 font-manrope ${style.paragraph}`}>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </section>
    )
}
export default AboutMe
