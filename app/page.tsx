import PostCard from "@/components/cards/post-card";
import Icon from "@/components/icon/icon";
import { Newsletter } from "@/components/newsletter/newsletter";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <ModeToggle />
      <Icon iconName={Users} />
      <div className="w-full grid grid-cols-1 gap-6 md:gap-1 md:px-2">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Newsletter />
    </>
  );
}
