import {} from "motion/react";
import type { ReactNode } from "react";

export const CustomOption = ({
  title,
  selector,
}: {
  title: ReactNode;
  selector: ReactNode;
}) => {
  return (
    <div className='justify-between items-center flex'>
      <span className='text-gray-50'>{title}</span>
      {selector}
    </div>
  );
};
