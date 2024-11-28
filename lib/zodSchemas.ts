import { z } from "zod";

export const customerFormSchema = z.object({
  firstName: z.string({ message: "First Name is required" }).trim().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string({ message: "Last Name is required" }).trim().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),

  email: z
    .string({ message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .min(2, {
      message: "Email must be at least 2 characters.",
    }),

  password: z.string({ message: "Password is required" }).min(4, {
    message: "Password must be at least 4 characters.",
  }),
});
