import React from 'react'
import { SiBookstack } from "react-icons/si";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <>

            <footer className='w-full bg-[#2679B8] px-4 lg:px-40 py-16  ' id='footer'>
                <div className='flex items-start justify-around flex-wrap gap-[6vw]'>
                    <div className='w-full sm:w-max'>
                        <div className='flex items-center gap-1 mb-7'>
                            <SiBookstack className='w-12 h-12 text-[#FF7B1B]' />
                            <div className='sm:flex text-white'>
                                <p className='font-bold text-xl ' >Dispatch</p><span className='text-xl'>Experts</span>
                            </div>

                        </div>
                        <div className='flex gap-4  cursor-pointer'>
                            <FaPhoneAlt className='text-[#FF7B1B]' />
                            <p className='text-white hover:text-[#FF7B1B] duration-300'>(302)-219-7080</p>
                        </div>
                        <div className='flex gap-4  cursor-pointer my-2'>
                            <MdMarkEmailUnread className='text-[#FF7B1B]' />
                            <p className='text-white hover:text-[#FF7B1B] duration-300'>info@wagglyllc.com</p>
                        </div>
                        <div className='flex gap-4  cursor-pointer'>
                            <TbWorld className='text-[#FF7B1B]' />
                            <p className='text-white hover:text-[#FF7B1B] duration-300'> www.wagglyllc.com</p>
                        </div>
                    </div>
                    <div className="text-white  w-full sm:w-max">
                        <h1 className="font-bold text-base my-2 uppercase cursor-pointer">Truck types</h1>
                        <div className='flex flex-col text-[13px]'>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Dry Van</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Reefer</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Power Only</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Step Deck</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Flat Bed</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Box Truck</span>
                        </div>
                    </div>
                    <div className=" text-white  w-full sm:w-max">
                        <h1 className="font-bold text-base my-2 uppercase cursor-pointer">What we do</h1>
                        <div className='flex flex-col text-[13px]'>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Load search FTL/LTL</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Rate Negotiation & booking</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Broker Setup</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Detention Layover Tonu</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Invoicing & Collections</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Factoring & Insurance Assistance</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Dedicated Dispatch Team</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">24/7 Support</span>
                            <span className="cursor-pointer hover:text-[#FF7B1B]">Pay Per Load No Contracts</span>
                        </div>
                    </div>
                    <div className="text-white  w-full sm:w-max">
                        <h1 className="font-bold text-base my-2 uppercase cursor-pointer">FIND US ON SOCIAL MEDIA</h1>

                        <div className="w-[200px] my-[20px] flex justify-between">
                            <div className='w-10 h-10 text-xl rounded-full text-[#2679B8] bg-white flex justify-center items-center' >
                                <FaLinkedinIn />
                            </div>
                            <div className='w-10 h-10 text-xl rounded-full text-[#2679B8] bg-white flex justify-center items-center' >
                                <FaInstagram />
                            </div>
                            <div className='w-10 h-10 text-xl rounded-full text-[#2679B8] bg-white flex justify-center items-center' >
                                <FaFacebook />
                            </div>
                            <div className='w-10 h-10 text-xl rounded-full text-[#2679B8] bg-white flex justify-center items-center' >
                                <FaTwitter />
                            </div>
                        </div>
                        <div className='flex  flex-col'>
                            <span className="cursor-pointer  hover:text-[#FF7B1B]">24/7 Support</span>
                            <span className="cursor-pointer  hover:text-[#FF7B1B]">Broker Setup</span>
                            <span className="cursor-pointer  hover:text-[#FF7B1B]">No Contracts</span>
                            <span className="cursor-pointer  hover:text-[#FF7B1B]">Factoring Assistance</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer