"use client"
import React, { useState } from "react";
import styles from "./terrain.module.css";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Terrain() {
  const path = usePathname()

  console.log(path)

  const [gate, setGate] = useState(false)
  return (
    <div className={"fixed bottom-0 left-0 w-full z-0 border-black border-4 flex flex-col -space-y-9 items-center"}>
      <div className="rounded-full w-[35%] aspect-square bg-[#CB0305] absolute bottom-0 -z-10" />
      <div className={'flex justify-center items-end gap-10'}>
        {/* <img className={styles.bgCircle} src="/bgcircle.png" alt="" /> */}
        {/* <img className={gate ? styles.footerGateBig : styles.footerGateSmall} onClick={() => setGate(!gate)} src="/dtu_gate2.png" alt="" />
        <img className={styles.footerTnp} src="/tnpblock1.png" alt="" /> */}
        <img src="/dtu_gate2.png" alt="" className="w-36 brightness-0" />
        <img src="/tnpblock1.png" alt="" className="w-36" />
      </div>
      <img className={'w-full h-24'} src="/terrain.png" alt="" />
    </div>
  );
}

export default Terrain;
