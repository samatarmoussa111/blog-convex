"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BooksCard from "@/components/cards/books-card";

export default function ReadingPage() {
  const books = useQuery(api.books.getBooks);

  if (books === undefined) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center md:px-4 group cursor-pointer mb-4"
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
        <div className="flex flex-col space-y-2  md:px-4 mb-6 md:mb-4">
          <span className="text-4xl font-bold">Livres que j&apos;ai lus</span>
          <span className="text-sm text-muted-foreground">
            Voici une liste de {books.length} livres que j&apos;ai lus. Dernière
            mise à jour : 04 Avril 2024.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-1">
          {books.map((book) => {
            return <BooksCard key={book._id} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
}
