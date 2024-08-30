
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TaskUi from "@/components/TodoRelated/TaskUi";

export default function CurrentlyWorking() {
  return (
    <Card className="w-[350px] m-5 h-min">
      <CardHeader>
        <CardTitle>Currently Working</CardTitle>
        <CardDescription>These are all the tasks you are currently working on.</CardDescription>
      </CardHeader>
      <CardContent className="scrollbar-custom overflow-y-scroll h-[20vh] mb-3">
        <TaskUi />
        <TaskUi />
        <TaskUi />
        <TaskUi />
        <TaskUi />
        <TaskUi />
        <TaskUi />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
