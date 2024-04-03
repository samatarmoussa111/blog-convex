import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getPosts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});

export const get3LatestPosts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("posts")
      .filter((q) => q.eq(q.field("isPublished"), true))
      .order("desc")
      .take(3);
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

export const incrementViews = mutation({
  args: {
    postId: v.id("posts"),
  },
  handler: async (ctx, { postId }) => {
    const post = await ctx.db.get(postId);
    if (post) {
      await ctx.db.replace(postId, {
        ...post,
        views: post.views + 1,
      });
    }
  },
});
