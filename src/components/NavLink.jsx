'use client';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = (props) => {
    const pathname = usePathname()
    return (
        <Link href={props.href}
              className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-[16px] font-manrope rounded md:p-0 hover:text-white relative group ${pathname === props.href ? 'text-white' : 'text-dimWhite'}`}>
            {props.title}

            <span className={`h-[1px] inline-block bg-gradient-to-br from-[#C33764] to-[#1D2671] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === props.href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
};

export default NavLink;