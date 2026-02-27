import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Model } from "./models/Pagani";
import { Suspense } from "react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100dvh" }}>
      <Canvas>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color='#f9f9f9' />
        </mesh>

        {/* Soft fill light */}
        <ambientLight intensity={0.5} />

        {/* Realistic studio reflections */}
        <Environment preset='studio' />

        {/* Realistic drop shadow under the car */}
        <ContactShadows
          resolution={1024}
          scale={50}
          blur={2}
          opacity={0.5}
          far={10}
          color='#000000'
        />

        <OrbitControls
          minDistance={5}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
        />
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={100} />
        </Suspense>
      </Canvas>
    </div>
  );
}
