import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./themeProvider";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
