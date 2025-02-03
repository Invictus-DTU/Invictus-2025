'use client'
import React, {useState, useEffect, useRef} from 'react'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

function page() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const teamMembers = [
        {
          id: 1,
          name: "Khobaib Akmal",
          role: "Gen. Secretary",
          phone: "khobaibakmal@ieee.org",
          img: "/council/khobaib.jpg",
          socialLinks: {
            linkedin: "#",
            instagram: "https://www.instagram.com/kdotakmal"
          }
        },
        {
          id: 2,
          name: "shivang Dwivedi",
          role: "Treasurer",
          phone: "",
          img: "/council/shivang.jpg",
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/shivang-dwivedii",
            instagram: "https://www.instagram.com/shivangg_dwivedii"
          }
        },
        {
          id: 3,
          name: "Ishan Chugh",
          role: "Jt. Secretary",
          phone: "chughishan127@gmail.com",
          img: "/council/ishan.jpg",
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/ishanchugh01",
            instagram: "https://www.instagram.com/chugh.ishan_"
          }
        },
        {
          id: 4,
          name: "Vaishnavi Saraswat",
          role: "Jt. Secretary",
          phone: "",
          img: "/council/vaishnavi.jpg",
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/vaishnavi-saraswat-44967424b",
            instagram: "https://www.instagram.com/vaishnavii_s04"
          }
        },
        {
          id: 5,
          name: "Tasneem Ahmed",
          role: "Jt. Secretary",
          phone: "tasneem28ahmed@ieee.org",
          img: "/council/tasneem.jpg",
          socialLinks:{
            linkedin: "https://www.linkedin.com/in/tasneem-a-2b87b61a5",
            instagram: "https://www.instagram.com/tasneemahmed_28"
          }
        },
        {
          id: 6,
          name: "Sameeksha",
          role: "Jt. Treasurer",
          phone: "",
          img: "/council/sameeksha.jpg",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/sam13299",
                instagram: "#"
            }
        },
        {
          id: 7,
          name: "Yatharth Bisht",
          role: "Jt. Treasurer",
          phone: "",
          img: "/council/yatharth.jpg",
          socialLinks: {
            linkedin: "https://www.linkedin.com/in/yatharth-bisht-8a559b241",
            instagram: "https://www.instagram.com/yatharth.bisht"
          }
        }
    ]

    const handleMouseDown = (e) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
      };
    
      const handleMouseMove = (e) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.3;
        scrollRef.current.scrollLeft = scrollLeft - walk;
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };

      useEffect(() => {
          var item = document.getElementById("scroll");
      
          window.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) item.scrollLeft += 100;
            else item.scrollLeft -= 100;
          });
        }, []);

  return (
    <div className='flex flex-col w-full h-[93%] gap-5 absolute top-0 left-0 md:relative pt-[15%] md:pt-[5%] px-5 bg-black/20 z-0 md:z-10 overflow-auto'>
        <h1 className='text-5xl text-center'>
            Our Team
        </h1>

        <div 
            className='flex gap-5 overflow-x-scroll select-none no-scrollbar cursor-grab active:cursor-grabbing'
            id='scroll'
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {teamMembers.map((member, index) => 
                <div className='card-bg rounded-md p-5 min-w-[65vw] w-[65vw] sm:min-w-[35vw] sm:w-[35vw] md:min-w-[28vw] md:w-[28vw] lg:min-w-[20vw] lg:w-[20vw] min-h-[60vh] h-[60vh] md:min-h-[57vh] md:h-[57vh] lg:min-h-[50vh] lg:h-[50vh] flex flex-col gap-3 items-center' key={index}>
                    <img src={member.img} alt={member.name} className='w-3/4 lg:w-1/2 aspect-square object-cover rounded-full' />

                    <h1 className='w-full text-center text-xl font-jmh lowercase'>
                        {member.name}
                    </h1>

                    <p className='font-jmh tracking-widest lowercase bg-[#2F1414] text-white rounded-full px-4 py-1 text-sm'>
                        {member.role}
                    </p>

                    <p className='font-jmh tracking-wide'>
                        {member.phone}
                    </p>

                    <div className='flex-1 flex items-end justify-center gap-5'>
                        <Link href={member.socialLinks?.linkedin || "https://linkedin.com"} target="_blank" className={'bg-[#DE1B19]/20 p-2 rounded-full border-2 duration-300 border-[#DE1B19]/30 hover:bg-[#DE1B19]/30 hover:border-[#DE1B19]/50 hover:-translate-y-1'}>
                            <Linkedin size={24} />
                        </Link>
                        <Link href={member.socialLinks?.instagram || "https://instagram.com"} target="_blank" className={'bg-[#DE1B19]/20 p-2 rounded-full border-2 duration-300 border-[#DE1B19]/30 hover:bg-[#DE1B19]/30 hover:border-[#DE1B19]/50 hover:-translate-y-1'}>
                            <Instagram size={24} />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default page