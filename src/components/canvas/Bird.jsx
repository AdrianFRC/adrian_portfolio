import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Bird = () => {
  const bird = useGLTF("./Bird/scene.gltf");
  return (
    <primitive object={bird.scene} scale={1.2} position={[0,-1,0]} rotation={[0,0,0]} />
  );
};

const BirdCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-4, 3, 6], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          target={[-2.3,0,-0.3]}
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Bird />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BirdCanvas;
