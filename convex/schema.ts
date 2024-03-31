import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    content: v.string(),
    isPublished: v.boolean(),
    views: v.number(),
    reading_time: v.number(),
    tag: v.array(
      v.union(
        v.literal("technologie"),
        v.literal("entreprenariat"),
        v.literal("business"),
        v.literal("sport"),
        v.literal("education"),
        v.literal("finance"),
        v.literal("lifestyle"),
        v.literal("politique"),
        v.literal("santé"),
        v.literal("voyage")
      )
    ),
  }),
});
