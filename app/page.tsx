import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Typography variant="h1" className="mb-6">
        Ne jamais compter sur les autres
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        itaque quibusdam incidunt, voluptas corporis maiores hic excepturi
        magnam, debitis inventore deleniti sit sequi provident nihil ab
        necessitatibus quidem dolores fuga!
      </Typography>
      <Button size="lg">
        Voir plus <ArrowRight className="h-4 w-4 ml-2" />{" "}
      </Button>
    </div>
  );
}
