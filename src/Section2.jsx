import React from 'react'
import img1 from "./assets/t_one.png"
import img2 from "./assets/t_two.png"
import img3 from "./assets/t_three.png"
import img4 from "./assets/t_four.png"
import img5 from "./assets/t_five.png"
import img6 from "./assets/t_six.png"

const Section2 = ({ btn }) => {

    return (
        <>

            <div className='flex font-bold gap-3 justify-center text-4xl my-20 uppercase '>

                <h1>WHAT WE</h1>
                <h1 className='text-[#2679B8] '>Move</h1>
            </div>
            <div className='w-full flex justify-center items-center'>

                <div className='w-full p-1 xl:w-[1280px] flex flex-wrap gap-y-3 md:gap-3 justify-between' >
                    <div className='md:w-[30%] w-[50%] px-2 flex items-center justify-between flex-col gap-4 group'>
                        <div>
                            <div className='w-full flex justify-center'>
                                <img
                                    src={img1}
                                    className='w-[70%] sm:w-max transition-transform duration-300 ease-in-out group-hover:animate-bounce'
                                    alt=""
                                />
                            </div>
                            <h1 className='font-bold text-center text-[19px]'>Dry Van</h1>
                            <p className='text-center text-gray-600 text-[12px] sm:text-sm mt-3 font-serif'>
                                Gain access to thousands of dry van loads from hundreds of shippers in one call
                            </p>
                        </div>
                        <button className={`${btn} px-5 py-1 sm:px-8 sm:py-2 rounded-sm text-[10px]`}>
                            more
                        </button>
                    </div>

                    <div className='md:w-[30%] w-[50%] px-2 flex items-center justify-between flex-col gap-4 group' >
                        <div className=''>
                            <div className='w-full flex justify-center'>
                                <img src={img2} className='w-[70%] sm:w-max transition-transform duration-300 ease-in-out group-hover:animate-bounce' alt="" />
                            </div>
                            <h1 className='font-bold text-center text-[19px] '>Dry Van</h1>
                            <p className='text-center text-gray-600 text-[12px] sm:text-sm mt-3 font-serif' >Gain access to thousands of dry van loads from hundreds of shippers in one call</p>
                        </div>
                        <button className={` ${btn} px-5 py-1 sm:px-8 sm:py-2 rounded-sm text-[10px]`}>more</button>
                    </div> <div className='md:w-[30%] w-[50%] px-2 flex items-center justify-between flex-col gap-4 group' >
                        <div className=''>
                            <div className='w-full flex justify-center'>
                                <img src={img3} className='w-[70%] sm:w-max transition-transform duration-300 ease-in-out group-hover:animate-bounce' alt="" />
                            </div>
                            <h1 className='font-bold text-center text-[19px] '>Dry Van</h1>
                            <p className='text-center text-gray-600 text-[12px] sm:text-sm mt-3 font-serif' >Gain access to thousands of dry van loads from hundreds of shippers in one call</p>
                        </div>
                        <button className={` ${btn} px-5 py-1 sm:px-8 sm:py-2 rounded-sm text-[10px]`}>more</button>
                    </div> <div className='md:w-[30%] w-[50%] px-2 flex items-center justify-between flex-col gap-4 group' >
                        <div className=''>
                            <div className='w-full flex justify-center'>
                                <img src={img4} className='w-[70%] sm:w-max transition-transform duration-300 ease-in-out group-hover:animate-bounce' alt="" />
                            </div>
                            <h1 className='font-bold text-center text-[19px] '>Dry Van</h1>
                            <p className='text-center text-gray-600 text-[12px] sm:text-sm mt-3 font-serif' >Gain access to thousands of dry van loads from hundreds of shippers in one call</p>
                        </div>
                        <button className={` ${btn} px-5 py-1 sm:px-8 sm:py-2 rounded-sm text-[10px]`}>more</button>
                    </div> <div className='md:w-[30%] w-[50%] px-2 flex items-center justify-between flex-col gap-4 group' >
                        <div className=''>
                            <div className='w-full flex justify-center'>
                                <img src={img5} className='w-[70%] sm:w-max transition-transform duration-300 ease-in-out group-hover:animate-bounce' alt="" />
                            </div>
                            <h1 className='font-bold text-center text-[19px] '>Dry Van</h1>
                            <p className='text-center text-gray-600 text-[12px] sm:text-sm mt-3 font-serif' >Gain access to thousands of dry van loads from hundreds of shippers in one call</p>
                        </div>
                        <button className={` ${btn} px-5 py-1 sm:px-8 sm:py-2 rounded-sm text-[10px]`}>more</button>
                    </div> <div className='md:w-[30%] w-[50%] px-2 flex items-center justify-between flex-col gap-4 group' >
                        <div className=''>
                            <div className='w-full flex justify-center'>
                                <img src={img6} className='w-[70%] sm:w-max transition-transform duration-300 ease-in-out group-hover:animate-bounce -translate-x-10' alt="" />
                            </div>
                            <h1 className='font-bold text-center text-[19px] '>Dry Van</h1>
                            <p className='text-center text-gray-600 text-[12px] sm:text-sm mt-3 font-serif' >Gain access to thousands of dry van loads from hundreds of shippers in one call</p>
                        </div>
                        <button className={` ${btn} px-5 py-1 sm:px-8 sm:py-2 rounded-sm text-[10px]`}>more</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Section2