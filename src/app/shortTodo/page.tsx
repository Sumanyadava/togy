"use client";
import { ShortFilter } from "@/components/TodoRelated/shortTask/ShortFiler";
import ShortTask from "@/components/TodoRelated/shortTask/ShortTask";
import ShortTaskHead from "@/components/TodoRelated/shortTask/ShortTaskHead";
import TaskUi from "@/components/TodoRelated/TaskUi";
import SearchBar from "@/components/ui/searchbar";
import React, { useState } from "react";
import AddTodoShort from "./AddTodoShort";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [todoView, setTodoView] = useState<String>("blok");
  return (
    <div className="h-screen w-full  overflow-hidden p-5 ">
      <div className="flex flex-col sm:flex-row justify-between">
        <Button className="" onClick={() => router.push("/home")}>
          Back
        </Button>
        <h1 className="text-9xl font-bold">Tittle of the week </h1>

        <div className="addshortTask flex justify-around sm:w-[20%] w-full flex-wrap gap-5 items-center ">
          <AddTodoShort />
        </div>
      </div>

      <input
        className="bg-inherit w-full focus:outline-none p-2"
        type="text"
        placeholder="// description: one line max"
      />

      {todoView == "block" ? (
        <div className="_table rounded-lg border h-[70%] overflow-hidden shadow-gray-800">
          <ShortTaskHead />
          <div className="overflow-y-auto h-full scrollbar-custom">
            <ShortTask />
            <ShortTask />
            <ShortTask />
            <ShortTask />
            <ShortTask />

            <ShortTask />
            <ShortTask />
            <ShortTask />
            <ShortTask />
            <ShortTask />
          </div>
        </div>
      ) : (
        <h1>Make a Dragable Element Todo list here </h1>
      )}
    </div>
  );
};

export default page;
