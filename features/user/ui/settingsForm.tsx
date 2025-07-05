"use client";

import { useForm } from "react-hook-form";
import {
  type SettingsSchemaType,
  SettingsSchema,
} from "@/features/user/schemes";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
} from "@/shared/ui";

import { UserButton } from "./userButton";

export function SettingsForm() {
  const form = useForm<SettingsSchemaType>({
    resolver: zodResolver(SettingsSchema),
    values: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (values: SettingsSchemaType) => {
    console.log(values);
  };

  return (
    <Card className="w-[400px] gap-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Настройки профиля</CardTitle>
        <UserButton />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-2 space-y-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Tony Stark" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <Button className="cursor-pointer" type="submit">
              Сохранить
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
