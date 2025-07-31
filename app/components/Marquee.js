'use client'
import React from 'react'
import { motion } from "motion/react"
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-25 bg-[#004d43] border-zinc-500 rounded-t-2xl'>
        <div className='text flex justify-between  border-t-1 border-b-1 flex whitespace-nowrap overflow-hidden '>
            {["We are Ochi","We are Ochi","We are Ochi"].map((items,index)=>{
                return <motion.h1 key={index} initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity , duration:5}} className='leading-none text-[30vw] pr-20 font-[Founders_Grotesk_X-Cond] -mb-[9vw] pt-5 '>{items}</motion.h1>
            })}
        </div>
      
    </div>
  )
}

export default Marquee
