import { Metadata } from "next";
import { ResetPasswordForm } from "@/features/auth/ui";

export const metadata: Metadata = {
  title: "Сброс пароля",
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
