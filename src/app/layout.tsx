import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Bimantis",
  description:
    "We learnt to behonest and helpful in everything we do to support you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <TooltipProvider>{children}</TooltipProvider>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
