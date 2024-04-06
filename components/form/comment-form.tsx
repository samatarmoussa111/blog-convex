"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "./form-schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import TextareaInput from "./form-inputs/textarea-input";
import { useConvexAuth, useMutation } from "convex/react";
import { Spinner } from "../spinner/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

interface Props {
  post: Doc<"posts">;
}

export function CommentForm({ post }: Props) {
  const { isLoading, isAuthenticated } = useConvexAuth();

  const addComment = useMutation(api.comments.addComment);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { content: "" },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Do something with the form values.
    // ✅ This will be type-safe and validated.
    await addComment({
      postId: post._id,
      content: values.content,
    });
    form.reset({ content: "" });
  }

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-[350px] sm:max-w-none"
      >
        <TextareaInput
          name="content"
          label="Laisser un commentaire"
          form={form}
        />
        {isAuthenticated ? (
          <Button type="submit" className="mb-2">
            Publier le commentaire
          </Button>
        ) : (
          <SignInButton mode="modal" afterSignInUrl={`/posts/${post.slug}`}>
            <Button type="button">Publier le commentaire</Button>
          </SignInButton>
        )}
      </form>
    </Form>
  );
}
