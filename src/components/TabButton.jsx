import React from 'react'

const TabButton = (prop) => {
    const buttonClasses = prop.active ? 'text-white ' : 'text-dimWhite'
    return (
        <button onClick={prop.selectTab}>
            <p className={`mr-5 font-manrope font-extrabold text-[16px] md:text-[18px] hover:text-white ${buttonClasses} relative group`}>
                {prop.children}
                <span
                    className={`h-[1px] inline-block bg-gradient-to-br from-[#C33764] to-[#1D2671] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${prop.active ? 'w-full' : 'w-0'}`}>
                    &nbsp;
                </span>

            </p>
        </button>
    )
}
export default TabButton
