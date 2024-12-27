import React, { useState } from 'react'
import { SiBookstack } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { Dropdown, Space, Menu } from 'antd';
import { IoCloseSharp } from "react-icons/io5";
const items = [
    {
        key: '1',
        label: (<p className='hover:text-[#FF7B1B] font-semibold transition-all w-full m-0'>Dry Van</p>),
    },
    {
        key: '2',
        label: (<p className='hover:text-[#FF7B1B] font-semibold transition-all w-full m-0'>Reefer</p>),
    },
    {
        key: '3',
        label: (<p className='hover:text-[#FF7B1B] font-semibold transition-all w-full m-0'>Box Truck</p>),
    },
    {
        key: '4',
        label: <p className='hover:text-[#FF7B1B] font-semibold transition-all w-full m-0'>Flat Bed</p>,
    },
    {
        key: '5',
        label: <p className='hover:text-[#FF7B1B] font-semibold transition-all w-full m-0'>Step Deck</p>,
    },
    {
        key: '6',
        label: <p className='hover:text-[#FF7B1B] font-semibold transition-all w-full m-0'>Power only</p>,
    },
];

const NavMenuContent = [
    {
        key: 'sub1',
        label: 'Dispatch Services & Truck Types',
        
        children: [
            {
                key: 'g1',
                type: 'group',
                children: [
                    { key: '1', label: <div className='hover-bg p-2'>Dry Van</div> },
                    { key: '2', label: <div className='hover-bg p-2'>Reefer</div> },
                    { key: '3', label: <div className='hover-bg p-2'>Box Truck</div> },
                    { key: '4', label: <div className='hover-bg p-2'>Flat Bed</div> },
                    { key: '5', label: <div className='hover-bg p-2'>Step Deck</div> },
                    { key: '6', label: <div className='hover-bg p-2'>Power Only</div> },
                ],
            },
        ],
    },
];

const Navbar = ({ btn }) => {
    const [NavMenu, setNavMenu] = useState(false)


    let hovercolor = "hover:text-[#FF7B1B] font-semibold cursor-pointer transition-all duration-200"
    return (
        <>
            <div className='relative'>

                <nav className='w-full h-16 flex justify-between shadow-[0_0_10px_2px_#ccc]  items-center sm:px-[4vw] border px-4'>
                    <div className='flex justify-center items-center gap-4  '>
                        <FaBars className='w-8 h-8 p-[5px] cursor-pointer lg:hidden block' onClick={() => setNavMenu(true)} />
                        <div className='flex items-center gap-1'>

                            <SiBookstack className='w-12 h-12 text-[#FF7B1B]' />
                            <div className='sm:flex hidden'>
                                <p className='font-bold text-xl ' >Dispatch</p><span className='text-xl'>Experts</span>

                            </div>
                        </div>
                    </div>
                    <ul className='lg:flex gap-4 capitalize text-[#636262] hidden flex-wrap'>
                        <li>
                            <Dropdown menu={{ items, }} className="hover:text-[#FF7B1B] font-semibold" >
                                <Space>
                                    Dispatch Services & Truck Types
                                </Space>
                            </Dropdown>
                        </li>
                        <li className={`${hovercolor}`}>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li className={`${hovercolor}`}>
                            <a href="#Faq">FAQ</a>
                        </li>
                        <li className={`${hovercolor}`}>
                            <a href="#keepMoving">Keep Moving</a>
                        </li>
                        <li className={`${hovercolor}`}>
                            <a href="#footer">Contact</a>
                        </li>
                    </ul>
                    <div className='sm:block hidden'>
                        <a href="#setup">
                            <button className={`${btn} px-6 py-3`}> Set Up WIth Us</button>
                        </a>
                    </div>
                </nav>
                <div className={` ${NavMenu ? "visible opacity-100 right-[0%]" : "opacity-0 invisible right-full"}  z-50 w-full duration-500 lg:hidden shadow-[0_0_10px_2px_#ccc] px-10 py-6 fixed top-0 bg-white border`} >
                    <IoCloseSharp className='absolute top-4 right-4 w-10 h-10 p-1' onClick={() => setNavMenu(false)} />
                    <div className='flex gap-4  '>
                        <div className='flex items-center gap-1'>
                            <SiBookstack className='w-12 h-12 text-[#FF7B1B]' />
                            <p className='font-bold text-xl ' >Dispatch</p><span className='text-xl'>Experts</span>
                        </div>
                    </div>
                    <ul className='flex gap-6 capitalize text-[#636262]  flex-col'>
                        <li>

                            <Menu
                                style={{ width: 256, boxShadow: "0 0 10px 2px #ccc", borderRadius: "10px", marginTop: "20px" }}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                items={NavMenuContent}
                            />
                        </li>
                        <li className={`${hovercolor}`}>
                            <a onClick={() => setNavMenu(false)} href="#testimonials">Testimonials</a>
                        </li>
                        <li className={`${hovercolor}`}>
                            <a onClick={() => setNavMenu(false)} href="#Faq">FAQ</a>
                        </li>
                        <li className={`${hovercolor}`}>
                            <a onClick={() => setNavMenu(false)} href="#keepMoving">Keep Moving</a>
                        </li>
                        <li className={`${hovercolor}`}>
                            <a onClick={() => setNavMenu(false)} href="#footer">Contact</a>
                        </li>
                    </ul>
                    <button className={`${btn} px-6 py-3 mt-5`}> <a href="#contact">Set Up WIth Us</a> </button>
                </div>

            </div>

        </>
    )
}

export default Navbar;