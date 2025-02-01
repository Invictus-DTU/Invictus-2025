"use client";
import EventCard from "@/components/EventCard";
import React, { useRef, useState, useEffect } from "react";
import { FaArrowDown, FaSearch } from "react-icons/fa";

function page() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [events, setEvents] = useState([]);

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
    const response = await fetch("http://localhost:8000/api/events", {
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
  }, []);

  return (
    <>
      <div className="visible-delay flex flex-col items-center sm:items-start justify-start text-black px-4 sm:px-24 pt-5 sm:pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <h1
            className="text-6xl sm:text-5xl md:text-5xl lg:text-6xl"
            onClick={fetchAllData}
          >
            Events
          </h1>

          <div className="py-2 flex flex-row w-[100%] md:w-auto items-center justify-center md:justify-between">
            <select className="mr-2 text-[12px] md:text-[15px] flex flex-row items-center justify-between bg-black px-3 py-3 text-white rounded-md cursor-pointer">
              <option>Mode</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
            <select className="mr-2 text-[12px] md:text-[15px] flex flex-row items-center justify-between bg-black px-3 py-3 text-white rounded-md cursor-pointer">
              <option className="mr-2">Category</option>
            </select>
            <select className="flex text-[12px] md:text-[15px] flex-row items-center justify-between bg-black px-3 py-3 text-white rounded-md cursor-pointer">
              <option>Date</option>
              <option>15th Feb</option>
              <option>16th Feb</option>
              <option>17th Feb</option>
              <option>18th Feb</option>
            </select>
          </div>
          <div className="flex flex-row items-center justify-between ml-2 px-3 py-2 text-lg  rounded-md text-white bg-black">
            <FaSearch size={24} className="mr-3" />
            <input
              placeholder="search for events..."
              type="text"
              className="text-[12px] md:text-[15px] bg-transparent outline-none font-jmh"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-row items-center justify-start w-full">
          <div
            ref={scrollRef}
            className="flex pl-2 flex-row select-none overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="min-w-[0px] md:min-w-[50px] sm:min-w-[100px]" />
            {events.map((event, index) => (
              <EventCard key={index} data={event} />
            ))}
            {/* <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard /> */}
          </div>

          {/* <button className="bg-[#2F1414] absolute z-1 cursor-pointer mx-4 p-4 rounded-full right-0 shadow-sm">
          <FaAngleDoubleRight color="white" size={50} />
          </button> */}
        </div>
      </div>
    </>
  );
}

export default page;
