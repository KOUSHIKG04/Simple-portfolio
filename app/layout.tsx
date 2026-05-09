import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { Raleway, Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const notoSansHeading = Noto_Sans({subsets:['latin'],variable:'--font-heading'});

const raleway = Raleway({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Koushik G | Full Stack Developer",
  description:
    "Portfolio for Koushik G, a full stack developer focused on React, TypeScript, Node.js, Electron, and scalable frontend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", raleway.variable, notoSansHeading.variable)}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem("theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
