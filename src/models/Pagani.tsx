import { useGLTF } from "@react-three/drei";
import type { ComponentProps } from "react";

export function Model(props: ComponentProps<"group">) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes, materials } = useGLTF("/pagani-transformed.glb") as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.int_window}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.PaletteMaterial001}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.PaletteMaterial002}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.int_window_2}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.int_window_3}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_27.geometry}
        material={materials.int_window_4}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_45.geometry}
        material={materials.int_window_5}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_134.geometry}
        material={materials.int_window_6}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_209.geometry}
        material={materials.PaletteMaterial003}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_233.geometry}
        material={materials.int_window_9}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_254.geometry}
        material={materials.int_window_11}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_276.geometry}
        material={materials.int_window_12}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_287.geometry}
        material={materials.int_window_13}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_350.geometry}
        material={materials.int_window_14}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_356.geometry}
        material={materials.int_window_15}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_362.geometry}
        material={materials.int_window_16}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_369.geometry}
        material={materials.int_window_17}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_377.geometry}
        material={materials.int_window_18}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_380.geometry}
        material={materials.int_window_19}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_399.geometry}
        material={materials.int_window_20}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_422.geometry}
        material={materials.PaletteMaterial004}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_453.geometry}
        material={materials.int_window_22}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_516.geometry}
        material={materials.int_window_23}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_553.geometry}
        material={materials.int_window_24}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_575.geometry}
        material={materials.int_window_25}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_602.geometry}
        material={materials.int_window_26}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_609.geometry}
        material={materials.PaletteMaterial005}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_677.geometry}
        material={materials.int_window_28}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_680.geometry}
        material={materials.int_window_29}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_712.geometry}
        material={materials.int_window_30}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_715.geometry}
        material={materials.int_window_31}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_810.geometry}
        material={materials.int_window_32}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_836.geometry}
        material={materials.int_window_33}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_913.geometry}
        material={materials.int_window_36}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_922.geometry}
        material={materials.int_window_37}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_931.geometry}
        material={materials.int_window_38}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_948.geometry}
        material={materials.int_window_40}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_969.geometry}
        material={materials.int_window_41}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_985.geometry}
        material={materials.int_window_42}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_1035.geometry}
        material={materials.int_window_43}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_1234.geometry}
        material={materials.int_window_44}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_1395.geometry}
        material={materials.int_window_45}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_1403.geometry}
        material={materials.int_window_46}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_1410.geometry}
        material={materials.int_window_47}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Object_1416.geometry}
        material={materials.int_window_48}
        rotation={[0.006, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/pagani-transformed.glb");
