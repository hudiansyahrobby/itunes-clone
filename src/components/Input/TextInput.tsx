import * as React from "react";

import { cn } from "@/libs/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "border-input focus-visible:ring-ring flex h-10 w-full rounded-[20px] border bg-transparent bg-white px-4 py-[13px] text-sm tracking-[0.43px] text-black transition-colors placeholder:text-center placeholder:text-blue-gray-500 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 ",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
