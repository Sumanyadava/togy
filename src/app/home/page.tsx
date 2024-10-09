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
import ShortTodo from "@/components/TodoRelated/shortTask/ShortTodo";
import ChallengeTimer from "@/components/ChallengeTimer";
import LongTodo from "@/components/TodoRelated/LongTodo";
import { Habbits } from "./components/Habbits";
import HeaderHome from "./components/HeaderHome";
import { Calendar } from "@/components/ui/calendar";

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="text-lg h-screen ">
      <HeaderHome />

      {/* main  */}
      <div className="body_here   flex flex-wrap gap-4 justify-center   ">
        <div className="top_header bg-black flex flex-col-reverse w-full justify-around items-center md:flex-row">
          <CurrentlyWorking />
          <ChallengeTimer />
        </div>

        <ShortTodo />
        <ShortTodo />

        <LongTodo />
        <LongTodo />
      </div>

      <div className=" right-10 bottom-20 fixed mb-1">
        <TodayCard />
      </div>
    </div>
  );
};

export default page;
