"use client";

import Maths from "@/components/maths/maths";
import Typography from "@/components/ui/typography";
import { api } from "@/convex/_generated/api";
import { formatDate } from "@/lib/utils";
import { useQuery } from "convex/react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function PostIdPage({ params }: Props) {
  const posts = useQuery(api.posts.getPublishedPosts);

  if (posts === undefined) {
    return null;
  }
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    redirect("/posts");
  }

  return (
    <div className="w-full">
      <div className="flex flex-row space-x-4 mb-6 text-sm text-muted-foreground">
        <Link
          href="/"
          className="hover:text-foreground/90 duration-200 hover:underline"
        >
          Accueil
        </Link>
        <Link
          href="/posts"
          className="hover:text-foreground/90 duration-200 hover:underline"
        >
          Plus d&apos;articles
        </Link>
      </div>
      <Typography variant="h2">{post.title}</Typography>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <div className="flex flex-row space-x-2 items-center text-muted-foreground">
          <span>{formatDate(new Date(post._creationTime))}</span>
          <span className="h-1 w-1 bg-muted-foreground rounded-full" />
          <span>
            <span>{post.views} vus</span>
          </span>
          <span className="h-1 w-1 bg-muted-foreground rounded-full" />
          <span>
            <span>
              {post.reading_time}
              {" min de lecture"}
            </span>
          </span>
        </div>
      </div>
      <article className="prose prose-invert pb-10">
        <Maths input={post.content} />
      </article>
    </div>
  );
}
