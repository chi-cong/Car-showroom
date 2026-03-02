import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
} from "@/components/ui/tabs";
import clsx from "clsx";
import { CustomOption } from "../common/custom-option";
import { CarColorPicker } from "../common/car-color-picker";

export function Panel({ className }: { className?: string }) {
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
          <TabsContents
            transition={{
              type: "spring",
            }}
          >
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
                <CustomOption
                  title='Wheel Color'
                  selector={<CarColorPicker carPart='wheels' />}
                />
              </div>
            </TabsContent>
          </TabsContents>
        </Tabs>
      </CardContent>
    </Card>
  );
}
