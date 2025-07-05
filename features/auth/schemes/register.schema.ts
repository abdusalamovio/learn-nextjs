import z from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Имя обязательно" }),
    email: z
      .string()
      .email({ message: "Введите корректный адрес электронной почты" }),
    password: z.string().min(6, {
      message: "Пароль должен содержать хотя бы 6 символов",
    }),
    passwordRepeat: z.string().min(6, {
      message: "Пароль должен содержать хотя бы 6 символов",
    }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Пароли не совпадают",
    path: ["passwordRepeat"],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
