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
import { Radar, House, icons } from "lucide-react";

const navlink = [{ place: "home", icon: House }];
const NavBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="fixed right-10 bottom-10" asChild>
          <Button size={"icon"} className="rounded-full">
            <Radar />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Fields</SheetTitle>
            <SheetDescription>
              {navlink.map((ele, index) => {
                return (
                  <Button
                    size="icon"
                    className=" bg-white rounded-full hover:rounded-xl transition-all duration-100 ease-linear my-5 text-black flex justify-center items-center"
                  >
                    {React.createElement(ele.icon)}
                  </Button>
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
