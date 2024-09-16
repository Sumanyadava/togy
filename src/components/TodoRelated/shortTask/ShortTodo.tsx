import React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import TaskUi from "../TaskUi";
import {
  CircleEllipsis,
  Ellipsis,
  FlipHorizontal2Icon,
  ScanSearch,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ShortAction } from "./ShortAction";
import { CustomInput } from "@/components/ui/custom_input";

const ShortTodo = () => {
  const router = useRouter();
  return (
    <Card className="w-[350px] m-5 h-min">
      <div className=" flex flex-col space-y-1.5 p-6  ">
        <div className="flex justify-between items-center   ">
          <CustomInput />

          <div className="w-[10%]  flex flex-col justify-start items-center ">
            <button>
              <ScanSearch
                onClick={() => router.push("/shortTodo")}
                className="cursor-pointer hover:bg-gray-800 rounded-sm"
              />
            </button>
            <ShortAction />
          </div>
        </div>
        <Button>Add</Button>
      </div>
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
