import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
} from "@/components/ui/tabs";
import { CustomOption } from "@/components/common/custom-option";
import { CarColorPicker } from "../common/car-color-picker";
import { useShowcaseModeStore } from "@/store/showcase-mode";
import { Button } from "@/components/ui/button";
import { useCanvasStateStore } from "@/store/canvas-state";

export function Panel() {
  const { setIsShowcaseMode, isShowcaseMode } = useShowcaseModeStore();
  const { setFrameloop } = useCanvasStateStore();
  return (
    <Tabs defaultValue='information'>
      <TabsList className='bg-background/20 backdrop-blur-lg absolute w-50 h-8 top-8 left-1/2 right-1/2 z-20'>
        <TabsTrigger value='information'>Information</TabsTrigger>
        <TabsTrigger value='customize'>Customize</TabsTrigger>
      </TabsList>
      <Card
        className={
          "backdrop-blur-md bg-background/20 border-white/20 w-80 absolute top-24 left-4 z-20 "
        }
      >
        <CardHeader>
          <CardTitle>Pagani</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </Tabs>
  );
}
