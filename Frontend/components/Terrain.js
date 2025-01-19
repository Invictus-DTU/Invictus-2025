"use client"
import React, { useState } from "react";
import styles from "./terrain.module.css";

function Terrain() {

  const [gate, setGate] = useState(false)
  return (
    <div className={styles.footer}>
      <img className={styles.footerBg} src="/terrain.png" alt="" />
      <div className={styles.footerContent}>
        <img className={styles.bgCircle} src="/bgcircle.png" alt="" />
        <img className={gate ? styles.footerGateBig : styles.footerGateSmall} onClick={() => setGate(!gate)} src="/dtu_gate2.png" alt="" />
        <img className={styles.footerTnp} src="/tnpblock1.png" alt="" />
      </div>
    </div>
  );
}

export default Terrain;
