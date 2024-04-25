import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={`flex w-full border-t-[1px] border-solid border-dimWhite font-extralight text-[12px] font-manrope text-white`}>
            <div className={`px-[2rem] md:px-[8rem] py-6 flex items-center justify-between w-full`}>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div>
                    <span>Build with </span>
                    <span className={`text-pink-300 text-[13px]`}>&#9825; </span>
                    <Link href={`mailto:whizzy.ww@gmail.com`} target={`_blank`} className={`underline underline-offset-2`}>Dante</Link>
                </div>
                <Link href={`mailto:whizzy.ww@gmail.com`} target={`_blank`} className={`underline underline-offset-2`}>Say Hello</Link>
            </div>
        </footer>
    )
}
export default Footer
