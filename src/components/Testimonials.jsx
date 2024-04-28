import React, {useCallback} from 'react'
import bg from "../../public/bg.png";
import style from "@/app/style";
import Heading from "@/components/Heading";
import logo1 from '/public/Untitled design.png'
import logo3 from '/public/B.jpg'
import logo4 from '/public/Raph.jpg'
import ClientCard from "@/components/ClientCard";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({

        align: 'start',

        loop: true,

        skipSnaps: false,

    }, [Autoplay({delay: 4000})]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

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
                <div className={`overflow-hidden`} ref={emblaRef}>
                    <div className={`flex`}>
                        <div className={`embla__slide`}>
                            <ClientCard
                                writeup={`Wisdom is a Dedicated and Hardworking Professional. His Growth these Past Few Months has been Incredible, culminating in his recent successful projects.`}
                                name={`Adebayo Anthony`}
                                position={`Creative Director, Gemini Tech`}
                                logo={logo1}
                            />
                        </div>
                        <div className={`embla__slide`}>
                            <ClientCard
                                writeup={`Wisdom is a Man of Integrity and Proficient in Tasks. His Ardent Disposition to not only ensure whatever project is carried out within the framed schedule but efficiently to his Customer's taste`}
                                name={`Joan Brown`}
                                position={`Staff, Ministry of Defence`}
                                logo={logo3}
                            />
                        </div>
                        <div className={`embla__slide`}>
                            <ClientCard
                                writeup={`Wisdom's Commitment and Diligence have yielded Impressive Results in his Projects. His Lastest Projects have surpassed expectations, demonstrating a clear upward trajectory in his Professional Development.`}
                                name={`Raphael Ibrahim`}
                                position={`Content Writer, YesOptimist`}
                                logo={logo4}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={`hidden lg:flex w-full absolute content-center place-items-center gap-[1rem] bottom-[1%] xl:bottom-[21%] left-[0%]`}>
                    <BsArrowLeftCircle
                        className={`text-dimWhite hover:text-white text-[1.4rem] cursor-pointer bg-black rounded-full`}
                        onClick={scrollPrev}/>
                    <BsArrowRightCircle
                        className={`text-black hover:text-white text-[2rem] cursor-pointer  bg-gradient-to-br from-[#C33764] to-[#1D2671]  rounded-full`}
                        onClick={scrollNext}/>

                </div>
            </div>
            <div
                className={`lg:hidden flex w-full justify-center content-center place-items-center gap-[1rem]`}>
                <BsArrowLeftCircle
                    className={`text-dimWhite hover:text-white text-[1.4rem] cursor-pointer bg-black rounded-full`}
                    onClick={scrollPrev}/>
                <BsArrowRightCircle
                    className={`text-black hover:text-white text-[2rem] cursor-pointer  bg-gradient-to-br from-[#C33764] to-[#1D2671]  rounded-full`}
                    onClick={scrollNext}/>

            </div>
        </div>
    )
}
export default Testimonials
