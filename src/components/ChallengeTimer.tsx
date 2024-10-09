import { useRouter } from "next/navigation";
import React from "react";

const ChallengeTimer = () => {
  const router = useRouter();
  return (
    <div
      className=" h-min w-1/2 flex
     lg:text-9xl md:text-6xl text-6xl  bg-gray-3 items-baseline font-bold flex-wrap  justify-center cursor-pointer hover:text-gray-400"
      onClick={() => router.push("/dashboard")}
    >
      21:20:31
      <p className=" font-light text-xl ml-3">Change Future</p>
    </div>
  );
};

export default ChallengeTimer;
