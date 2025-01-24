import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Instagram, Linkedin } from 'lucide-react'

function Bottombar({className}) {
    const routes = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Events',
            link: '/comingsoon'
        },
        {
            name: 'Workshops',
            link: '/comingsoon'
        }
    ]
  return (
    <div className={cn(
        'text-[#DE1B19] font-bold text-xl w-full z-50 items-center justify-between hidden md:flex',
        className
        )}>
        <div className='flex gap-4 items-center'>

            {routes.map((route, index) => 
            <div className='flex items-center gap-4 z-30' key={index}>
                <Link href={route.link} className='cursor-pointer'>
                    {route.name}
                </Link>

                {index !== routes.length - 1 &&
                <span className='poppins'>
                    |
                </span>
                }
            </div>
            )}
        </div>

        <div className='flex items-center gap-4'>
            <Link href={'/'}>
                <Instagram size={24} />
            </Link>

            <Link href={'/'}>
                <Linkedin size={24} />
            </Link>
            
        </div>
    </div>
  )
}

export default Bottombar