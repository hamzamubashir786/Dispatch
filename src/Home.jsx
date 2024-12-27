import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Section2 from './Section2'
import Section3 from './Section3'
import KeepMoving from './KeepMoving'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
    let btncolor = "bg-[#2679B8] border border-[#2679B8] text-white hover:text-[#2679B8] hover:bg-[white] transition-all"
    return (

        <>
            <div className='overflow-hidden'>
                <Navbar btn={btncolor} />
                <Header btn={btncolor} />
                <Section2 btn={btncolor} />
                <Section3 />
                <KeepMoving btn={btncolor} />
                <Testimonials />
                <FAQ />
                <Contact btn={btncolor} />
                <Footer />
            </div>
        </>
    )
}

export default Home