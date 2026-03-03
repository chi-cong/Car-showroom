import { Environment, ContactShadows } from "@react-three/drei";

export function ShowroomEnvironment() {
  return (
    <>
      <color attach='background' args={["#111111"]} />
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
    </>
  );
}
