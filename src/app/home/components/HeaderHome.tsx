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
import LongTodo from "@/components/TodoRelated/LongTodo";
import { Habbits } from "./Habbits";
import { Badge } from "@/components/ui/badge";
import { AvatarWithNotification } from "@/components/ui/avatar-with-notification";
import { useRouter } from "next/navigation";
import LongTaskUi from "@/components/TodoRelated/LongTaskUi";
import ShortTask from "@/components/TodoRelated/shortTask/ShortTask";
import TaskUi from "@/components/TodoRelated/TaskUi";

const HeaderHome = () => {
  const router = useRouter();
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
          <PopoverContent>
            Deadline -
            <LongTaskUi />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button>Habbits</Button>
          </PopoverTrigger>
          <PopoverContent>
            Habbits -
            <LongTaskUi />
            <TaskUi task_name={"hey"} isChecked={true} isEditable={false} />
            <TaskUi task_name={"hey"} isChecked={true} isEditable={false} />
            <LongTaskUi />
            go full
          </PopoverContent>
        </Popover>

        <Habbits />
        <div onClick={() => router.push("/Profile")}>
          <AvatarWithNotification
            src="https://github.com/shadcn.png"
            alt="Another User"
            fallback="AB"
            notificationCount={1}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
