"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter" className="w-full">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-2xl md:text-4xl font-bold">
          Pour me{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Soutenir
          </span>
        </h3>
        <p className=" text-muted-foreground text-center mt-4 mb-8">
          Inscrivez-vous à ma newsletter gratuite
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-[70%]  mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="samatarmoussa111@gmail.com"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>S&apos;abonner</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
