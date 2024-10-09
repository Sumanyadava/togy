import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { useRouter } from "next/navigation";

const LongTaskUi = () => {
  const [deadlineWidth, setDeadlineWidth] = useState(68);
  const [mileShow, setMileShow] = useState(false);

  const router = useRouter();
  return (
    <div className="my-2">
      <div
        className="relative    w-full cursor-pointer "
        onClick={() => setMileShow(!mileShow)}
      >
        <div
          style={{ width: `${deadlineWidth}%` }}
          className=" h-full rounded-lg  bg-gradient-to-r from-slate-900 to-slate-800
          absolute"
        >
          &nbsp;
        </div>

        <div className="w-full h-full p-3 bg-gray-900 rounded-lg rounded-br-none flex justify-between ">
          <span className="z-10">hello</span>

          <span className="bg-yellow-400 rounded-lg w-3  h-3 absolute top-1 -right-2"></span>

          <span className="z-10">
            {deadlineWidth < 80 ? "27/05/24" : "exceeded"}
          </span>
        </div>
      </div>
      <div
        className={` ml-3 px-2 bg-gray-500 transition-all duration-300  rounded-b-lg   ${
          mileShow
            ? " visible max-h-40 opacity-100"
            : " invisible max-h-0 opacity-0"
        } `}
        onClick={() => router.push("/LongProjects")}
      >
        No milestone here.....
      </div>
    </div>
  );
};

export default LongTaskUi;
