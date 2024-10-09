"use client";
import React, { useState } from "react";
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
import { CalendarDatePicker } from "../calendar-date-picker";
import DatePicker from "@/components/DatePicker";
import { TagsLong } from "../TagsLong";
import LongTaskUi from "./LongTaskUi";
import { ShortAction } from "./shortTask/ShortTodoAction";
import { useRouter } from "next/navigation";

const LongTodo = () => {
  const [headerHeight, setHeaderHeight] = useState(false);
  const handleLong = () => {
    setHeaderHeight(true);
  };

  const router = useRouter();
  return (
    <Card className="w-[350px] m-5 h-min peer">
      <CardHeader
        className={`${
          headerHeight ? "h-[170px]" : "h-[70px]"
        } overflow-hidden  transition-all ease-in`}
      >
        <div className="flex justify-between items-center">
          <div className="relative w-[80%]">
            <input
              type="text"
              className="flex h-10 w-full focus:outline-none disabled:cursor-not-allowed px-3 bg-inherit text-xl peer "
              placeholder="hii every"
              onFocus={handleLong}
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 peer-focus:w-full"></div>
          </div>

          <div className="w-[10%] flex flex-col justify-start items-center">
            <ShortAction />
          </div>
        </div>
        <div className="flex">
          <DatePicker />

          <TagsLong />
        </div>
        <Button onClick={() => setHeaderHeight(false)}>Add</Button>
      </CardHeader>
      <CardContent className="scrollbar-custom overflow-y-scroll h-[250px] ">
        <LongTaskUi />
        <LongTaskUi />
        <LongTaskUi />
        <LongTaskUi />
        <LongTaskUi />
        <LongTaskUi />
      </CardContent>
    </Card>
  );
};

export default LongTodo;
