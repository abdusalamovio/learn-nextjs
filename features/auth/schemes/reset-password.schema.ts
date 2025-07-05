import z from "zod";

export const ResetPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: "Введите корректный адрес электронной почты" }),
});

export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
