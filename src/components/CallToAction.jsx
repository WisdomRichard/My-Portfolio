import React from 'react'
import style from "@/app/style";
import Link from "next/link";

const CallToAction = () => {
    return (
        <div
            className={`${style.paddingX} py-[2rem] lg:py-[5rem] `}>
            <div className={`flex flex-col bg-gradient-to-br from-[#1D2671] to-[#C33764] rounded-[15px] px-[1rem] py-[2rem] sm:py-[3rem] lg:py-[5rem] gap-[2rem]`}>
                <div>
                    <h1 className={`text-white font-manrope font-medium text-[20px] lg:text-[28px] xl:text-[32px] text-center`}>Let’s
                        work together on your next
                        project</h1>
                </div>
                <div className={`flex w-full justify-center`}>
                    <div className={`w-[150px] h-[4px] bg-white rounded`}/>
                </div>
                <div className={`flex justify-center`}>
                    <button type={`button`}
                            className={`px-6 py-3 rounded-[10px] bg-white hover:bg-slate-200 shadow-xl hover:shadow-2xl `}>
                        <Link href={`mailto:whizzy.ww@gmail.com`}
                              target={`_blank`}
                              className={`text-transparent font-manrope bg-clip-text bg-gradient-to-br from-[#1D2671] to-[#C33764] font-medium`}
                        >
                            Contact Me
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CallToAction
