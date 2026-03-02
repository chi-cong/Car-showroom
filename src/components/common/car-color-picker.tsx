import { useCarColorsStore } from "@/store/car-colors";

export const CarColorPicker = ({ carPart = "wheels" }: { carPart: string }) => {
  const { colors, setPartColor } = useCarColorsStore();
  return (
    <input
      type='color'
      value={colors.wheel}
      onChange={(e) => {
        setPartColor(carPart, e.target.value);
      }}
    />
  );
};
