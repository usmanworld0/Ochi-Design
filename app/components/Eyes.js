'use client'
import React, { useEffect, useState } from 'react'

const Eyes = () => {
   const [rotate,setRotate]=useState(0);
  useEffect(()=>{
    const handleMouseMove = (e) => {
      let mouseX=e.clientX;
      let mouseY=e.clientY;
      let deltaX=mouseX-window.innerWidth/2;
      let deltaY=mouseY-window.innerHeight/2;
      var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
      setRotate(angle-180);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className='eyes w-full h-screen overflow-hidden relative'>
      <div data-scroll data-scroll-speed="-.7" className='absolute inset-0 w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'></div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center gap-10'>
        <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center'>
          <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 w-full h-10'>
<div className='w-5 h-5 rounded-full bg-zinc-200'></div>
          </div>
            
          </div>
        </div>
        <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center'>
           <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 w-full h-10'>
 <div className='w-5 h-5 rounded-full bg-zinc-200'></div>
           </div>
           
          </div>
        </div>

      </div>
    </div>
  )
}

export default Eyes
