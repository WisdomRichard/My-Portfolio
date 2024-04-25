import React from 'react'
import Cover1 from '/public/Prototype1.png'
import Cover2 from '/public/Prototype2.png'
import Cover3 from '/public/Prototype3.png'
import Cover4 from '/public/Prototype4.png'
import Cover5 from '/public/Prototype5.png'
import style from "@/app/style";
import html from '/public/react-bw.svg'
import tailwind from '/public/tailwind-bw.svg'
import css from '/public/css3-bw.svg'
import ProjectCardLeft from "@/components/ProjectCardLeft";
import ProjectCardRight from "@/components/ProjectCardRight";
import Heading from "@/components/Heading";

const Projects = () => {
    return (
        <section className={`${style.paddingX} pt-[2rem] flex flex-col justify-center items-center text-white`}>
            <div className={`flex`}>
                <Heading heading={`PROJECTS`}/>
            </div>
            <ProjectCardLeft coverImage={Cover2}
                             heading={`Hoo-Bank: The Future of Banking`}
                             paragraph={`This landing page concept showcases Hoo-Bank, a fictional bank, using React and Tailwind CSS. It emphasizes the transformation of a Figma design into a fully responsive website with a modern UI/UX experience.`}
                             image1={html}
                             image2={tailwind}
                             github={`https://github.com/WisdomRichard/Hoo-Bank`}
                             demo={`https://hoo-bank-23g.pages.dev/`}
            />

            <ProjectCardRight coverImage={Cover4}
                              heading={`Little Lemon Restaurant:`}
                              heading2={` A Zesty Website`}
                              paragraph={`This concept showcases the creation of Little Lemon Restaurant's website using ReactJS and CSS. It emphasizes the transformation of a Figma design into a fully responsive website with a modern UI and UX, featuring an integrated reservation system for a seamless dining experience.`}
                              image1={html}
                              image2={css}
                              github={`https://github.com/WisdomRichard/Capstone-Project`}
                              demo={`https://little-lemon-7cw.pages.dev/`}
            />

            <ProjectCardLeft coverImage={Cover1}
                             heading={`Unleash the Power of Language:`}
                             heading2={`A GPT-3 Landing Page`}
                             paragraph={`This landing page showcases the capabilities of GPT-3, a powerful language model, through a modern and responsive website built with React and CSS. It highlights the transformation of a Figma design into a fully functional website, demonstrating skills in:`}
                             image1={html}
                             image2={css}
                             github={`https://github.com/WisdomRichard/GPT-3`}
                             demo={`https://gpt3-3ya.pages.dev/`}
            />

            <ProjectCardRight coverImage={Cover5}
                              heading={`Homyz Real Estate:`}
                              heading2={'Building Your Dream Home with ReactJS'}
                              paragraph={`This concept showcases the creation of Homyz Real Estate's website using ReactJS and CSS. It highlights the transformation of a Figma design into a fully responsive website with a modern UI and UX, designed to streamline the home search experience.`}
                              image1={html}
                              image2={css}
                              github={`https://github.com/WisdomRichard/Homyz`}
                              demo={`https://homyz-75p.pages.dev/`}
            />

            <ProjectCardLeft coverImage={Cover3}
                             heading={`Gerich Restaurant:`}
                             heading2={`A Modern Culinary Experience`}
                             paragraph={`This landing page spotlights the creation of Gerich Restaurant's website using ReactJS and CSS. It highlights the transformation of a Figma design into a fully responsive website with a modern UI and UX, designed to whet appetites and enhance the online dining experience.`}
                             image1={html}
                             image2={css}
                             github={`https://github.com/WisdomRichard/Gerich-Restaurant`}
                             demo={`https://gerich-restaurant.pages.dev/`}
            />


        </section>
    )
}
export default Projects
