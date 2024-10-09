import React, { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import TaskUi from "../TaskUi";
import { ScanSearch } from "lucide-react";
import { useRouter } from "next/navigation";
import { ShortAction } from "./ShortAction";

const ShortTodo = () => {
  const [inputFocus, setInputFocus] = useState(false);
  //Ischeck tag task_name Status priority time

  interface ShortTodoDs {
    id: number;
    isChecked: boolean;
    tag: string;
    task_name: string;
    status_task: string;
    priority: string;
    created: string;
  }

  const [ShortTodoRs, setShortTodoRs] = useState<ShortTodoDs[]>([
    {
      id: 1,
      isChecked: false,
      tag: "name",
      task_name: "Task_name",
      status_task: "status",
      priority: "priority",
      created: "created",
    },
    {
      id: 1,
      isChecked: false,
      tag: "name",
      task_name: "Task_name",
      status_task: "status",
      priority: "priority",
      created: "created",
    },
    {
      id: 1,
      isChecked: true,
      tag: "name",
      task_name: "Task_name",
      status_task: "status",
      priority: "priority",
      created: "created",
    },
  ]);

  const handleShortAdd = () => {};

  const router = useRouter();

  return (
    <Card className="w-[350px] m-5 h-min">
      <div
        className={`flex flex-col space-y-1.5 p-6 bg-gray-20 overflow-hidden transition-height duration-500 ease-in-out ${
          inputFocus ? "h-[150px]" : "h-[70px]"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="relative w-[80%]">
            <input
              type="text"
              className="peer flex h-10 w-full focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 
                border-b border-transparent transition-all duration-500 ease-linear
                  focus:border-b-primary p-5 bg-inherit cursor-pointer font-semibold"
              placeholder="hii Ever kd"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 peer-focus:w-full"></div>
          </div>

          <div className="w-[10%] flex flex-col justify-start items-center">
            <button>
              <ScanSearch
                onClick={() => router.push("/shortTodo")}
                className="cursor-pointer hover:bg-gray-800 rounded-sm"
              />
            </button>
            <ShortAction />
          </div>
        </div>
        <Button onClick={handleShortAdd}>Add</Button>
      </div>
      <CardContent className="scrollbar-custom overflow-y-scroll h-[250px]">
        {ShortTodoRs.map((e) => {
          return <TaskUi isChecked={e.isChecked} task_name={e.task_name} />;
        })}
      </CardContent>
    </Card>
  );
};

export default ShortTodo;
