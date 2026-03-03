import type { CameraControls as CameraControlType } from "@react-three/drei";
import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useShowcaseModeStore } from "@/store/showcase-mode";
import { useFrame } from "@react-three/fiber";

const CameraPositions = [
  {
    position: [4, 1.5, 5],
    target: [0, 0, 0],
  },
  {
    position: [-2, 0.5, 3],
    target: [0, 0.5, 0],
  },
];

export const Camera = () => {
  const cameraRef = useRef<CameraControlType>(null);
  const cameraPostionRef = useRef<number>(0);
  const { isShowcaseMode, setIsShowCaseBlinked } = useShowcaseModeStore();

  useFrame((state, delta) => {
    if (isShowcaseMode && cameraRef.current) {
      cameraRef.current.azimuthAngle -= delta * 0.05;
    }
    state.invalidate();
  });

  useEffect(() => {
    const setShowcaseAngles = () => {
      setIsShowCaseBlinked(true);
      setTimeout(() => {
        cameraRef.current!.setLookAt(
          CameraPositions[cameraPostionRef.current].position[0],
          CameraPositions[cameraPostionRef.current].position[1],
          CameraPositions[cameraPostionRef.current].position[2],
          CameraPositions[cameraPostionRef.current].target[0],
          CameraPositions[cameraPostionRef.current].target[1],
          CameraPositions[cameraPostionRef.current].target[2],
          false,
        );
        setIsShowCaseBlinked(false);
      }, 400);
      if (cameraPostionRef.current === CameraPositions.length - 1) {
        cameraPostionRef.current = 0;
      } else {
        cameraPostionRef.current++;
      }
    };
    let intervalId = 0;
    if (isShowcaseMode) {
      intervalId = window.setInterval(setShowcaseAngles, 3800);
    } else {
      cameraRef.current!.setLookAt(4, 1.5, 5, 0, 0, 0, false);
      setIsShowCaseBlinked(false);
      cameraPostionRef.current = 0;
    }

    return () => {
      if (intervalId) window.clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowcaseMode]);

  return (
    <CameraControls
      ref={cameraRef}
      maxPolarAngle={Math.PI / 2.1}
      minPolarAngle={Math.PI / 4}
      maxDistance={10}
      minDistance={3}
    />
  );
};
