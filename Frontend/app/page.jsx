import React from 'react'
import { cn } from '@/lib/utils'

function page() {
  return (
    <div className='visible-delay flex flex-col items-center justify-center -space-y-1 lg:-space-y-1 h-1/2 lg:h-1/3 z-[-1]'>
      <img src="/invictus.svg" alt="" className={cn(
        "w-[90%] sm:w-3/5 md:w-1/2 lg:w-1/3 -mb-8"
      )} />
      <p className='text-[#DE1B19] uppercase text-md pl-20'>
        Unleashing the sword of innovation
      </p>
      <p className='text-black text-[8vw] sm:text-[6vw] md:text-[4.9vw] lg:text-[3.5vw] font-gagalin'>
        15<sup className='font-gagalin text-lg align-super'>th</sup>-18<sup className='font-gagalin text-lg align-super'>th</sup> Feb'25
      </p>

    </div>
  )
}

export default page