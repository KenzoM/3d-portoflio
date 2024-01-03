import React from "react";
import { Html } from "@react-three/drei";
const Loader = () => {
  return (
    <Html className="position-horizontally-vertically">
      <div className="animate-spin h-10 w-10 border-t-2 border-b-2 border-t-blue-500 border-b-blue-500  "></div>
    </Html>
  );
};

export default Loader;
