import PostCard from "@/components/cards/post-card";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <ModeToggle />
      <div className="w-full grid grid-cols-1 gap-6 md:gap-1 md:px-2">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Button>Enregistrer</Button>
    </>
  );
}
