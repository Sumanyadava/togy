import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className=" h-screen w-full flex items-center justify-center flex-col gap-10 ">
      <div className=" bg-yellow-500 w-[90vw] h-[90vw] rounded-full ">
        {" "}
        1:05:20 Time
      </div>
      <div className="">Rule : {"asdoiasdnaskdjnask dasdbnkasdnasd asdmnbaskdjasd as"} </div>

      <Button>Done</Button>
      <Button>I Gave Up</Button>
    </div>
  );
};

export default page;
