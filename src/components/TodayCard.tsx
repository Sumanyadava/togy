"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import HoursLeftInDay from "@/helper/timeRelated/HoursLeftInDay";

interface SetupItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
}

const TodayCard: React.FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  

  const [tasks, setTasks] = useState([
    { text: "Watch Tutorial", completed: true },
    { text: "Setup Profile", completed: false },
    { text: "Create a Cluster ", completed: false },
    // { text: "Get the Extension", completed: false },
  ]);

  const toggleTaskCompletion = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Popover
      open={isCardVisible}
      onOpenChange={(isOpen) => setIsCardVisible(isOpen)}
    >
      <PopoverTrigger asChild>
        <Button size={"icon"} className="rounded-full font-bold">
          {isCardVisible ? <X /> : <HoursLeftInDay />}
        </Button>
      </PopoverTrigger>

      <PopoverContent className=" bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border ">
        <div className="">
          <h2 className="text-white text-xl font-semibold mb-4">
            Finish Today
          </h2>
          <p className="text-gray-400 mb-6">
            <HoursLeftInDay timeZone="Asia/Kolkata" /> hours left.
          </p>

          <div className="">
            {tasks.map((task, index) => (
              <SetupItem
                key={index}
                text={task.text}
                completed={task.completed}
                onToggle={() => toggleTaskCompletion(index)}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const SetupItem: React.FC<SetupItemProps> = ({ text, completed, onToggle }) => (
  <div
    className={`flex items-center justify-between p-3  rounded-lg mb-2 cursor-pointer  
    bg-white  bg-clip-padding backdrop-filter backdrop-blur-md  border 
    hover:bg-opacity-5
    ${completed ? "bg-opacity-0" : "bg-opacity-10"} `}
    onClick={onToggle}
  >
    <div className="flex items-center">
      {completed ? (
        <svg
          className="w-5 h-5 mr-2 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <div className="w-5 h-5 mr-2 border-2 border-gray-400 rounded-full"></div>
      )}
      <span className={`text-white ${completed ? "line-through " : ""}`}>
        {text}
      </span>
    </div>
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

export default TodayCard;
