import React, { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import PlaneScene from "@/assets/3d/plane.glb";
const Plane = ({ isRotating, ...props }) => {
  const ref = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF(PlaneScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
