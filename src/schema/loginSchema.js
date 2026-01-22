import * as z from "zod"

export const loginSchema = z.object({
  email: z.string().trim().min(1, {
    message: "This field is required"
  })
  .pipe(z.email({
    message: "The email is not in the correct format."
  })),
  password: z.string().trim().min(6, {
    message: "Passwords must be at least 6 characters long"
  })
}) 