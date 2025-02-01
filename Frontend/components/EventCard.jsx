"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

const EventCard = ({ data }) => {

  const [eventCard, setEventCard] = useState(false)

  return (
    <>
      {
        eventCard && (
          <>
            <div className='event-popup-overlay min-w-[100%] min-h-[100%] cursor-default' onClick={() => setEventCard(false)} />
            <div className='event-popup min-h-[500px] w-[70vw] cursor-default'>
                <div className="relative w-full min-h-[500px]">
                  <button onClick={() => setEventCard(false)} className='absolute top-0 right-0 m-3'><CgClose size={34} /></button>
                </div>
            </div>
          </>
        )
      }
      <div className='my-3 flex flex-col items-center justify-center min-w-[280px] w-[280px] min-h-[300px] pb-3 hover:scale-[1.02] hover:traslate-y-[10px] duration-[0.5s] rounded-md pt-2 mr-10 relative drop-shadow-[4px_6px_4px_rgba(0,0,0,0.3)] animate-event-card'>
          <img src="https://drive.google.com/thumbnail?id=1bGMnFJrM9lfMkovJMld-k66MGQ3gLOzg" className='w-[40%] rounded-md' />
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
          
          <button className='w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white my-1 mx-1 rounded-full' onClick={() => setEventCard(true)}>More info</button>
          <a href={data.unstop_link} target='_blank' className='w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white my-1 mx-1 rounded-full'>Register Here</a>
          </div>
          <img src="/event-card-bg.png" className='w-full h-full absolute z-[-1] top-0 left-0 rounded-md' />


          <img src="/event-card-mountain.png" className='absolute w-full bottom-0 z-[-1]' />
      </div>
    </>
  )
}

export default EventCard