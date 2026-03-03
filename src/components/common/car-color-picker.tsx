import { useCarColorsStore } from "@/store/car-colors";

export const CarColorPicker = ({ carPart }: { carPart: string }) => {
  const { colors, setPartColor } = useCarColorsStore();
  return (
    <input
      type='color'
      value={colors[carPart]}
      onChange={(e) => {
        setPartColor(carPart, e.target.value);
      }}
    />
  );
};
