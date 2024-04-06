import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getCommentsByPosts = query({
  args: {
    id: v.id("posts"),
  },
  handler: async (ctx, args) => {
    if (args.id === undefined) {
      return [];
    }
    const comments = await ctx.db
      .query("comments")
      .withIndex("by_post", (q) => q.eq("postId", args.id))
      .order("desc")
      .collect();

    return comments;
  },
});

export const addComment = mutation({
  args: {
    postId: v.id("posts"),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated call to mutation");
    }
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (!user) {
      throw new Error("Unauthenticated call to mutation");
    }

    const commentId = await ctx.db.insert("comments", {
      content: args.content,
      postId: args.postId,
      userId: user._id,
    });
    return commentId;
  },
});

export const getOwnerComment = query({
  args: {
    id: v.id("comments"),
  },
  handler: async (ctx, args) => {
    const comment = await ctx.db.get(args.id);
    if (!comment) {
      return null;
    }
    const user = await ctx.db.get(comment.userId);
    if (!user) {
      return null;
    }

    return user;
  },
});
