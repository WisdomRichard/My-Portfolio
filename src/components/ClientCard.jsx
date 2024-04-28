import React from 'react'
import style from "@/app/style";
import Image from "next/image";
import logo1 from "../../public/Untitled design.png";
import logo2 from "../../public/Konami.jpg";
import logo3 from "../../public/B.jpg";
import logo4 from "../../public/Raph.jpg";
import logo5 from '/public/gemini tech.jpg'

const ClientCard = (prop) => {


    return (
        <div className={`flex flex-col lg:flex-row justify-center content-center ${prop.margin}`}>
            <div className={`flex flex-col flex-1 gap-[1.5rem] place-content-center`}>
                <p className={`${style.paragraph} text-center lg:text-left`}>{prop.writeup}</p>
                <div className={`flex w-full justify-center lg:justify-start`}>
                    <div className={`w-[150px] h-[5px] bg-white`}/>
                </div>
                <div>
                    <h1 className={`text-white font-medium font-manrope text-[20px] text-center lg:text-left`}>{prop.name}</h1>
                    <p className={`${style.paragraph} text-center lg:text-left`}>{prop.position}</p>
                </div>
            </div>
            <div className={`flex flex-1 justify-center content-center place-items-center relative w-full h-[500px] min-h-[500px] z-0`}>
                <div className={`w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-zinc-600 flex justify-center place-items-center rounded-full z-0 place-content-center`}>
                    <Image src={prop.logo} alt={prop.logo}
                       className={`w-[245px] sm:w-[295px] h-[245px] sm:h-[295px] object-fill rounded-full z-0 place-content-center`}/>
                </div>
                <div
                    className={`w-[65px] h-[65px] flex absolute bg-zinc-600 justify-center place-items-center rounded-full bottom-[25%] left-[8%] md:left-[26%] lg:left-[8%] xl:left-[26%] z-10 `}>
                    <Image src={logo4} alt={logo4} className={`w-[60px] h-[60px] rounded-full object-fill`}/>
                </div>
                <div
                    className={`w-[23px] h-[23px] absolute  bg-gradient-to-br from-[#C33764] to-[#1D2671] rounded-full bottom-[20%]  left-[2%] md:left-[15%] lg:left-[2%] xl:left-[15%] z-10`}/>
                <div
                    className={`w-[23px] h-[23px] absolute  bg-gradient-to-br from-[#C33764] to-[#1D2671] rounded-full top-[32%]  left-[10%] md:left-[20%] lg:left-[10%] xl:left-[20%] z-10`}/>
                <div
                    className={`w-[72px] h-[72px] flex absolute bg-zinc-600 justify-center place-items-center rounded-full top-[18%] left-[62%] z-10`}>
                    <Image src={logo3} alt={logo3} className={`w-[67px] h-[67px] rounded-full object-fill`}/>
                </div>
                <div
                    className={`w-[65px] h-[65px] flex absolute bg-zinc-600 justify-center place-items-center rounded-full top-[11%] left-[27%] z-10`}>
                    <Image src={logo5} alt={logo1} className={`w-[60px] h-[60px] rounded-full object-fill`}/>
                </div>
                <div
                    className={`w-[72px] h-[72px] flex absolute bg-zinc-600 justify-center place-items-center rounded-full bottom-[13%] left-[67%] z-10`}>
                    <Image src={logo2} alt={logo2} className={`w-[67px] h-[67px] rounded-full object-fill`}/>

                </div>
                <div
                    className={`w-[13px] h-[13px] absolute  bg-gradient-to-br from-[#C33764] to-[#1D2671] rounded-full bottom-[40%] left-[75%] z-10`}/>
                <div
                    className={`w-[23px] h-[23px] absolute  bg-gradient-to-br from-[#C33764] to-[#1D2671] rounded-full top-[32%] left-[90%] md:left-[78%] lg:left-[85%] xl:left-[78%] z-10`}/>
                <div
                    className={`w-[30px] h-[30px] flex absolute bg-zinc-600 justify-center place-items-center rounded-full bottom-[12%] left-[40%] z-10`}>
                    <Image src={logo1} alt={logo1} className={`w-[27px] h-[27px] rounded-full object-fill`}/>
                </div>
            </div>
        </div>

    )
}
export default ClientCard
