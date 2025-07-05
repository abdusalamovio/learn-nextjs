import z from "zod";

export const SettingsSchema = z.object({
  name: z.string().min(1, { message: "Имя обязательно" }),
  email: z
    .string()
    .email({ message: "Введите корректный адрес электронной почты" }),
});

export type SettingsSchemaType = z.infer<typeof SettingsSchema>;
