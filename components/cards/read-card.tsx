import Link from "next/link";

const ReadCard = () => {
  return (
    <Link
      href={`#`}
      className=" w-full flex justify-between items-center duration-300 md:hover:bg-muted-foreground/10 md:p-4 rounded-lg cursor-pointer"
    >
      <div className="flex flex-col space-y-2">
        <span className="text-foreground/85">
          48 laws of power{" "}
          <span className="text-muted-foreground">by Robert Green</span>
        </span>

        <div className="flex flex-row space-x-2 items-center text-sm text-muted-foreground">
          <span className="text-muted-foreground">Finished: Mar 7, 2024</span>
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

export default ReadCard;
