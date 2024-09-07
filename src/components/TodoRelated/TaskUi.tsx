import { Check, Ellipsis } from "lucide-react";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

const TaskUi = () => {
  return (
    <div className="bg-white/50 p-3 rounded-sm flex justify-between items-center my-2  ">
      <div className=" flex items-center w-full ">
        <Checkbox className="h-5 w-5" />
        <p className="ml-5">Hello </p>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"} className="w-14">
            <Ellipsis className="h-5 w-[70px] " />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="  flex flex-col  w-24">
          <Button variant={"ghost"} className="text-xs">Edit</Button>
          <Button variant={"ghost"} className="text-xs">Hide</Button>
          <Button variant={"ghost"} className="text-xs">Delete</Button>

        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TaskUi;
