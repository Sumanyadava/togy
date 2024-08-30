"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeCatchingButton_v2 } from "@/components/EyeCatching/VButtons";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export const iframeHeight = "800px";

export const containerClassName = "w-full h-full p-4 lg:p-0";

export default function Page() {
  const router = useRouter();

  return (
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] overflow-hidden ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>

              <Input id="password" type="password" required />
            </div>

            <div className="flex items-center  space-x-2 mb-5">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember this device
              </label>
            </div>

            <EyeCatchingButton_v2 children="Login" />

            <Button
              variant="outline"
              onClick={() =>
                toast.success("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account ?{" "}
            <span className="underline cursor-pointer" onClick={() => router.push("/Signup")}>
              Sign up
            </span>
            <Link
              href="/forgot-password"
              className="my-5 inline-block text-sm underline mb-5"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/images/owl.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full bg-white object-contain dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
