import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import "./view.css";
import { Model } from "../models/Model";
import { Euler, PerspectiveCamera as PC } from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const View = () => {
  const cameraRef = useRef<PC>(null);

  useEffect(() => {
      cameraRef.current?.rotation.set(0, -Math.PI / 2, 0)
  }, [cameraRef])

  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" background />
      <Model />
      <EffectComposer>
        <Bloom
          intensity={0.7}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.8}
          height={300}
        />
      </EffectComposer>
      <PerspectiveCamera makeDefault position={[-42, 0, 0]} ref={cameraRef} rotation={new Euler(0, -Math.PI/2, 0)} />
      
    </Canvas>
  );
};

export default View;
