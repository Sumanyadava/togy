import { Check, Ellipsis, EyeOff, SquarePen, Trash2 } from "lucide-react";
import React from "react";
import { Checkbox } from "../../ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../../ui/button";
import { ShortAction } from "./ShortAction";
import Checkboxss from "../../checkBox/ch1";
const ShortTask = () => {
  return (
    <div className="bg-white/20 p-3 rounded-sm flex justify-between items-center my-2 mx-5  ">
      <div className=" flex items-center w-min gap-5  justify-around  ">
        <Checkbox className="h-10 w-10" />

        <Badge>hello </Badge>

        <p className="ml-5">Taskasdfsdf </p>
      </div>

      <div className="flex w-1/2  h-full justify-around items-center overflow-auto gap-5 scrollbar-custom ">
        <div className="div">Status</div>

        <div className="priory">priority</div>
        <div>Created At</div>

        <ShortAction />
      </div>
    </div>
  );
};

export default ShortTask;
