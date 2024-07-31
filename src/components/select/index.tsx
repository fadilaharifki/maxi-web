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
import { twMerge } from "tailwind-merge";
import { X } from "lucide-react";

interface Option {
  value: string;
  label?: string;
  disabel?: boolean;
}

interface SelectComponentInterface {
  options: Option[];
  placholder?: string;
  classNameSelectTrigger?: string;
  handleChange?: (val: string) => void;
  value?: string | number;
  isClean?: boolean;
}

export function SelectComponent({
  options = [],
  placholder = "Select",
  classNameSelectTrigger,
  handleChange = () => {},
  value = "",
  isClean = true,
}: SelectComponentInterface) {
  return (
    <div className="relative inline-block">
      <Select
        value={`${value}`} // use controlled component pattern
        onValueChange={(e) => {
          handleChange(e);
        }}
      >
        <SelectTrigger className={twMerge("w-[180px]", classNameSelectTrigger)}>
          <SelectValue placeholder={placholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options?.map((e: Option, i: number) => {
              if (e.disabel) {
                return <SelectLabel key={i}>{e.label || e.value}</SelectLabel>;
              }

              return (
                <SelectItem key={i} value={e.value}>
                  {e.label || e.value}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      {value && isClean && (
        <X
          className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5 cursor-pointer bg-gray-300 rounded-full text-white"
          onClick={() => handleChange("")}
        />
      )}
    </div>
  );
}
