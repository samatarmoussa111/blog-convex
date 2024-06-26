import React from "react";

import Image from "next/image";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const socialBorder = `border group hover:border-muted-foreground duration-200 rounded px-1.5 py-1 border-border items-center flex`;

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full md:px-6 max-w-3xl">
      <div className="flex flex-row items-center space-x-3">
        <Image
          src="/images/photo_rose.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full h-[48px] w-[48px]"
        />
        <div className="flex flex-col">
          <span className="font-semibold">Samatar Moussa Barkadleh</span>
          <span className="text-muted-foreground ">
            Mathématicien &amp; Développeur Web
          </span>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <a href="#" target="_blank" className={`${socialBorder}`}>
          <Linkedin className="h-5 w-5 text-muted-foreground" />
        </a>
        <a href="#" target="_blank" className={`${socialBorder}`}>
          <Youtube className="h-5 w-5 text-muted-foreground" />
        </a>
        <a href="#" target="_blank" className={`${socialBorder}`}>
          <Github className="h-5 w-5 text-muted-foreground" />
        </a>
        <a href="#" target="_blank" className={`${socialBorder}`}>
          <Twitter className="h-5 w-5 text-muted-foreground" />
        </a>
      </div>
    </header>
  );
}
