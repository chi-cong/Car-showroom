import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./components/models/cars/pagani/Pagani";
import { Suspense } from "react";
import { Panel } from "./components/layouts/panel";
import LoadingScreen from "./components/layouts/loading";
import { Ground } from "./components/scene/ground";
import { ShowroomEnvironment } from "./components/scene/showroom-environment";
import { Camera } from "./components/scene/camera";
import { Blinker } from "./components/layouts/blinker";
import { useCanvasStateStore } from "./store/canvas-state";

export default function App() {
  const { frameloop } = useCanvasStateStore();

  return (
    <div className='w-screen h-screen relative'>
      <LoadingScreen />
      <Blinker />
      <Panel className='absolute top-4 left-4 z-10' />
      <div className='w-full h-full'>
        <Canvas
          frameloop={frameloop}
          dpr={[1, 1.5]}
          camera={{ position: [4, 1.5, 5], fov: 45 }}
        >
          <ShowroomEnvironment />
          <Ground />

          <OrbitControls
            minDistance={3}
            maxDistance={10}
            maxPolarAngle={Math.PI / 2.1}
            minPolarAngle={Math.PI / 4}
          />
          <Camera />
          <Suspense fallback={null}>
            <Model position={[0, 0.15, 0]} scale={100} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
