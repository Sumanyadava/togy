import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
Button;
import { Input } from "@/components/ui/input";
import Searchbar from "./Searchbar";

const navlink = ["dashboard", "home"];
const NavBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="absolute right-10 bottom-10">Open</SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Fields</SheetTitle>
            <SheetDescription>
              {navlink.map((ele) => {
                return (
                  <>
                    <div className="h-[70px] w-[70px] bg-white rounded-full hover:rounded-xl transition-all duration-100 ease-linear my-5 ">
                      sum
                    </div>
                  </>
                );
              })}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavBar;
