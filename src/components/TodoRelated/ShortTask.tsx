import { Check, Ellipsis, EyeOff, SquarePen, Trash2 } from "lucide-react";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";



const ShortTask = () => {
  return (
    <div className="bg-white/50 p-3 rounded-sm flex justify-between items-center my-2  ">
      <div className=" flex items-center w-full gap-5 ">
        <Checkbox className="h-10 w-10" />
        <Badge>hello </Badge>
        <p className="ml-5">Hello </p>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"}>
            <Ellipsis  />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="  flex w-min   ">
          <Button variant={"ghost"} className="text-xs"><SquarePen /></Button>
          <Button variant={"ghost"} className="text-xs"><EyeOff /></Button>
          <Button variant={"destructive"} className="text-xs"><Trash2 /></Button>

        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ShortTask
