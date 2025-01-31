import React from 'react'

function loading() {
  return (
    <div className='fixed top-0 left-0 z-[100] flex items-center justify-center h-full w-full'>
        <div className='loader'></div>
    </div>
  )
}

export default loading