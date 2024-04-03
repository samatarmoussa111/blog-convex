import { Doc } from "@/convex/_generated/dataModel";
import { formatBookDate } from "@/lib/utils";
import Link from "next/link";
import Starts from "../starts/starts";

interface Props {
  book: Doc<"books">;
}

const BooksCard = ({ book }: Props) => {
  return (
    <Link
      href={book.affliate_link}
      target="_blank"
      className="flex flex-row justify-between  space-x-8 md:space-x-0  items-center duration-300 md:hover:bg-muted-foreground/10 md:p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-row space-x-4">
        <div className="flex flex-col">
          <span className="text-foreground/90">{book.title}</span>
          <span className="text-muted-foreground">by {book.author}</span>
          <Starts value={book.rating} />
          <span className="text-muted-foreground">
            Fini le: {formatBookDate(book.finished_time)}
          </span>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-link text-muted-foreground w-[20px] md:w-auto"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    </Link>
  );
};

export default BooksCard;
