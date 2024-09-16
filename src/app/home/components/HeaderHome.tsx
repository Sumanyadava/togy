"use client";
import NavBar from "@/components/NavBar";
import Searchbar from "@/components/Searchbar";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import CurrentlyWorking from "./CurrentlyWorking";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TodayCard from "@/components/TodayCard";
import ShortTodo from "@/components/TodoRelated/shortTask/ShortTodo";
import ChallengeTimer from "@/components/ChallengeTimer";
import LongTodo from "@/components/TodoRelated/LongTask";
import { Habbits } from "./Habbits";
import { Badge } from "@/components/ui/badge";
import { AvatarWithNotification } from "@/components/ui/avatar-with-notification";

const HeaderHome = () => {
  return (
    <div className="search_here  flex justify-between items-center border flex-col md:flex-row gap-5 p-5">
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

        

        <AvatarWithNotification
        src="https://github.com/shadcn.png"
        alt="Another User"
        fallback="AB"
        notificationCount={120}
      />
        
      </div>
    </div>
  );
};

export default HeaderHome;
