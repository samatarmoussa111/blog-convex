"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "../../ui/form";
import { ComboboxItemsType } from "../types/selct-radio-items-types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface Props {
  name: string;
  form: any;
  label: string;
  setSelectedValue?: Dispatch<SetStateAction<string>>;
  description?: string;
  emptyLabel: string;
  btnLabel: string;
  placeholder?: string;
  comboboxItems: ComboboxItemsType[];
}

const ComboboxInput = ({
  name,
  form,
  label,
  description,
  comboboxItems,
  placeholder = "Rechercher",
  emptyLabel,
  btnLabel,
  setSelectedValue,
}: Props) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3 flex flex-col">
          <FormLabel> {label} </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? comboboxItems.find((item) => item.value === field.value)
                        ?.label ?? btnLabel
                    : btnLabel}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[500px] p-0">
              <Command>
                <CommandInput placeholder={placeholder} />
                <CommandEmpty>{emptyLabel}</CommandEmpty>
                <CommandGroup>
                  {comboboxItems.map((item) => (
                    <CommandItem
                      value={item.label}
                      key={item.value}
                      onSelect={() => {
                        form.setValue(name, item.value);
                        if (setSelectedValue) {
                          setSelectedValue(item.value);
                        }
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          item.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ComboboxInput;
