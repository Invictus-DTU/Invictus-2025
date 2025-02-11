'use client'
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, Instagram, Linkedin, X } from 'lucide-react';
import { useStore } from '@/context/AppContext';

function Navbar() {
  const [menu, setMenu] = useState(null);
  const { user } = useStore()

  return (
    <div className='relative z-[11] md:z-auto'>
      <div className='justify-between gap-12 fixed w-full px-5 hidden md:flex z-20'>
        <div className='absolute -top-[19.1rem] left-5 duration-500 hover:top-20 hover:left-28 scale-90 hover:scale-175 hover:scale-x-200'>
          <button className={cn(
            'relative ')}>
            <img src='/fullscroll1.svg' className='z-0 scale-90'/>

            <p className='absolute top-[7rem] left-14 w-[6.35rem] right-0 z-10 text-black text-[9px] font-jmh'>
              Invictus'25, the annual technical fest of Delhi Technological University (formerly Delhi College of Engineering), stands as one of the most prominent collegiate technical festivals in the country.  This extraordinary event epitomizes the perfect blend of innovation, science, and curiousity.
            </p>
            
            <p className='absolute bottom-[38px] left-10 right-0 z-10 text-black font-medium text-lg'>
              About Us
            </p>
          </button>
        </div>
        {
          !user && (
          <div className='absolute -top-[19.1rem] right-5 duration-200 hover:-top-[18.7rem] scale-90'>
            <Link href={'/login'}>
              <button className={cn(
                'relative ')}>
                <img src='/fullscroll1.svg' className='z-0 scale-90'/>
                
                <p className='absolute bottom-[38px] left-10 right-0 z-10 text-black font-medium text-lg'>
                  Login
                </p>
              </button>
            </Link>
          </div>
          )
        }
      </div>

      <div className='flex justify-end p-3 items-center md:hidden'>
          {menu ? 
          <X size={40} className='z-10' onClick={() => setMenu(false)} />
          :
          <Menu size={40} className='z-10' onClick={() => setMenu(true)} />
          }

          <div className={cn(
            'bg-black/30 fixed top-0 left-0 w-full h-full z-0',
            !menu && 'hidden',
            )} />

          <div className={cn(
            'fixed top-0 left-0 w-full h-full flex items-center justify-center z-0 translate-y-[-100%]',
            menu && 'from-top translate-y-0',
            menu == false && 'from-bottom'
            )}>
              
            <img src='/fullscroll1.svg' className='h-[90%] -mt-[14%]'/>

            <ul className='absolute text-center text-xl flex flex-col justify-between h-[53%]'>
              <div className='flex flex-col gap-5 py-5'>
                <Link href={'/'} onClick={() => setMenu(false)}>
                  <li>
                    Home
                  </li>
                </Link>

                {
                  !user && (
                  <Link href={'/login'} onClick={() => setMenu(false)}>
                    <li>
                      Login
                    </li>
                  </Link>
                  )
                }

                <Link href={'/sponsors'} onClick={() => setMenu(false)}>
                  <li>
                    Sponsors
                  </li>
                </Link>

                <Link href={'/events'} onClick={() => setMenu(false)}>
                  <li>
                    Events
                  </li>
                </Link>

                <Link href={'/comingsoon'} onClick={() => setMenu(false)}>
                  <li>
                    Workshops
                  </li>
                </Link>

                <Link href={'/team'} onClick={() => setMenu(false)}>
                  <li>
                    Our Team
                  </li>
                </Link>
              </div>

              <div className='flex w-full items-center justify-center gap-5'>
                <Link href={'https://www.instagram.com/invictus_dtu/'} target='_blank'>
                    <Instagram size={24} />
                </Link>

                <Link href={'https://www.linkedin.com/company/invictus-dtu/'} target='_blank'>
                    <Linkedin size={24} />
                </Link>

                <Link href={'https://discord.gg/X48VW5NQ'} target='_blank'>
                    <img src='/discord_black.png' alt='discord' className='w-7' />
                </Link>
              </div>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
