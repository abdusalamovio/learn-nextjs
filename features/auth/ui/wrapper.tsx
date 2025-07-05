import type { PropsWithChildren } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@/shared/ui";

import { Social } from "./social";
import Link from "next/link";

interface WrapperProps {
  heading: string;
  description?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  isShowSocial?: boolean;
}

export function Wrapper({
  children,
  heading,
  description,
  backButtonLabel,
  backButtonHref,
  isShowSocial = false,
}: PropsWithChildren<WrapperProps>) {
  return (
    <Card className="w-[400px] gap-3 py-4.5">
      <CardHeader className="space-y-2">
        <CardTitle>{heading}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {isShowSocial && <Social />}
        {children}
      </CardContent>
      <CardFooter>
        {backButtonLabel && backButtonHref && (
          <Button variant="link" className="w-full font-normal">
            <Link href={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
