import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
} from "@/components/ui/tabs";
import { useCarColorsStore } from "@/store/car-colors";
import clsx from "clsx";

const WHEEL_COLORS = [
  { name: "Silver", value: "#C0C0C0" },
  { name: "Black", value: "#111111" },
  { name: "Gold", value: "#D4AF37" },
  { name: "Bronze", value: "#CD7F32" },
];

export function Panel({ className }: { className?: string }) {
  const { colors, setPartColor } = useCarColorsStore();

  return (
    <Card
      className={clsx(
        "backdrop-blur-md bg-background/20 border-white/20 w-80",
        className,
      )}
    >
      <CardHeader>
        <CardTitle>Pagani</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue='information'>
          <TabsList className='w-full bg-transparent border border-gray-50/50'>
            <TabsTrigger value='information'>Information</TabsTrigger>
            <TabsTrigger value='customize'>Customize</TabsTrigger>
          </TabsList>
          <TabsContents>
            <TabsContent value='information' className='mt-4 h-50'>
              <div className='text-sm text-foreground space-y-2'>
                <p>
                  <strong>Engine:</strong> 6.0 L AMG V12
                </p>
                <p>
                  <strong>Horsepower:</strong> 852 hp
                </p>
                <p>
                  <strong>0-60 mph:</strong> 2.8 seconds
                </p>
              </div>
            </TabsContent>
            <TabsContent value='customize' className='mt-4 overflow-auto h-50'>
              <div className='space-y-4 h-fit'>
                <h4 className='text-sm font-medium mb-2'>Wheels</h4>
                <div className='flex gap-2'>
                  {WHEEL_COLORS.map((color) => (
                    <button
                      key={color.value}
                      className={`w-8 h-8 rounded-full border-2 ${colors.wheels === color.value ? "border-primary" : "border-transparent"}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setPartColor("wheels", color.value)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          </TabsContents>
        </Tabs>
      </CardContent>
    </Card>
  );
}
