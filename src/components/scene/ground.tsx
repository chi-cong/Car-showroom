import { MeshReflectorMaterial } from "@react-three/drei";

export function Ground() {
  return (
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
  );
}
