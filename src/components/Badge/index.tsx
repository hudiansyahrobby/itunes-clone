import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/libs/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[10px] h-[20px] lg:h-[25px] lg:min-w-[50px] lg:text-xs border p-1 min-w-[45px] text-[10px] text-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-green text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
