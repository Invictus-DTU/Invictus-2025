"use client"
import React, { useState } from "react";
import styles from "./terrain.module.css";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Terrain() {
  const path = usePathname()

  return (
    <div className={"fixed bottom-0 left-0 w-full z-0 flex flex-col -space-y-9 items-center"}>

      <div className={cn(
        "rounded-full w-[35%] aspect-square bg-[#CB0305] absolute -bottom-16 -right-3 -z-10 duration-700",
        path === "/" && "right-[32.5%] w-[35%] bottom-0",
        )} />

      <div className={'flex justify-center items-end gap-10 z-0'}>
        <img src="/dtu_gate2.png" alt="" className={cn(
          "w-32 brightness-0 duration-700 absolute left-[19rem] bottom-16",
          path === "/" && "w-1/2 brightness-100 left-[23rem]",
          )} />

        <img src="/bonsai-right.svg" alt="" className={"w-24 absolute left-0 bottom-16"} />
        <img src="/bonsai-left.svg" alt="" className={"w-24 absolute left-32 bottom-16"} />
        <img src="/bonsai-left.svg" alt="" className={"w-24 absolute left-[32rem] bottom-16"} />
        <img src="/bonsai-right.svg" alt="" className={"w-24 absolute right-[32rem] bottom-16"} />

        <img src="/tnpblock1.png" alt="" className={cn(
          "w-36 duration-700 absolute right-0 bottom-[4.5rem]",
          path === "/comingsoon" && "w-[30%] bottom-[3.5rem] right-[1rem]",
          )} />
      </div>
      <img className={'w-full h-24 z-10'} src="/terrain.png" alt="" />
    </div>
  );
}

export default Terrain;
