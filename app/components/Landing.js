'use client'
import React from 'react'
import { motion } from "motion/react"
import { MdArrowOutward } from "react-icons/md"
const Landing = () => {
    return (
        <div data-scroll data-scroll-speed="-.3" className='bg-zinc-900 w-full h-screen pt-1'>
            <div className='textstructure mt-20 md:mt-32 lg:mt-40 px-4 md:px-8 lg:px-15'>

                {["We Create", "Eye Opening", "Presentations"].map((items, index) => {
                    return <div key={index} className='textmasker'>
                        <div className='w-fit flex items-center'>
                            {index===1 &&(
                                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.7}} className='mr-2 md:mr-3 lg:mr-5 w-[12vw] md:w-[10vw] lg:w-[9vw] rounded-md h-[8vw] md:h-[7vw] lg:h-[6vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center relative -top-[1vw] md:-top-[1.5vw] lg:-top-[2vw]'></motion.div>
                            )}
<h1 className="leading-[9vw] md:leading-[8vw] lg:leading-[7.5vw] text-4xl md:text-7xl lg:text-9xl uppercase font-[Founders_Grotesk_X-Cond] font-medium">{items}</h1>
                        </div>

                        
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-10 md:mt-16 lg:mt-20 flex flex-col md:flex-row justify-between py-5 px-4 md:px-8 lg:px-15 gap-4 md:gap-0'>
                <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                {["For public & private companies only","From the first pitch to IPO"].map((items,index)=>{
                    return <p key={index} className='leading-none font-light tracking-tight text-sm md:text-base'>{items}</p>
                })}
                </div>
                <div className='start flex items-center gap-2'>
                    <div className='py-2 px-3 md:px-4 rounded-full border-[1px] uppercase border-zinc-400 font-light text-xs md:text-sm leading-none'>Start the Project</div>
                    <div className='w-6 h-6 md:w-7 md:h-7 rounded-full border-[1px] border-zinc-400 flex items-center justify-center'>
                        <MdArrowOutward className='text-xs md:text-sm' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Landing 
