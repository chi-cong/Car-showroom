import type { ReactNode } from "react";

export const CustomOption = ({
  title,
  selector,
}: {
  title: ReactNode;
  selector: ReactNode;
}) => {
  return (
    <div className='relative w-full h-10 group cursor-pointer'>
      <div className='justify-between items-center flex absolute z-10 w-full py-2 px-1  bg-transparent!'>
        <span className='text-gray-50 group-hover:text-gray-800 transition-colors duration-100 w-full'>
          {title}
        </span>
        {selector}
      </div>
      <div className='absolute w-full h-full rounded-xs bg-linear-to-r from-gray-50/80 to-gray-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-0'></div>
    </div>
  );
};
