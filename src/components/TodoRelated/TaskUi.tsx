import { Check, Ellipsis, EyeOff, EyeOffIcon, SquarePen, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

const TaskUi = () => {
  
  const [shortChecked, setShortChecked] = useState(false);
  const handleShortClick =() => {
    setShortChecked(!shortChecked);
  }
  return (
    <div className={` p-3 rounded-sm flex justify-between items-center my-2 transition-all duration-300  ${shortChecked ? "bg-white/5": "bg-white/10 hover:bg-white/20 "} `}>
      <div className=" flex items-center w-full ">
        <Checkbox checked={shortChecked} className="h-5 w-5" onClick={handleShortClick} />
        <p className="ml-5" onClick={handleShortClick} >Hello </p>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"}>
            <Ellipsis  />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="  flex w-min [&>*]:m-1  ">
          <SquarePen size={20} className="hover:bg-white" />
          <EyeOff size={20} />
          <Trash2 size={20}/>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TaskUi;
