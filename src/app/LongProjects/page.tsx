"use client";
import { PlateEditor } from "@/components/plate";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="h-full w-full ">
      <h1 className="text-5xl mb-10 flex justify-between p-10 ">
        Long TasK
        <Button onClick={() => router.push("/home")}>back</Button>
      </h1>
      <PlateEditor />
    </div>
  );
};

export default page;
