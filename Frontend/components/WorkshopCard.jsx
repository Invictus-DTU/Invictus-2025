"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useStore } from "@/context/AppContext";
import { toast } from "react-toastify";
import { BASEURL } from "@/lib/BASE_URL";
import { cn } from "@/lib/utils";

const WorkshopCard = ({ data }) => {
  const { user, setUser } = useStore();

  const [loading, setLoading] = useState(false)

  const registerForEvent = async (id) => {
    if (!user) {
      toast.info("Please login first!");
      return;
    }
    if (![1, 2, 3, 4, 5].includes(id)) {
      toast.error("Invalid workshop id");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(BASEURL + `/api/workshop/register/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const { success, message, user } = await res.json();
      setLoading(false);

      if (success) {
        toast.success("Registered for this workshop");
        setUser(user);
      } else {
        toast.error(message);
        return;
      }
    } catch {
      toast.error("An error occurred!");
    }
  };
  return (
    <>
      <div
        className={
          cn("my-3 flex flex-col items-center justify-center min-w-[90%] w-[90%] sm:min-w-[50%] sm:w-[50%] md:min-w-[40%] md:w-[40%] lg:min-w-[28%] lg:w-[28%] xl:min-w-[23%] xl:w-[23%] max-h-[60vh] box-border pb-3 hover:scale-[1.02] hover:traslate-y-[10px] duration-[0.5s] rounded-md pt-4 mr-10 relative drop-shadow-[4px_6px_4px_rgba(0,0,0,0.3)] animate-event-card overflow-auto card-bg z-[0]", loading && "opacity-[0.8] animate-pule workshop-loader")
        }
      >
        <img src={data.image} className="w-[30%] aspect-auto rounded-md" />
        {/* <img src="https://drive.google.com/thumbnail?id=1bGMnFJrM9lfMkovJMld-k66MGQ3gLOzg" className='w-[40%] rounded-md' /> */}
        {/* <img src="/event-demo-logo.png" className='w-[70%]' /> */}

        <h3 className="text-center text-2xl uppercase mt-5">{data.name}</h3>
        <h3 className="text-center text-[12px] font-jmh">
          {data.company.toLowerCase()}
        </h3>

        <div className="flex flex-row items-center justify-evenly w-[90%] mx-auto mt-3">
          <div className="text-center text-sm">
            <p>Timings</p>
            <p>{data.timing}</p>
          </div>
          <div className="text-center text-sm">
            <p>Dates</p>
            <p>{data.date}</p>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center mt-3">
          {user ? (
            user.workshop && user.workshop.includes(data.id) ? (
              <button
                className="w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white mt-5 mx-1 rounded-full opacity-[0.8]"
                disabled
              >
                ✅ Registered
              </button>
            ) : (
              <button
                className="w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white mt-5 mx-1 rounded-full"
                onClick={() => registerForEvent(data.id)}
              >
                Register
              </button>
            )
          ) : (
            <Link
              href="/login"
              className="w-[80%] py-2 text-center bg-[#2F1414] hover:scale-[1.03] duration-[0.3s] text-white mt-5 mx-1 rounded-full"
              onClick={() => toast.info("Login to register for workshop")}
            >
              Register
            </Link>
          )}
        </div>

        <img
          src="/event-card-mountain.png"
          className="absolute w-full bottom-0 z-[-1]"
        />
      </div>
    </>
  );
};

export default WorkshopCard;
