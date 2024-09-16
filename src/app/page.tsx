"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = (where: string) => {
    router.push(`/${where}`);
    console.log(where);
  };

  return (
    <div className="flex h-screen w-full justify-center items-center gap-12 flex-col text-6xl  ">
      PAGES
      <div className="flex w-1/2 justify-around [&>*]:bg-gray-400 [&>*]:p-2 [&>*]:rounded-md text-sm">
        <Button onClick={() => handleClick("home")}>Home</Button>

        <Button onClick={() => handleClick("Login")}>Login</Button>
        <Button onClick={() => handleClick("Signup")}>Signup</Button>
        <Button onClick={() => handleClick("Profile")}>Profile</Button>
      </div>
    </div>
  );
}
