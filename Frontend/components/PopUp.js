'use client'
import React, {useState} from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { X } from 'lucide-react'

function PopUp({data, show, setShowPopUp}) {

    const [focused, setFocused] = useState('About')

  return (
    <div className={cn(
        'fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[20] justify-center items-center visible-delay-short',
        show ? 'flex' : 'hidden'
        )}>
        <div className='card-bg p-5 rounded-md flex items-center justify-between gap-8 relative w-[90%] lg:w-3/4 h-[90vh] md:h-[60vh] flex-col md:flex-row z-50'>
            <img src={data.logo_link} className='w-[30%] rounded-md' />

            <div className='flex-1 flex flex-col gap-3 h-full'>
                <h1 className='text-3xl sm:text-4xl uppercase'>
                    {data.event_name}
                </h1>

                <div className='flex gap-3 items-center w-full flex-wrap'>
                    <button className={cn(
                        'text-[#2F1414] py-2 px-4 rounded-md',
                        focused === 'About' && ' bg-[#2F1414] text-white'
                        )}
                        onClick={() => setFocused('About')}
                    >
                        About
                    </button>

                    <button className={cn(
                        'text-[#2F1414] py-2 px-4 rounded-md',
                        focused === 'Timeline' && ' bg-[#2F1414] text-white'
                        )}
                        onClick={() => setFocused('Timeline')}
                    >
                        Timeline
                    </button>

                    <button className={cn(
                        'text-[#2F1414] py-2 px-4 rounded-md',
                        focused === 'Rules' && ' bg-[#2F1414] text-white'
                        )}
                        onClick={() => setFocused('Rules')}
                    >
                        Rules
                    </button>

                    <button className={cn(
                        'text-[#2F1414] py-2 px-4 rounded-md',
                        focused === 'Prizes' && ' bg-[#2F1414] text-white'
                        )}
                        onClick={() => setFocused('Prizes')}
                    >
                        Prizes
                    </button>

                    <button className={cn(
                        'text-[#2F1414] py-2 px-4 rounded-md',
                        focused === 'Contact' && ' bg-[#2F1414] text-white'
                        )}
                        onClick={() => setFocused('Contact')}
                    >
                        Contact
                    </button>
                </div>

                <div className='flex-1 overflow-auto'>
                    {focused === 'About' &&
                    <>
                        <p className='text-base font-jmh'>
                            {data.event_desc.toLowerCase()}
                        </p>
                    </>
                    }

                    {focused === 'Timeline' &&
                    <>
                        <ul className='list-disc list-inside'>
                            {data.timeline.map((item, index) => 
                            <li key={index} className='text-base font-jmh'>
                                {item.toLowerCase()}
                            </li>
                            )}
                        </ul>
                    </>
                    }

                    {focused === 'Rules' &&
                    <>
                        <ul className='list-disc list-inside'>
                            {data['Rules'].map((item, index) => 
                            <li key={index} className='text-base font-jmh'>
                                {item.toLowerCase()}
                            </li>
                            )}
                        </ul>
                    </>
                    }

                    {focused === 'Prizes' &&
                    <>
                        <ul className='list-disc list-inside flex flex-col gap-4'>
                            {Object.keys(data['prizes']).map((item, index) => 
                            <li key={index} className='flex flex-col gap-1'>
                                <span className='font-jmh text-sm italic text-[#2F1414]'>
                                    {item.toLowerCase()}:
                                </span>
                                <span className='font-jmh text-base'>
                                     {data['prizes'][item].toLowerCase()}
                                </span>
                            </li>
                            )}
                        </ul>
                    </>
                    }

                    {focused === 'Contact' &&
                    <>
                        <ul className='list-disc list-inside flex flex-col gap-3'>
                            {data['Contacts'].map((item, index) => 
                            <li key={index} className='font-jmh flex flex-col'>
                                <span className='text-base font-jmh'>
                                    {item.Name.toLowerCase()}
                                </span>
                                <span className='text-sm font-jmh italic'>
                                    ({item.Number})
                                </span>
                                <span className='text-sm font-jmh tracking-wide italic'>
                                    ({item.Email.toLowerCase()})
                                </span>
                            </li>
                            )}
                        </ul>
                    </>
                    }
                </div>

                <div className='w-full flex items-center justify-center'>
                    <Link href={data.unstop_link} target='_blank' className='duration-150 bg-black text-white hover:text-[#DE1B19] text-center rounded-md p-2 w-4/5 lg:w-full'>
                        Register Here
                    </Link>
                </div>
            </div>

            <X size={30} className='cursor-pointer absolute top-5 right-5 duration-300 rounded-full hover:rotate-90 hover:bg-[#DE1B19]' onClick={() => setShowPopUp(false)} />
        </div>
    </div>
  )
}

export default PopUp