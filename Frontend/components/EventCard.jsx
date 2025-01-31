import React from 'react'

const EventCard = () => {
  return (
    <div className='my-3 flex flex-col items-center justify-center min-w-[280px] w-[280px] min-h-[300px] pb-3 hover:scale-[1.02] hover:traslate-y-[10px] duration-[0.5s] rounded-md mr-10 relative drop-shadow-[4px_6px_4px_rgba(0,0,0,0.3)] animate-event-card'>
        <img src="/event-demo-logo.png" className='w-[70%]' />


        <h3 className="text-center text-2xl uppercase">Event Name</h3>
        <h3 className="text-center text-[12px] font-jmh uppercase">Fun event</h3>

        <p className='text-[8px] px-4 font-jmh mt-4 font-limerick'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quibusdam cum dolorum ex eum animi voluptas at vero incidunt doloremque, magnam distinctio consectetur suscipit earum obcaecati minima quisquam optio harum repellendus quasi! Inventore, quibusdam temporibus.</p>

        <div className='flex flex-row items-center justify-evenly w-[90%] mx-auto mt-3'>
          <div className='text-center text-sm'>
            <p>Timings</p>
            <p>2-4 PM</p>
          </div>
          <img src="/event-card-kunai.png" alt="" className="h-[110%] w-auto" />
          <div  className='text-center text-sm'>
            <p>Prizes</p>
            <p>10k</p>
          </div>
          <img src="/event-card-kunai.png" alt="" className="h-[110%] w-auto" />
          <div className='text-center text-sm'>
            <p>Dates</p>
            <p>11 Feb 2024</p>
          </div>
        </div>

        <div className='flex flex-col w-full items-center justify-center mt-3'>
        <button className='w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white my-1 mx-1 rounded-full'>More info</button>
        <button className='w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white my-1 mx-1 rounded-full'>Register Here</button>
        </div>
        <img src="/event-card-bg.png" className='w-full h-full absolute z-[-1] top-0 left-0 rounded-md' />


        <img src="/event-card-mountain.png" className='absolute w-full bottom-0 z-[-1]' />
    </div>
  )
}

export default EventCard