"use client";

import Link from "next/link";
import Icon from "../icon/icon";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  url: string;
  iconName?: LucideIcon;
  image?: string;
}

const ProjectsCard = ({ title, description, url, iconName, image }: Props) => {
  return (
    <Link
      target="_blank"
      href={url}
      className=" w-full flex justify-between items-center gap-x-4 duration-300 md:hover:bg-muted-foreground/10 md:p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-row space-x-4">
        {iconName && <Icon iconName={iconName} />}

        {image && (
          <Image
            src={image}
            alt=""
            width={40}
            height={40}
            className="w-[40px] h-[40px]"
          />
        )}

        <div className="flex flex-col">
          <span className="text-foreground/90">{title}</span>

          <div className="flex flex-row space-x-2 items-center text-sm text-muted-foreground">
            <span> {description} </span>
          </div>
        </div>
      </div>

      <div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-foreground"
        >
          <path
            d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ProjectsCard;
