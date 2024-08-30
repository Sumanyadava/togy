import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import TaskUi from "./TaskUi";
import {
  CircleEllipsis,
  Ellipsis,
  FlipHorizontal2Icon,
  ScanSearch,
} from "lucide-react";

const ShortTodo = () => {
  return (
    <Card className="w-[350px] m-5 h-min">
      <CardHeader className="">
        <div className="flex justify-between items-center">
          <Input className="w-[80%]" placeholder="hii every" />
          <div className="w-[10%]  flex flex-col justify-start items-center ">
            <ScanSearch />
            <Ellipsis />
          </div>
        </div>
        <Button>Add</Button>
      </CardHeader>
      <CardContent className="scrollbar-custom overflow-y-scroll h-[250px]">
        <TaskUi />
        <TaskUi />
        <TaskUi />
        <TaskUi />
        <TaskUi />
        
      </CardContent>
    </Card>
  );
};

export default ShortTodo;
