"use client"
import React, { useState } from 'react'
import Link from 'next/link'
// import { CgClose } from 'react-icons/cg'
import { X } from 'lucide-react'

const EventCard = ({ data, onClick }) => {

  return (
    <>

      <div className='my-3 flex flex-col items-center justify-center min-w-[60%] w-[60%] sm:min-w-[50%] sm:w-[50%] md:min-w-[40%] md:w-[40%] lg:min-w-[28%] lg:w-[28%] xl:min-w-[23%] xl:w-[23%] max-h-[60vh] box-border pb-3 hover:scale-[1.02] hover:traslate-y-[10px] duration-[0.5s] rounded-md pt-2 mr-10 relative drop-shadow-[4px_6px_4px_rgba(0,0,0,0.3)] animate-event-card overflow-auto card-bg'>
          <img src={data.logo_link} className='w-[30%] rounded-md' />
          {/* <img src="https://drive.google.com/thumbnail?id=1bGMnFJrM9lfMkovJMld-k66MGQ3gLOzg" className='w-[40%] rounded-md' /> */}
          {/* <img src="/event-demo-logo.png" className='w-[70%]' /> */}

          <h3 className="text-center text-2xl uppercase">{data.event_name}</h3>
          <h3 className="text-center text-[12px] font-jmh">{data.category}</h3>

          <p className='text-[10px] px-4 font-jmh mt-4 font-limerick'>
            {data.event_desc}
          </p>

          <div className='flex flex-row items-center justify-evenly w-[90%] mx-auto mt-3'>
            <div className='text-center text-sm'>
              <p>Timings</p>
              <p>{data.timing}</p>
            </div>
            <img src="/event-card-kunai.png" alt="" className="h-[110%] w-auto" />
            <div  className='text-center text-sm'>
              <p>Prizes</p>
              <p className='tracking-normal'>{data.prize}</p>
            </div>
            <img src="/event-card-kunai.png" alt="" className="h-[110%] w-auto" />
            <div className='text-center text-sm'>
              <p>Dates</p>
              <p>{data.date}</p>
            </div>
          </div>

          <div className='flex flex-col w-full items-center justify-center mt-3'>
          
          <button className='w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white my-1 mx-1 rounded-full' onClick={() => onClick(data)}>More info</button>
          <a href={data.unstop_link} target='_blank' className='w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white my-1 mx-1 rounded-full'>Register Here</a>
          </div>


          <img src="/event-card-mountain.png" className='absolute w-full bottom-0 z-[-1]' />
      </div>
    </>
  )
}

export default EventCard