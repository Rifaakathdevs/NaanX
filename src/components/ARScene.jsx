import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ARScene = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <Canvas className="w-full h-full">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ARScene;
