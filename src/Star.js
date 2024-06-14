import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import "./Star.css";

const Star = () => {
  return (
    <div className="App">
      <Canvas className="canvas">
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
      <div className="content">
        <h1>Welcome to the Starfall</h1>
      </div>
    </div>
  );
};

export default Star;
