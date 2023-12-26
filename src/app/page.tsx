"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Loader from "@/components/Loader";
import { Island } from "@/app/models/Island";
import Sky from "@/app/models/Sky";
// import Bird from "@/app/models/Bird";
import Plane from "@/app/models/Plane";
import HomeInfo from "@/components/HomeInfo";

const App = () => {
  const [isRotating, setIsRotitating] = useState(false);
  const [currentStage, setCurrentStage] = useState(4);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [isLandScale, isLandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`bg-transparent w-full h-screen ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Html wrapperClass="banner-info" style={{ position: "unset" }}>
            <div className="flex justify-center items-center absolute top-28 left-0 right-0 z-10">
              {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
          </Html>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.2} />
          <hemisphereLight groundColor={"#000000"} intensity={1} />
          <Sky />
          <Island
            position={isLandPosition}
            scale={isLandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotitating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            rotation={[0, 20, 0]}
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default App;
