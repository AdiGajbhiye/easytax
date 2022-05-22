import z from "zod";

export const LoginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});
export type ILogin = z.infer<typeof LoginValidation>;

export const SignupValidation = LoginValidation.extend({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
export type ISignup = z.infer<typeof SignupValidation>;
