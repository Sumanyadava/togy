import { Card } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full ">
      <div className="bg-white w-full sm:h-1/3 flex justify-around items-center flex-col sm:flex-row h-1/2 flex-wrap">
        <div className="h-[90%] w-[30%] bg-black">Dashboard</div>
        <div className="h-[90%] w-[30%] bg-black">Dashboard</div>
        <div className="h-[90%] w-[30%] bg-black">Dashboard</div>
        
      </div>
      <div className="bg-gray-300 w-full h-2/3 flex justify-around items-center">
        <div className="bg-black h-[90%] w-[60%]">Goals</div>
        <div className="bg-black h-[90%] w-[30%]">Habbit</div>
      </div>
    </div>
  );
};

export default page;
