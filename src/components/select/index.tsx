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
  perPage?: number;
}

export function SelectComponent({
  options = [],
  placholder = "Select",
  classNameSelectTrigger,
  handleChange = () => {},
  perPage = 4,
}: SelectComponentInterface) {
  return (
    <Select
      defaultValue={`${perPage}`}
      onValueChange={(e) => {
        handleChange(e);
      }}
    >
      <SelectTrigger className={twMerge("w-[180px]", classNameSelectTrigger)}>
        <SelectValue defaultValue={perPage} placeholder={placholder} />
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
  );
}
