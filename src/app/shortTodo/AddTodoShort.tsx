import * as React from "react";
import { Plus, CheckCircle, AlertCircle, Tag, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function AddTodoShort() {
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New task:", newTask);
    setNewTask("");
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleAddTask} className="flex gap-2 flex-wrap">
          <Input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-[80%]"
          />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className=" h-4 w-4" />
          </Button>
        </form>

        <div className="flex  gap-2 justify-around flex-wrap ">
          <Select>
            <SelectTrigger className="w-max bg-background">
              <CheckCircle className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">Todo</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-max bg-background">
              <AlertCircle className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-max bg-background">
              <Tag className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
              <SelectItem value="study">Study</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-max bg-background">
              <Settings className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Settings" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="work">View</SelectItem>
              <SelectItem value="personal">Add Tag</SelectItem>
              <SelectItem value="study">Add Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
