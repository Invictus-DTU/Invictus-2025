import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";

function Navbar() {
  const [menu, setMenu] = useState(null);
  // const [loginPopUp, setLoginPopUp] = useState(false)

  return (
    <>
      {/* {
        loginPopUp && (
          <div className="absolute w-full h-full z-20 bg-black loginModal">
            hello
          </div>
        )
      } */}
      <button className="absolute z-[10] left-[8%] top-[-330px] hover:top-[50px] duration-[0.5s] hover:duration-[0.5s] hover:scale-[1.3]">
        <img src="/fullscroll1.svg" />

        <p className="absolute top-[7rem] left-14 w-[6.35rem] right-0 z-10 text-black text-[9px] font-jmh">
          Invictus'25, the annual technical fest of Delhi Technological
          University (formerly Delhi College of Engineering), stands as one of
          the most prominent collegiate technical festivals in the country. This
          extraordinary event epitomizes the perfect blend of innovation,
          science, and curiousity.
        </p>

        <p className="absolute z-[11] bottom-[20px] right-[50px] text-md">
          About Us
        </p>
      </button>
      {/* <button onClick={() => setLoginPopUp(true)} className="absolute z-[10] right-[8%] top-[-47.1%] hover:top-[-53.5%] duration-[0.5s] hover:duration-[0.5s] hover:scale-[1.3]">
        <img src="/fullscroll1.svg" />
        <p className="absolute z-[11] bottom-[20px] right-[50px] text-md">
          Login
        </p>
      </button> */}
      {/* 
      <div>
          <button className={cn(
            'relative -top-[78%] left-0 scale-90 duration-500 hover:scale-175 hover:scale-x-200 hover:top-20 hover:left-20')}>
            <img src='/fullscroll1.svg' className='z-10 scale-90'/>

            <p className='absolute top-[7rem] left-14 w-[6.35rem] right-0 z-10 text-black text-[9px] font-jmh'>
              Invictus'25, the annual technical fest of Delhi Technological University (formerly Delhi College of Engineering), stands as one of the most prominent collegiate technical festivals in the country.  This extraordinary event epitomizes the perfect blend of innovation, science, and curiousity.
            </p>
            
            <p className='absolute bottom-[38px] left-10 right-0 z-10 text-black font-medium text-lg'>
              About Us
            </p>
          </button>
        </div> */}

      <div className="flex justify-end p-3 items-center md:hidden">
        {menu ? (
          <CgClose size={40} className="z-50" onClick={() => setMenu(false)} />
        ) : (
          <CgMenu size={40} className="z-50" onClick={() => setMenu(true)} />
        )}

        <div
          className={cn(
            "bg-black/30 fixed top-0 left-0 w-full h-full z-0",
            !menu && "hidden"
          )}
        />

        <div
          className={cn(
            "fixed top-0 left-0 w-full h-full flex items-center justify-center z-40 translate-y-[-100%]",
            menu && "from-top translate-y-0",
            menu == false && "from-bottom"
          )}
        >
          <img src="/fullscroll1.svg" className="h-[90%] -mt-[14%]" />

          <ul className="absolute text-center text-xl flex flex-col justify-between h-[53%]">
            <div className="flex flex-col gap-5 py-5">
              <Link href={"/"} onClick={() => setMenu(false)}>
                <li>Home</li>
              </Link>

              <Link href={"/comingsoon"} onClick={() => setMenu(false)}>
                <li>Events</li>
              </Link>

              <Link href={"/comingsoon"} onClick={() => setMenu(false)}>
                <li>Workshops</li>
              </Link>

              <Link href={"/comingsoon"} onClick={() => setMenu(false)}>
                <li>Our Team</li>
              </Link>
            </div>

            <div className="flex w-full items-center justify-center gap-5">
              <Link
                href={"https://www.instagram.com/invictus_dtu/"}
                target="_blank"
              >
                <FaInstagram size={24} />
              </Link>

              <Link
                href={"https://www.linkedin.com/company/invictus-dtu/"}
                target="_blank"
              >
                <FaLinkedin size={24} />
              </Link>

              <Link href={"https://discord.gg/X48VW5NQ"} target="_blank">
                <FaDiscord size={24} />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
