import { query } from "./_generated/server";

export const getBooks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("books").collect();
  },
});

export const get3LatestBooks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("books").order("desc").take(3);
  },
});
