"use client";

import PostCard from "@/components/cards/post-card";
import ReadCard from "@/components/cards/read-card";
import Header from "@/components/header/header";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";

export default function Home() {
  const posts = useQuery(api.posts.get3LatestPosts);

  if (posts === undefined) {
    return null;
  }

  return (
    <>
      <ModeToggle />
      <Header />
      <div className="flex flex-col space-y-6 md:space-y-10 pb-10">
        <div className="flex flex-col  md:px-6">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">À propos de l&apos;auteur</span>
            <span className="text-foreground/85 leading-7">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit officiis ipsa cum dicta rem perferendis sunt. Ad
              harum eligendi temporibus aliquid sapiente incidunt excepturi. Quo
              voluptate iusto dolore ullam vitae!
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          {/* Posts */}
          <div className="flex flex-col space-y-2">
            <span className="font-semibold md:px-6">Articles récents</span>
            <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              href="/posts"
              className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer justify-end"
            >
              <span className="text-sm">Tous les articles</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className=" group-hover:translate-x-1 duration-200"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          {/* reads */}
          <div className="flex flex-col space-y-2">
            <span className="font-semibold md:px-6">Lecture récente</span>
            <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
              <ReadCard />
              <ReadCard />
              <ReadCard />
            </div>
            <Link
              href="/posts"
              className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer justify-end"
            >
              <span className="text-sm">Livres que j&apos;ai lus</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className=" group-hover:translate-x-1 duration-200"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
