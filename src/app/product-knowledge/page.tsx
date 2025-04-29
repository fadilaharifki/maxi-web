import ProductModule from "@/modules/product";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxi - Product",
  description:
    "We learnt to be honest and helpful in everything we do to support you",
  keywords:
    "maxi, water, mineral water, hydration, clean water, healthy drinking",
  icons: {
    icon: "https://www.maxiamdk.com/favicon.ico",
  },
  openGraph: {
    title: "Maxi - Premium Mineral Water",
    description:
      "Discover the purest hydration with Maxi. Stay refreshed and healthy with our premium mineral water.",
    url: "https://www.maxiamdk.com/products",
    images: [
      {
        url: "https://www.maxiamdk.com/assets/banner/BANNER-01.webp",
        width: 1200,
        height: 630,
        alt: "Maxi Mineral Water",
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
      "Stay hydrated with Maxi's premium mineral water. The best choice for your daily hydration needs!",
    images: ["https://www.maxiamdk.com/assets/banner/BANNER-01.webp"],
  },
};

const ProductPage = () => {
  return <ProductModule />;
};

export default ProductPage;
