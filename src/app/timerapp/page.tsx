"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import TimePicker from "./TimerPicker";

const Page = () => {
  const [timer, setTimer] = useState<number>(0);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [inputText, setInputText] = useState<string>("");

  const [isStarted, setIsStarted] = useState(false); // Track if the timer has started

  // Effect to handle the countdown timer
  useEffect(() => {
    if (timer <= 0 && isStarted) {
      toast.success("You did it! Time's up! 🎉");
      setIsStarted(false); // Reset the flag once the timer finishes
      return;
    }

    const timerval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        clearInterval(timerval);
      }
    }, 1000);

    return () => clearInterval(timerval);
  }, [timer, isStarted]);

  // Handle Start button click
  const handleStart = () => {
    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;

    if (!totalSeconds || !inputText.trim()) {
      toast.error("Please set a valid timer and enter a focus topic!");
      return;
    }

    setTimer(totalSeconds); // Start countdown from selected time
    setIsStarted(true);
    toast.success(`Timer started for ${inputText}! Stay focused! 💪`);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-10 p-5 bg-gray-900 text-white">
      {/* Timer display */}
      <div className="bg-yellow-500 aspect-square sm:h-[50%] h-auto w-[90%] sm:w-auto rounded-full flex justify-center items-center text-8xl text-black">
        {timer > 0 ? (
          <div className="w-full pl-10">
            {Math.floor(timer / 3600)
              .toString()
              .padStart(2, "0")}
            :
            {Math.floor((timer % 3600) / 60)
              .toString()
              .padStart(2, "0")}
            :{(timer % 60).toString().padStart(2, "0")}
          </div>
        ) : (
          <div className="flex w-full justify-center items-center px-5 gap-2 text-white flex-col">
            <div className="relative w-[80%]">
              <input
                type="text"
                className="peer flex h-10 w-full focus:outline-none
                border-b border-transparent transition-all duration-500 ease-linear text-center
                  focus:border-b-primary p-5 bg-inherit text-lg  placeholder:text-black/90"
                placeholder="Timer for "
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 peer-focus:w-full"></div>
            </div>
            {/* Time Picker */}
            <TimePicker
              hours={hours}
              minutes={minutes}
              onHoursChange={(value) => setHours(value)}
              onMinutesChange={(value) => setMinutes(value)}
            />
          </div>
        )}
      </div>

      <div className="text-lg font-semibold">Rule: Don't Give Up</div>
      {timer ? <h1 className="text-2xl">Focus on: {inputText}</h1> : null}

      {/* Start and Give Up buttons */}
      {!timer && !isStarted ? (
        <Button
          onClick={handleStart}
          className={`mt-5 bg-red-500 hover:bg-red-600 ${
            inputText && (hours !== "00" || minutes !== "00")
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!inputText || (hours === "00" && minutes === "00")}
        >
          Start Focus
        </Button>
      ) : (
        <Button
          onClick={() => {
            setTimer(0);
            setIsStarted(false);
            toast.error("Focus session canceled. Try again!");
          }}
          className="  mt-5"
        >
          I Gave Up
        </Button>
      )}
    </div>
  );
};

export default Page;
