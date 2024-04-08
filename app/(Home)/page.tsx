"use client";

import PostCard from "@/components/cards/post-card";
import ReadCard from "@/components/cards/read-card";
import Header from "@/components/header/header";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import { useQuery } from "convex/react";
import Link from "next/link";

export default function Home() {
  const posts = useQuery(api.posts.get3LatestPosts);
  const books = useQuery(api.books.get3LatestBooks);

  if (posts === undefined) {
    return null;
  }
  if (books === undefined) {
    return null;
  }

  return (
    <>
      {/**
       * TODO: Add Footer to the HomeLayout!!!!!!!!!!!!!
       *  <ModeToggle />
      <UserButton afterSignOutUrl="/" /> */}
      <Header />
      <div className="flex flex-col space-y-6 md:space-y-10 mt-8 pb-10">
        <div className="flex flex-col  md:px-6">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold ">À propos de l&apos;auteur</span>
            <span className="text-foreground/90 leading-7">
              Diplômé d&apos;un Master 2 en mathématiques fondamentales à
              l&apos;Université de Besançon, j&apos;ai enseigné les
              mathématiques à l&apos;Université de Djibouti, à l&apos;Université
              de EMD, et aux classes préparatoires aux grandes écoles (CPGE) du
              Lycée d&apos;Excellence à Djibouti. Actuellement je suis
              développeur d&apos;applications TypeScript & React.js aux
              États-Unis.
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          {/* Posts */}
          <div className="flex flex-col space-y-2 ">
            <span className="font-semibold md:px-6">Articles récents</span>
            <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
              {posts.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                  href={`/posts/${post.slug}`}
                />
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
              {books.map((book) => (
                <ReadCard key={book._id} book={book} />
              ))}
            </div>
            <Link
              href="/reading"
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
          {/* mes travaux de recherche */}
          <div className="flex flex-col space-y-4">
            <span className="font-semibold md:px-6">
              Mes travaux de recherches
            </span>
            <div className="flex flex-col space-y-8 md:space-y-2 md:px-2">
              <div className="md:px-4">
                <p className="text-foreground/90">
                  Sur le corps des fonctions algébriques.{" "}
                  <Link
                    target="_blank"
                    href={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/d5f5d647-8d7c-4a31-8f22-072c909c9f93`}
                    className="underline text-primary"
                  >
                    pdf
                  </Link>
                </p>
              </div>
              <div className="md:px-4">
                <p className="text-foreground/90 ">
                  Sur la correspondance de Galois infini et groupes
                  topologiques.{" "}
                  <Link href="#" className="underline text-primary">
                    pdf
                  </Link>
                </p>
              </div>
              <div className="md:px-4 ">
                <p className="text-foreground/90">
                  Sur le dernier théorème de Fermat (courbes elliptiques).{" "}
                  <Link
                    target="_blank"
                    href={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/eb636423-a181-444c-b819-0d543f2c42bd`}
                    className="underline text-primary"
                  >
                    pdf
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
