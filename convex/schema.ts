import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    isPublished: v.boolean(),
    views: v.number(),
    reading_time: v.number(),
    tag: v.array(
      v.union(
        v.literal("technologie"),
        v.literal("entreprenariat"),
        v.literal("education"),
        v.literal("santé"),
        v.literal("voyage")
      )
    ),
  }),
  comments: defineTable({
    content: v.string(),
    postId: v.id("posts"),
    userId: v.id("users"),
  }).index("by_post", ["postId"]),
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  books: defineTable({
    title: v.string(),
    author: v.string(),
    finished_time: v.string(),
    rating: v.number(),
    affliate_link: v.string(),
  }),
});
