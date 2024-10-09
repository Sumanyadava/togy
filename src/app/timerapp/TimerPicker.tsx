import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimePickerProps {
  hours: string;
  minutes: string;
  onHoursChange: (hours: string) => void;
  onMinutesChange: (minutes: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ hours, minutes, onHoursChange, onMinutesChange }) => {
  return (
    <div className="flex space-x-2">
      {/* Hours Picker */}
      <Select value={hours} onValueChange={onHoursChange}>
        <SelectTrigger className="w-[70px]">
          <SelectValue placeholder="HH" />
        </SelectTrigger>
        <SelectContent className="h-[200px] overflow-y-auto">
          {Array.from({ length: 24 }).map((_, index) => (
            <SelectItem key={index} value={index.toString().padStart(2, "0")}>
              {index.toString().padStart(2, "0")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Minutes Picker */}
      <Select value={minutes} onValueChange={onMinutesChange}>
        <SelectTrigger className="w-[70px]">
          <SelectValue placeholder="MM" />
        </SelectTrigger>
        <SelectContent className="h-[200px] overflow-y-auto">
          {Array.from({ length: 60 }).map((_, index) => (
            <SelectItem key={index} value={index.toString().padStart(2, "0")}>
              {index.toString().padStart(2, "0")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimePicker;
