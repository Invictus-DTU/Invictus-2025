"use client"
import React from "react";
import Navbar from "./Navbar";
import Terrain from "./Terrain";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Main = ({children}) => {
  const path = usePathname();

  return (
    <body
      className={cn("bg w-screen h-screen flex flex-col overflow-hidden", path === "/events" && "after:bg-[#00000033]")}
    >
      <Navbar />
      {children}
      <Terrain />
    </body>
  );
};

export default Main;
