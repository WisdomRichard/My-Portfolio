import React from 'react'
import NavLink from "@/components/NavLink";

const MenuOverlay = () => {
    return (
        <ul className={`md:hidden flex flex-col w-screen h-[calc(100vh-4rem)] items-center justify-center`}>
            <li className={`flex flex-col gap-[3rem] justify-center items-center min-w-[70vh] min-h-[70vw] bg-black/90 z-10 rounded-[15px]`}>
                <NavLink href={`/`} title={'Home'}/>
                <NavLink href={`/about`} title={'About'}/>
                <NavLink href={`/projects`} title={'Projects'}/>
            </li>
        </ul>
    )
}
export default MenuOverlay
