import { Link } from "react-router-dom";

import { ROUTE } from "@/constants/route";

import { HamburgerMenuIcon, LogoTextIcon } from "../Icon";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../Sheet";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Link to={ROUTE.HOME.DEFAULT}>
              <LogoTextIcon className="text-primary" />
            </Link>
          </SheetTitle>
          <SheetDescription>Search your favorite collections</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 text-lg text-dark">
          <Link to={ROUTE.HOME.DEFAULT}>Home</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
