import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
