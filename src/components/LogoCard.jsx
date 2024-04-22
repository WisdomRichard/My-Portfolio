import React from 'react'
import Image from "next/image";
import logo1 from "../../public/1.png";

const LogoCard = (prop) => {
    return (
        <div className={`flex flex-col justify-center content-center items-center w-[302.8px] h-[302.8px] rounded-full bg-[#C4C4C4] gap-[1rem] z-0`}>
            <div
                className={`flex flex-col justify-center content-center items-center w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#C33764] via-black to-[#1D2671] gap-[1rem] z-0`}>
                <Image src={prop.image1} alt={prop.image1} className={`z-10 w-[130px] h-[130px]`}/>
                <h1 className={`text-white font-poppins font-normal text-center text-[14px]`}>{prop.text1}<br/>{prop.text2}
                </h1>
            </div>
        </div>
    )
}
export default LogoCard
