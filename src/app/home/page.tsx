"use client";
import NavBar from "@/components/NavBar";
import Searchbar from "@/components/Searchbar";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import CurrentlyWorking from "./components/CurrentlyWorking";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TodayCard from "@/components/TodayCard";
import ShortTodo from "@/components/TodoRelated/ShortTodo";
import ChallengeTimer from "@/components/ChallengeTimer";
import LongTodo from "@/components/TodoRelated/LongTask";
import { Habbits } from "./components/Habbits";

const page = () => {
  return (
    <div className="text-lg h-screen ">
      {/* heading  */}
      <div className="search_here  flex justify-between items-center border flex-col sm:flex-row gap-5 p-5">
        <Button variant={"ghost"} className="mx-5 text-xl">
          Togo
        </Button>

        <Searchbar />

        <div className="flex gap-5 mx-5">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Week</Button>
            </PopoverTrigger>
            <PopoverContent>Your Task for This week</PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button>Habbits</Button>
            </PopoverTrigger>
            <PopoverContent>Your Habbits</PopoverContent>
          </Popover>

          <Habbits />

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* main  */}
      <div className="body_here  h-auto flex flex-wrap gap-4 ">
        <div className="top_header bg-black flex w-full justify-around items-center">
          <CurrentlyWorking />
          <ChallengeTimer />
        </div>

        <ShortTodo />
        <LongTodo />
      </div>

      <div className="absolute right-10 bottom-10">
        <TodayCard />
        
      </div>
    </div>
  );
};

export default page;
