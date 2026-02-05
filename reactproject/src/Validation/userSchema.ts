import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()   
    .min(3, "Name must be minimum of 3 letters")
    .max(10, "Name must be maximum of 10 letters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces"),
  email: z.string().email("Please enter valid email format"),
  password: z.string().min(6, "Password contain minimum of 6 characters"),
  role:z.string().optional()
});
