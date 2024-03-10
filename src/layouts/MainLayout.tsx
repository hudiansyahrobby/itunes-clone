import React from "react";

import Navbar from "@/components/Navbar";
import { cn } from "@/libs/utils";

interface MainLayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn("min-h-svh", className)} {...rest}>
      <Navbar />
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export default MainLayout;
