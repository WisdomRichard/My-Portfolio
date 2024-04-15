import React from 'react'
import Image from "next/image";
import Link from "next/link";
const HireMe = () => {
    return (
        <div className={`flex justify-center md:justify-start overflow-hidden md:ml-[3rem] pb-[1rem]`}>
            <div className={`w-[6rem] md:w-40 h-auto flex items-center justify-center relative`}>
                <Image src='/Web-Deve2.svg' width={50} height={50} alt={`Circular Text`} className={`h-[120px] w-[120px] rounded-[100%] animate-spin-slow`}/>
                <Link href={`mailto:whizzy.ww@gmail.com`} className={`flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-[8px] md:text-[10px] font-poppins font-bold bg-white shadow-md border border-solid border-white w-[40px] md:w-[55px] h-[40px] md:h-[55px] rounded-full hover:bg-black hover:text-white`}>
                    Hire Me
                </Link>
            </div>
        </div>
    )
}
export default HireMe;
