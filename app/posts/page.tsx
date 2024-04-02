"use client";

import React from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PostCard from "@/components/cards/post-card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Posts() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") as
    | "technologie"
    | "entreprenariat"
    | "education"
    | "santé"
    | "voyage";
  const posts = useQuery(api.posts.getPublishedPosts);

  if (posts === undefined) {
    return null;
  }

  const filteredPosts = tag
    ? posts.filter((post) => post.tag.includes(tag))
    : posts;

  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col w-full ">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-muted-foreground group-hover:-translate-x-1 duration-200 rotate-180"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-muted-foreground">Retour</span>
        </Link>
        <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
          Articles
        </span>
        <div className="flex flex-row space-x-4 mb-6 md:mb-4 text-sm  md:px-6 overflow-x-auto line-clamp-1 text-nowrap">
          <Link
            href="/posts"
            className={`${
              tag === null
                ? "text-foreground/90 underline"
                : "text-muted-foreground"
            } hover:text-foreground/90 duration-200 hover:underline`}
          >
            Tous
          </Link>
          <Link
            href="/posts?tag=technologie"
            className={`${
              tag === "technologie"
                ? "text-foreground/90 underline"
                : "text-muted-foreground"
            } hover:text-foreground/90 duration-200 hover:underline`}
          >
            Technologie
          </Link>
          <Link
            href="/posts?tag=entreprenariat"
            className={`${
              tag === "entreprenariat"
                ? "text-foreground/90 underline"
                : "text-muted-foreground"
            } hover:text-foreground/90 duration-200 hover:underline`}
          >
            Entreprenariat
          </Link>

          <Link
            href="/posts?tag=education"
            className={`${
              tag === "education"
                ? "text-foreground/90 underline"
                : "text-muted-foreground"
            } hover:text-foreground/90 duration-200 hover:underline`}
          >
            Education
          </Link>
          <Link
            href="/posts?tag=santé"
            className={`${
              tag === "santé"
                ? "text-foreground/90 underline"
                : "text-muted-foreground"
            } hover:text-foreground/90 duration-200 hover:underline`}
          >
            Santé
          </Link>
          <Link
            href="/posts?tag=voyage"
            className={`${
              tag === "voyage"
                ? "text-foreground/90 underline"
                : "text-muted-foreground"
            } hover:text-foreground/90 duration-200 hover:underline`}
          >
            Voyage
          </Link>
        </div>

        <div>
          <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
            {filteredPosts
              .sort((a, b) => {
                if (new Date(a._creationTime) > new Date(b._creationTime)) {
                  return -1;
                }
                return 1;
              })
              .map((post) => {
                return (
                  <PostCard
                    key={post._id}
                    post={post}
                    href={`/posts/${post.slug}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
