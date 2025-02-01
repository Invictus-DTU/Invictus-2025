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
            link: '/events'
        },
        {
            name: 'Workshops',
            link: '/comingsoon'
        },
        {
            name: 'Our Team',
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
                <span className='font-jmh'>
                    |
                </span>
                }
            </div>
            )}
        </div>

        <div className='flex items-center gap-4'>
            <Link href={'https://www.instagram.com/invictus_dtu/'} target='_blank'>
                <Instagram size={24} />
            </Link>

            <Link href={'https://www.linkedin.com/company/invictus-dtu/'} target='_blank'>
                <Linkedin size={24} />
            </Link>

            <Link href={'https://discord.gg/X48VW5NQ'} target='_blank'>
                <img src='/discord.png' alt='discord' className='w-7' />
            </Link>
            
        </div>
    </div>
  )
}

export default Bottombar