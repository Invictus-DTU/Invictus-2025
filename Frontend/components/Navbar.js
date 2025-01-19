import Scroll from '/public/scroll.svg';
import './Navbar.css';

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
        <button key={index} className='relative -top-8 scale-90 duration-150 hover:-top-5'>
          <Scroll className='z-0 scale-90'/>
          <p className='absolute bottom-6 left-7 right-0 z-10 text-black font-medium text-md'>
            {route.name}
          </p>
        </button>
      )}
    </div>
  );
}

export default Navbar;
