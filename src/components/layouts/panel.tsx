import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
} from "@/components/ui/tabs";
import clsx from "clsx";
import { CustomOption } from "@/components/common/custom-option";
import { CarColorPicker } from "../common/car-color-picker";
import { useShowcaseModeStore } from "@/store/showcase-mode";
import { Button } from "@/components/ui/button";
import { useCanvasStateStore } from "@/store/canvas-state";

export function Panel({ className }: { className?: string }) {
  const { setIsShowcaseMode, isShowcaseMode } = useShowcaseModeStore();
  const { setFrameloop } = useCanvasStateStore();
  return (
    <Card
      className={clsx(
        "backdrop-blur-md bg-background/20 border-white/20 w-80 absolute top-4 left-4 z-20 ",
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
          <TabsContents
            transition={{
              type: "spring",
            }}
          >
            <TabsContent value='information' className='mt-4 h-50'>
              <div className='text-sm text-foreground space-y-2'>
                <p>
                  <strong>Engine:</strong> 6.0 L AMG V1
                </p>
                <p>
                  <strong>Horsepower:</strong> 852 hp
                </p>
                <p>
                  <strong>0-60 mph:</strong> 2.8 seconds
                </p>
              </div>
              <Button
                onClick={() => {
                  setIsShowcaseMode(!isShowcaseMode);
                  setFrameloop(isShowcaseMode ? "demand" : "always");
                }}
              >
                {isShowcaseMode ? "Stop showcase mode" : "Showcase mode"}
              </Button>
            </TabsContent>
            <TabsContent value='customize' className='mt-4 overflow-auto h-50'>
              <div className='flex flex-col'>
                <CustomOption
                  title='Wheel Color'
                  selector={<CarColorPicker carPart='wheels' />}
                />
                <CustomOption
                  title='Body Color'
                  selector={<CarColorPicker carPart='body' />}
                />
              </div>
            </TabsContent>
          </TabsContents>
        </Tabs>
      </CardContent>
    </Card>
  );
}
