"use client";

import { Wrapper } from "./wrapper";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  type ResetPasswordSchemaType,
  ResetPasswordSchema,
} from "@/features/auth/schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
} from "@/shared/ui";

import ReCAPTCHA from "react-google-recaptcha";

export function ResetPasswordForm() {
  const { theme } = useTheme();
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const form = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: ResetPasswordSchemaType) => {
    if (recaptchaValue) {
      console.log(values);
    } else {
      toast.error("Пожалуйста, завершите reCAPTCHA");
    }
  };

  return (
    <Wrapper
      heading="Сброс пароля"
      description="Введите вашу почту, чтобы получить ссылку для сброса пароля"
      backButtonLabel="Уже есть аккаунт? Войти"
      backButtonHref="/login"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-2 space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    placeholder="tony@starkindustries.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={
                process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY as string
              }
              onChange={setRecaptchaValue}
              theme={theme === "light" ? "light" : "dark"}
            />
          </div>

          <Button className="cursor-pointer" type="submit">
            Продолжить
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
}
