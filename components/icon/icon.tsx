import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
  iconName: LucideIcon;
}

const Icon = ({ className, iconName: IconName }: Props) => {
  return (
    <div
      className={cn(
        "w-[50px] h-[50px] flex items-center justify-center bg-primary/10 p-1 rounded-xl",
        className
      )}
    >
      <IconName className="h-8 w-8 text-primary" />
    </div>
  );
};

export default Icon;
