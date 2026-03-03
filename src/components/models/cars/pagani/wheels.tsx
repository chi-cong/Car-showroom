import type { BufferGeometry } from "three";
import { useCarColorsStore } from "@/store/car-colors";
import { MeshReflectorMaterial } from "@react-three/drei";

export const Wheels = ({ geometry }: { geometry: BufferGeometry }) => {
  const { colors } = useCarColorsStore();
  return (
    <mesh geometry={geometry} rotation={[0.006, 0, 0]} scale={0.01}>
      <MeshReflectorMaterial
        color={colors.wheels}
        metalness={0.9}
        roughness={0.1}
        blur={[100, 100]}
        resolution={1024}
        mixBlur={0.8}
        mixStrength={40}
      />
    </mesh>
  );
};
