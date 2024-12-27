import React, { useState, useEffect } from 'react';

const Section4 = ({ btn }) => {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const span = document.querySelector(".counter");
            const spanPosition = span.getBoundingClientRect();

            if (spanPosition.top >= 0 && spanPosition.bottom <= window.innerHeight && !isCounting) {
                setIsCounting(true);

                const mainCounter = setInterval(() => {
                    setCount((prevCount) => {
                        if (prevCount >= 200) {
                            clearInterval(mainCounter);
                            return prevCount;
                        }
                        return prevCount + 1;
                    });
                }, 10);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isCounting])
    return (
        <>




            <div id='keepMoving' className=' lg:mt-60 md:mt-40 mt-10 flex justify-around px-4 w-full py-4 lg:flex-row flex-col items-center'>
                <div className='lg:w-[50vw] w-full  py-4 '>
                    {/* child parent */}
                    <div className=''>
                        {/* component */}
                        <div className='w-full  '>
                            <p className='text-[#FF7B1B]  xl:translate-y-7 sm:translate-y-4 translate-x-3  translate-y-4 uppercase text-2xl font-bold '>over</p>
                            <div className='flex items-center  flex-wrap'>
                                <div className=''>
                                    <h1 className='counter xl:text-[30vh] sm:text-[20vh] text-[120px] leading-none font-bold text-[#2679B8]'>{count * 10}</h1>
                                </div>
                                <p className="uppercase font-bold mt-3 text-xl font-['Arial', sans-serif]">carries</p>
                            </div>
                            <p className='font-semibold text-sm sm:text-lg w-full sm:w-2/3 tracking-wide lowercase'>CARRIERS HAVE TRUSTED US WITH THEIR DISPATCH AND BACK OFFICE NEEDS</p>
                        </div>
                    </div>
                    <div className='h-[6px] bg-[#60AAE3] w-full my-6' style={{ background: 'linear-gradient(to right, #2779B8, #60AAE3)' }}></div>
                    <div className=' py-4 flex flex-col sm:flex-row'>
                        <div className='w-full '>
                            <p className='text-[#FF7B1B]   translate-y-2  xl:translate-y-3 sm:translate-y-1  lg:translate-y-2   translate-x-1 uppercase text-2xl font-bold'>over</p>
                            <div className='flex gap-4 items-center  flex-wrap'>
                                <div className=''>
                                    <h1 className='text-[90px] xl:text-[14vh] lg:text-[12vh] leading-none font-bold text-[#2679B8]'>{(count * 1.5).toFixed(0)}</h1>
                                </div>
                                <p className="uppercase font-bold mt-3 text-xl font-['Arial', sans-serif]">Loads</p>
                            </div>
                            <p className=' text-sm sm:font-bold font-semibold w-full sm:w-2/3 tracking-wide lowercase'>CARRIERS HAVE TRUSTED US WITH THEIR DISPATCH AND BACK OFFICE NEEDS</p>
                        </div>
                        <div className='w-full  '>
                            <p className='text-[#FF7B1B]   translate-y-2  xl:translate-y-3 sm:translate-y-1  lg:translate-y-2   translate-x-1 uppercase text-2xl font-bold'>over</p>
                            <div className='flex gap-4 items-center flex-wrap'>
                                <div className=''>
                                    <h1 className='text-[90px] xl:text-[14vh] lg:text-[12vh] leading-none font-bold text-[#2679B8]'>{(count * 2.5).toFixed(0)}</h1>
                                </div>
                                <p className="uppercase font-bold mt-3 text-xl font-['Arial', sans-serif]">Brokers</p>
                            </div>
                            <p className=' text-sm sm:font-bold font-semibold  w-full sm:w-2/3 tracking-wide lowercase'>CARRIERS HAVE TRUSTED US WITH THEIR DISPATCH AND BACK OFFICE NEEDS</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[500px] w-full'>
                    <div className='uppercase font-bold text-4xl'>
                        <div className='flex gap-5'>
                            <h1>KEEP</h1>
                            <h1 className='text-[#2679B8]'>Moving</h1>
                        </div>
                        <div className='gap-5 flex'>
                            <h1>KEEP</h1>
                            <h1 className='text-[#FF7B1B]'>Earning</h1>
                        </div>

                    </div>
                    <p className='text-[#676565] sm:text-[17px] my-7 text-sm'>We help thousands of Carriers & Owner Operators to streamline their operations and increase their cash flow.</p>

                    <a href="#setup">

                        <button className={`${btn} px-7 font-semibold py-3`}>
                            Start Moving Today
                        </button>
                    </a>
                </div>
            </div>


        </>
    )
}

export default Section4