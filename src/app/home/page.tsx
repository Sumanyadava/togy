"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import CurrentlyWorking from "./components/CurrentlyWorking";

import TodayCard from "@/components/TodayCard";
import ShortTodo from "@/components/TodoRelated/shortTask/ShortTodo";
import ChallengeTimer from "@/components/ChallengeTimer";
import LongTodo from "@/components/TodoRelated/LongTodo";

import HeaderHome from "./components/HeaderHome";

const page = () => {
  const [date, setDate] = React.useState(new Date());
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
