import React from 'react'

function Loading() {
  return (
    <div className='flex items-center justify-center h-full w-full fixed top-0 left-0 z-[100] loader-overlay'>
        <div className='loader'></div>
    </div>
  )
}

export default Loading