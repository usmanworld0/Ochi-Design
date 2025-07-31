'use client'
import { motion } from "motion/react"
import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa";

const Featured = () => {
 
   const[isHovering1,setHovering1]=useState(false)
   const[isHovering2,setHovering2]=useState(false)
  
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-20 relative'>
      <div className='px-10 border-b-[1px] pb-10 border-zinc-700 w-full'>
        <h1 className='text-5xl font-light'>Featured projects</h1> </div>
      
      {/* Centered text overlays */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none'>
        <h1 className='flex leading-[7.5vw] text-9xl uppercase font-[Founders_Grotesk_X-Cond] font-medium text-[#CDEA68]'>
          {"SALIENCE LABS".split("").map((item,index)=>{
            return <motion.span key={index} initial={{y:"100%", opacity:0}} animate={isHovering1 ? ({y:"0%", opacity:1}) :({y:"100%", opacity:0})} transition={{ease:[0.22,1,0.36,1],delay:index*.06}} className='inline-block'>{item}</motion.span>
          })}
        </h1>
      </div>
      
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none'>
        <h1 className='flex leading-[7.5vw] text-9xl uppercase font-[Founders_Grotesk_X-Cond] font-medium text-[#CDEA68]'>
          {"CARDBOARD SPACESHIP".split("").map((item,index)=>{
            return <motion.span key={index} initial={{y:"100%", opacity:0}} animate={isHovering2 ? ({y:"0%", opacity:1}) :({y:"100%", opacity:0})} transition={{ease:[0.22,1,0.36,1],delay:index*.06}} className='inline-block'>{item}</motion.span>
          })}
        </h1>
      </div>
      
      <div className=' px-10 cards w-full flex gap-7 pt-10'>
       
        <div  onMouseEnter={()=>setHovering1(true)} onMouseLeave={()=>{setHovering1(false)}} className='card w-1/2 h-[80vh] '>
        
          <div className='text flex items-center gap-2 text-[1vw]'> <FaCircle /> SALIENCE LABS</div>
          <div className='mt-7 rounded-2xl image w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png")] bg-cover bg-center relative overflow-hidden' > 
          </div>

        </div>
        
        <div onMouseEnter={()=>setHovering2(true)} onMouseLeave={()=>{setHovering2(false)}} className='card w-1/2 h-[80vh] '>
          <div className='text flex items-center gap-2 text-[1vw]'> <FaCircle /> CARDBOARD SPACESHIP</div>
          <div className='mt-7 rounded-2xl image w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png")] bg-cover bg-center relative overflow-hidden' >
           </div>

        </div>
      </div>
    </div>
  )
}

export default Featured
