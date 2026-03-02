import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Model } from "./components/models/cars/pagani/Pagani";
import { Suspense } from "react";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100dvh" }}>
      <Canvas>
        <color attach='background' args={["#111111"]} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            blur={[300, 100]} // Blur ground reflections (width, height)
            resolution={1024} // Resolution of the off-screen camera
            mixBlur={0.8} // How much blur mixes with surface roughness
            mixStrength={40} // How visible the reflection is
            roughness={1} // Surface roughness
            depthScale={1.2} // Adds a fading depth effect to the reflection
            minDepthThreshold={0.4} // Where the fade begins
            maxDepthThreshold={1.4} // Where the fade ends
            color='#151515' // The base color of the floor
            metalness={0.5} // Floor metalness
          />
        </mesh>

        <ambientLight intensity={0.5} />

        <Environment preset='city' environmentIntensity={0.5} />

        <ContactShadows
          position={[0, 0.01, 0]}
          resolution={1024}
          scale={50}
          blur={2}
          opacity={0.5}
          far={10}
          color='#000000'
          frames={1}
        />

        <OrbitControls
          minDistance={3}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
        />
        <Suspense fallback={null}>
          <Model position={[0, 0.15, 0]} scale={100} />
        </Suspense>
      </Canvas>
    </div>
  );
}
