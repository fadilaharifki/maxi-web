import HomePage from "./_home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxi - Home",
  description:
    "Maxi provides high-quality mineral water that is pure and refreshing. Discover the best hydration for your daily needs!",
  keywords:
    "maxi, mineral water, hydration, health, clean water, healthy drink",
  icons: {
    icon: "https://maxiamdk.com/favicon.ico",
  },
  openGraph: {
    title: "Maxi - Premium Mineral Water",
    description:
      "Enjoy natural freshness with Maxi. Pure and safe mineral water for the whole family.",
    url: "https://www.maxiamdk.com",
    images: [
      {
        url: "https://maxiamdk.com/assets/banner/BANNER-01.webp",
        width: 1200,
        height: 630,
        alt: "Maxi - Premium Mineral Water",
      },
    ],
    siteName: "Maxi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@maxiofficial",
    title: "Maxi - Premium Mineral Water",
    description:
      "Get the best hydration with Maxi, pure and refreshing mineral water for your health!",
    images: ["https://maxiamdk.com/assets/banner/BANNER-01.webp"],
  },
};
export default function Home() {
  return <HomePage />;
}
