import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-section className='w-full h-screen flex gap-10 pt-30 px-10'>
      <div className=' cardcontainer w-1/2 h-[50vh] bg-[#004D43] rounded-2xl '>
        <div className=' card relative h-full w-full flex items-center justify-center'>
          <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
        <button className='absolute bottom-10 left-10 border-[1.5px] border-[#CDEA68] text-[#CDEA68] py-1 px-4 rounded-full'>©2025</button>
        </div>

      </div>
      <div className='cardcontainer w-1/2 h-[50vh] flex gap-10'>
        <div className=' card relative h-full w-1/2 rounded-2xl bg-[#192826]  flex items-center justify-center'>
          <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
        <button className='absolute bottom-10  border-[1.5px] border-zinc-300 py-1 px-4 rounded-full'>Rating 5.0 on Clutch</button>
        </div>
        <div className='card relative h-full w-1/2 rounded-2xl bg-stone-800 flex items-center justify-center'>
          <img className='size-30' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
                  <button className='absolute bottom-10  border-[1.5px] border-zinc-300 py-1 px-4 rounded-full text-sm'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>

      </div>
    </div>
  )
}

export default Cards
