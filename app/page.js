'use client'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Start from './components/Start'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const page = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Start/>
      <Footer/>
    </div>
  )
}

export default page
