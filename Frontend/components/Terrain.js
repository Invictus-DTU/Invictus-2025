"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Bottombar from "./Bottombar";

function Terrain() {
  const path = usePathname()

  return (
    <div className={"fixed bottom-0 left-0 w-full -z-10 md:-z-0 flex flex-col -space-y-9 items-center"}>

      {/* <div className={cn(
        "rounded-full w-[35%] aspect-square bg-[#CB0305] absolute -bottom-16 -right-3 -z-10 duration-700",
        path === "/" && "right-[32.5%] w-[35%] bottom-0",
        )} /> */}
      <img src="/bgcircle.svg" alt="" className={cn(
        "absolute -bottom-16 duration-1000 -z-10 sm:-right-3 w-4/5 sm:w-[55%] md:w-[45%] lg:w-[35%]",
        path === "/" && "-bottom-8 right-[10%] sm:right-[17.5%] md:right-[26.7%] lg:right-[32.5%] w-[80%] sm:w-[8%] md:w-[45%] lg:w-[35%]",
        path === "/sponsors" && "bottom-[-30rem] right-[-100vw]",
      )} />

      <div className={'flex justify-center items-end gap-10 z-0'}>
        <img src="/bonsai-left.svg" alt="second" className={cn(
          "w-24 absolute -left-[40%] bottom-16 duration-1000",
          path === "/sponsors" && "-left-48 md:-left-5 lg:-left-16 xl:-left-10",
          )} />

        <img src="/bonsai-right.svg" alt="first" className={cn(
          "w-24 absolute bottom-16 duration-1000 left-0 hidden lg:block",
          (path === "/comingsoon" || path === "/events") && "-left-40",
          path === "/team" && "-left-48",
          path === "/sponsors" && "lg:left-[3%] xl:left-[6%]",
          )} />
          
        <img src="/bonsai-left.svg" alt="second" className={cn(
          "w-24 absolute left-[10%] bottom-16 duration-1000 hidden lg:block",
          (path === "/comingsoon" || path === "/events") && "left-6",
          path === "/team" && "-left-48",
          path === "/sponsors" && "lg:left-[12%] xl:left-[15%]",
          )} />
          
        <img src="/twintower.svg" alt="" className={cn(
          "w-48 brightness-0 duration-1000 absolute bottom-12 -left-48 sm:-left-16 md:left-[3%] lg:left-[18%]",
          (path === "/comingsoon" || path === "/events") && "w-40 bottom-14 sm:-left-48 md:-left-10 lg:left-[9%]",
          path === "/team" && "sm:-left-48 md:-left-48 lg:-left-48",
          path === "/sponsors" && "xs:-left-16 sm:-left-5 md:left-[7%] lg:left-[19%] xl:left-[22%]",
          )} />

        <img src="/bonsai-left.svg" alt="third" className={cn(
          "w-24 absolute bottom-16 duration-1000 left-0 sm:left-[17%] md:left-[24%] lg:left-[34%]",
          (path === "/comingsoon" || path === "/events") && "-left-5 sm:-left-5 md:left-[13.5%] lg:left-[23%]",
          path === "/team" && "sm:-left-48 md:-left-8 lg:left-[1%] xl:left-[1%]",
          path === "/sponsors" && "xs:left-[20%] sm:left-[24%] md:left-[27%] lg:left-[33%] xl:left-[34%]",
          )} />

        <img src="/dtu_gate2.png" alt="" className={cn(
          "w-32 brightness-0 duration-1000 absolute -left-48 sm:left-[14%] md:left-[27%] lg:left-[36%] xl:left-[33%] bottom-16",
          path === "/" && "brightness-100 left-0 sm:left-[5%] md:left-[20.5%] lg:left-[24.5%] xl:left-[24.5%] w-full sm:w-[90%] md:w-3/5 lg:w-1/2",
          path === "/team" && "sm:-left-20 md:left-[6%] lg:left-[5%] xl:left-[10%]",
          path === "/sponsors" && "left-[32%] xs:left-[43%] sm:left-[42%] md:left-[41%] lg:left-[43%] xl:left-[43%]",
          )} />

        <img src="/bonsai-right.svg" alt="forth" className={cn(
          "w-24 absolute bottom-16 duration-1000 right-0 sm:right-[17%] md:right-[24%] lg:right-[34%]",
          (path === "/comingsoon" || path === "/events") && "-right-5 sm:right-[52%] md:right-[43%] lg:right-[45%]",
          path === "/team" && "sm:right-[82%] md:right-[71%] lg:right-[77%] xl:right-[74%]",
          path === "/sponsors" && "xs:right-[15%] sm:right-[23%] md:right-[32%] lg:right-[38%] xl:right-[39%]",
          )} />

        <img src="/bonsai-left.svg" alt="fifth" className={cn(
          "w-24 absolute bottom-16 duration-1000 right-[18%] hidden lg:block",
          (path === "/comingsoon" || path === "/events") && "right-[33%]",
          path === "/team" && "lg:right-[67%] xl:right-[64%]",
          path === "/sponsors" && "lg:right-[28%] xl:right-[29%]",
          )} />

        <img src="/tnpblock1.png" alt="" className={cn(
          "w-40 duration-1000 absolute bottom-[4.5rem] -right-48 sm:-right-16 md:right-0",
          (path === "/comingsoon" || path === "/events") && "w-3/4 sm:w-[49%] md:w-[40%] lg:w-[30%] bottom-[3.5rem] left-auto right-auto sm:right-[1rem]",
          path === "/team" && "bottom-[4rem] sm:right-[60%] md:right-[53%] lg:right-[53%] xl:right-[51%]",
          path === "/sponsors" && "bottom-[4.5rem] xs:-right-20 sm:-right-5 md:right-[13%] lg:right-[13%] xl:right-[15%]",
          )} />

        <img src="/bonsai-right.svg" alt="sixth" className={cn(
          "w-24 absolute bottom-16 duration-1000 -right-48 hidden lg:block",
          path === "/team" && "right-[42%]",
          path === "/sponsors" && "lg:right-[3%] xl:right-[6%]",
          )} />

        <img src="/bonsai-left.svg" alt="seventh" className={cn(
          "w-24 absolute bottom-16 duration-1000 -right-48 hidden sm:block",
          path === "/team" && "sm:right-[49%] md:right-[41%] lg:right-[32%] xl:right-[34%]",
          path === "/sponsors" && "md:right-0 lg:-right-16 xl:-right-7",
          )} />

        <img src="/twintower.svg" alt="" className={cn(
          "w-48 brightness-0 duration-1000 absolute bottom-12 -right-48",
          path === "/team" && "w-[100%] sm:w-[75%] md:w-[60%] lg:w-[47%] xl:w-[45%] -bottom-4 -right-2 sm:-right-24 md:-right-[6.5rem] lg:-right-24 xl:-right-24",
          )} />
      </div>

      <Bottombar className={'absolute left-0 bottom-auto top-2 px-10'} />

      <img className={'w-full h-24 z-0'} src="/terrain.png" alt="" />
    </div>
  );
}

export default Terrain;
