import React from 'react'
import Heading from "@/components/Heading";
import style from "@/app/style";
import Link from "next/link";
import {
    ArrowLeftCircleIcon,
    ArrowLeftIcon,
    ArrowRightCircleIcon,
    ArrowRightIcon,
    EyeIcon
} from "@heroicons/react/24/outline";
import gallery1 from '/public/Prototype1.png'
import gallery2 from '/public/Prototype2.png'
import gallery3 from '/public/Prototype5.png'
import Image from "next/image";
import {
    BsArrowDownRightSquare,
    BsArrowLeft,
    BsArrowLeftShort,
    BsArrowRightShort, BsFillArrowLeftSquareFill,
    BsFillArrowRightSquareFill
} from "react-icons/bs";

const MiniProjects = () => {
    const scrollRef = React.useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 350;
        }
        else {
            current.scrollLeft += 350;
        }
    }
    const galleryImages = [gallery1, gallery2, gallery3];

    return (
        <div
            className={`flex flex-col lg:flex-row ${style.paddingX} justify-center bg-black py-[3rem] lg:py-[5rem]`}>
            <div
                className={`flex flex-[1.7] flex-col justify-center content-center lg:min-w-[500px] gap-[1rem] xl:gap-[2rem]`}>
                <div className={`flex justify-center lg:justify-start`}>
                    <Heading heading={`PORTFOLIO`}/>
                </div>
                <p className={`${style.paragraph} text-center lg:text-start my-[2rem]`}>Explore a curated selection of my projects
                    that demonstrate the
                    positive impact I can bring to your web projects. These projects showcase my skills in various
                    front-end development areas like
                    JavaScript animations, responsive design, single-page applications and have resulted in increased
                    user engagement, improved conversion rates.</p>
                <div className={`hidden lg:flex lg:justify-start`}>
                    <button type={`button`}
                            className={`px-1 py-1 rounded-[10px] bg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-800 text-white mt-3 font-medium w-fit`}>
                        <Link
                            href={`/projects`}
                            title={'Projects'}
                            className={`flex w-full sm:fit bg-[#121212] justify-center hover:bg-white hover:text-black hover:border hover:border-black rounded-[10px] px-5 py-2`}
                        >
                            View All <EyeIcon className={`w-5 ml-2`}/>
                        </Link>
                    </button>
                </div>

            </div>
            <div className={`flex flex-row flex-[1.3] min-w-[40%] relative`}>
                <div className={`app-container`} ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div
                            className={`relative min-w-[350px] h-full p-[0.5rem] content-center ${index === galleryImages.length - 1 ? 'mr-0' : `mr-[1rem]`}`}
                            key={`gallery_image-${index + 1}`}>
                            <Image src={image} alt={`gallery`}
                                   className={`w-full h-[200px] rounded-[10px] object-fill transition duration-500 ease-in-out`}/>
                        </div>
                    ))}
                </div>
                <div
                    className={`hidden lg:flex w-full absolute content-center justify-between bottom-[14%] right-[0%] px-[2rem]`}>
                    <BsFillArrowLeftSquareFill
                        className={`border-2 bg-dimWhite hover:bg-white border-dimWhite hover:border-white text-[1.6rem] cursor-pointer rounded-[6px]`}
                        onClick={() => scroll(`left`)}/>
                    <BsFillArrowRightSquareFill
                        className={`border-2 bg-dimWhite hover:bg-white border-dimWhite hover:border-white text-[1.6rem] cursor-pointer rounded-[6px]`}
                        onClick={() => scroll(`right`)}/>

                </div>
            </div>
            <div
                className={`flex w-full lg:hidden content-center justify-between px-[2rem] mt-[0.5rem] mb-[1rem]`}>
                <BsFillArrowLeftSquareFill
                    className={`border-2 bg-dimWhite hover:bg-white border-dimWhite hover:border-white text-[1.4rem] cursor-pointer rounded-[6px]`}
                    onClick={() => scroll(`left`)}/>
                <BsFillArrowRightSquareFill
                    className={`border-2 bg-dimWhite hover:bg-white border-dimWhite hover:border-white text-[1.4rem] cursor-pointer rounded-[6px]`}
                    onClick={() => scroll(`right`)}/>

            </div>
            <div className={`flex justify-center lg:hidden`}>
                <button type={`button`}
                        className={`px-1 py-1 rounded-[10px] bg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-800 text-white mt-1 font-medium w-fit`}>
                    <Link
                        href={`/projects`}
                        title={'Projects'}
                        className={`flex w-full sm:fit bg-[#121212] justify-center hover:bg-white hover:text-black hover:border hover:border-black rounded-[10px] px-5 py-2`}
                    >
                        View All <EyeIcon className={`w-5 ml-2`}/>
                    </Link>
                </button>
            </div>

        </div>
    )
}
export default MiniProjects
