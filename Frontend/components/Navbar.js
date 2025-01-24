import Link from 'next/link';
import { cn } from '@/lib/utils';

function Navbar() {

  const routes = [
    {
      name: 'About Us',
      description: `Invictus'25, the annual technical fest of Delhi Technological University (formerly Delhi College of Engineering), stands as one of the most prominent collegiate technical festivals in the country.  This extraordinary event epitomizes the perfect blend of innovation, science, and curiousity.`
    },
    {
      name: 'Our Team',
      description: " "
    },
    // {
    //   name: 'Sign Up',
    // },
    // {
    //   name: 'Sign In',
    // },
  ]

  return (
    <div className='justify-between gap-12 fixed w-full px-5 hidden md:flex'>
      {routes.map((route, index) => 
      <Link key={index} href={`/comingsoon`} className='z-30'>
        <button key={index} id={index} className={cn(
          'relative -top-[78%] left-0 scale-90 duration-500 hover:scale-175 hover:scale-x-200 hover:top-20 ',
          route.name === 'About Us' && 'hover:left-20',
          route.name === 'Our Team' && 'hover:-left-20',
          )}>
          <img src='/fullscroll1.svg' className='z-0 scale-90'/>

          <p className='absolute top-[6.5rem] left-14 w-[6.35rem] right-0 z-10 text-black text-[9px] poppins font-semibold'>
            {route.description}
          </p>
          
          <p className='absolute bottom-[38px] left-10 right-0 z-10 text-black font-medium text-lg'>
            {route.name}
          </p>
        </button>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
