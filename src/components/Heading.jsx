import React from 'react'

const Heading = (prop) => {
    return (
        <div>
            <h1 className={`text-white font-manrope font-extrabold text-[26px] md:text-[28px] mt-[1rem]`}>{prop.heading}</h1>
            <div className={`h-[3px] w-[130px] bg-gradient-to-br from-[#C33764] to-[#1D2671] mb-[1rem]`}/>
        </div>
    )
}
export default Heading
