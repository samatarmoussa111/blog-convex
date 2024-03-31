import { query } from "./_generated/server";

export const getPosts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});

export const getPublishedPosts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("posts")
      .filter((q) => q.eq(q.field("isPublished"), true))
      .collect();
  },
});
