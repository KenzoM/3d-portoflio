import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import skyScene from "@/assets/3d/sky.glb";

const Sky = () => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (skyRef.current) {
      skyRef.current.rotation.y += delta * 0.005;
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
