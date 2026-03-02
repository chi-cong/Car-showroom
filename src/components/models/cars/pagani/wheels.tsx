import type { BufferGeometry } from "three";
import { useCarColorsStore } from "@/store/car-colors";

export const Wheels = ({ geometry }: { geometry: BufferGeometry }) => {
  const { colors } = useCarColorsStore();
  return (
    <mesh geometry={geometry} rotation={[0.006, 0, 0]} scale={0.01}>
      <meshStandardMaterial
        color={colors.wheels}
        metalness={0.9}
        roughness={0.3}
      />
    </mesh>
  );
};
