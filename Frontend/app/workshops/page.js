"use client";
import WorkshopCard from "@/components/WorkshopCard";
import React, { useRef, useState, useEffect } from "react";
import { Search, CircleChevronRight } from "lucide-react";
import PopUp from "@/components/PopUp";

function page() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [events, setEvents] = useState([]);
  
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState({unstop_link: "#", prizes: {'Winner': 'Prize'}, event_desc: '', about: ""});

  const workshops = [
    {
      name: 'Future of AI driven by on device Intelligence',
      company: 'Qualcomm',
      date: '16th Feb',
      timing: '2:30 - 4:30 PM',
      image: '/sponsors/qualcomm.png'
    },
    {
      name: 'AI Workshop',
      company: 'Adobe',
      date: '17th Feb',
      timing: '1:00 - 2:00 PM',
      image: '/sponsors/Adobe_icon.png'
    },
    {
      name: 'Fireside Chat',
      company: 'Amdocs',
      date: '17th Feb',
      timing: '3:00 - 4:00 PM',
      image: '/sponsors/amdocs.png'
    },
    {
      name: 'Study Abroad Roadmap',
      company: 'Fateh',
      date: '18th Feb',
      timing: '2:00 - 3:00 PM',
      image: '/sponsors/fateh.png'
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

  const fetchAllData = async () => {
    const response = await fetch("https://invictus-2025-16ei.vercel.app/api/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setEvents(data.events);
  };

  useEffect(() => {
    fetchAllData();
    var item = document.getElementById("scroll");
    var rightBtn = document.getElementById("right");
    var leftBtn = document.getElementById("left");

    window.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });

    rightBtn.addEventListener("click", function () {
      item.scrollLeft += 100;
    });

    leftBtn.addEventListener("click", function () {
      item.scrollLeft -= 100;
    });
  }, []);

  const handleOnClick = (data) => {
    setPopUpData(data);
    setShowPopUp(true);
  }

  return (
    <>
      <div className="visible-delay flex flex-col items-center sm:items-start justify-start text-black px-4 sm:px-4 md:px-6 lg:px-16 -mt-5 md:mt-28 lg:mt-24 overflow-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full -z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
          >
            Workshops
          </h1>

        </div>
        <div className="mt-4 flex flex-row items-center justify-start w-full overflow-auto">
          <div
            ref={scrollRef}
            className="flex md:pl-2 flex-row select-none overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing w-full"
            id="scroll"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {workshops.map((event, index) => (
                <WorkshopCard key={index} data={event} onClick={handleOnClick} />
            ))}
          </div>

        </div>
        <PopUp data={popUpData} show={showPopUp} setShowPopUp={setShowPopUp} />

        <CircleChevronRight id="right" size={40} fill="#2F1414" color="white" className="mt-5 cursor-pointer absolute right-5 top-[45%]" />
        <CircleChevronRight id="left" size={40} fill="#2F1414" color="white" className="mt-5 cursor-pointer absolute left-5 top-[45%] rotate-180" />
      </div>
    </>
  );
}

export default page;
