import React from 'react'

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed='-0.0001' className='p-20 bg-[#CDEA68] rounded-t-2xl text-black -mt-20'>
            <h1 className='font-[Neue_Montreal] text-5xl leading-15 tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className=' w-full border-t-[1px] border-[#748239] py-5 mt-15 flex'>
                <div className='w-1/2 pt-7'>
                    <h1 className=' text-5xl'>Our approach:</h1>
                    <button className='px-8 py-5 bg-zinc-900 rounded-full text-white mt-7 flex  gap-7 leading-none items-center'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className='h-[60vh] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] bg-cover bg-center w-1/2 rounded-2xl mt-7'></div>
            </div>
        </div>
    )
}

export default About
