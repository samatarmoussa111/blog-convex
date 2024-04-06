"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  disabled?: boolean;
  form: any;
  className?: string;
}

const TextareaInput = ({
  name,
  placeholder,
  form,
  label,
  className,
  isRequired,
  disabled,
}: Props) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel> {label} </FormLabel>
          <FormControl>
            <Textarea
              rows={5}
              placeholder={placeholder}
              disabled={disabled}
              {...field}
            />
          </FormControl>
          {isRequired && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default TextareaInput;
