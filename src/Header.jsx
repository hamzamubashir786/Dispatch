import React from 'react'

const Header = ({ btn }) => {
    return (
        <>
            <div className='w-full flex px-3 sm:px-10 mt-20 md:mt-32 gap-3 justify-between flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2 '>
                    <div className='uppercase text-3xl leading-none sm:text-[5vw] md:text-[3vw]'>
                        <h1 className=''>Independent</h1>
                        <h1 className='text-[#2679B8] font-semibold inline'>Dispatching Services</h1>
                        <h1 className='inline ml-4'>for</h1>
                        <h1 className='font-bold'>Owner Operators</h1>
                    </div>
                    <p className='my-9 font-thin font-serif'>Get access to thousands of contract free loads suitable to your truck type.</p>
                    <a href="#setup">

                        <button className={`${btn} px-20 py-3`}> Request a Callback</button>
                    </a>
                </div>
                <div className='w-full lg:w-1/2 '>
                    <iframe className='w-full h-96' src="https://www.youtube.com/embed/aJJh0rTsWr8" title="Dispatch Experts: Empowering Owner-Operators for Trucking Success 🚚" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default Header