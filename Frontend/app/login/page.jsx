import React from 'react'

const page = () => {
    return (
        <div className="visible-delay flex flex-col h-[90%] items-center sm:items-start justify-start text-black overflow-auto z-[2] px-3 sm:px-24">
            <div className="flex flex-col items-start justify-center w-full h-full">
                <h1
                    className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
                >
                    Login
                </h1>

                <form action="" className='mt-5 flex flex-col items-center justify-center w-[95%] sm:w-[70%] md:w-[40%]'>

                    <input type="text" placeholder='Enter your email' className='bg-[#f7f2e4] my-2 w-full px-3 py-4 rounded-md outline-none hover:scale-[1.03] duration-500' name="" id="" />
                    <input type="text" placeholder='Enter your password' className='bg-[#f7f2e4] my-2 w-full px-3 py-4 rounded-md outline-none hover:scale-[1.03] duration-500' name="" id="" />
                    
                    <button type="submit" className='mt-5 px-3 py-4 bg-[#2F1414] hover:scale-[1.03] duration-300 text-white text-xl w-full rounded-md'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default page