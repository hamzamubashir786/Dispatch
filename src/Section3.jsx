import React from 'react'
import { LiaSearchengin } from "react-icons/lia";
import { FaHandshake } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdTabletPortrait } from "react-icons/io";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoBanOutline } from "react-icons/io5";

const Section3 = () => {
    return (
        <>
            <div className="w-full mt-10">
                <div className='bg-[#2679B8] w-full p-1'>
                    <div className='flex font-bold gap-3 justify-center text-4xl mt-4 uppercase '>
                        <h1 className='text-white'>WHAT WE</h1>
                        <h1 className='text-[#FF7B1B] '>do</h1>
                    </div>
                    {/* icons parent */}
                    <div className='w-full  mt-10 flex  flex-wrap justify-between'>
                        <div className='md:w-60 w-full h-full flex flex-row gap-3   md:flex-col items-center justify-start px-2 my-4 md:justify-center'>
                            {/* icon box  */}
                            <div>
                                <LiaSearchengin className='md:w-full text-7xl text-[#2679B8] bg-white rounded-full w-12 md:bg-[#2679B8] h-12 md:h-max flex justify-center items-center md:p-0 p-2 md:text-white ' />
                            </div>
                            <p className='text-white text-lgfont-semibold font-mono'>Load search FTL/LTL </p>
                        </div>
                        <div className='md:w-60 w-full h-full flex flex-row gap-3   md:flex-col items-center justify-start px-2 my-4 md:justify-center'>
                            {/* icon box  */}
                            <div>
                                <FaHandshake className='md:w-full text-7xl text-[#2679B8] bg-white rounded-full w-12 md:bg-[#2679B8] h-12 md:h-max flex justify-center items-center md:p-0 p-2 md:text-white ' />
                            </div>
                            <p className='text-white text-lg font-semibold font-mono  text-center '>Rate Negotiation </p>
                        </div>
                        <div className='md:w-60 w-full h-full flex flex-row gap-3   md:flex-col items-center justify-start px-2 my-4 md:justify-center'>
                            {/* icon box  */}
                            <div>
                                <FaFileContract className='md:w-full text-7xl text-[#2679B8] bg-white rounded-full w-12 md:bg-[#2679B8] h-12 md:h-max flex justify-center items-center md:p-0 p-2 md:text-white ' />
                            </div>
                            <p className='text-white   text-center text-lg font-semibold font-mono'>Broker Setup </p>
                        </div>
                        <div className='md:w-60 w-full h-full flex flex-row gap-3   md:flex-col items-center justify-start px-2 my-4 md:justify-center'>
                            {/* icon box  */}
                            <div>
                                <FaAddressCard className='md:w-full text-7xl text-[#2679B8] bg-white rounded-full w-12 md:bg-[#2679B8] h-12 md:h-max flex justify-center items-center md:p-0 p-2 md:text-white ' />
                            </div>
                            <p className='text-white text-lg  text-center font-semibold font-mono'>Detention Layover Tonu </p>
                        </div>
                        <div className='md:w-60 w-full h-full flex flex-row gap-3   md:flex-col items-center justify-start px-2 my-4 md:justify-center'>
                            {/* icon box  */}
                            <div>
                                <FaFileInvoiceDollar className='md:w-full text-7xl text-[#2679B8] bg-white rounded-full w-12 md:bg-[#2679B8] h-12 md:h-max flex justify-center items-center md:p-0 p-2 md:text-white ' />
                            </div>
                            <p className='text-white text-lg font-semibold  text-center font-mono'>Invoicing & Collections</p>
                        </div>
                        <div className='md:w-60 w-full h-full flex flex-row gap-3   md:flex-col items-center justify-start px-2 my-4 md:justify-center'>
                            {/* icon box  */}
                            <div>
                                <LiaCommentsSolid className='md:w-full text-7xl text-[#2679B8] bg-white rounded-full w-12 md:bg-[#2679B8] h-12 md:h-max flex justify-center items-center md:p-0 p-2 md:text-white ' />
                            </div>
                            <p className='text-white text-lg font-semibold font-mono  text-center'>"Factoring & Insurance"</p>
                        </div>
                    </div>
                    <div className='w-full  md:h-28 h-max flex justify-center bg-[#2679B8] mt-6'>
                        <div className='w-full flex justify-around gap-y-2 flex-wrap '>
                            <div className='border-[3px]  border-[#2679B8] w-full md:w-[240px] px-1 p-3 text-center  bg-white'>
                                {/* icon box */}
                                <div className="flex justify-center items-center  text-[#2679B8]">
                                    <MdOutlineStarBorder className='text-6xl' />
                                </div>
                                {/* card title */}
                                <h1 className='font-semibold md:h-[50px]  uppercase text-xl my-3'>Top market loads </h1>
                                {/* content */}
                                <p className='font-serif text-sm px-3  text-[#434242aa]' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div className='border-[3px] border-[#2679B8] w-full md:w-[240px]  px-1 p-3 text-center  bg-white'>
                                {/* icon box */}
                                <div className="flex justify-center items-center  text-[#2679B8]">
                                    <FaUserGroup className='text-6xl' />

                                </div>
                                {/* card title */}
                                <h1 className='font-semibold uppercase md:h-[50px] text-xl my-3'>Start-to-finish support</h1>
                                {/* content */}
                                <p className='font-serif text-sm px-3 text-[#434242aa]' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div className='border-[3px] border-[#2679B8]  w-full md:w-[240px]  px-1 p-3 text-center  bg-white'>
                                {/* icon box */}
                                <div className="flex justify-center items-center relative text-[#2679B8]">
                                    <IoBanOutline className='text-6xl ' />
                                    <IoMdTabletPortrait className='text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute' />
                                </div>
                                {/* card title */}
                                <h1 className='font-semibold md:h-[50px] uppercase text-xl my-3'>No contracts</h1>
                                {/* content */}
                                <p className='font-serif text-sm px-3 text-[#434242aa]' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section3