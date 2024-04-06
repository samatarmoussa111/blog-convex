import * as z from "zod";

export const formSchema = z.object({
  content: z
    .string({ required_error: "Veuillez taper votre commentaire." })
    .min(2, {
      message: " Le commentaire doit contenir au moins 2 caractères.",
    }),
});
