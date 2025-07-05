import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./themeProvider";
import { ToastProvider } from "./toastProvider";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ToastProvider />
      {children}
    </ThemeProvider>
  );
}
