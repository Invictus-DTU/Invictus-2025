import Scroll from '/public/scroll.svg';
import './Navbar.css';
import Link from 'next/link';

function Navbar() {

  const routes = [
    {
      name: 'Sponsors',
    },
    {
      name: 'About Us',
    },
    {
      name: 'Sign Up',
    },
    {
      name: 'Sign In',
    },
  ]

  return (
    <div className='flex justify-center gap-12 fixed w-full'>
      {routes.map((route, index) => 
      <Link key={index} href={`/comingsoon`}>
        <button key={index} className='relative -top-8 scale-90 duration-150 hover:-top-5'>
          <Scroll className='z-0 scale-90'/>
          <p className='absolute bottom-6 left-10 right-0 z-10 text-black font-medium text-lg'>
            {route.name}
          </p>
        </button>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
