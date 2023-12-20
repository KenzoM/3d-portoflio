import React, { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import PlaneScene from "@/assets/3d/plane.glb";
const Plane = ({ ...props }) => {
  const ref = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF(PlaneScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
