import * as React from "react";

import { cn } from "@/libs/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-[10px] bg-white shadow-lg", className)} {...props} />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("line-clamp-2 text-sm font-bold tracking-[0.5px] text-dark lg:text-base", className)}
      {...props}
    >
      {children}
    </h3>
  ),
);
CardTitle.displayName = "CardTitle";

const CardImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => (
    <img ref={ref} className={cn("h-[100px] w-[100px] rounded-[10px]", className)} alt={props.alt} {...props} />
  ),
);
CardImage.displayName = "CardImage";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-[10px] font-medium tracking-[0.36px] text-dark lg:text-xs", className)}
      {...props}
    />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-[10px]", className)} {...props} />,
);
CardContent.displayName = "CardContent";

export { Card, CardContent, CardDescription, CardImage, CardTitle };
