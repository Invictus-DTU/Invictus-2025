'use client'
import { BASEURL } from '@/lib/BASE_URL'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college: "",
        password: ""
    })

    const [error, setError] = useState("")


    const submitForm = async (e) => {
        e.preventDefault()
        const { name, email, college, password } = formData
        if (!name.trim() || !email.trim() || !college.trim() || !password.trim()) {
            setError("Please fill all the fields")
        }

        else {
            setError("")
            const res = await fetch(BASEURL+"/api/auth/register", { headers: { "Content-Type": "application/json" }, credentials: "include" ,method: "POST", body: JSON.stringify(formData) })
            const { success, message } = await res.json()


            if (success) {
                console.log("logged in yo")
                console.log(message)
            }
            else {
                setError(message)
            }
        }
    } 

    return (
        <div className="visible-delay flex flex-col h-[90%] items-center sm:items-start justify-start text-black overflow-auto z-[2] px-3 sm:px-24">
            <div className="flex flex-col items-start justify-center w-full h-full">
                <h1
                    className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
                >
                    Signup
                </h1>

                {
                    error && (<p>{error}</p>)
                }

                <form onSubmit={submitForm} className='mt-5 flex flex-col items-center justify-center w-[95%] sm:w-[70%] md:w-[40%]'>

                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder='Enter your Name' className='bg-[#f7f2e4] my-2 w-full px-3 py-4 rounded-md outline-none hover:scale-[1.03] duration-500 font-jmh' />
                    <input value={formData.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder='Enter your Email' className='bg-[#f7f2e4] my-2 w-full px-3 py-4 rounded-md outline-none hover:scale-[1.03] duration-500 font-jmh' />
                    <input value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })} type="text" placeholder='Enter your College' className='bg-[#f7f2e4] my-2 w-full px-3 py-4 rounded-md outline-none hover:scale-[1.03] duration-500 font-jmh' />
                    <input value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" placeholder='Enter your password' className='text-black bg-[#f7f2e4] my-2 w-full px-3 py-4 rounded-md outline-none hover:scale-[1.03] duration-500 font-jmh' />
                    
                    <button type="submit" className='mt-5 px-3 py-4 bg-[#2F1414] hover:scale-[1.03] duration-300 text-white text-xl w-full rounded-md'>Submit</button>
                    <p className='mt-3'>Already have an account ? <Link href="/login" className='text-blue-700'>Login Now</Link></p>
                </form>
            </div>
        </div>
    )
}

export default page