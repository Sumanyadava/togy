"use client";
import { Charttest } from "@/components/charttest/charttest";
import { PlateEditor } from "@/components/plate";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Camera, File, Folder } from "lucide-react";
import React from "react";
import { object } from "zod";

const page = () => {
  const folder: (string | string[])[] = [
    "abc",
    ["abc", "abc", "abc"],
    "abc",
    "abc",
    ["abc"],
  ];

  const recfol = (ele: (string | string[])[]): JSX.Element[] => {
    return ele.map((e, index) => {
      if (typeof e === "object") {
        return (
          <div key={index} className="ml-5">
            <Folder />
            {recfol(e as string[])} {/* Cast to string[] for recursion */}
          </div>
        );
      } else {
        return (
          <p key={index} className="flex ">
            <File />
            {e}
          </p>
        );
      }
    });
  };

  return (
    <div className=" h-screen w-full flex  justify-around items-center flex-col">
      {/* <Charttest /> */}
      <h1>Dairy Entry - Day by Day</h1>
      <Button
        className=" rounded-full p-5 h-20 w-20 bg-white/50 "
        variant={"secondary"}
      >
        <Camera />
      </Button>
      <div className=" flex  h-2/3 w-[80%] ">
        <div className="w-[80%]">
          <PlateEditor />
        </div>
        <div className="bg-black h-[60vh] w-[20%] pt-2 px-1">
          Todays date
          <Separator />
          Folder Structure
          {recfol(folder)}
        </div>
      </div>
    </div>
  );
};

export default page;
