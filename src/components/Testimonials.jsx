import React from 'react'
import bg from "../../public/bg.png";
import style from "@/app/style";
import Heading from "@/components/Heading";
import logo1 from '/public/Untitled design.png'
import logo3 from '/public/B.jpg'
import logo4 from '/public/Raph.jpg'
import ClientCard from "@/components/ClientCard";
import {BsArrowLeftCircle, BsArrowRightCircle, BsArrowRightShort} from "react-icons/bs";

const Testimonials = () => {
    const scrollRef = React.useRef(null)

    const scroll = (direction) => {
        const {current} = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= window.innerWidth + 30;
        } if (direction === 'right') {
            current.scrollLeft += window.innerWidth + 30;
        } if (direction === 'lefts') {
            current.scrollLeft -= window.innerWidth - 160;
        } if (direction === 'rights') {
            current.scrollLeft += window.innerWidth - 160;
        } else {}

    }


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
            className={`flex flex-col ${style.paddingX} py-[3rem] lg:py-[5rem]`}>
            <div className={`flex justify-center mb-[2rem]`}>
                <Heading heading={`WHAT MY CLIENTS SAY`}/>
            </div>
            <div className={`flex relative`}>
                <div className={`container-flow`} ref={scrollRef}>
                    <div className={`item-flow`}>
                        <ClientCard
                            margin={`pr-[3rem] md:pr-[7rem] lg:pr-[2rem]`}
                            writeup={`Wisdom is a Dedicated and Hardworking Professional. His Growth these Past Few Months has been Incredible, culminating in his recent successful projects.`}
                            name={`Adebayo Anthony`}
                            position={`Creative Director, Gemini Tech`}
                            logo={logo1}
                        />
                    </div>
                    <div className={`item-flow`}>
                        <ClientCard
                            margin={`px-[2rem] md:px-[4rem] lg:px-[1rem]`}
                            writeup={`Wisdom is a Man of Integrity and Proficient in Tasks. His Ardent Disposition to not only ensure whatever project is carried out within the framed schedule but efficiently to his Customer's taste`}
                            name={`Joan Brown`}
                            position={`Staff, Ministry of Defence`}
                            logo={logo3}
                        />
                    </div>
                    <div className={`item-flow`} id={`Raph`}>
                        <ClientCard
                            margin={`pl-[3rem] md:pl-[7rem] lg:pl-[2rem]`}
                            writeup={`Wisdom's Commitment and Diligence have yielded Impressive Results in his Projects. His Lastest Projects have surpassed expectations, demonstrating a clear upward trajectory in his Professional Development.`}
                            name={`Raphael Ibrahim`}
                            position={`Content Writer, YesOptimist`}
                            logo={logo4}
                        />
                    </div>
                </div>
                <div
                    className={`hidden lg:flex w-full absolute content-center place-items-center gap-[1rem] bottom-[1%] xl:bottom-[21%] left-[0%]`}>
                    <BsArrowLeftCircle
                        className={`text-dimWhite hover:text-white text-[1.4rem] cursor-pointer bg-black rounded-full`}
                        onClick={() => scroll(`lefts`)}/>
                    <BsArrowRightCircle
                        className={`text-black hover:text-white text-[2rem] cursor-pointer  bg-gradient-to-br from-[#C33764] to-[#1D2671]  rounded-full`}
                        onClick={() => scroll(`rights`)}/>

                </div>
            </div>
            <div
                className={`lg:hidden flex w-full justify-center content-center place-items-center gap-[1rem]`}>
                <BsArrowLeftCircle
                    className={`text-dimWhite hover:text-white text-[1.4rem] cursor-pointer bg-black rounded-full`}
                    onClick={() => scroll(`left`)}/>
                <BsArrowRightCircle
                    className={`text-black hover:text-white text-[2rem] cursor-pointer  bg-gradient-to-br from-[#C33764] to-[#1D2671]  rounded-full`}
                    onClick={() => scroll(`right`)}/>

            </div>
        </div>
    )
}
export default Testimonials
