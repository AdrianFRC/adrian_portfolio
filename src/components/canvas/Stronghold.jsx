import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Stronghold = ({ isMobile }) => {
  const stronghold = useGLTF("./Stronghold/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={stronghold.scene}
        scale={isMobile ? 1.2 : 2}
        position={[0, -2, 0]}
        rotation={[0, 1, 0]}
      />
    </mesh>
  );
};

const StrongholdCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return ( 
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stronghold isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default StrongholdCanvas;
