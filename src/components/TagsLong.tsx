import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tag } from "lucide-react";

export function TagsLong() {
  const [selectedTag, setSelectedTag] = React.useState("");

  // Function to handle setting the selected tag and its background color
  const handleSelectChange = (value: string) => {
    setSelectedTag(value);
  };

  // Function to determine background color based on selected value
  const getBackgroundColor = () => {
    switch (selectedTag) {
      case "impUrg":
        return "bg-red-400";
      case "nonImpUrg":
        return "bg-orange-400";
      case "impNonUrg":
        return "bg-yellow-500";
      case "NonImpNonUrg":
        return "bg-green-600";
      default:
        return "bg-inherit";
    }
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className={`w-[280px] ml-1 ${getBackgroundColor()}`}>
      <Tag className="mr-2 h-4 w-4 text-muted-foreground" />
        <SelectValue placeholder="Tag" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="flex flex-col gap-2 ">
          <SelectLabel>Tags</SelectLabel>
          <SelectItem value="impUrg" className="bg-red-400 ">
            Important and Urgent
          </SelectItem>
          <SelectItem value="nonImpUrg" className="bg-orange-400 ">
            Not Important but Urgent
          </SelectItem>
          <SelectItem value="impNonUrg" className="bg-yellow-500">
            Important but Not Urgent
          </SelectItem>
          <SelectItem value="NonImpNonUrg" className="bg-green-600">
            Not Important and Not Urgent
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
