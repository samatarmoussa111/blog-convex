import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { formatDate } from "@/lib/utils";
import { useMutation } from "convex/react";
import Link from "next/link";

interface Props {
  post: Doc<"posts">;
  href: string;
}

const PostCard = ({ post, href }: Props) => {
  const incrementViews = useMutation(api.posts.incrementViews);
  const increment = async () => {
    await incrementViews({ postId: post._id });
  };

  return (
    <Link
      onClick={increment}
      href={href}
      className=" w-full flex justify-between items-center duration-300 md:hover:bg-muted-foreground/10 md:p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-col space-y-2">
        <span className="text-foreground/90">{post.title}</span>

        <div className="flex flex-row space-x-2 items-center text-sm text-muted-foreground">
          <span> {formatDate(new Date(post._creationTime))} </span>
          <span className="h-1 w-1 bg-muted-foreground rounded-full" />
          <span>
            <span>
              {post.views}
              {" vus"}
            </span>
          </span>
          <span className="h-1 w-1 bg-muted-foreground rounded-full" />
          <span>
            <span>{post.reading_time} min de lecture</span>
          </span>
        </div>
      </div>

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
    </Link>
  );
};

export default PostCard;
