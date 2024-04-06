import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { initials } from "@/lib/utils";

interface Props {
  src?: string;
  alt?: string;
  fullName?: string;
}

export function MyAvatar({ src, alt, fullName }: Props) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="bg-primary text-white">
        {initials(fullName)}
      </AvatarFallback>
    </Avatar>
  );
}
